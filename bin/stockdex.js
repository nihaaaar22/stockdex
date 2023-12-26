#!/usr/bin/env node

const commander = require("commander")

const getStock = require("../getStock")

let api = "FMQPSMVUVT46OIWL"

commander
        .command('set')
        .description('set Api key available on - https://www.alphavantage.co')
        .action(()=>{
            console.log("setting api key");
        })

commander
        .command('get <stock>')
        .description('get stocks highlight')
        .action((stock)=>{
            console.log(`getting the stock info of ${stock}`)
            getStock.highlights(stock,api)
        })





commander.parse(process.argv)