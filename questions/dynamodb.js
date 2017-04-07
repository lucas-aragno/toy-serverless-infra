'use strict'
const path = require('path')
const AWS = require('aws-sdk')

let options = {}

if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://localhost:8000'
  }
}

const client = new AWS.DynamoDB.DocumentClient(options)

module.exports = client
