import { Box, Button, Link, Menu, MenuItem, MenuProps, SelectChangeEvent, Typography, styled } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { dotsicon, notificationicon, searchicon, toggleicon } from '../assets/images';

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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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

  return (
    <>
    <Box className='overlaysearch' onClick={searchbar}></Box>
      <Box className='overlay' onClick={togglebtn}></Box>
    <Box className='header'>
      {/*   search-bar 
        --------------------------------------------------------------------------------------------------------------------------- */}
        <Button variant='outlined' className='toggle-btn dropdown' onClick={togglebtn} >
          <img src={toggleicon} alt="toggle-button" />
        </Button>
        <Box className='search-box'>
          <input type='search' title='search' className="search-input" placeholder="Search" ></input>
          <Button onClick={searchbar} className="btn-close-search"><CloseRoundedIcon color="primary" /></Button>
      </Box>
      {/*   notification 
        --------------------------------------------------------------------------------------------------------------------------- */}
        
        <Button className="search-btn dropdown" onClick={searchbar}>
          <img src={searchicon} alt="search-icon" />
        </Button>
        <Button id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          disableElevation
          onClick={handleClick}
          variant='contained'
          className='dropdown notification-btn'>
          <img src={notificationicon} alt="notification-button" />
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          className="menu-list"
        >
          <MenuItem onClick={handleClose} disableRipple>
            One unread message
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
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

          <MenuItem onClick={handleClose2} disableRipple>
            My Profile
          </MenuItem>
          <MenuItem onClick={handleClose2} disableRipple>
            Help
          </MenuItem>

          <MenuItem onClick={() => { navigate('/'); }} disableRipple>
            Logout
          </MenuItem>
        </StyledMenu>
    </Box>
    </>
  )
}
