import {Direction, createTheme } from '@mui/material';
const currentDirection = 'ltr';
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
const danger = '#FF5555';
const primaryHover = '#35598E';
const warning = '#cecece';


export const appTheme = createTheme({
    direction:currentDirection,
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
        // body1:{
        //     fontSize: "15px",
        //     lineHeight: "17px",
        //     color: secondaryLight,
        //     fontWeight: "400",
        //     letterSpacing: "-0.01em",
        // },
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
        MuiCheckbox:{
            styleOverrides:{
                root:{
                    padding:"5px",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "3px",
                    "&.login-btn": {
                        borderRadius: "5px",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "24px",
                        color: white,
                        margin: "12px 0 25px",
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
                    ".arb &.notification-btn":{
                        marginLeft:"30px", marginRight:"auto",
                        "@media (max-width:899px)": {marginRight:"0", marginLeft:"20px",},
                        "@media (max-width:599px)": { marginRight: "0",marginLeft:"10px", }
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
                    ".arb &.views-btn": {
                        marginRight: "auto",
                        marginLeft:"0",
                    },
                    ".upload-content &.MuiButton-root":{
                        padding:"7px 25px 8px",
                        border:"0",
                        backgroundColor:primaryContrast,
                        textTransform:"lowercase",
                        color:secondary,

                    },
                    "&.primary-btn, &.secondary-btn":{
                        padding:"11px 39px",
                        borderRadius: "5px",
                        "& span":{
                            fontWeight:"600",
                            "@media(max-width:599px)":{
                                fontWeight:"400",
                            },
                        },
                        "@media(max-width:599px)":{
                            width:"130px",
                            padding:"10px 35px",
                        },
                    },
                    "&.primary-btn":{
                        marginRight:"20px",
                        "@media(max-width:599px)":{
                            marginRight:"10px",
                        },
                    },
                    ".arb &.primary-btn":{
                        marginRight:"0",
                        marginLeft:"20px",
                        "@media(max-width:599px)":{
                            marginRight:"0",
                            marginLeft:"10px",
                        },
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
        MuiIcon:{
            styleOverrides:{
                root:{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    ".forgot-line &.MuiIcon-root":{
                        width:"15px",
                        height:"15px",
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
                    "&.remember-me .MuiFormControlLabel-label  ":{
                        fontSize:"12px",
                        fontWeight: "400",
                        lineHeight: "17px",
                        color: secondaryLight,
                         
                    },
                    "&.remember-me  ":{
                        marginLeft:"-4px",
                    },
                    ".arb &.remember-me  ":{
                        marginLeft:"0",
                        marginRight:"-4px",
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
                        transform:"rotateX(180deg)",
                    },
                    ".arb &.MuiInputAdornment-root":{
                        marginLeft:"7px",
                        marginRight:"0",
                    }
                },

            },
        },
        MuiFormLabel:{
            styleOverrides:{
                root:{
                    "&.MuiInputLabel-root":{
                        transform: "translate(14px, 14px)", 
                    },
                    "&.MuiInputLabel-shrink":{
                        transform: "translate(14px, -8px) scale(0.75)", 
                        color:secondaryLight,
                    },
                    ".arb &.MuiInputLabel-root":{
                        transform: "translate(-14px, 14px)", 
                    },
                    ".arb &.MuiInputLabel-shrink":{
                        transform: "translate(14px, -8px) scale(0.75)", 
                        color:secondaryLight,
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
                    ".arb &.MuiInputLabel-root":{
                        right:"0",
                        left:"auto",
                        transformOrigin:"top right",
                    },
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
                    ".icon-label-text &.MuiTypography-root":{
                        fontSize:"15px",
                        fontWeight:"400",
                        lineHeight:"18px",
                        color:secondaryLight,
                    },
                    "&.nis":{
                        fontSize:"15px",
                        fontWeight:"400",
                        lineHeight:"18px",
                        color:secondaryLight,
                    },
                    "&.tab-text":{
                        fontSize:"15px",
                        fontWeight:"400",
                        lineHeight:"20px",
                        color:secondaryMain,
                    },
                    "&.text-message ":{
                        fontSize:"14px",
                        fontWeight:"600",
                        lineHeight:"16px",
                        color:white,
                        marginLeft:"8px"
                    },
                    ".arb &.text-message ":{
                        marginLeft:"0",
                        marginRight:"8px",
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
                    letterSpacing:"-0.01em",
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
                    ".textarea &.MuiOutlinedInput-root":{
                        height:"173px",
                        padding:"0",
                    },
                    ".MuiSelect-icon":{
                        opacity:"0",    
                    },
                    "&.Mui-disabled .MuiOutlinedInput-notchedOutline":{
                          border: "1px dashed" + greyDark,
                    },
                    "&.Mui-error .MuiOutlinedInput-notchedOutline":{
                        border: "1px solid #FF5555" ,
                    },
                    "&:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline":{
                        borderColor:"rgba(0,0,0,0.3)",
                    },
                    "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline":{
                        border: "1px dashed" + greyDark,
                    },
                    
                },
                input: {
                    padding: "13px 14px",
                    color: secondary,
                    fontSize: "15px",
                    height:"22px",
                },
                notchedOutline: {
                    border: "1px solid" + greyDark,
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
              icon: {
                display: "none",
              },
              action:{
                margin:0,
                padding:0,
              },
              root:{
                padding: "4px 5px 4px 10px",
                display: "flex",
                alignItems: "center",
                justifyContent:"space-between",
                background:"transparent",
                color:white,
                borderRadius: "5px", 
                "&.text-danger":{
                  backgroundColor:"#FF5555",
                },
                "&.text-info":{
                  backgroundColor:primary,
                },
                "&.text-warn":{
                  backgroundColor:"#F6CA2F",
                },
                "&.text-success":{
                  backgroundColor:"#7EB62E",
                },
              },
              message:{
                alignItems:"center",
                display:"flex",
                color:white,
              },
            },
          },
        MuiTabs: {
            styleOverrides: {
              flexContainer: {
                flexWrap:"nowrap",
                height:"38px",
                "&.MuiTabs-indicator":{
                  height:"3px",
                  marginBottom:"-1px",
                  bottom:"3px",
                },
              },
              root:{
                minHeight:"15px",
                '&.inner-tabs':{
                  marginBottom:"14px",
                  '.MuiTabs-flexContainer':{
                    borderBottom:'1px solid' + grey, 
                  },
                },
                '&.dash-tabs':{
                  '.MuiTabs-flexContainer':{
                    borderBottom:'none',
                  },
                },
              },
              
              indicator:{
                  height:"3px",
                  marginBottom:"-1px",
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                minHeight:"15px",
                fontSize:"12px",
                fontWeight:"400",
                color:secondaryLight,
                // padding:"5px 0",
                borderRadius:"5px",
                textTransform:"capitalize",
                // minWidth:"max-content",
                // marginLeft:"20px",
                "&.tabs":{
                  fontSize:"16px",
                  fontWeight:"400",
                  color:secondaryLight,
                  padding:"0px 11px 18px",
                  textTransform:"capitalize",
                  minWidth:"max-content",
                  marginRight:"12px",
                  marginLeft:0,
                  "&:hover , &:active":{
                    color:secondaryLight,
                    backgroundColor:'#37729329',
                  },
                  "&:focus":{
                    color:secondaryLight,
                  },
                },
                ".arb .&.tabs":{
                    // marginLeft:0,
                    marginRight:0,
                },
                "&.tabs.Mui-selected":{
                  color:primary,
                  fontWeight:"600",
                },
              },
            },
          },

    },
});
