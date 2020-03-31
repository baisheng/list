/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

const FooterNote = () => (
  <Box
    sx={{
      variant: 'styles.footernote',
    }}
  >
    <a href="https://caixie.top" target="_blank" rel="noopener noreferrer">
      @caixie
    </a>
    {/*@caixie tech*/}
    {/*A <a href="https://dex.group" target="_blank" rel="noopener noreferrer">*/}
    {/*    <span className='de'>DE</span><span className='x'>X</span> Group*/}
    {/*  </a> project.*/}
  </Box>
)

export default FooterNote
