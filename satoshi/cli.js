import { decodeRawTransaction, getRawTransaction, getBlock, getHashOfBlock, rpc } from './bitcoin.js'
import upto36288 from './upto36288.json' assert { type: "json" }
import patoshi from './patoshi.json' assert { type: "json" }

const { tx: [satoshiCoinbaseTx], hash } = upto36288[9]

// verify btc works
console.log(await getBlock(await getHashOfBlock(0)))
console.log(await getBlock(hash))
console.log(await rpc('gettxout', [satoshiCoinbaseTx, 0]))
