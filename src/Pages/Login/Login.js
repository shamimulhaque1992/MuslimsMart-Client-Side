import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import loginIllustration from "../../assets/illustration/login-cuate.svg";
import loginnavIllustration from "../../assets/illustration/Mention-bro.svg";
import {
  signupAuthenticate,
  logInAuthenticate,
  profileImagebb,
} from "../../services/api";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useUpdateProfile,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
// import useTokken from "../../hooks/useTokken";

const LoginContainer = styled(Box)(({ theme }) => ({
  dsiplay: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    width: "80vw",
  },
  [theme.breakpoints.up("sm")]: {
    width: "75vw",
  },
  [theme.breakpoints.up("md")]: {
    width: "60vw",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50vw",
  },
  [theme.breakpoints.up("xl")]: {
    width: "40vw",
  },
}));
const RegisterContainer = styled(Box)(({ theme }) => ({
  dsiplay: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "94vh",
  [theme.breakpoints.up("xs")]: {
    width: "80vw",
  },
  [theme.breakpoints.up("sm")]: {
    width: "70vw",
  },
  [theme.breakpoints.up("md")]: {
    width: "59vw",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50vw",
  },
  [theme.breakpoints.up("xl")]: {
    width: "40vw",
  },
}));
const LoginComponent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignTtems: "flex-start",
  [theme.breakpoints.up("xs")]: {
    width: "100%",
    height: "62vh",
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    height: "54vh",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
    height: "57vh",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100%",
    height: "57vh",
  },
  [theme.breakpoints.up("xl")]: {
    width: "100%",
    height: "57vh",
  },
}));
const RegComponent = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("xs")]: {
    width: "100%",
    justifyContent: "center",
    alignTtems: "center",
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    justifyContent: "space-between",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
    justifyContent: "space-between",
    alignTtems: "flex-start",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100%",
  },
  [theme.breakpoints.up("xl")]: {
    width: "99%",
  },
}));
const LoginTopIllustration = styled(Box)(({ theme }) => ({
  background: `url(${loginnavIllustration}) no-repeat`,
  backgroundSize: "content",
  backgroundPosition: "center bottom",
  height: "23vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  [theme.breakpoints.up("xs")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100%",
  },
  [theme.breakpoints.up("Xl")]: {
    width: "100%",
  },
}));
const RegTopIllustration = styled(Box)(({ theme }) => ({
  background: `url(${registertopIllustration}) no-repeat`,
  backgroundSize: "content",
  backgroundPosition: "center bottom",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  [theme.breakpoints.up("xs")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100%",
  },
  [theme.breakpoints.up("xl")]: {
    width: "100%",
  },
}));

const LoginTopText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "monospace",
  fontWeight: "bold",
  [theme.breakpoints.up("xs")]: {
    width: "100%",
    fontSize: "20px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    fontSize: "30px",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100%",
  },
  [theme.breakpoints.up("xl")]: {
    width: "100%",
  },
}));
const RegTopText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "monospace",
  fontWeight: "bold",
  [theme.breakpoints.up("xs")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100%",
  },
  [theme.breakpoints.up("xl")]: {
    width: "100%",
    marginBottom: "5vh",
  },
}));

const LoginLeftIlustration = styled(Box)(({ theme }) => ({
  backgroundColor: "linear-gradient(red, blue)",
  background: `url(${loginIllustration}) no-repeat`,
  backgroundSize: "content",
  backgroundPosition: "center top",
  height: "100%",
  width: "40%",
}));
const RegLeftIlustration = styled(Box)`
  background-color: linear-gradient(red, blue);
  background: url(${registerIllustration}) no-repeat;
  background-size: content;
  background-position: center top;
  width: 40%;
`;

const LoginRightSideForm = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  alignItems: "center",
  width: "50%",
}));
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

