import { useState, useEffect } from 'react'
import axios from 'axios'

import { Foot, SmallParagraph, SmallParagraphRight, Link } from '../theme'
import './svg.css'

type Music = {
  currentlyPlaying?: boolean
  song?: string
  artist?: string
  error: boolean
}

const Footer = () => {
  const [music, setMusic] = useState<Music>({ error: true })
  const apiKey = process.env.REACT_APP_MUSIC_API_KEY

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=crownedfoxes&api_key=${apiKey}&format=json&limit=1`
        )
        .then(
          (data: any) => {
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
              error: false,
            })
          },
          (err: string) => {
            console.log(err)
            setMusic({ error: true })
          }
        )
    }, 300000) // 5 minutes

    return () => clearInterval(interval)
  }, [apiKey])

  return (
    <>
      <Foot>
        <SmallParagraphRight>
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
          &copy; 2021 Kiandra Ginevra
        </SmallParagraphRight>

        {!music.error ? (
          <SmallParagraph>
          {music.currentlyPlaying ? 'Currently Playing' : 'Last Listen'}<br />
          Song: {music.song}<br />
          Artist: {music.artist}
        </SmallParagraph>
        ) : <></>}
      </Foot>
    </>
  )
}

export default Footer
