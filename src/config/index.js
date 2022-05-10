require('dotenv').config();

const {
  AWS_ACCESS_KEY_ID_TEST_EC_CEB,
  AWS_SECRET_ACCESS_KEY_TEST_EC_CEB,
  REGION_TEST,
  NODE_ENV_TEST,
  AWS_ACCESS_KEY_ID_CEB_DEMO_PROD,
  AWS_SECRET_ACCESS_KEY_CEB_DEMO_PROD,
  AWS_ACCESS_KEY_ID_EC_DEMO_PROD,
  AWS_SECRET_ACCESS_KEY_EC_DEMO_PROD,
  REGION_DEMO,
  NODE_ENV_DEMO,
  REGION_PROD,
  NODE_ENV_PROD,
  PRODUCT_CEB,
  PRODUCT_EC,
  DYNAMODB_APP_CEB_TABLENAME,
  DYNAMODB_APP_EC_TABLENAME,
  MONGODB_URI,
  MONGODB_NAME,
  MONGODB_APP_SERVICE_TABLENAME,
} = process.env

module.exports = {
  MONGODB_SETTINGS: {
    uri: MONGODB_URI,
    dataBaseName: MONGODB_NAME,
    tableName: MONGODB_APP_SERVICE_TABLENAME
  },
  settings: [
    {
      env: NODE_ENV_TEST,
      product: PRODUCT_CEB,
      tableName: DYNAMODB_APP_CEB_TABLENAME,
      connectionSettings: {
        accessKeyId: AWS_ACCESS_KEY_ID_TEST_EC_CEB,
        secretAccessKey: AWS_SECRET_ACCESS_KEY_TEST_EC_CEB,
        region: REGION_TEST,
      }
    },
    {
      env: NODE_ENV_TEST,
      product: PRODUCT_EC,
      tableName: DYNAMODB_APP_EC_TABLENAME,
      connectionSettings: {
        accessKeyId: AWS_ACCESS_KEY_ID_TEST_EC_CEB,
        secretAccessKey: AWS_SECRET_ACCESS_KEY_TEST_EC_CEB,
        region: REGION_TEST,
      }
    },
    {
      env: NODE_ENV_DEMO,
      product: PRODUCT_CEB,
      tableName: DYNAMODB_APP_CEB_TABLENAME,
      connectionSettings: {
        accessKeyId: AWS_ACCESS_KEY_ID_CEB_DEMO_PROD,
        secretAccessKey: AWS_SECRET_ACCESS_KEY_CEB_DEMO_PROD,
        region: REGION_DEMO,
      }
    },
    {
      env: NODE_ENV_DEMO,
      product: PRODUCT_EC,
      tableName: DYNAMODB_APP_EC_TABLENAME,
      connectionSettings: {
        accessKeyId: AWS_ACCESS_KEY_ID_EC_DEMO_PROD,
        secretAccessKey: AWS_SECRET_ACCESS_KEY_EC_DEMO_PROD,
        region: REGION_DEMO,
      }
    },
    {
      env: NODE_ENV_PROD,
      product: PRODUCT_CEB,
      tableName: DYNAMODB_APP_CEB_TABLENAME,
      connectionSettings: {
        accessKeyId: AWS_ACCESS_KEY_ID_CEB_DEMO_PROD,
        secretAccessKey: AWS_SECRET_ACCESS_KEY_CEB_DEMO_PROD,
        region: REGION_PROD,
      }
    },
    {
      env: NODE_ENV_PROD,
      product: PRODUCT_EC,
      tableName: DYNAMODB_APP_EC_TABLENAME,
      connectionSettings: {
        accessKeyId: AWS_ACCESS_KEY_ID_EC_DEMO_PROD,
        secretAccessKey: AWS_SECRET_ACCESS_KEY_EC_DEMO_PROD,
        region: REGION_PROD,
      }
    },
  ],
}