const OtpButton = styled(Button)(({ theme }) => ({
  textTransform: "uppercase",
  marginTop: "1vh",
  background: "#1F4690",
  color: "#fff",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "#5bb318",
  },
  "&:focus": {
    backgroundColor: "green",
  },
  [theme.breakpoints.up("xs")]: {
    width: "19vh",
    height: "4vh",
    fontSize: "10px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "19vh",
    height: "4vh",
    fontSize: "12px",
  },
  [theme.breakpoints.up("md")]: {
    width: "20vh",
    height: "4vh",
    fontSize: "12px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "20vh",
    height: "4vh",
    fontSize: "12px",
  },
  [theme.breakpoints.up("xl")]: {
    width: "20vh",
    height: "4vh",
    fontSize: "12px",
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

const Login = ({ show, setShow }) => {
  // signin and signup methods
  const handleClose = () => {
    setShow(false);
  };
  const [toggleaccount, setToggleAccount] = useState(accountInitialvalue.login);
  const toggleSignup = () => {
    reset();
    setToggleAccount(accountInitialvalue.signup);
  };
  const toggleSignin = () => {
    reset();
    setToggleAccount(accountInitialvalue.login);
  };

  // firebase hooks
  const [user, loading, error] = useAuthState(auth);
  const [
    createUserWithEmailAndPassword,
    signedupuser,
    signeduploading,
    signeduperror,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [
    signInWithEmailAndPassword,
    loggedinuser,
    loggedinloading,
    loggedinerror,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token, status] = useToken(signedupuser || loggedinuser || guser);
  // const [token] = useTokken(user)
  // const token = 'token'
  if (user) {
    handleClose();
    // console.log("holadb", token, status);
  }

  // react-hook-form submission
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const errornotify = (message) => toast.error(message);
  const successnotify = (message) => toast.success(message);
  const onSubmit = async (data) => {
    // console.log(data.photo)

    // console.log(requiredData);
    if (data.password === data.confermpassword) {
      const image = data.photo[0];
      const formData = new FormData();
      formData.append("image", image);

      let imageresponse = await profileImagebb(formData);
      console.log("image upload success", imageresponse.data.data.url);
      const imageURL = imageresponse?.data?.data?.url;
      const requiredData = {
        fname: data.fname,
        lastname: data.lastname,
        uname: data.uname,
        email: data.email,
        password: data.password,
        phoneno: data.phoneno,
        photo: imageURL,
      };
      // let response = await signupAuthenticate(requiredData);
      // console.log("db signup success", response);
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({
        displayName: data.uname /* + " " + data.fname + " " + data.lastname */,
        photoURL: imageURL,
        phoneNumber: data.phoneno,
      });

      handleClose();
      reset();
    }
    if (typeof data.confermpassword == "undefined") {
      signInWithEmailAndPassword(data.email, data.password);
      handleClose();
      reset();
    }
    if (
      data.password !== data.confermpassword &&
      typeof data.confermpassword !== "undefined"
    ) {
      console.log("password did not match");
    }
  };

  // JSX starts here
  return (
    <Dialog
      open={show}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      {toggleaccount.view === "login" ? (
        <>
          <LoginContainer>
            <LoginTopIllustration></LoginTopIllustration>
            <LoginTopText>Login</LoginTopText>
            <LoginComponent>
              <LoginLeftIlustration
                sx={{ display: { xs: "none", sm: "block" } }}
              ></LoginLeftIlustration>

              <LoginRightSideForm>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "28vh",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Box>
                    <TextField
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is required",
                        },
                      })}
                      sx={{ width: "100%" }}
                      id="standard-basic"
                      label="Enter Email..."
                      variant="standard"
                    />
                    <Box
                      component={"small"}
                      style={{ color: "red" }}
                      className="label"
                    >
                      {errors.email?.type === "required" && (
                        <span>{errors.email.message}</span>
                      )}
                    </Box>
                  </Box>

                  <Box>
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
                      sx={{ width: "100%" }}
                      id="standard-basic"
                      label="Enter Password..."
                      variant="standard"
                    />
                    <Box
                      component={"small"}
                      style={{ color: "red" }}
                      className="label"
                    >
                      {errors.password?.type === "required" && (
                        <span>{errors.password.message}</span>
                      )}
                      {errors.password?.type === "pattern" && (
                        <span>{errors.password.message}</span>
                      )}
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "10px",
                    }}
                  >
                    By continuing, you agree to Muslims-Mart's Terms of Use and
                    Privacy Policy.
                  </Typography>
                  <Box>
                    <LoginBtn type="submit">
                      <VpnKeyIcon
                        sx={{
                          fontSize: {
                            xs: "14px",
                            sm: "16px",
                            md: "17px",
                            lg: "19px",
                          },
                          marginRight: "10px",
                        }}
                      ></VpnKeyIcon>

                      <Box>Login</Box>
                    </LoginBtn>
                  </Box>
                </form>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Divider
                    sx={{
                      width: { xs: "100%" },
                      height: "15px",
                      marginBottom: "20px",
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
                  <OtpButton>
                    <PhoneAndroidIcon
                      sx={{
                        fontSize: {
                          xs: "18px",
                          sm: "18px",
                          md: "25px",
                          lg: "26px",
                        },
                        marginRight: "10px",
                      }}
                    ></PhoneAndroidIcon>
                    <Box component={"span"}>Request OTP</Box>
                  </OtpButton>
                </Box>
                <Box
                  style={{
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: { xs: "left", sm: "center" },
                      fontSize: { xs: "10px", sm: "11px", md: "12px" },
                      width: { xs: "20vh", sm: "100%" },
                    }}
                  >
                    New to Muslims-Mart?
                    <SignupText
                      onClick={() => toggleSignup()}
                      component={"span"}
                      sx={{ fontSize: { xs: "10px", sm: "11px", md: "12px" } }}
                    >
                      Create an account.
                    </SignupText>
                  </Typography>
                </Box>
              </LoginRightSideForm>
            </LoginComponent>
          </LoginContainer>
        </>
      ) : (
        <>
          <RegisterContainer>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { xs: "column", md: "row-reverse" },
              }}
            >
              <RegTopIllustration
                style={{
                  height: `${
                    errors.fname ||
                    errors.lastname ||
                    errors.uname ||
                    errors.email ||
                    errors.password ||
                    errors.confermpassword ||
                    errors.phoneno
                      ? "7.1vh"
                      : "20.2vh"
                  }`,
                }}
              ></RegTopIllustration>
              <RegTopText
                sx={{
                  fontSize: `${
                    errors.fname ||
                    errors.lastname ||
                    errors.uname ||
                    errors.email ||
                    errors.password ||
                    errors.confermpassword ||
                    errors.phoneno
                      ? "20px"
                      : "28px"
                  }`,
                  textAlign: { xs: "center", md: "right" },
                  marginTop: { xs: "0", md: "6%" },
                  marginLeft: { md: "20px" },
                }}
              >
                Register...
              </RegTopText>
            </Box>

            <RegComponent>
              <RegLeftIlustration
                sx={{ display: { xs: "none", sm: "block" } }}
              ></RegLeftIlustration>

              <RegRightSideForm sx={{ height: { xs: "66.4vh", sm: "65vh" } }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box style={{ marginBottom: "10px" }}>
                    <Box
                      sx={{
                        marginBottom: "10px",
                        width: { xs: "100%", sm: "80%", md: "90%" },
                      }}
                    >
                      <TextField
                        {...register("fname", {
                          required: {
                            value: true,
                            message: "First Name is required",
                          },
                          max: {
                            value: 2000,
                            message:
                              "First name should not pass 2000 charecter",
                          },
                        })}
                        sx={{
                          width: "100%",
                        }}
                        id="standard-basic"
                        label="Enter Firstname..."
                        variant="standard"
                      />{" "}
                      <br />
                      <Box
                        component={"small"}
                        style={{ color: "red" }}
                        className="label"
                      >
                        {errors.fname?.type === "required" && (
                          <span>{errors.fname.message}</span>
                        )}
                        {errors.fname?.type === "pattern" && (
                          <span>{errors.fname.message}</span>
                        )}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        marginBottom: "10px",
                        width: { xs: "100%", sm: "80%", md: "90%" },
                      }}
                    >
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
                          width: "100%",
                        }}
                        id="standard-basic"
                        label="Enter Lastname..."
                        variant="standard"
                      />{" "}
                      <br />
                      <Box
                        component={"small"}
                        style={{ color: "red" }}
                        className="label"
                      >
                        {errors.lastname?.type === "required" && (
                          <span>{errors.lastname.message}</span>
                        )}
                        {errors.lastname?.type === "pattern" && (
                          <span>{errors.lastname.message}</span>
                        )}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        marginBottom: "10px",
                        width: { xs: "100%", sm: "80%", md: "90%" },
                      }}
                    >
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
                          width: "100%",
                        }}
                        id="standard-basic"
                        label="Enter Username..."
                        variant="standard"
                      />{" "}
                      <br />
                      <Box
                        component={"small"}
                        style={{ color: "red" }}
                        className="label"
                      >
                        {errors.uname?.type === "required" && (
                          <span>{errors.uname.message}</span>
                        )}
                        {errors.uname?.type === "pattern" && (
                          <span>{errors.uname.message}</span>
                        )}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        marginBottom: "10px",
                        width: { xs: "100%", sm: "80%", md: "90%" },
                      }}
                    >
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
                          width: "100%",
                        }}
                        id="standard-basic"
                        label="Enter Email..."
                        variant="standard"
                      />{" "}
                      <br />
                      <Box
                        component={"small"}
                        style={{ color: "red" }}
                        className="label"
                      >
                        {errors.email?.type === "required" && (
                          <span>{errors.email.message}</span>
                        )}
                        {errors.email?.type === "pattern" && (
                          <span>{errors.email.message}</span>
                        )}
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        marginBottom: "10px",
                        width: { xs: "100%", sm: "80%", md: "90%" },
                      }}
                    >
                      <TextField
                        {...register("photo", {
                          required: {
                            value: true,
                            message: "Photo is required",
                          },
                        })}
                        sx={{
                          width: "100%",
                        }}
                        type="file"
                        id="standard-basic"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle style={{ color: "#4527a0" }} />
                            </InputAdornment>
                          ),
                        }}
                        label="Choose your photo..."
                        variant="standard"
                      />{" "}
                      <br />
                      <Box
                        component={"small"}
                        style={{ color: "red" }}
                        className="label"
                      >
                        {errors.photo?.type === "required" && (
                          <span>{errors.photo.message}</span>
                        )}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: { xs: "100%", sm: "80%", md: "90%" },
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: "48%", sm: "48%", md: "48%" },
                        }}
                      >
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
                            width: "100%",
                          }}
                          id="standard-basic"
                          label="Enter Password..."
                          variant="standard"
                        />{" "}
                        <Box
                          component={"small"}
                          style={{ color: "red" }}
                          className="label"
                        >
                          {errors.password?.type === "required" && (
                            <span>{errors.password.message}</span>
                          )}
                          {errors.password?.type === "pattern" && (
                            <span>{errors.password.message}</span>
                          )}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          width: { xs: "48%", sm: "48%", md: "48%" },
                        }}
                      >
                        <TextField
                          {...register("confermpassword", {
                            required: {
                              value: true,
                              message: "Conferm Password is required",
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
                            width: "100%",
                          }}
                          id="standard-basic"
                          label="Conferm Password..."
                          variant="standard"
                        />
                        <Box
                          component={"small"}
                          style={{ color: "red" }}
                          className="label"
                        >
                          {errors.confermpassword?.type === "required" && (
                            <span>{errors.confermpassword.message}</span>
                          )}
                          {errors.confermpassword?.type === "pattern" && (
                            <span>{errors.confermpassword.message}</span>
                          )}
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        marginBottom: "10px",
                        width: { xs: "100%", sm: "80%", md: "90%" },
                      }}
                    >
                      <TextField
                        {...register("phoneno", {
                          required: {
                            value: true,
                            message: "PhoneNo is required",
                          },
                          pattern: {
                            value: /^(?:(?:\+|00)88|01)?\d{11}$/,
                            message:
                              "Plese give a valid bangladesi Phone number",
                          },
                        })}
                        sx={{
                          width: "100%",
                        }}
                        id="standard-basic"
                        label="Enter PhoneNo ..."
                        variant="standard"
                      />{" "}
                      <br />
                      <Box
                        component={"small"}
                        style={{ color: "red" }}
                        className="label"
                      >
                        {errors.phoneno?.type === "required" && (
                          <span>{errors.phoneno.message}</span>
                        )}
                        {errors.phoneno?.type === "pattern" && (
                          <span>{errors.phoneno.message}</span>
                        )}
                      </Box>
                    </Box>
                  </Box>

                  <Box style={{ marginBottom: "10px", width: "90%" }}>
                    <Typography
                      sx={{
                        fontSize: "10px",
                        width: "96%",
                      }}
                    >
                      By continuing, you agree to Muslims-Mart's Terms of Use
                      and Privacy Policy.
                    </Typography>
                  </Box>

                  <Box style={{ marginBottom: "10px", width: "99%" }}>
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
                  </Box>
                </form>
                <Box>
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
                        width: { xs: "3vh", sm: "3.5vh" },
                        height: { xs: "3vh", sm: "3.5vh" },
                        marginRight: "2vh",
                      }}
                      onClick={() => signInWithGoogle()}
                    ></GoogleButton>
                    <FacebookButton
                      sx={{
                        width: { xs: "3vh", sm: "3.5vh" },
                        height: { xs: "3vh", sm: "3.5vh" },
                      }}
                    ></FacebookButton>
                  </Box>
                </Box>

                <Box
                  style={{
                    width: "90%",
                    paddingBottom: "10px",
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
                      onClick={() => toggleSignin()}
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
        </>
      )}
      <ToastContainer />
    </Dialog>
  );
};

export default Login;
