import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import {
  Box,
  Button,
  Chip,
  Dialog,
  Divider,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import registertopIllustration from "../../assets/illustration/Account-pana.svg";
import registerIllustration from "../../assets/illustration/Forms.svg";

const RegisterContainer = styled(Box)(({ theme }) => ({
  dsiplay: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    width: "33vh",
  },
  [theme.breakpoints.up("sm")]: {
    width: "40vh",
  },
  [theme.breakpoints.up("md")]: {
    width: "60vh",
  },
  [theme.breakpoints.up("lg")]: {
    width: "70vh",
  },
  [theme.breakpoints.up("Xl")]: {
    width: "75vh",
  },
}));

const RegComponent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignTtems: "flex-start",
  [theme.breakpoints.up("xs")]: {
    width: "33vh",
    justifyContent: "center",
    alignTtems: "center",
  },
  [theme.breakpoints.up("sm")]: {
    width: "40vh",
    justifyContent: "center",
    alignTtems: "center",
  },
  [theme.breakpoints.up("md")]: {
    width: "60vh",
    justifyContent: "space-around",
    alignTtems: "flex-start",
  },
  [theme.breakpoints.up("lg")]: {
    width: "70vh",
  },
  [theme.breakpoints.up("Xl")]: {
    width: "75vh",
  },
}));

const RegTopIllustration = styled(Box)(({ theme }) => ({
  background: `url(${registertopIllustration}) no-repeat`,
  backgroundSize: "content",
  backgroundPosition: "center bottom",
  height: "23vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  [theme.breakpoints.up("xs")]: {
    width: "33vh",
  },
  [theme.breakpoints.up("sm")]: {
    width: "40vh",
  },
  [theme.breakpoints.up("md")]: {
    width: "60vh",
  },
  [theme.breakpoints.up("lg")]: {
    width: "70vh",
  },
  [theme.breakpoints.up("Xl")]: {
    width: "75vh",
  },
}));

const RegTopText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "monospace",
  fontWeight: "bold",
  [theme.breakpoints.up("xs")]: {
    width: "33vh",
    fontSize: "20px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "40vh",
    fontSize: "30px",
  },
  [theme.breakpoints.up("md")]: {
    width: "60vh",
  },
  [theme.breakpoints.up("lg")]: {
    width: "70vh",
  },
  [theme.breakpoints.up("Xl")]: {
    width: "75vh",
    marginBottom: "5vh",
  },
}));

const RegLeftIlustration = styled(Box)`
  background-color: linear-gradient(red, blue);
  background: url(${registerIllustration}) no-repeat;
  background-size: content;
  background-position: center top;
  width: 40%;
`;

