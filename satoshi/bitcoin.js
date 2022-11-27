
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

export const getHashOfBlock = (index) => bitcoin('getblockhash', [index])
export const getBlock = (hash) => bitcoin('getblock', [hash])
export const getRawTransaction = (id) => bitcoin('getrawtransaction', [id])
export const decodeRawTransaction = (hex) => bitcoin('decoderawtransaction', [hex])
export const getBlockCount = () => bitcoin("/getblockcount")
export const getBestBlockJash = () => bitcoin("/getbestblockhash")
export const getConnectionCount = () => bitcoin("/getconnectioncount")
export const getDifficulty = () => bitcoin("/getdifficulty")
export const getBlockchainInfo = () => bitcoin("/getblockchaininfo")
export const getMiningInfo = () => bitcoin("/getmininginfo")
export const getPeerInfo = () => bitcoin("/getpeerinfo")
export const getRawMempool = () => bitcoin("/getrawmempool")
