import { createTheme } from '@mui/material';

const primary = "#5AC4FF";
const primaryMain = '#153D78';
const primaryContrast = '#F6F6F6';
const secondary = '#505050';
const secondaryMain = '#4B4B4B';
const secondaryLight = '#9C9C9C';
const secondaryContrast = '#989898';
const grey = '#E9E9E9';
const greyLight = '#CECECE';
const greyDark = '#DBDBDB';
const white = "#FFFFFF";
const black = '#000000';
const blue = "#F4FBFF";
// const purple = "#F6EFFF";
// const peach = "#FFF0E9";
// const orange = "#FFE4E4";
const danger = '#FF5555';
const primaryHover = '#35598E';
const warning = '#cecece';


export const appTheme = createTheme({
    palette: {
        primary: {
            main: primary,
            light: "#6bcaff",
            dark: "#51b0e6"
        },
        secondary: {
            main: secondary,
            light: "#626262",
            dark: '#404040',
        },
        info: {
            main: grey,
            light: "#ebebeb",
            dark: "#bababa",
        },
        warning:{
            main:secondaryLight,
            light:warning,
        },
        
    },
    spacing:[0,8,15,20,30,40],
    typography: {
        fontFamily: [
            "Open Sans",
            "sans-serif",
        ].join(','),
        h1: {
            fontSize: "40px",
            lineHeight: "46px",
            color: black,
            fontWeight: "700",
            letterSpacing: "-0.01em",
            "@media (max-width:1199px)": {
                fontSize: "37px",
                fontWeight: "600",
                lineHeight: "40px",
            },
            "@media (max-width:899px)": {
                fontSize: "35px",
            },
        },
        h2: {
            fontSize: "35px",
            lineHeight: "41px",
            color: white,
            fontWeight: "600",
            letterSpacing: "-0.01em",
            "@media (max-width:899px)": {
                fontSize: "30px",
                lineHeight: "35px",
            },
            "@media (max-width:599px)": {
                fontSize: "28px",
                fontWeight: "500",
            },
        },
        h3: {
            fontSize: "25px",
            lineHeight: "29px",
            color: black,
            fontWeight: "600",
            letterSpacing: "-0.01em",
        },
        h4: {
            fontSize: "20px",
            lineHeight: "23px",
            color: secondary,
            letterSpacing: "-0.01em",
            fontWeight: "600",
        },
        h5: {
            fontSize: "18px",
            lineHeight: "22px",
            color: secondary,
            fontWeight: "400",
            letterSpacing: "-0.01em",

        },
        h6: {
            fontSize: "16px",
            lineHeight: "21px",
            color: secondaryMain,
            fontWeight: "400",
            letterSpacing: "-0.01em",
        },
        body2: {
            fontSize: "12px",
            lineHeight: "14px",
            color: secondaryLight,
            fontWeight: "400",
            letterSpacing: "-0.01em",
        },
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: "none",
                    "&.forgot-password": {
                        fontSize: "12px",
                        fontWeight: "400",
                        lineHeight: "17px",
                        color: secondaryLight,

                    },
                    "&.sign-up": {
                        fontWeight: "700",
                        textTransform: "uppercase",
                    },
                    "&:hover, &:focus, &:active": {
                        color: black,
                    },
                    // "&.brand-icon":{
                    //     display:"none",
                    //     "@media (max-width:899px)": { display:"block",backgroundColor:white, height:"35px", width:"35px",borderRadius:"50px", marginLeft:"20px",textAlign:"center",
                    //         "& img":{
                    //             width:"30px",
                    //             height:"30px",
                    //             paddingTop:"5px",
                    //         },
                    //     },
                    //     "@media (max-width:599px)":{marginLeft:'10px'}
                        
                    // },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "5px",

                    "&.login-btn": {
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "24px",
                        color: white,
                        margin: "17px 0 25px",
                        padding: "10px 0",
                        "@media (max-width:599px)": { margin: "15px 0" }
                    },
                    "&.search-btn":{
                        display:"none",
                        "@media (max-width:899px)": { display:"block",marginLeft:"auto", marginRight:"20px", },
                        "@media (max-width:599px)": { marginRight: "10px", }
                    },
                    "&.notification-btn":{
                        marginLeft:"auto", marginRight:"30px",
                        "@media (max-width:899px)": {marginRight:"20px", marginLeft:"0",},
                        "@media (max-width:599px)": { marginRight: "10px", }
                    },
                    "&.dropdown": {
                        backgroundColor: primaryHover,
                        border: "1px solid transparent",
                        padding: "10px 9px 11px",
                        minWidth: "48px",
                        height: "48px",
                        "&:hover, &:focus, &:active": {
                            border: "1px solid #5ac4ff52",
                        },
                        "@media (max-width:899px)": { minWidth:"35px",height:"35px", padding:"5px", },
                        // "@media (max-width:599px)": { minWidth:"35px",height:"35px", padding:"5px",},
                    },
                    "&.generate-report": {
                        padding: "11px 18px",
                        " span": {
                            marginLeft: "6px",
                            fontSize: "16px",
                            fontWeight: "600",
                            lineHeight: "22px",
                            color: white,
                            textTransform: "Capitalize",
                            // "@media (max-width:599px)": {display:"none",}
                        },
                        "@media (max-width:899px)": {padding:"10px", maxWidth:"300px"},
                        "@media (max-width:599px)": {padding:"5px",}
                    },
                    "&.views-btn": {
                        marginLeft: "auto",
                        textTransform: "capitalize",
                    },
                },
            },
        },
        MuiIconButton:{
            styleOverrides:{
                root:{
                    "&.sales-menu ":{
                        padding:"0",
                    },
                },
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    fontSize: "12px",
                    fontWeight: "400",
                    lineHeight: "17px",
                    color: secondaryLight,
                    ".MuiSvgIcon-root": {
                        width: "14px",
                        height: "14px",
                    },
                    "&.remember-me .MuiFormControlLabel-label  ":{
                        fontSize:"12px",
                        fontWeight: "400",
                        lineHeight: "17px",
                        color: secondaryLight,
                    },
                },
            },
        },
        MuiInputAdornment: {
            styleOverrides: {
                root: {
                    marginRight: "7px",
                    ".MuiSvgIcon-root": {
                        width: "20px",
                        height: "20px",
                        color: secondaryLight,
                    },
                },

            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: secondaryLight,
                    fontSize: "15px",
                    fontWeight: "400",
                    lineHeight: "18px",
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    "&.mockup-subtext": {
                        fontWeight: "400",
                    },
                    '&.form-subheading': {
                        color: black,
                    },
                    '&.form-heading': {
                        "@media (max-width:599px)": { fontSize: "23px", lineHeight: "26px" }
                    },
                    '&.register-here': {
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "20px",
                        color: secondaryLight,
                    },
                    "&.card-head": {
                        fontWeight: "600",
                        color: secondary,
                    },
                    "&.time-active": {
                        color: secondaryContrast,
                        marginLeft: "auto",
                    },
                    "&.deeds": {
                        color: secondaryContrast,
                    },
                    "&.names": {
                        fontWeight: "600",
                    },
                },
            },
        },
        MuiPopover:{
            styleOverrides:{
                paper:{
                    boxShadow: "0px 4px 35px -4px rgba(0, 0, 0, 0.1)",
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding:"15px 15px 14px",
                    fontSize: "15px",
                    fontWeight: "400",
                    lineHeight: "17px",
                    height: "47px",
                    borderBottom: "1px solid #EEEEEE",
                },
                body: {
                    color: secondary,
                    "&:last-child":{
                        padding:"0 7px",
                    },
                },
                head: {
                    color: secondaryLight,
                    fontWeight:"600",
                    textTransform: "uppercase",
                },
            },
        },
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    marginTop: "11px",
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "5px",
                    height: "48px",
                },
                input: {
                    padding: "13px 14px",
                    color: secondary,
                    fontSize: "15px",
                },
                notchedOutline: {
                    border: "1px solid" + greyDark,
                },
            },
        },

    },
});