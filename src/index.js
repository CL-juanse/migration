const { DynamoDB } = require('aws-sdk')
const { settings, MONGODB_SETTINGS } = require('./config')
const fs = require('fs/promises');
const path = require('path');

function connectDynamo({ accessKeyId, secretAccessKey, region }) {
  const dynamo = new DynamoDB.DocumentClient({
    credentials: {
      accessKeyId,
      secretAccessKey
    },
    region,
    apiVersion: 'latest'
  })

  return dynamo
}

async function getItems(dynamodb, tableName) {
  const { Items } = await dynamodb
    .scan({ TableName: tableName, Select: "ALL_ATTRIBUTES" })
    .promise()

  return Items
}

async function writeFile(path, data) {
  fs.writeFile(path, JSON.stringify(data, null, 2), { encoding: 'utf-8' })
}

async function main() {
  try {
    const promisesArr = settings.map(async (params) => {
      const dynamodb = connectDynamo(params.connectionSettings)
      const data = await getItems(dynamodb, params.tableName)
      const fullPath = path.join(__dirname, 'data', `${params.product}-${params.env}.json`)
      await writeFile(fullPath, data)
    })

    await Promise.all(promisesArr)

  } catch (error) {
    console.log(error)
  }
}

main()
