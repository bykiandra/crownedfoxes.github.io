import axios from 'axios'
import { useState, useEffect } from 'react'

import { Foot, FootParagraph, FootParagraphRight, Link } from '../theme'
import './svg.css'

type Music = {
  currentlyPlaying?: boolean
  song?: string
  artist?: string
  album?: string
  image?: string
  error: boolean
}

const Footer = () => {
  const [music, setMusic] = useState<Music>({ error: true })
  const apiKey = process.env.REACT_APP_MUSIC_API_KEY
  const apiUrl =
    'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=crownedfoxes&api_key=' +
    apiKey +
    '&format=json&limit=1'

  useEffect(() => {
    const getMusic = () => {
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

          setMusic({
            currentlyPlaying: currentlyPlaying,
            song: latest.name,
            artist: latest.artist['#text'],
            album: latest.album['#text'],
            image: latest.image[0]['#text'],
            error: false,
          })
        })
        .catch((err) => {
          console.log(err)
          setMusic({ error: true })
        })
    }

    getMusic()

    const interval = setInterval(() => {
      getMusic()
    }, 60000) // 1 minute

    return () => clearInterval(interval)
  }, [apiUrl])

  return (
    <>
      <Foot>
        <FootParagraphRight>
          Built with{' '}
          <Link href='https://reactjs.org/' target='_blank' rel='noreferrer'>
            React
          </Link>{' '}
          &{' '}
          <Link
            href='https://www.typescriptlang.org/'
            target='_blank'
            rel='noreferrer'
          >
            Typescript
          </Link>
          <br />
          Find the code on{' '}
          <Link
            href='https://github.com/crownedfoxes/crownedfoxes.github.io'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </Link>
          <br />
          &copy; 2021–{new Date().getFullYear()} Kiandra Ginevra
        </FootParagraphRight>

        {!music.error ? (
          <FootParagraph>
            <Link
              href='https://www.last.fm/user/crownedfoxes'
              target='_blank'
              rel='noreferrer'
            >
              {music.currentlyPlaying ? 'Currently Playing' : 'Last Played'}
            </Link>
            <br />
            <img
              src={music.image}
              alt={music.album}
              style={{ float: 'left', margin: '5px 8px 0 0' }}
            />
            Song: {music.song}
            <br />
            Artist: {music.artist}
          </FootParagraph>
        ) : (
          <></>
        )}
      </Foot>
    </>
  )
}

export default Footer
