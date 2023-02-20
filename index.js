const Caver = require("caver-js");
const caver = new Caver('https://public-node-api.klaytnapi.com/v1/cypress');
const datetime = require('date-and-time');
async function main() {
    const block = await caver.rpc.klay.getBlockByNumber(0);
    const timestamp = await parseInt(block['timestamp'], 16);
    const date = new Date(timestamp * 1000);
    const result = datetime.format(date, 'YYYY.MM.DD HH:mm:ss');
    console.log(result);
}
main();