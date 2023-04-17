import { Box, Button, Link, Menu, MenuItem, MenuProps, SelectChangeEvent, Typography, styled } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { brandicon, dotsicon, notificationicon, searchicon, toggleicon } from '../assets/images';

const StyledMenu = styled((props: MenuProps) => (
<Menu
elevation={0}
anchorOrigin={{
  vertical: 'bottom',
  horizontal: 'right',
}}
transformOrigin={{
  vertical: 'top',
  horizontal: 'right',
}}
{...props}
/>
))(({ theme }) => ({
}));

export default function Header() {
  const navigate = useNavigate();

  const [alignment, setAlignment] = React.useState<string | null>('left');
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };
  const [anchorEl, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl);
  const handleClick1 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  function togglebtn() {
    document.body.classList.toggle('setStatus')
  };
  function searchbar() {
    document.body.classList.toggle('setSearch')
  };
  function toggleclass() {
    document.body.classList.toggle('arb')
    document.body.setAttribute('dir' , 'rtl' )

  if (document.body.classList.contains('arb')) {
     return document.body.setAttribute('dir', 'rtl')
  }
  else{
    return document.body.setAttribute('dir', 'ltr')
  }
  // return(document.body.classList.contains('arb') ? document.body.setAttribute('dir', 'rtl') : document.body.setAttribute('dir', 'ltr'))
};
  

  function cmplogo(){
    const box = document.getElementById("brand-icon")
    if(box!=null){
      box.style.transform = "rotate(360deg)";
      box.style.transitionDuration = "1s";
    }
  };


  return (
    <>
    <Box className='overlaysearch' onClick={searchbar}></Box>
      <Box className='overlay' onClick={togglebtn}></Box>
    <Box className='header'>
      {/*   search-bar 
        --------------------------------------------------------------------------------------------------------------------------- */}
        <Button variant='outlined' className='toggle-btn dropdown' onClick={togglebtn} title='toggle-sidebar'>
          <img src={toggleicon} alt="toggle-button" />
        </Button>
        <NavLink id='brand-icon' to='/dashboard' onClick={cmplogo} title='company-logo'>
          <img src={brandicon} alt="company-logo" />
        </NavLink>
        <Box className='search-box'>
          <input type='search' title='search' className="search-input" placeholder="Search" ></input>
          <Button onClick={searchbar} title='close-search' className="btn-close-search dropdown"><CloseRoundedIcon color="primary" /></Button>
      </Box>
      {/*   notification 
        --------------------------------------------------------------------------------------------------------------------------- */}
        
        <Button className="search-btn dropdown" title='search-here' onClick={searchbar}>
          <img src={searchicon} alt="search-icon" />
        </Button>
        <Button id="demo-customized-button"
          aria-controls={open1 ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open1 ? 'true' : undefined}
          disableElevation
          onClick={handleClick1}
          variant='contained'
          className='dropdown notification-btn'
          title='notification-btn'
          >
          <img src={notificationicon} alt="notification-button" />
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open1}
          onClose={handleClose1}
          className="menu-list"
        >
          <MenuItem onClick={handleClose1} disableRipple>
            One unread message
          </MenuItem>
          <MenuItem onClick={handleClose1} disableRipple>
            Help
          </MenuItem>
        </StyledMenu>

        {/*   menu profile
        --------------------------------------------------------------------------------------------------------------------------- */}
        <Button
          id="demo-customized-button"
          aria-controls={open2 ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open2 ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick2}
          className="dropdown menu-dots"
          title='menu-btn'
        >
          <img alt="menu" src={dotsicon} />
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl2}
          open={open2}
          onClose={handleClose2}
          className="menu-list"
        >

          <MenuItem disableRipple onClick={toggleclass} >
            ltr to rtl
          </MenuItem>
          <MenuItem disableRipple onClick={handleClose2}>
            Action
          </MenuItem>

          <MenuItem onClick={() => { navigate('/'); }} disableRipple>
            Logout
          </MenuItem>
        </StyledMenu>
    </Box>
    </>
  )
}
