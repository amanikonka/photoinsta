import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>

      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100} >Online Friends</Typography>
        <AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src="https://images.pexels.com/users/avatars/114876973/nike-ei-840.jpeg?auto=compress&fit=crop&h=80&w=80&dpr=2" />
  <Avatar alt="Travis Howard" src="https://images.pexels.com/users/avatars/135448159/taufiq-kurrahman-378.jpeg?auto=compress&fit=crop&h=80&w=80&dpr=2"/>
  <Avatar alt="Cindy Baker" src="https://images.pexels.com/users/avatars/1319062/imge-salci-646.jpeg?auto=compress&fit=crop&h=80&w=80&dpr=2" />
  <Avatar alt="Agnes Walker" src="https://images.pexels.com/users/avatars/639637/imged-nore-102.jpeg?auto=compress&fit=crop&h=80&w=80&dpr=2" />
  <Avatar alt="Trevor Henderson" src="https://images.pexels.com/users/avatars/2169094/janene-imgrund-297.jpeg?auto=compress&fit=crop&h=80&w=80&dpr=2" />
  <Avatar alt="Trevor Henderson" src="https://images.pexels.com/users/avatars/1369027/imguerrero-miriam-284.jpeg?auto=compress&fit=crop&h=80&w=80&dpr=2" />
  <Avatar alt="Trevor Henderson" src="https://images.pexels.com/users/avatars/2649699/icaro-mendes-782.jpeg?auto=compress&fit=crop&h=80&w=80&dpr=2" />
</AvatarGroup>
<Typography variant="h6" fontWeight={100} mt={2}>Latest Photos</Typography>
<ImageList cols={3} rowHeight={100} gap={5}>
<ImageListItem>
  <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2"
  alt=""/>
        </ImageListItem>
        
        
<ImageListItem>
  <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=121&h=121&fit=crop&auto=format&dpr=2"
  alt=""/>
        </ImageListItem>
        
        <ImageListItem>
  <img src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=121&h=121&fit=crop&auto=format&dpr=2"
  alt=""/>
        </ImageListItem>
        </ImageList>

<Typography variant="h6" fontWeight={100} mt={2}>Latest Conversations</Typography>

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </Box>
    </Box>
  )
}

export default Rightbar