import axios from 'axios'
export default axios.create({
  baseURL: 'http://travel-api.clicksomeone.com',
  timeout: 10 * 60 * 1000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },
})
