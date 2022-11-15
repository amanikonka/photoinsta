import {  Avatar, Button, ButtonGroup, Fab, Modal, styled, TextField, Tooltip, Typography} from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material'
import { Box, Stack} from '@mui/system'

const SytledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})
const UserBox= styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"

    
})

const Add = () => {
    const[open,setOpen] = useState(false)
  return (
    <>
        <Tooltip onClick={e=>setOpen(true)} title="Delete"
        sx={{position:"fixed",bottom:20,
    left:{xs:"calc(50%-25px)",md:30}
    }}
        >
        <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Tooltip>
<SytledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
    
    <Typography variant='h6' color="grey" textAlign="center">Create post</Typography>
    <UserBox>
        <Avatar src="https://images.pexels.com/users/avatars/1658490/baby-concept-853.jpeg?auto=compress&fit=crop&h=80&w=80&dpr=2" sx={{width:30,height:30}}/>
        <Typography fontWeight={500} variant="span">Amani Konka</Typography>
    </UserBox>
    <TextField
    sx={{width:"100%"}}
          id="standard-multiline-static"
          Multiline
          multiline
          rows={3}
          placeholder="What's on your mind"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
        <EmojiEmotions/>
        <Image color="secondary"/>
        <VideoCameraBack color="success" />
        <PersonAdd color="error"/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
  <Button>Post</Button>
  <Button sx={{width:"100px"}}><DateRange/></Button>
  
</ButtonGroup>
  </Box >
</SytledModal>


    </>
  )
}

export default Add