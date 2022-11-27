import { decodeRawTransaction, getRawTransaction } from './bitcoin.js'
import upto36288 from './upto36288.json' assert { type: "json" }
import patoshi from './patoshi.json' assert { type: "json" }

const patoshiSet = new Set(patoshi)
const withInfo = []
for (const {height, ...data} of upto36288) {
  // if (tx.length >= 2) {
  //   console.log(`found ${tx.length} transactions for block #${height}`, { extraNonce, hash, tx, data })
  //   for (const txx of tx)
  //     console.log('tx', txx, await getRawTransaction(txx), await decodeRawTransaction(txx))
  //   break
  // }
  withInfo.push({
    ...data,
    height,
    patoshi: patoshiSet.has(height)
  })
}

console.log(JSON.stringify(withInfo, null, 2))
