import axios from "axios";

const URL = "http://localhost:5000";
const ImagebbURL = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_STORAGE_KEY}`


export const signupAuthenticate = async (data) => {

  try {
    return await axios.patch(`${URL}/signup`, data);
  } catch (e) {
    console.log('error while calling signup api',e);
    return e.response;
  }
};
export const logInAuthenticate = async (data) => {
  try {
    return await axios.patch(`${URL}/login`, data);
  } catch (e) {
    console.log('error while calling login api',e);
    return e.response;
  }
};

export const profileImagebb = async ( data )=> {
  try{
    return await axios.post(ImagebbURL,data)
  }catch(e){
    console.log(e)
    return e.response;
    }
}
