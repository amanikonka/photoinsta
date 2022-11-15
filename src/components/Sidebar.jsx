import { Contacts, Groups, Home, ModeNight, Pages, PersonAdd, Settings, Store } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = ({mode,setMode}) => {
  return (
    <Box  flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="fixed">
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          </List>
          
          {/* <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Pages/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          </List> */}
          {/* 2 */}
          <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Groups/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          </List>
          {/* {3} */}
          <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Store/>
              </ListItemIcon>
              <ListItemText primary="Store" />
            </ListItemButton>
          </ListItem>
          </List>

          <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          </List>
          {/* {4} */}
          <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <PersonAdd/>
              </ListItemIcon>
              <ListItemText primary="PersonAdd" />
            </ListItemButton>
          </ListItem>
          </List>
          <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Contacts/>
              </ListItemIcon>
              <ListItemText primary="Contacts" />
            </ListItemButton>
          </ListItem>
          </List>
          {/* {moom} */}
          <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light"?"dark":"light")}/>
            </ListItemButton>
          </ListItem>
          </List>
      </Box>
      </Box>
  )
}

export default Sidebar