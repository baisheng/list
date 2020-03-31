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
  <svg width="32" viewBox="0 0 318 273">
    <defs>
      <linearGradient x1="98.0690341%" y1="50%" x2="50%" y2="50%" id="linearGradient-1">
        <stop stopColor="#D52C82" offset="0%"/>
        <stop stopColor="#0F0F0F" offset="100%"/>
        <stop stopColor="#0F0F0F" offset="100%"/>
      </linearGradient>
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Artboard" transform="translate(-2135.000000, -806.000000)" fill="url(#linearGradient-1)">
        <path
          d="M2271.91775,806 C2309.78627,806 2344.06411,821.32659 2368.85057,846.097055 L2320.78714,894.527363 C2307.24407,878.96227 2287.25959,869.118421 2264.96892,869.118421 C2224.17522,869.118421 2191.10539,902.087347 2191.10539,942.756579 C2191.10539,983.425811 2224.17522,1016.39474 2264.96892,1016.39474 C2287.22755,1016.39474 2307.18661,1006.57917 2320.72869,991.052882 L2368.76207,1038.9913 C2343.98256,1063.70985 2309.74122,1079 2271.91775,1079 C2196.30016,1079 2135,1017.88687 2135,942.5 C2135,867.113132 2196.30016,806 2271.91775,806 Z M2419,892 L2419,934.5 L2453,934.5 L2402,994 L2402,951.5 L2368,951.5 L2419,892 Z"
          id="Combined-Shape"/>
      </g>
    </g>
  </svg>
)

