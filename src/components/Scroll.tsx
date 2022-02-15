import styled from 'styled-components'

const Scroll = () => {
  const Svg = styled.svg`
    width: 200px;
    position: absolute;
    bottom: 40px;
    right: 10px;
  `

  const Text = styled.text`
    font-size: 30px;
    text-transform: uppercase;
    font-family: Arial;
    fill: #fff;
  `

  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'>
      <defs>
        <path
          d='M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250'
          id='textcircle'
        >
          <animateTransform
            attributeName='transform'
            begin='0s'
            dur='30s'
            type='rotate'
            from='0 250 250'
            to='360 250 250'
            repeatCount='indefinite'
          />
        </path>
      </defs>
      <Text dy='70' textLength='1220'>
        <textPath xlinkHref='#textcircle'>
          Scroll to explore &bull; Scroll to explore &bull;
        </textPath>
      </Text>
    </Svg>
  )
}

export default Scroll
