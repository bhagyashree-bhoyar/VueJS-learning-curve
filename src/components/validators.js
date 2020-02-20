/* eslint-disable no-useless-escape */
export function required(value) {
    if (value === "") return true;
  }

export function emailFormat(value) {
    const emailRegExp = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!emailRegExp.test(value)) return true;
}  

export function nameFormat(value) {
    const nameRegExp = /^[a-zA-Z\s\.]+$/;
    if(!nameRegExp.test(value) || value.length > 20) return true;
}