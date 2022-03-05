import axios from 'axios'
import { useState, useEffect } from 'react'
import { SiSpotify } from 'react-icons/si'

import { BottomFooter, MusicFoot, Logo } from '../theme'

type Song = {
  currentlyPlaying?: boolean
  title?: string
  artist?: string
  error: boolean
}

const Music = () => {
  const [song, setSong] = useState<Song>({ error: true })
  const apiKey = process.env.REACT_APP_MUSIC_API_KEY
  const apiUrl =
    'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=crownedfoxes&api_key=' +
    apiKey +
    '&format=json&limit=1'

  useEffect(() => {
    const getSong = () => {
      axios
      .get(apiUrl)
      .then((data: any) => {
        const latest = data.data.recenttracks.track[0]
        let currentlyPlaying = false
        if (Object.keys(latest).includes('@attr')) {
          currentlyPlaying = latest['@attr'].nowplaying
        } else {
          currentlyPlaying = false
        }

        setSong({
          currentlyPlaying: currentlyPlaying,
          title: latest.name,
          artist: latest.artist['#text'],
          error: false
        })
      })
      .catch((err) => {
        console.log(err)
        setSong({ error: true })
      })
    }

    getSong()

    const interval = setInterval(() => {
      getSong()
    }, 60000) // 1 min

    return () => clearInterval(interval)
  }, [apiUrl])

  return (
    <BottomFooter>
      <MusicFoot>
        <Logo><SiSpotify /></Logo>
        {song.currentlyPlaying ? song.title + ' by ' + song.artist : 'Nothing playing'}
      </MusicFoot>
      <div>
      &copy; 2021–{new Date().getFullYear()} Kiandra Ginevra
      </div>
    </BottomFooter>
  )
}

export default Music