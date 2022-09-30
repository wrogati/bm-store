import type { AWS } from "@serverless/typescript";

import hello from "@functions/hello";

const serverlessConfiguration: AWS = {
  service: "bm-store",
  frameworkVersion: "3",
  plugins: [
    "serverless-auto-swagger",
    "serverless-esbuild",
    "serverless-offline",
  ],
  useDotenv: true,
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  // import the function via paths
  functions: { hello },
  package: {
    individually: true,
    include: [
      "./src/infra/database/models",
      "./src/infra/database/config",
      "./src/infra/database/migrations",
      "./src/infra/database/seeders",
    ],
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
    autoswagger: {
      title: "API Documentation Test",
      apiType: "http",
      generateSwaggerOnDeploy: false,
      typefiles: ["./src/types/api-types.d.ts"],
      swaggerPath: "swagger",
      useStage: false,
      schemes: ["http", "https"],
      excludeStages: ["prod"],
    },
  },
};

module.exports = serverlessConfiguration;
