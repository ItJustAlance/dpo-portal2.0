import { apiUrl, axios } from "@/api/api.js";
import { getRefreshTokenId } from "./authData";


// eslint-disable-next-line no-unused-vars
export async function getSend(url, params) {
  try {
    //const refreshTokenId = getRefreshTokenId();
    let result = {};
      result = await axios.get(`${apiUrl}/${url}`, {
        // headers: {
        //   Authorization: refreshTokenId
        // },
        params: params
      });
    const getData = result.data;
    return getData;
  } catch (error) {
    console.log("error", error);
    /** Кидаем на логин, если токен не получен */
    //await router.push({ name: "login" }).catch(() => {});
  }
}
// eslint-disable-next-line no-unused-vars
export async function postSend(url, params) {
  try {
    const refreshTokenId = getRefreshTokenId();
    let result = null;
    if (refreshTokenId !== null) {
// eslint-disable-next-line no-unused-vars
      result = await axios.post(`${apiUrl}/${url}`, JSON.stringify(params),  {
        headers: {
          //'Content-Type': 'application/json',
          Authorization: refreshTokenId
        },
      });
    }
    const postData = result.data;
    // console.log("global accessData", postData);
    return postData;
  } catch (error) {
    // console.log("error", error);
    /** Кидаем на логин, если токен не получен */
    // await router.push({ name: "login" }).catch(() => {});
  }
}

// eslint-disable-next-line no-unused-vars
export async function putSend(url, params) {
  try {
    const refreshTokenId = getRefreshTokenId();
    // console.log('refreshTokenId', refreshTokenId)
    let result = null;
    if (refreshTokenId !== null) {
// eslint-disable-next-line no-unused-vars
      result = await axios.put(`${apiUrl}/${url}`, JSON.stringify(params),  {
        headers: {
          //'Content-Type': 'application/json',
          Authorization: refreshTokenId
        },
      });
    }
    const putData = result.data;
    // console.log("global accessData", putData);
    return putData;
  } catch (error) {
    // console.log("error", error);
    /** Кидаем на логин, если токен не получен */
    // await router.push({ name: "login" }).catch(() => {});
  }
}

