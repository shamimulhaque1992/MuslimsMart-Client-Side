import { useEffect, useState } from "react";
import { signupAuthenticate } from "../services/api";

const useToken = (user) => {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const signupResponse = async () => {
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
        if (response?.status === 200 || 401) {
          await setStatus(response?.status);
          // console.log(response);
          const accessToken = response?.data?.accessToken;
          // console.log(response, accessToken);
          localStorage.setItem("accessToken", accessToken);
          // console.log('tkn',response)
          setToken(accessToken);
        }
      }
      if (user?.operationType === "signIn") {
        // console.log("inside signup", user);

        setTimeout(async () => {
          const uname = user?.user?.displayName
            ?.split(" ")
            .slice(0, 1)
            .join(" ");
          const fname = user?.user?.displayName
            ?.split(" ")
            .slice(1, 2)
            .join(" ");
          const lname = user?.user?.displayName
            ?.split(" ")
            .slice(2, 12)
            .join(" ");
          const email = user?.user?.email;
          const photo = user?.user?.photoURL;
          // console.log("inside signup", uname);
          const requiredData = {
            fname: fname,
            lastname: lname,
            uname: uname,
            email: email,
            photo: photo,
          };
          // console.log("shd", requiredData);
          let response = await signupAuthenticate(requiredData);
          if (response?.status === 200 || 401) {
            await setStatus(response?.status);
            // console.log(response);
            const accessToken = response?.data?.accessToken;
            // console.log(response, accessToken);
            localStorage.setItem("accessToken", accessToken);
            // console.log('tkn',response)
            setToken(accessToken);
          }
        }, 3000);
      }
    };

    signupResponse();
  }, [user]);

  return [token, status];
};

export default useToken;
