import React from 'react'
import {AppBar, Toolbar, Box, Tabs, Tab, Typography} from "@mui/material"

const Header = () => {
  return (
    <div>
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant='h6'>
                    STUDENT
                </Typography>
                <Box sx={{marginLeft: 'auto'}}>
                    <Tabs textColor='white'>
                        <Tab label="Admin@email.com"/>

                       
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>     
         
    </div>
  )
}

export default Header