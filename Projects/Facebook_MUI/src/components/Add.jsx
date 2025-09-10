import { useState } from 'react'

import Fab from '@mui/material/Fab'
import Tooltip from '@mui/material/Tooltip'
import AddIcon from '@mui/icons-material/Add'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import styled from '@emotion/styled'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import ImageIcon from '@mui/icons-material/Image'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import AddReactionIcon from '@mui/icons-material/AddReaction'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'
import GifBoxIcon from '@mui/icons-material/GifBox'
import Stack from '@mui/material/Stack'

const StyledModal = styled(Modal)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '20px '
})

const ModalContent = styled(Box)({
  backgroundColor: 'white',
  height: '280px',
  width: '400px',
  borderRadius: '15px',
  padding: '10px',
})

const UserBox = styled(Box)({
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
})

const Add = () => {
  const [open, setOpen] = useState(false)

  const handleModal = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <>
      <Box position='fixed' bottom='10px' left='10px'>
        <Tooltip title='Add new post' onClick={handleModal}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>
      </Box>

      <StyledModal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent>
          <Stack direction='column' spacing={1} >

          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', marginBottom: '10px' }}>
            Create a new post
          </Typography>
        
          <UserBox>
            <Avatar alt="Remy Sharp" src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" />
            <Typography variant='p' component='span'>
              Bao Nguyen
            </Typography>
          </UserBox>
       
          <TextField id="outlined-basic" label="What is new ?" variant="outlined" sx={{marginTop: '10px', width: '100%', padding: '10px'}} />
          
          <Stack direction='row' spacing={2} padding={1}>
            <ImageIcon />
            <LocalOfferIcon />
            <AddReactionIcon />
            <AddLocationAltIcon />
            <GifBoxIcon />
          </Stack>

          <Button variant="contained" sx={{width: '100%'}} onClick={handleModal} >Post</Button>
          </Stack>
        </ModalContent>
      </StyledModal>
    </>
  )
}

export default Add