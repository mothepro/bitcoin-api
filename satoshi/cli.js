import upto36288 from './upto36288.json' assert { type: "json" }
import { config } from 'dotenv'

config();

const {RPC_USER, RPC_PASSWORD} = process.env;

async function bitcoin(method, params = []) {
  const body = {
    jsonrpc: "1.0",
    id: "curltext",
    method,
    params,
  }
  const response = await fetch(`http://127.0.0.1:8332/`, {
    method: "POST",
    headers: {
      // "content-type": "text/plain;",
      Authorization: `Basic ${btoa(`${RPC_USER}:${RPC_PASSWORD}`)}`
    },
    body: JSON.stringify(body)
  })
  const { result } = await response.json()
  return result
}

const getHashOfBlock = (index) => bitcoin('getblockhash', [index])
const getBlock = (hash) => bitcoin('getblock', [hash])

const withInfo = []
for (const { block, nonce } of upto36288) {
  const hash = await getHashOfBlock(block)
  const data = await getBlock(hash)
  withInfo.push({
    ...await data,
    extraNonce: nonce,
  })
}

console.log(JSON.stringify(withInfo, null, 2))
