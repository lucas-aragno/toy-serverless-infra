'use strict';

const dynamodb = require('./dynamodb');

module.exports.get = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id
    }
  }

  dynamodb.get(params, (error, result) => {
    if (error) {
      console.error(error)
      callback(new Error('Couldn\'t fetch the todo item.'))
      return
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Item)
    }
    callback(null, response)
  })
}
