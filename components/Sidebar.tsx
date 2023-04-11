import React from 'react'
import { Box, Divider, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { brandlogo, dashboard, dashboardnew, documents, documentsnew, maintenance, maintenancenew, orders, ordersnew, profile, settings, settingsnew, statistics, statisticsnew, users, usersnew } from '../assets/images';

export default function Sidebar() {
    return (
        <Box className="sidebar">
            <Box className="brand-logo"><Link href="/" title="brand-logo" > <img src={brandlogo} alt=""  /></Link></Box>
            <Divider />
            <Box className='sidebar-content'>
                <Box className='profile' >
                    <img src={profile} alt="profile" />
                    <Box className='profile-description'>
                        <Typography component='p' variant='h5' >John Doe</Typography>
                        <Typography component='span' variant='body2' >Super Admin</Typography>
                    </Box>
                </Box>
                <NavLink to="/dashboard" className="sidelinks" title="Dashboard">
                    <img src={dashboard} alt="" className="default" />
                    <img src={dashboardnew} alt="" className="active-img" />
                    <Typography component='p' className="text-default">Dashboard</Typography>
                </NavLink>
                <NavLink to="/statistics" className="sidelinks" title="Statistics">
                    <img src={statistics} alt="" className="default" />
                    <img src={statisticsnew} alt="" className="active-img" />
                    <Typography component='p' className="text-default">Statistics</Typography>
                </NavLink>
                <NavLink to="/documents" className="sidelinks" title="Documents">
                    <img src={documents} alt="" className="default" />
                    <img src={documentsnew} alt="" className="active-img" />
                    <Typography component='p' className="text-default">Documents</Typography>
                </NavLink>
                <NavLink to="/maintenance" className="sidelinks" title="Maintenance">
                    <img src={maintenance} alt="" className="default" />
                    <img src={maintenancenew} alt="" className="active-img" />
                    <Typography component='p' className="text-default">Maintenance</Typography>
                </NavLink>
                <NavLink to="/orders" className="sidelinks" title="Orders">
                    <img src={orders} alt="" className="default" />
                    <img src={ordersnew} alt="" className="active-img" />
                    <Typography component='p' className="text-default">Orders</Typography>
                </NavLink>
                <NavLink to="/users" className="sidelinks" title="Users">
                    <img src={users} alt="" className="default" />
                    <img src={usersnew} alt="" className="active-img" />
                    <Typography component='p' className="text-default">Users</Typography>
                </NavLink>
                <NavLink to="/setting" className="sidelinks" title="Settings">
                    <img src={settings} alt="" className="default" />
                    <img src={settingsnew} alt="" className="active-img" />
                    <Typography component='p' className="text-default">Settings</Typography>
                </NavLink>
            </Box>
        </Box>
    )
}
