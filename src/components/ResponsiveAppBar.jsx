import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import "../assets/styles/components/responsiveappbar.css"
import Logo from "../assets/svgs/icons/Logo"
import { Button, IconButton } from '@mui/material';
function ResponsiveAppBar() {
  return (
    <AppBar position="fixed" className='appbar'>
      <div className='appbar-container'>
        <Logo id="logo"/>
        <div className='appbar-pages'>
         <span>Home</span>
         <span>About</span>
         <span>Contact</span>
         <span>Blog</span>
         <span>Careers</span>
        </div>
        <Button className='request-invite-btn'>Request Invite</Button>
      </div>
    </AppBar>
  );
}
export default ResponsiveAppBar;
