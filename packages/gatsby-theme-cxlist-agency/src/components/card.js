import React from 'react'
import { Link } from 'rebass'

export default props =>
  <Link
    target="_blank"
    rel="noopener noreferrer"
    // onclick="fathom('trackGoal', 'XIZJGRHD', 0);"
    sx={{
      textDecoration: 'none',
    }}
    {...props}
  />
