import axios from 'axios'

const http = axios.create({
    headers: {'Content-Type': 'application/json'}
  });

export {http}

export const fetcher = (url: string) => axios.get(url).then(res => res.data)