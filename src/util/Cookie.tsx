import React from "react";

import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const getCookie = (name: string) => {
  return cookies.get(name);
};
export const setCookie = (name: string, value: string, option?: any) => {
  // return cookies.set("access_token", name, {
  //   path: "/",
  //   expires: new Date(Date.now() + 3600 * 1000), // server 만료시간
  // });
  return cookies.set(name, value, { ...option });
};
export const removeCookie = (name: string, options?: any) => {
  return cookies.remove(name, options);
};
