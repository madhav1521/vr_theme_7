import React from 'react'
import { Box, Divider, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { brandlogo, dashboard, dashboardnew, documents, documentsnew, maintenance, maintenancenew, orders, ordersnew, profile, settings, settingsnew, statistics, statisticsnew, users, usersnew } from '../assets/images';


export default function Sidebar() {
    function togglebtn() {
        document.body.classList.toggle('setStatus')
      };
    return (
        <Box className="sidebar">
            <Box className="brand-logo"><NavLink to='/dashboard' title="brand-logo" > <img src={brandlogo} alt=""  /></NavLink></Box>
            <Box className='sidebar-content'>
                <Box className='profile' >
                    <NavLink to='/' title='Your profile'><img src={profile} alt="profile" /></NavLink>
                    <Box className='profile-description'>
                        <Typography component='p' variant='h5' >John Doe</Typography>
                        <Typography component='span' variant='body2' >Super Admin</Typography>
                    </Box>
                </Box>
                <NavLink to="/dashboard" className="sidelinks" title="Dashboard" onClick={togglebtn}>
                    <img src={dashboard} alt="" className="default" />
                    <img src={dashboardnew} alt="" className="active-img" />
                    <Typography component='p' className="text-default">Dashboard</Typography>
                </NavLink>
                <NavLink to="/statistics" className="sidelinks" title="Statistics" onClick={togglebtn}>
                    <img src={statistics} alt="" className="default" />
                    <img src={statisticsnew} alt="" className="active-img" />
                    <Typography component='p' className="text-default">Statistics</Typography>
                </NavLink>
                <NavLink to="/documents" className="sidelinks" title="Documents" onClick={togglebtn}>
                    <img src={documents} alt="" className="default" />
                    <img src={documentsnew} alt="" className="active-img" />
                    <Typography component='p' className="text-default">Documents</Typography>
                </NavLink>
                <NavLink to="/maintenance" className="sidelinks" title="Maintenance" onClick={togglebtn}>
                    <img src={maintenance} alt="" className="default" />
                    <img src={maintenancenew} alt="" className="active-img" />
                    <Typography component='p' className="text-default">Maintenance</Typography>
                </NavLink>
                <NavLink to="/orders" className="sidelinks" title="Orders" onClick={togglebtn}>
                    <img src={orders} alt="" className="default" />
                    <img src={ordersnew} alt="" className="active-img" />
                    <Typography component='p' className="text-default">Orders</Typography>
                </NavLink>
                <NavLink to="/users" className="sidelinks" title="Users" onClick={togglebtn}>
                    <img src={users} alt="" className="default" />
                    <img src={usersnew} alt="" className="active-img" />
                    <Typography component='p' className="text-default">Users</Typography>
                </NavLink>
                <NavLink to="/setting" className="sidelinks" title="Settings" onClick={togglebtn}>
                    <img src={settings} alt="" className="default" />
                    <img src={settingsnew} alt="" className="active-img" />
                    <Typography component='p' className="text-default">Settings</Typography>
                </NavLink>
            </Box>
        </Box>
    )
}
