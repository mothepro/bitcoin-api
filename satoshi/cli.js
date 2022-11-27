import { decodeRawTransaction, getRawTransaction, getBlock, getHashOfBlock, rpc } from './bitcoin.js'
import upto36288 from './upto36288.json' assert { type: "json" }
import patoshi from './patoshi.json' assert { type: "json" }

const { tx: [satoshiCoinbaseTx], hash } = upto36288[9]

// const decode = await decodeRawTransaction(satoshiCoinbaseTx)
const {vin, vout, ...tx} = await getRawTransaction(satoshiCoinbaseTx, hash)
console.log({ vin, ...tx }, JSON.stringify({ vout }, null, 2))

// find out how to get '12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S' from script
