import { Box, Button, Card, Grid, Typography, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import IconButton from '@mui/material/IconButton';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { bucket, dotsicon, graph, moneybag, pic1, pic2, pic3, pic4, pic5, profit_curve, report_download, revenue_curve, table_dots, wallet } from '../assets/images'

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

function createData(
  sku: number,
  order: number,
  name: string,
  email: string,
  item: string,
  amount: string,
  action: string,
) {
  return { sku, order, name, email, item, amount, action };
}
const rows = [
  createData(583, 61391, 'Cooper, Kristin ', 'kenzi.lawson@example.com', "DJI Mavic Pro 2", ' $1,262.95 ', ''),
  createData(798, 13671, 'Jacob Jones', 'sara.cruz@example.com', "LED Tv", ' $43.91 ', ''),
  createData(447, 23340, 'Kristin Watson', 'kenzi.lawson@example.com', "Mobile", ' $672.01 ', ''),
  createData(826, 92771, 'Devon Lane', 'tim.jennings@example.com', "Microwave", ' $703.4', ''),
  createData(561, 93457, 'Ralph Edwards', 'michelle.rivera@example.com', "Laptop Charger", '$2,728.95', ''),
  createData(738, 43359, 'Darrell Steward', 'felicia.reid@example.com', "Computer", '$1,001.46', ''),
  createData(540, 28200, 'Dianne Russell', 'willie.jennings@example.com', "Headphone", ' $115.37', ''),
  createData(357, 70443, 'Annette Black', 'curtis.weaver@example.com', "Washing machine", '$953.11', ''),
  createData(994, 20796, 'Leslie Alexander', 'deanna.curtis@example.com', "Fan", ' $162.96', ''),
];


export default function Dashboard() {
  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };
  return (
    <Box className='main-outer'>
      <Box className='main-container'>
        <Sidebar />
        <Box className='wrapper-page'>
          <Header />
          <Box className='page-content'>
            <Box className='page-title'>
              <Typography variant='h2' >Dashboard</Typography>
              <Button disableElevation variant='contained' className='generate-report' title='generate-report'>
                <img src={report_download} alt="download" />
                <Typography variant='h6' component='span' >Generate Report</Typography>
              </Button>
            </Box>

            {/* Sticker starts
          -------------------------------------------------------------------------------------------------------------------------------- */}
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} >
              <Grid item xs={12} sm={6} lg={4}>
                <Box className='card'>
                  <Typography variant='h5' className='card-head'>Order Statics</Typography>
                  <Box className='statics-data'>
                    <Box>
                      <Typography variant='subtitle1' component='p' >240</Typography>
                      <Typography variant='body2' component='span' >Pending</Typography>
                    </Box>
                    <Box>
                      <Typography variant='subtitle1' component='p' >35</Typography>
                      <Typography variant='body2' component='span' >Shipping</Typography>
                    </Box>
                    <Box>
                      <Typography variant='subtitle1' component='p' margin='auto'>240</Typography>
                      <Typography variant='body2' component='span' >Completed</Typography>
                    </Box>
                  </Box>
                  <Box className='card-img-data'>
                    <img src={bucket} alt="order-image" />
                    <Box className='nums-text'>
                      <Typography variant='body2' component='span' >Total Orders</Typography>
                      <Typography variant='subtitle1' component='p' >580</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} lg={4}>
                <Box className='card curves-card'>
                  <img src={revenue_curve} alt="revenue-image" className='img-fluid' />
                  <Box className='card-img-data'>
                    <img src={wallet} alt="revenue-image" />
                    <Box className='nums-text'>
                      <Typography variant='body2' component='span' >Revenue</Typography>
                      <Typography variant='subtitle1' component='p' >$ 45,000.00</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} lg={4}>
                <Box className='card curves-card'>
                  <img src={profit_curve} alt="revenue-image" className='img-fluid' />
                  <Box className='card-img-data'>
                    <img src={moneybag} alt="moneybag-image" />
                    <Box className='nums-text'>
                      <Typography variant='body2' component='span' >Profit</Typography>
                      <Typography variant='subtitle1' component='p' >$ 10,000.00</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              {/* report-graph 
            ----------------------------------------------------------------------------------------------------------------- */}
              <Grid item xs={12} lg={7} xl={8}>
                <Box className='card'>
                  <Box className='card-head-line'>
                    <Typography variant='h5' className='card-head'>Revenue Report</Typography>
                    <ul>
                      <li><Typography variant='body2' component='span' className='earning' >Earning</Typography></li>
                      <li><Typography variant='body2' component='span' className='expense' >Expense</Typography></li>
                    </ul>
                  </Box>
                  <img src={graph} alt="report-graph" className='img-fluid data-graph' />
                </Box>
              </Grid>

              <Grid item xs={12} lg={5} xl={4}>
                <Box className='card latest-sale'>
                  <Box className='card-head-line '>
                    <Typography variant='h5' className='card-head'>Latest Sale</Typography>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open3 ? 'long-menu' : undefined}
                      aria-expanded={open3 ? 'true' : undefined}
                      aria-haspopup="true"
                      onClick={handleClick3}
                      className='sales-menu'
                      color="warning"
                      title='menu icon'
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                      }}
                      anchorEl={anchorEl3}
                      open={open3}
                      onClose={handleClose3}
                      className="menu-list"
                    >
                      <MenuItem onClick={handleClose3} disableRipple>
                        Add more
                      </MenuItem>
                    </StyledMenu>

                  </Box>

                  <ul>
                    <li>
                      <Box className='profile-content' >
                        <img src={pic1} alt="key" className='list-profile-image img-fluid' />
                        <Box className='profile-stats' >
                          <Typography component='p' variant="h5" className="names">Jenny Wilson</Typography>
                          <Typography component='span' variant="body2" className="deeds">Purchased Mobile</Typography>
                        </Box>
                        <Typography variant="body2" component='p' className="time-active">2m ago</Typography>
                      </Box>
                      </li>
                      <li>
                      <Box className='profile-content' >
                        <img src={pic2} alt="key" className='list-profile-image img-fluid' />
                        <Box className='profile-stats' >
                          <Typography component='p' variant="h5" className="names">Jerome Bell</Typography>
                          <Typography component='span' variant="body2" className="deeds">Purchased TV</Typography>
                        </Box>
                        <Typography variant="body2" component='p' className="time-active">10m ago</Typography>
                      </Box>
                      </li>
                      <li>
                      <Box className='profile-content' >
                        <img src={pic3} alt="key" className='list-profile-image img-fluid' />
                        <Box className='profile-stats' >
                          <Typography component='p' variant="h5" className="names">Robert Fox</Typography>
                          <Typography component='span' variant="body2" className="deeds">Purchased Mobile</Typography>
                        </Box>
                        <Typography variant="body2" component='p' className="time-active">40m ago</Typography>
                      </Box>
                      </li>
                      <li>
                      <Box className='profile-content' >
                        <img src={pic4} alt="key" className='list-profile-image img-fluid' />
                        <Box className='profile-stats' >
                          <Typography component='p' variant="h5" className="names">Floyd Miles</Typography>
                          <Typography component='span' variant="body2" className="deeds">Purchased TV</Typography>
                        </Box>
                        <Typography variant="body2" component='p' className="time-active">55m ago</Typography>
                      </Box>
                      </li>
                      <li>
                      <Box className='profile-content last-profile-content' >
                        <img src={pic5} alt="key" className='list-profile-image img-fluid' />
                        <Box className='profile-stats' >
                          <Typography component='p' variant="h5" className="names">Wade Warren</Typography>
                          <Typography component='span' variant="body2" className="deeds">Purchased Bed</Typography>
                        </Box>
                        <Typography variant="body2" component='p' className="time-active">59m ago</Typography>
                      </Box>
                    </li>
                  </ul>

                </Box>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Box className='card'>
                  <Box className="card-head-line">
                    <Typography variant='h5' className='card-head'>Revenue Report</Typography>
                    <Button className='views-btn'>View all</Button>
                  </Box>

                  <TableContainer >
                    <Table className='table' size="small" aria-label="a dense table" >
                      <TableHead >
                        <TableRow>
                          <TableCell component="th" align="left">SKU</TableCell>
                          <TableCell component="th" align="left">Order id</TableCell>
                          <TableCell component="th" align="left">Name</TableCell>
                          <TableCell component="th" align="left">Email</TableCell>
                          <TableCell component="th" align="left">Item</TableCell>
                          <TableCell component="th" align="left">Price</TableCell>
                          <TableCell component="th" align="left">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody >
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell scope="row">{row.sku}</TableCell>
                            <TableCell align="left">{row.order}</TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">{row.item}</TableCell>
                            <TableCell align="left">{row.amount}</TableCell>
                            <TableCell align="left">{
                              <Box>
                                <IconButton
                                  aria-label="more"
                                  id="long-button"
                                  aria-controls={open3 ? 'long-menu' : undefined}
                                  aria-expanded={open3 ? 'true' : undefined}
                                  aria-haspopup="true"
                                  onClick={handleClick3}
                                  className='sales-menu'
                                  color='warning'
                                  title='menu icon'
                                >
                                  <MoreHorizIcon />
                                </IconButton>
                                <StyledMenu
                                  id="demo-customized-menu"
                                  MenuListProps={{
                                    'aria-labelledby': 'demo-customized-button',
                                  }}
                                  anchorEl={anchorEl3}
                                  open={open3}
                                  onClose={handleClose3}
                                  className="menu-list"
                                >
                                  <MenuItem onClick={handleClose3} disableRipple>
                                    Add more
                                  </MenuItem>
                                </StyledMenu>
                              </Box>

                            }</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>


                </Box>
              </Grid>

            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
