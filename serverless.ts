import type { AWS } from '@serverless/typescript'
import * as dotenv from 'dotenv'

import hello from '@functions/hello'
import listProducts from '@functions/products/list'
import createProduct from '@functions/products/create'
import updateProduct from '@functions/products/update'
import readOneProduct from '@functions/products/readOne'
import deleteProduct from '@functions/products/delete'

dotenv.config()

const serverlessConfiguration: AWS = {
  service: 'default-serverless-jest-swagger-prisma',
  frameworkVersion: '3',
  plugins: [
    'serverless-auto-swagger',
    'serverless-esbuild',
    'serverless-offline',
  ],
  useDotenv: true,
  provider: {
    name: 'aws',
    runtime: 'nodejs16.x',
    stackName: 'example-api-${opt:stage, self:provider.stage, "dev"}',
    timeout: 120,
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      DATABASE_URL: process.env.DATABASE_URL,
    },
  },
  // import the function via paths
  functions: {
    hello,
    listProducts,
    createProduct,
    readOneProduct,
    deleteProduct,
    updateProduct,
  },
  package: {
    individually: true,
    patterns: [
      '!node_modules/**',
      'node_modules/@prisma/client/**',
      'node_modules/.prisma/client/**',
    ],
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node16',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    'serverless-offline': {
      httpPort: 3099,
    },
    autoswagger: {
      title: 'API Test',
      apiType: 'http',
      generateSwaggerOnDeploy: true,
      typefiles: ['./src/types/api-types.d.ts'],
      swaggerPath: 'swagger',
      basePath: '/${opt:stage, self:provider.stage, "dev"}',
      useStage: false,
      schemes: ['http', 'https'],
    },
  },
}

module.exports = serverlessConfiguration
