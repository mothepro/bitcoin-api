
import { config } from 'dotenv'

config();

const {RPC_USER, RPC_PASSWORD} = process.env;

export async function rpc(method, params = []) {
  const body = {
    jsonrpc: "1.0",
    id: "curltexxxt",
    method,
    params,
  }
  const response = await fetch(`http://127.0.0.1:8332/`, {
    method: "POST",
    headers: {
      "content-type": "text/plain;",
      Authorization: `Basic ${btoa(`${RPC_USER}:${RPC_PASSWORD}`)}`
    },
    body: JSON.stringify(body)
  })
  const { result } = await response.json()
  return result
}

export const getHashOfBlock = (index) => rpc('getblockhash', [index])
export const getBlock = (hash) => rpc('getblock', [hash])
export const getRawTransaction = (id, block) => rpc('getrawtransaction', [id, true, block])
export const decodeRawTransaction = (hex, isWitness = undefined) => rpc('decoderawtransaction', [hex, isWitness])
export const getBlockCount = () => rpc("getblockcount")
export const getBestBlockJash = () => rpc("getbestblockhash")
export const getConnectionCount = () => rpc("getconnectioncount")
export const getDifficulty = () => rpc("getdifficulty")
export const getBlockchainInfo = () => rpc("getblockchaininfo")
export const getMiningInfo = () => rpc("getmininginfo")
export const getPeerInfo = () => rpc("getpeerinfo")
export const getRawMempool = () => rpc("getrawmempool")
