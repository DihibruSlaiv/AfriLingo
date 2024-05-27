import { useContext } from "react";
import { setUserInfo, setAppInfo } from "../../Helpers/v1/UserInfo";
import CreateDataContext from "./CreateDataContext";
import { axiosInstance, setAuthToken } from "../../Config/v1/Axios";
import { DataContext } from "./DataContext";


const authReducer = (state, action) => {
  switch (action.type) {
    case "signout":
      return { token: null, userData: "" };
    case "signin":
      return {
        token: action.payload.token,
        userData: action.payload.userData,
      };
    case "signup":
      return {
        token: action.payload.token,
        userData: action.payload.userData,
      };
    default:
      return state;
  }
};



const signin = (dispatch) => {

  const { staticData } = useContext(DataContext);

  return () => {

        /*let api_data = JSON.stringify({ name, password: name, manufacturer: staticData.manufacturer,
          model: staticData.model, device_name: staticData.device_name, push_token: staticData.expoPushToken
        });
      
        const res = axiosInstance.post('/user/login', api_data)
          .then(function (response) {
            var res = response.data;
            if (typeof res.message === 'undefined') {
              setData({
                ...data,
                mainError: res.errors,
              });
            } else if (res.message === 'Success') {
              setAuthToken(res.accessToken, axiosInstance);
              res.user.isLoggedIn = true;
              res.user.notificationBadges = 0;
              res.user.notifications = [];  
              setAppInfo(res, staticData); 
              dispatch({
                type: "signin",
                payload: {
                  token: res.accessToken,
                  userData: res.user,
                },
              }); 
            } else {  
              setData({
                  ...data,
                  mainError: res.message,
              });
            }
        })
        .catch(function (error) {
            console.log(error);
        });  */
    
              dispatch({
                type: "signin",
                payload: {
                  token: 'kjajhsdalksdKSD',
                  userData: 'kjajhsdalksdKSD',
                },
              }); 
    };
};


const signup = (dispatch) => {

  const { staticData } = useContext(DataContext);

  return () => {

        /*const res = axiosInstance.post('/user/registerAndLogin', api_data)
          .then(function (response) {
            var res = response.data;
            if (typeof res.message === 'undefined') {
              setData({
                ...data,
                mainError: res.errors,
              });
            } else if (res.message === 'Success') {
              setAuthToken(res.accessToken, axiosInstance);
              res.user.isLoggedIn = true;
              res.user.notificationBadges = 0;
              res.user.notifications = [];  
              setAppInfo(res, staticData); 
              dispatch({
                type: "signup",
                payload: {
                  token: res.accessToken,
                  userData: res.user,
                },
              });
              next()  
            } else {  
              setData({
                  ...data,
                  mainError: res.message,
              });
            }
        })
        .catch(function (error) {
            console.log(error);
        });   */
    
    dispatch({
                type: "signin",
                payload: {
                  token: 'kjajhsdalksdKSD',
                  userData: 'kjajhsdalksdKSD',
                },
              }); 
    };
};

const signout = (dispatch) => {
  const { staticData, setStaticData } = useContext(DataContext);
  
  return () => {
    setStaticData({
        ...staticData,
        registered: false,
    });
    //signOut();
    dispatch({ type: "signout" });
  };
};

export const { Provider, Context } = CreateDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, userData: "" }
);