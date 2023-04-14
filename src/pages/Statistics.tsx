import { Alert, Box, Button, Checkbox, Collapse, FormControl, FormControlLabel, Grid, Icon, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, SelectChangeEvent, Stack, TextField, Typography, imageListClasses } from '@mui/material'
import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { checked_box, dotsicon, error, info, radio_checked, radio_unchecked, unchecked_box, upload_icon, valid, warn } from '../assets/images';
import CloseIcon from '@mui/icons-material/Close';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// for tabs ----------------------------------------------------------------------------
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};
function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
};

function checkprop() {
    return (
        <img src={checked_box} alt=''></img>
    )
};
function uncheckprop() {
    return (
        <img src={unchecked_box} alt=''></img>
    )
};


export default function Statistics() {
    // for password ----------------------------------------------------------------------------
    const [showPassword1, setShowPassword1] = React.useState(false);
    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
    const handleMouseDownPassword1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const [showPassword2, setShowPassword2] = React.useState(false);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
    const handleMouseDownPassword2 = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    // for select ----------------------------------------------------------------------------
    const navigate = useNavigate();
    const [select1, setSelect1] = React.useState("");
    const [select2, setSelect2] = React.useState("");
    const [select3, setSelect3] = React.useState("");

    const handleChange1 = (event: SelectChangeEvent) => {
        setSelect1(event.target.value as string);
    };
    const handleChange2 = (event: SelectChangeEvent) => {
        setSelect2(event.target.value as string);
    };
    const handleChange3 = (event: SelectChangeEvent) => {
        setSelect3(event.target.value as string);
    };
    // for snackbar ----------------------------------------------------------------------------
    const [open1, setOpen1] = React.useState(true);
    const [open2, setOpen2] = React.useState(true);
    const [open3, setOpen3] = React.useState(true);
    const [open4, setOpen4] = React.useState(true);
    // for tabs ----------------------------------------------------------------------------
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box className='main-outer'>
                <Box className='main-container'>
                    <Sidebar />
                    <Box className='wrapper-page'>
                        <Header />
                        <Box className='page-content'>
                            <Box className='page-title'>
                                <Typography variant='h2' >Statistics</Typography>
                            </Box>
                            <Box className='main-inner-card'>

                                {/* First Column
                                ------------------------------------------------------------------------------------------------------------------- */}
                                <Typography variant='h5' className='card-head inner-head'>One Column</Typography>
                                <Grid container spacing={{ xs: 2, sm: 3 }}>
                                    <Grid item xs={12}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="Name"
                                            fullWidth
                                            id="Name"
                                            label="Name"
                                            variant="outlined"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box>
                                            <FormControl variant="outlined" fullWidth>
                                                <InputLabel id="demo-simple-select-outlined-label">Dropdown</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    value={select1}
                                                    onChange={handleChange1}
                                                    label="Dropdown"
                                                    fullWidth
                                                    className="text-select"
                                                >
                                                    <MenuItem value={1}>India</MenuItem>
                                                    <MenuItem value={2}>America</MenuItem>
                                                    <MenuItem value={3}>Africa</MenuItem>
                                                    <MenuItem value={4}>China</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            className="textarea"
                                            id="outlined-multiline-static"
                                            label="Text area"
                                            type="textarea"
                                            multiline
                                            rows={5}
                                            defaultValue="Default Value"
                                        />
                                    </Grid>
                                </Grid>
                                {/* second Column
                                ------------------------------------------------------------------------------------------------------------------- */}
                                <Typography variant='h5' className='card-head inner-head'>Two Column</Typography>
                                <Grid container columnSpacing={{ xs: 2, sm: 3, md: 4 }} rowSpacing={{ xs: 2, md: 3 }}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="name"
                                            name="Name"
                                            fullWidth
                                            id="Name"
                                            label=" Name"
                                            variant="outlined"
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Box>
                                            <FormControl variant="outlined" fullWidth>
                                                <InputLabel id="demo-simple-select-outlined-label">Dropdown</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    value={select2}
                                                    onChange={handleChange2}
                                                    label="Dropdown"
                                                    fullWidth
                                                    className="text-select"
                                                >
                                                    <MenuItem value={4}>India</MenuItem>
                                                    <MenuItem value={5}>America</MenuItem>
                                                    <MenuItem value={6}>Africa</MenuItem>
                                                    <MenuItem value={7}>China</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl variant="outlined" fullWidth>
                                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <OutlinedInput
                                                type={showPassword1 ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword1}
                                                            onMouseDown={handleMouseDownPassword1}
                                                            edge="end"
                                                            title='show-password'
                                                        >
                                                            {showPassword1 ? <Visibility color="warning" /> : <VisibilityOff color="warning" />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="name"
                                            name="Name"
                                            fullWidth
                                            id="Name"
                                            label=" Name"
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                                {/* Third Column
                                ------------------------------------------------------------------------------------------------------------------- */}
                                <Typography variant='h5' className='card-head inner-head'>Third Column</Typography>
                                <Grid container columnSpacing={{ xs: 2, sm: 3, md: 4 }} rowSpacing={{ xs: 2, md: 3 }}>
                                    <Grid item xs={12} sm={4}>
                                        <Box
                                            component="form"
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField
                                                className='error-text'
                                                error
                                                fullWidth
                                                id="outlined-error-helper-text"
                                                label="Error"
                                                defaultValue='Designer'
                                                variant="outlined"
                                                autoComplete="email"
                                            />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="Focus"
                                            fullWidth
                                            id="focus"
                                            label="Focus"
                                            variant="outlined"
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={4}>
                                        <Box
                                            component="form"
                                            noValidate
                                            autoComplete="off"
                                            className='disabled-box text'
                                        >
                                            <FormControl disabled fullWidth variant="outlined">
                                                <InputLabel htmlFor="component-disabled">Disabled</InputLabel>
                                                <OutlinedInput className='disabled' id="component-disabled" defaultValue="UI/UX Designer" label="Disabled" />
                                            </FormControl>
                                        </Box>
                                    </Grid>
                                </Grid>
                                {/* Fourth Column
                                ------------------------------------------------------------------------------------------------------------------- */}
                                <Typography variant='h5' className='card-head inner-head'>Fourth Column</Typography>

                                <Grid container columnSpacing={{ xs: 2, sm: 3, md: 4 }} rowSpacing={{ xs: 2, md: 3 }}>

                                    <Grid item xs={12} sm={6} lg={3}>
                                        <TextField
                                            autoComplete="name"
                                            name="Name"
                                            fullWidth
                                            id="Name"
                                            label=" Name"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <InputLabel htmlFor="outlined-adornment-password">Focus</InputLabel>
                                            <OutlinedInput
                                                type={showPassword2 ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword2}
                                                            onMouseDown={handleMouseDownPassword2}
                                                            edge="end"
                                                            title='show-password'
                                                        >
                                                            {showPassword2 ? <Visibility color="warning" /> : <VisibilityOff color="warning" />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Focus"
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} sm={6} lg={3}>
                                        <Box>
                                            <FormControl variant="outlined" fullWidth>
                                                <InputLabel id="demo-simple-select-outlined-label">Dropdown</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    value={select3}
                                                    onChange={handleChange3}
                                                    label="Dropdown"
                                                    fullWidth
                                                    className="text-select"
                                                >
                                                    <MenuItem value={10}>India</MenuItem>
                                                    <MenuItem value={7}>America</MenuItem>
                                                    <MenuItem value={8}>Africa</MenuItem>
                                                    <MenuItem value={9}>China</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={6} lg={3}>
                                        <TextField
                                            autoComplete="name"
                                            name="Name"
                                            fullWidth
                                            id="Name"
                                            label=" Name"
                                            variant="outlined"
                                        />
                                    </Grid>

                                </Grid>
                                {/* Others design elements
                                ------------------------------------------------------------------------------------------------------------------- */}

                                <Typography variant='h5' className='card-head inner-head'>Other Design Elements</Typography>
                                <Typography variant="h6" className="inner-subhead file-upload">
                                    File Upload
                                </Typography>

                                <Stack direction="row" alignItems="center" spacing={3} className="upload-content">
                                    <Button variant="outlined" component="label" title='upload-files' className="upload-btn" >
                                        <img src={upload_icon
                                        } alt="upload files" /> &nbsp; Upload
                                        <input hidden accept="image/*" multiple type="file" />
                                    </Button>
                                    <Typography component="p" variant="body1" className=" nis">
                                        No item Selected
                                    </Typography>
                                </Stack>
                                {/* Checkbox
                                ------------------------------------------------------------------------------------------------------------------- */}

                                <Typography variant="h6" className="inner-subhead">
                                    Check Box
                                </Typography>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        className='icon-label-text'
                                        control={
                                            <Checkbox color="primary" icon={<Icon>{<img src={unchecked_box} />}</Icon>} checkedIcon={<Icon>{<img src={checked_box} />}</Icon>} />

                                        }
                                        label="Selected"
                                    />&nbsp;&nbsp;&nbsp;
                                    <FormControlLabel
                                        className='icon-label-text'
                                        control={
                                            <Checkbox color="primary" icon={<Icon>{<img src={unchecked_box} />}</Icon>} checkedIcon={<Icon>{<img src={checked_box} />}</Icon>} />
                                        }
                                        label="Not yet Selected"
                                    />
                                </Grid>

                                {/* Radio
                                ------------------------------------------------------------------------------------------------------------------- */}
                                <Typography variant="h6" className="inner-subhead" >
                                    Radio Button
                                </Typography>

                                <Grid item xs={12} >
                                    <FormControl className="radio-check" >
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel className='icon-label-text' value="female" control={<Radio icon={<Icon>{<img src={radio_unchecked} />}</Icon>} checkedIcon={<Icon>{<img src={radio_checked} />}</Icon>} />} label="Selected" />&nbsp;&nbsp;&nbsp;
                                            <FormControlLabel className='icon-label-text' value="male" control={<Radio icon={<Icon>{<img src={radio_unchecked} />}</Icon>} checkedIcon={<Icon>{<img src={radio_checked} />}</Icon>} />} label="Not yet Selected" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                {/* Snackbar starts
              ------------------------------------------------------------------------------------------------------------------------------- */}
                                <Typography component="h6" variant="h6" className="inner-subhead snackbar-head page-subhead" marginTop="31px">
                                    Snack Bar
                                </Typography>
                                <Grid container rowSpacing={3} columnSpacing={4} >
                                    <Grid item xs={12} md={6} sx={{ display: open1 ? "block" : "none" }}>
                                        <Box className="validation-notes">
                                            <Collapse in={open1} >
                                                <Alert className="text-danger"
                                                    action={
                                                        <IconButton
                                                            aria-label="close"
                                                            color="inherit"
                                                            size="small"
                                                            onClick={() => {
                                                                setOpen1(false);
                                                            }}
                                                        >
                                                            <CloseIcon fontSize="inherit" />
                                                        </IconButton>
                                                    }
                                                >
                                                    <img src={error} alt="" />
                                                    <Typography component="p" variant="subtitle2" className='text-message error-ic' >This is an error Message</Typography>
                                                </Alert>
                                            </Collapse>

                                        </Box>

                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{ display: open2 ? "block" : "none" }}>
                                        <Box className="validation-notes">
                                            <Collapse in={open2}>
                                                <Alert className="text-info"
                                                    id="box2"
                                                    action={
                                                        <IconButton
                                                            aria-label="close"
                                                            color="inherit"
                                                            size="small"
                                                            onClick={() => {
                                                                setOpen2(false);
                                                            }}
                                                        >
                                                            <CloseIcon fontSize="inherit" />
                                                        </IconButton>
                                                    }
                                                >
                                                    <img src={info} alt="" />
                                                    <Typography component="p" variant="subtitle2" className='text-message info-ic'>This is an information message!</Typography>
                                                </Alert>
                                            </Collapse>
                                        </Box>

                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{ display: open3 ? "block" : "none" }}>
                                        <Box className="validation-notes">
                                            <Collapse in={open3}>
                                                <Alert className="text-warn"
                                                    action={
                                                        <IconButton
                                                            aria-label="close"
                                                            color="inherit"
                                                            size="small"
                                                            onClick={() => {
                                                                setOpen3(false);
                                                            }}
                                                        >
                                                            <CloseIcon fontSize="inherit" />
                                                        </IconButton>
                                                    }
                                                >
                                                    <img src={warn} alt="" />
                                                    <Typography component="p" variant="subtitle2" className='text-message warn-ic'>This is a warning message!</Typography>
                                                </Alert>
                                            </Collapse>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{ display: open4 ? "block" : "none" }}>
                                        <Box className="validation-notes">
                                            <Collapse in={open4}>
                                                <Alert className="text-success"
                                                    action={
                                                        <IconButton
                                                            aria-label="close"
                                                            color="inherit"
                                                            size="small"
                                                            onClick={() => {
                                                                setOpen4(false);
                                                            }}
                                                        >
                                                            <CloseIcon fontSize="inherit" />
                                                        </IconButton>
                                                    }
                                                >
                                                    <img src={valid} alt="" />
                                                    <Typography component="p" variant="subtitle2" className='text-message valid-ic'>This is an Success message!</Typography>
                                                </Alert>
                                            </Collapse>
                                        </Box>
                                    </Grid>
                                </Grid>
                                {/* CTA starts
              ------------------------------------------------------------------------------------------------------------------------------- */}
                                <Typography component="h6" variant="h6" className="inner-subhead cta page-subhead">
                                    CTA
                                </Typography>
                                <Box className="prim-sec" gap={2}>
                                    <Button type="submit" disableElevation variant="contained" title='primary-btn' className="primary-btn" onClick={() => { navigate("/dashboard"); }} >
                                        <Typography component="span" variant="h6" color={'white'}>
                                            Primary
                                        </Typography>
                                    </Button>
                                    <Button type="submit" disableElevation variant="outlined" title='secondary-btn' className="secondary-btn" onClick={() => { navigate("/"); }} >
                                        <Typography component="span" variant="h6" color={'primary'}>
                                            Secondary
                                        </Typography>
                                    </Button>
                                </Box>
                                {/* Tabs starts
              ------------------------------------------------------------------------------------------------------------------------------- */}
                                <Typography variant="h5" className="card-head inner-head">
                                    Tabs
                                </Typography>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    className="inner-tabs"
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    allowScrollButtonsMobile
                                    aria-label="scrollable auto tabs example"
                                >
                                    <Tab label="Tab 1" className="tabs" {...a11yProps(0)} />
                                    <Tab label="Tab 2" className="tabs" {...a11yProps(1)} />
                                    <Tab label="Tab 3" className="tabs" {...a11yProps(2)} />
                                    <Tab label="Tab 4" className="tabs" {...a11yProps(3)} />
                                </Tabs>
                                <TabPanel value={value} index={0} >
                                    <Typography component="span" variant="body1" className="tab-text" >
                                        1,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</Typography>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <Typography component="span" variant="body1" className="tab-text" >
                                        2,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</Typography>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <Typography component="span" variant="body1" className="tab-text" >
                                        3,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</Typography>
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    <Typography component="span" variant="body1" className="tab-text" >
                                        4,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</Typography>
                                </TabPanel>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
