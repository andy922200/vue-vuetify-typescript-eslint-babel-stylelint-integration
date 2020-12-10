import axios from 'axios'
import {
    Song
} from './declarations/apis'

// base urls
const BASE_URL = 'https://api.lyrics.ovh/v1/'

// requests settings
const lyricsRequest = axios.create({
    baseURL: BASE_URL
})

export const lyricsAPIs = {
    getASongLyric: (data: Song) => {
        return lyricsRequest.get(`${data.artist}/${data.title}`)
    }
}