const RegRightSideForm = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60%;
`;

const LoginBtn = styled(Button)(({ theme }) => ({
  textTransform: "uppercase",
  background: "#0096ff",
  color: "#fff",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  height: "5vh",
  marginBottom: "2vh",
  "&:hover": {
    backgroundColor: "#5bb318",
  },
  "&:focus": {
    backgroundColor: "green",
  },
  [theme.breakpoints.up("xs")]: {
    width: "14vh",
    height: "3.5vh",
    fontSize: "10px",
    marginBottom: "1vh",
  },
  [theme.breakpoints.up("sm")]: {
    width: "14vh",
    height: "4vh",
    fontSize: "12px",
    marginBottom: "2vh",
  },
  [theme.breakpoints.up("md")]: {
    width: "16vh",
    height: "4vh",
    fontSize: "14px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "16vh",
    height: "4vh",
    fontSize: "14px",
  },
}));

const GoogleButton = styled(GoogleIcon)(({ theme }) => ({
  fontSize: "30px",
  background: "linear-gradient(70deg,#4285f4,#ea4335,#fbbc05,#34a853)",
  borderRadius: "5px",
  color: "white",
  cursor: "pointer",
  "&:hover": {
    transform: "rotate(360deg)",
    transition: "2s",
  },
}));
const FacebookButton = styled(FacebookIcon)(({ theme }) => ({
  fontSize: "30px",
  background: "linear-gradient(45deg,#0096FF,#E8F9FD,#00D7FF,#3330E4)",
  borderRadius: "5px",
  color: "white",
  cursor: "pointer",
  "&:hover": {
    transform: "rotate(360deg)",
    transition: "2s",
  },
}));
const SigninText = styled(Typography)(({ theme }) => ({
  fontSize: "19px",
  fontWeight: "bold",
  fontFamily: "cursive",
  borderRadius: "5px",
  textAlign: "center",
  [theme.breakpoints.up("xs")]: {
    fontSize: "10px",
    marginTop: "2px",
    marginBottom: "3px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "12px",
    marginTop: "10px",
    marginBottom: "10px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "16px",
  },
}));
const SignupText = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  color: "blue",
}));
const accountInitialvalue = {
  login: {
    view: "login",
  },
  signup: {
    view: "signup",
  },
};

const Register = ({ show, setShow }) => {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data, errors.email);
  };
  const handleClose = () => {
    setShow(false);
  };


  return (
    <Dialog
      open={show}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <RegisterContainer>
        <RegTopIllustration></RegTopIllustration>
        <RegTopText>Register</RegTopText>
        <RegComponent>
          <RegLeftIlustration
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          ></RegLeftIlustration>

          <RegRightSideForm sx={{ height: { xs: "66.4vh", sm: "65vh" } }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box style={{ marginBottom: "10px" }}>
                <TextField
                  {...register("fname", {
                    required: {
                      value: true,
                      message: "First Name is required",
                    },
                    max: {
                      value: 2000,
                      message: "First name should not pass 2000 charecter",
                    },
                  })}
                  sx={{
                    marginBottom: "10px",
                    width: { xs: "100%", sm: "100%", md: "90%" },
                  }}
                  id="standard-basic"
                  label="Enter Firstname..."
                  variant="standard"
                />
                <label className="label">
                  {errors.fname?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.fname.message}
                    </span>
                  )}
                  {errors.fname?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.fname.message}
                    </span>
                  )}
                </label>
                <TextField
                  {...register("lastname", {
                    required: {
                      value: true,
                      message: "Last Name is required",
                    },
                    max: {
                      value: 2000,
                      message: "Last name should not pass 2000 charecter",
                    },
                  })}
                  sx={{
                    marginBottom: "10px",
                    width: { xs: "100%", sm: "100%", md: "90%" },
                  }}
                  id="standard-basic"
                  label="Enter Lastname..."
                  variant="standard"
                />
                <TextField
                  {...register("uname", {
                    required: {
                      value: true,
                      message: "Username is required",
                    },
                    max: {
                      value: 2000,
                      message: "Username should not pass 2000 charecter",
                    },
                  })}
                  sx={{
                    marginBottom: "10px",
                    width: { xs: "100%", sm: "100%", md: "90%" },
                  }}
                  id="standard-basic"
                  label="Enter Username..."
                  variant="standard"
                />
                <TextField
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  sx={{
                    marginBottom: "10px",
                    width: { xs: "100%", sm: "100%", md: "90%" },
                  }}
                  id="standard-basic"
                  label="Enter Email..."
                  variant="standard"
                />
                <TextField
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                      message:
                        "Maximum 20 character, at least one numeric digit, one uppercase and one lowercase letter",
                    },
                    max: {
                      value: 20,
                      message: "Password should not pass 20 charecter",
                    },
                    min: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  sx={{
                    marginBottom: "10px",
                    width: { xs: "100%", sm: "100%", md: "90%" },
                  }}
                  id="standard-basic"
                  label="Enter Password..."
                  variant="standard"
                />
                <TextField
                  {...register("phoneno", {
                    required: {
                      value: true,
                      message: "PhoneNo is required",
                    },
                    pattern: {
                      value: /^(?:(?:\+|00)88|01)?\d{11}$/,
                      message: "Plese give a valid bangladesi Phone number",
                    },
                  })}
                  sx={{
                    marginBottom: "10px",
                    width: { xs: "100%", sm: "100%", md: "90%" },
                  }}
                  id="standard-basic"
                  label="Enter PhoneNo ..."
                  variant="standard"
                />
              </Box>

              <Box style={{ marginBottom: "10px" }}>
                <Typography
                  sx={{
                    fontSize: "10px",
                    width: "96%",
                  }}
                >
                  By continuing, you agree to Muslims-Mart's Terms of Use and
                  Privacy Policy.
                </Typography>
              </Box>

              <Box style={{ marginBottom: "10px" }}>
                <LoginBtn type="submit">
                  <HowToRegIcon
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "17px",
                        lg: "19px",
                      },
                      marginRight: "10px",
                    }}
                  ></HowToRegIcon>

                  <Box>Register</Box>
                </LoginBtn>

                <Divider
                  sx={{
                    width: "90%",
                  }}
                >
                  <Chip
                    label="OR"
                    sx={{
                      fontSize: {
                        xs: "8px",
                        sm: "10px",
                        md: "12px",
                        lg: "14px",
                      },
                    }}
                  />
                </Divider>

                <SigninText>Signin With</SigninText>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <GoogleButton
                    sx={{
                      width: { xs: "3vh", sm: "4vh" },
                      height: { xs: "3vh", sm: "4vh" },
                      marginRight: "2vh",
                    }}
                  ></GoogleButton>
                  <FacebookButton
                    sx={{
                      width: { xs: "3vh", sm: "4vh" },
                      height: { xs: "3vh", sm: "4vh" },
                    }}
                  ></FacebookButton>
                </Box>
              </Box>
            </form>
            <Box
              style={{
                width: "100%",
                paddingBottom: "15px",
              }}
            >
              <Typography
                sx={{
                  textAlign: { xs: "left", sm: "center" },
                  fontSize: { xs: "10px", sm: "11px", md: "12px" },
                  width: { xs: "20vh", sm: "100%" },
                }}
              >
                Already have an account?
                <SignupText
                  component={"span"}
                  sx={{ fontSize: { xs: "10px", sm: "11px", md: "12px" } }}
                >
                  Signin.
                </SignupText>
              </Typography>
            </Box>
          </RegRightSideForm>
        </RegComponent>
      </RegisterContainer>
    </Dialog>
  );
};

export default Register;
