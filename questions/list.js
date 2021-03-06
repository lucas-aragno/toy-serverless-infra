'use strict'

const dynamodb = require('./dynamodb')

module.exports.list = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE
  }

  dynamodb.scan(params, (error, result) => {
    if (error) {
      console.error(error)
      callback(new Error('Couldn\'t fetch the todos.'))
      return
    }

    let response = {
      statusCode: 200,
      body: JSON.stringify(result.Items)
    }
    callback(null, response)
  })
}
