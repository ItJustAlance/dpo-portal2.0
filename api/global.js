import { getRefreshTokenId } from "./authData";
import { apiUrl, axios } from "@/api/api.js";

export async function getSend(url, params) {
  try {
    // const refreshTokenId = getRefreshTokenId();
    let result = {};
    result = await axios.get(`${apiUrl}/${url}`, {
      // headers: {
      //   Authorization: refreshTokenId
      // },
      params,
    });
    return result.data;
  } catch (error) {
    console.log("error", error);
    /** Кидаем на логин, если токен не получен */
    // await router.push({ name: "login" }).catch(() => {});
  }
}

export async function postSend(url, params) {
  try {
    const refreshTokenId = getRefreshTokenId();
    let result = null;
    if (refreshTokenId !== null) {
      result = await axios.post(`${apiUrl}/${url}`, JSON.stringify(params), {
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: refreshTokenId,
        },
      });
    }
    // console.log("global accessData", postData);
    return result.data;
  } catch (error) {
    // console.log("error", error);
    /** Кидаем на логин, если токен не получен */
    // await router.push({ name: "login" }).catch(() => {});
  }
}

export async function putSend(url, params) {
  try {
    const refreshTokenId = getRefreshTokenId();
    // console.log('refreshTokenId', refreshTokenId)
    let result = null;
    if (refreshTokenId !== null) {
      result = await axios.put(`${apiUrl}/${url}`, JSON.stringify(params), {
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: refreshTokenId,
        },
      });
    }

    // console.log("global accessData", putData);
    return result.data;
  } catch (error) {
    // console.log("error", error);
    /** Кидаем на логин, если токен не получен */
    // await router.push({ name: "login" }).catch(() => {});
  }
}
