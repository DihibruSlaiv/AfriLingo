import AsyncStorage from "@react-native-async-storage/async-storage";

const setUserInfo = async (value) => {
  try {
    await AsyncStorage.setItem("@AppUserDetails", JSON.stringify(value));
  } catch (e) {
    // save error
  }
};

const setData = async (data, key) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    // save error
  }
};

const getData = async (key) => {

  try {
    let data = await AsyncStorage.getItem(key);
    if (data !== null) {
        /*data.password = password;
        const res = signin(data, setData);
        return res;*/
    }
  } catch (e) {
    // read error
  }
};


const getUserInfo = async () => {
  try {
    await AsyncStorage.getItem("@AppUserDetails", (err, item) => {
      return JSON.parse(item);
    });
  } catch (e) {
    // read error
  }
};

const getPassword = async (staticData, setStaticData) => {
  try {
    const password = await AsyncStorage.getItem("@AppPassword");
    if (password !== null) {
      setStaticData({
        ...staticData,
        tempPassword: JSON.parse(password)
      });
    }
  } catch (e) {
    // read error
  }
};

const setPassword = async (data) => {
  try {
    await AsyncStorage.setItem("@AppPassword", JSON.stringify(data));
  } catch (e) {
    // read error
  }
};

const setAppInfo = async (value, staticData) => {
  let data = { appInfo: staticData, userInfo: value };//, appInfo: staticData
  try {
    await AsyncStorage.setItem("@AppData81", JSON.stringify(data));
  } catch (e) {
    // save error
  }
};


/*const getAppInfo = async (state, staticData, setStaticData) => {
  try {
    const appData = await AsyncStorage.getItem("@AppData");
      if (appData !== null) {
        const data = JSON.parse(appData)
        //setStaticData(data.appInfo);
        setStaticData({
          ...staticData,
          vehicleTypes: data.appInfo.vehicleTypes,
          carTopTypes: data.appInfo.carTopTypes,
          staticCars: data.appInfo.staticCars,
          permissionStatus: data.appInfo.permissionStatus,
          location: data.appInfo.location,
          savedLocation: data.appInfo.savedLocation,
          registered: data.appInfo.registered,
          expoPushToken: data.appInfo.expoPushToken,
          manufacturer: data.appInfo.manufacturer,
          model: data.appInfo.model,
          device_name: data.appInfo.device_name,
          push_self_notify : data.appInfo.push_self_notify,
          country: data.appInfo.country,
          countries: data.appInfo.countries,
          registered: data.appInfo.registered,
          //notification: null, //data.appInfo.notification,
          //locationNotification: null, //data.appInfo.locationNotification,
          //notificationBadges: null, //data.appInfo.notificationBadges,
        });

        state.userData = data.userInfo.user;
        state.token = data.userInfo.accessToken;
      }
  } catch (e) {
    // read error
  }
};*/

export { setUserInfo, getUserInfo, getPassword, setData, getData, setPassword, setAppInfo}; //, getAppInfo