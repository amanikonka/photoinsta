
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardHeader, CardMedia, IconButton, Typography,CardContent, Checkbox } from '@mui/material'
import React from 'react'

const Post = () => {
  return (
    <Box bgcolor="pink" flex={4} p={2}>
      <Card sx={{margin:"5px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="10%"
        image="https://images.pexels.com/photos/3297363/pexels-photo-3297363.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Paella dish"

      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">

        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite />} sx={{color:"red"}}/>
        </IconButton>
        <IconButton aria-label="share">
          <Share/>
        </IconButton>
        
      </CardActions>
     
    </Card>
    </Box>
  )
}

export default Post
// import React from 'react';
// import { Box ,Post} from '@mui/material'; 
// import { PostAdd } from '@mui/icons-material';

// const Post = () => {
//   return (
//     <Box flex={4} p={2}>
//         <Post/>
//     </Box>
//   )
// }

// export default Post