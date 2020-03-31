import React from 'react'
import { Grid } from 'theme-ui'

const Grids = props =>
  <Grid
    gap={8}
    columns={[ 2,'repeat(auto-fit, minmax(290px, 1fr))' ]}
    {...props}
  />

export default Grids