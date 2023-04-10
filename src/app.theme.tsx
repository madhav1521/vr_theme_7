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
// const blue = "#E6F4FF";
// const purple = "#F6EFFF";
// const peach = "#FFF0E9";
// const orange = "#FFE4E4";
const danger = '#FF5555';
const primaryHover = '#35598E';


export const appTheme = createTheme({
    palette: {
        primary: {
            main: primary,
            light: primaryHover,
            dark: primaryMain,
        },
        secondary: {
          main: secondary,
          light:secondaryLight,
          dark:secondaryMain,
        },
        info:{
            main:grey,
            light:greyLight,
            dark:greyDark,
        }
    },
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
            letterSpacing:"-0.01em",
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
            letterSpacing:"-0.01em",
        },
        h3: {
            fontSize: "25px",
            lineHeight: "29px",
            color: black,
            fontWeight: "600",
            letterSpacing:"-0.01em",
        },
        h4: {
            fontSize: "20px",
            lineHeight: "23px",
            color: secondary,
            letterSpacing:"-0.01em",
            fontWeight: "600",
        },
        h5: {
            fontSize: "18px",
            lineHeight: "22px",
            color: secondary,
            fontWeight: "400",
            letterSpacing:"-0.01em",
            
        },
        h6: {
            fontSize: "16px",
            lineHeight: "21px",
            color: secondaryMain,
            fontWeight: "400",
            letterSpacing:"-0.01em",
        },
    },
    components: {
        MuiLink:{
            styleOverrides:{
                root:{
                    textDecoration:"none",
                    "&.forgot-password":{
                        fontSize:"12px",
                        fontWeight:"400",
                        lineHeight:"17px",
                        color:secondaryLight,
                        
                    },
                    "&.sign-up":{
                        fontWeight:"700",
                        textTransform:"uppercase",
                    },
                    "&:hover, &:focus, &:active":{
                        color:black,
                    },
                },
            },
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    borderRadius:"5px",
                    padding:"10px 0",
                    "&.login-btn":{
                        fontSize:"16px",
                        fontWeight:"600",
                        lineHeight:"24px",
                        color:white,
                        margin:"17px 0 25px",
                        "@media (max-width:599px)":{margin:"15px 0"}
                    },

                },
            },
        },
        MuiFormControlLabel:{
            styleOverrides:{
                root:{
                    fontSize:"12px",
                    fontWeight:"400",
                    lineHeight:"17px",
                    color:secondaryLight,
                    ".MuiSvgIcon-root":{
                        width:"14px",
                        height:"14px",
                    },
                },
            },
        },
        MuiInputAdornment:{
            styleOverrides:{
                root:{ 
                    marginRight:"7px",
                    ".MuiSvgIcon-root":{
                        width:"20px",
                        height:"20px", 
                        color:secondaryLight,
                    },
                },
                
            },
        },
        MuiInputLabel:{
            styleOverrides:{
                root:{
                    color:greyDark,
                },
            },
        },
        MuiTypography:{
            styleOverrides:{
                root:{
                    "&.mockup-subtext":{
                        fontWeight:"400",
                    },
                    '&.form-subheading':{
                        color:black,
                    },
                    '&.form-heading':{
                        "@media (max-width:599px)":{fontSize:"23px", lineHeight:"26px"}
                    },
                    '&.register-here':{
                        fontSize:"14px",
                        fontWeight:"400",
                        lineHeight:"20px",
                        color:secondaryLight,
                        
                    },
                },
            },
        },
        MuiOutlinedInput:{
            styleOverrides:{
                root:{
                    borderRadius:"5px",

                    height:"48px",
                },
                input:{
                    padding:"13px 14px",
                },
                notchedOutline:{
                    border:"1px solid" + greyDark,
                },
            },
        },

    },
});