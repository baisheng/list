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
  <svg width="32" viewBox="0 0 62 55">
    <defs>
      <radialGradient cx="96.2663836%" cy="48.5912589%" fx="96.2663836%" fy="48.5912589%" r="108.422733%"
                      gradientTransform="translate(0.962664,0.485913),scale(0.887097,1.000000),rotate(179.770179),translate(-0.962664,-0.485913)"
                      id="radialGradient-1">
        <stop stopColor="#DC497F" offset="0%"/>
        <stop stopColor="#502DA8" offset="26.6652135%"/>
        <stop stopColor="#5381F6" offset="100%"/>
      </radialGradient>
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Artboard" transform="translate(-2587.000000, -132.000000)" fill="url(#radialGradient-1)">
        <path
          d="M2614.55577,132 C2622.17711,132 2629.0758,135.087774 2634.06427,140.078161 L2624.39112,149.835183 C2621.66547,146.699358 2617.64344,144.716165 2613.15727,144.716165 C2604.94721,144.716165 2598.29165,151.358257 2598.29165,159.551692 C2598.29165,167.745127 2604.94721,174.387218 2613.15727,174.387218 C2617.63699,174.387218 2621.65391,172.409722 2624.37936,169.281716 L2634.04645,178.93964 C2629.05938,183.919567 2622.16804,187 2614.55577,187 C2599.33714,187 2587,174.687831 2587,159.5 C2587,144.312169 2599.33714,132 2614.55577,132 Z M2643.4,149 L2643.4,157.333333 L2649,157.333333 L2640.6,169 L2640.6,160.666667 L2635,160.666667 L2643.4,149 Z"
          id="cx-tools"/>
      </g>
    </g>
  </svg>
)

