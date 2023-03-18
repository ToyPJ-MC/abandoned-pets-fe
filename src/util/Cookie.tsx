import React from "react";

import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const getCookie = (name: string) => {
  return cookies.get(name);
};
export const setCookie = (name: number) => {
  return cookies.set("member_id", name);
};
