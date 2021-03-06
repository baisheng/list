import React from 'react'
import { Box, Card } from 'theme-ui'

export default ({ toggle }) => (
  <Box>
    <Card
      onClick={toggle}
      variant='logo'
      aria-label='Logo'
      className='logo'
    >
      <LogoIcon/>
    </Card>
  </Box>
)

const LogoIcon = () => (
  <svg width="32" viewBox="0 0 328 273">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Desktop-HD" transform="translate(-123.000000, -375.000000)">
        <g id="Group-4" transform="translate(123.000000, 375.000000)">
          <path
            d="M136.58552,0 C174.36215,0 208.55682,15.3265898 233.28313,40.0970549 L185.336325,88.527363 C171.826119,72.9622701 151.890131,63.1184211 129.653548,63.1184211 C88.9588366,63.1184211 55.9692545,96.0873473 55.9692545,136.756579 C55.9692545,177.425811 88.9588366,210.394737 129.653548,210.394737 C151.858167,210.394737 171.7688,200.579168 185.278024,185.052882 L233.194851,232.991302 C208.475462,257.709852 174.317213,273 136.58552,273 C61.1514204,273 0,211.886868 0,136.5 C0,61.1131317 61.1514204,0 136.58552,0 Z M276.141593,93.6513158 C299.811638,93.6513158 319,112.835325 319,136.5 C319,160.164675 299.811638,179.348684 276.141593,179.348684 C252.471548,179.348684 233.283186,160.164675 233.283186,136.5 C233.283186,112.835325 252.471548,93.6513158 276.141593,93.6513158 Z"
            id="Combined-Shape"
            fill="#1D232F"/>
          <circle id="Oval" fill="#8051B4" cx="280.5" cy="136.5" r="47.5" />
        </g>
      </g>
    </g>
  </svg>
)

