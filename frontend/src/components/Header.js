import React, {useState} from 'react'
import {AppBar, Toolbar, Box, Tabs, Tab, Typography, Button} from "@mui/material"
import { Link } from "react-router-dom";


const Header = () => {
    const [value, setvalue] = useState()
  return (
    <div>
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant='h6'>
                    STUDENT
                </Typography>
                <Box sx={{marginLeft: 'auto'}}>
                    <Tabs textColor='white' onchange={(e, val) => setvalue(val)}>
                        <Tab LinkComponent={Link} to="/student" label="Admin@email.com"/>
                       
                    </Tabs>
       
                    
                </Box>
            </Toolbar>
        </AppBar>     
         
    </div>
  )
}

export default Header