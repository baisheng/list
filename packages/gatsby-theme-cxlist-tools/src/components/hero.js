import React from 'react'
import { Box } from 'rebass'
import { Styled } from 'theme-ui'

export default props =>
  <Box
    sx={{
      p: 4,
    }}
  >
    <Styled.h1 {...props} />
  </Box>