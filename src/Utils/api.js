import axios from 'axios'
export const getCharacters=()=>
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=865c2295b86985d726371ee90df9d12d&hash=d9b8327e29c2a1e77ebda8cea567bd93')
