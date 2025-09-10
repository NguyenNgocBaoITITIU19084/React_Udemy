import { useState } from 'react'

import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import Logout from '@mui/icons-material/Logout'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import InputBase from '@mui/material/InputBase'
import ListItemIcon from '@mui/material/ListItemIcon'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import styled from '@emotion/styled'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}))

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  justifyContent: 'space-between',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }

}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleMenuButton = () => {
    setOpen((prevState) => !prevState )
  }

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: 'none', sm: 'block' }}}>
          Facebook
        </Typography>
        <FacebookIcon sx={{ display: { xs: 'block', sm: 'none' }, fontStyle: 'bold', fontSize: '30px' }}/>
        <Search><InputBase placeholder='Search your friends...' sx={{ width: '100%'}}/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <EmailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon color="action" />
          </Badge>
          <Avatar onClick={handleMenuButton} sx={{ height: '30px', width: '30px' }} alt="Remy Sharp" src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" />
        </Icons>
        <UserBox onClick={handleMenuButton} >
          <Avatar sx={{ height: '30px', width: '30px' }} alt="Remy Sharp" src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" />
          <Typography variant="span">
            Bao Nguyen
          </Typography>
        </UserBox>
        <Menu
        sx={{ marginTop: '40px' }}
        id="account-menu"
        open={open}
        onClose={handleMenuButton}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem onClick={handleMenuButton}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleMenuButton}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuButton}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleMenuButton}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleMenuButton}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar