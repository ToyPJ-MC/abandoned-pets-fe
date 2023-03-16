import React from "react";

import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const getCookie = (name: string) => {
  console.log(cookies.get(name));
  return cookies.get(name);
};
