import { BorderColor, Visibility, VisibilityOff } from "@mui/icons-material";
import {Box,Button,Checkbox,Container,FormControl,FormControlLabel,Grid,Icon,IconButton,InputAdornment,InputLabel,Link,OutlinedInput,TextField,Typography } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {brandlogo,checked_box,mockupimage,unchecked_box} from "../assets/images";
import { Helmet } from "react-helmet-async";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
     {/* <Helmet> <title> Login | company </title></Helmet> */}
      <Box className="login">
        <Container className="login-container" maxWidth="xl">
          <Box className="mockup">
            <img src={mockupimage} alt="hero-img" />
            <Typography
              variant="h1"
              className="mockup-text"
              marginBottom="24px"
              marginTop="47px"
            >
              Incredible Service, Incredible right.
            </Typography>
            <Typography variant="h3" component="h2" className="mockup-subtext">
              We feeling the joy of Serving you Best
            </Typography>
          </Box>
          <Box className="login-page">
            <Box className="login-form">
              <NavLink to="/">
                <img src={brandlogo} alt="brand" className="brand-logo" />
              </NavLink>
              <Typography
                variant="h3"
                marginTop={{ sm: "25px", xs: "15px" }}
                className="form-heading"
                marginBottom={{ sm: "5px", xs: "15px" }}
              >
                Welcome to Company!
              </Typography>
              <Typography
                variant="h5"
                component="h4"
                className="form-subheading"
              >
                Login into your account
              </Typography>

              <Grid
                container
                spacing={3}
                marginTop={{ sm: "23px", xs: "15px" }}
                marginBottom={{ sm: "18px", xs: "15px" }}
              >
                <Grid item xs={12}>
                  <TextField
                    label="Username"
                    variant="outlined"
                    type="text"
                    autoFocus
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    className="login-password"
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? (
                              <Visibility color="warning" />
                            ) : (
                              <VisibilityOff color="warning" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Box className="forgot-line">
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<Icon>{<img src={unchecked_box} />}</Icon>}
                      checkedIcon={<Icon>{<img src={checked_box} />}</Icon>}
                    />
                  }
                  label="Remember me"
                  className="remember-me"
                />
                <Link
                  href="#"
                  title="forgot password"
                  className="forgot-password"
                >
                  Forgot Password?
                </Link>
              </Box>
              <Button
                fullWidth
                type="submit"
                disableElevation
                variant="contained"
                className="login-btn"
                title="login to dashboard"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Login
              </Button>
              <Typography
                variant="body1"
                component="p"
                className="register-here"
              >
                New user ?{" "}
                <Link href="#" title="sign up here" className="sign-up">
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
