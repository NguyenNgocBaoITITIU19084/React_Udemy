import Box from '@mui/material/Box'
import Post from './Post'
import { Stack } from '@mui/material'

const Feed = () => {
  return (
    <Box sx={{ flex: 4, padding: 2 }}>
      <Stack direction='column' spacing={2}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </Stack>
    </Box>
  )
}

export default Feed