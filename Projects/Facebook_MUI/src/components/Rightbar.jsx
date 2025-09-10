import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

const Rightbar = () => {
  return (
    <Box sx={{ flex: '2', padding: 2, display: {xs: 'none', sm: 'block'}}}>
      <Box position='fixed' maxWidth='400px' width='100%'>
        <Typography variant='h6'>
          Online Friends
        </Typography>
        <AvatarGroup max={4} sx={{ marginTop: '10px' }}>
          <Avatar alt="Remy Sharp" src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" />
          <Avatar alt="Travis Howard" src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" />
          <Avatar alt="Cindy Baker" src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" />
          <Avatar alt="Agnes Walker" src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" />
          <Avatar alt="Trevor Henderson" src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" />
        </AvatarGroup >
        <Typography variant='h6' sx={{ marginTop: '20px'}}>
          Lastes Images
        </Typography>
        <ImageList cols={3} rowHeight={164}>
          <ImageListItem>
            <img
              src='https://tse4.mm.bing.net/th/id/OIP.3a0bROm1LmDrK6SqeFsswwHaEo?pid=Api&P=0&h=220'
              alt="lastes image"
              loading="lazy"
            />
          </ImageListItem>
           <ImageListItem>
            <img
              src='https://tse4.mm.bing.net/th/id/OIP.3a0bROm1LmDrK6SqeFsswwHaEo?pid=Api&P=0&h=220'
              alt="lastes image"
              loading="lazy"
            />
          </ImageListItem>
           <ImageListItem>
            <img
              src='https://tse4.mm.bing.net/th/id/OIP.3a0bROm1LmDrK6SqeFsswwHaEo?pid=Api&P=0&h=220'
              alt="lastes image"
              loading="lazy"
            />
          </ImageListItem> 
        </ImageList>
         <Typography variant='h6' sx={{ marginTop: '20px'}}>
          Lastes Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar