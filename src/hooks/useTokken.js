import { useState } from "react";
import { signupAuthenticate } from "../services/api";

const useTokken = async (user) => {
  const [token, setToken] = useState("");

  if (user?.providerId === "google.com") {
    const uname = user?.user?.displayName.split(" ").join("");
    const fname = user?.user?.displayName.split(" ").slice(0, 1).join(" ");
    const lname = user?.user?.displayName.split(" ").slice(1, 10).join(" ");
    const email = user?.user?.email;
    const photo = user?.user?.photoURL;

    const requiredData = {
      fname: fname,
      lastname: lname,
      uname: uname,
      email: email,
      photo: photo,
    };
    let response = await signupAuthenticate(requiredData);
    const accessToken = response?.data?.accessToken;
    console.log(response, accessToken);
    localStorage.setItem("accessToken", accessToken);
    // console.log('tkn',response)
    setToken(accessToken);
  }
  if (user?.operationType === "signIn") {
    const uname = user?.user?.displayName.split(" ").slice(0, 1).join(" ");
    const fname = user?.user?.displayName.split(" ").slice(1, 2).join(" ");
    const lname = user?.user?.displayName.split(" ").slice(2, 12).join(" ");
    const email = user?.user?.email;
    const photo = user?.user?.photoURL;
  }

  /* const email = user?.user?.email;
  if (email) {
    // let response = await signupAuthenticate(requiredData);
  } */

  return { token };
};
export default useTokken;
