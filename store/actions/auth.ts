import { AuthEnam, IAuthAction } from "../types/auth";

export const authAction=(payload:boolean):IAuthAction=>({
    type:AuthEnam.SET_AUTH,payload
})
export const nameAction=(payload:string):IAuthAction=>({
    type:AuthEnam.SET_NAME,payload
})
export const emailAction=(payload:string):IAuthAction=>({
    type:AuthEnam.SET_EMAIL,payload
})
export const passwordAction=(payload:string| number):IAuthAction=>({
    type:AuthEnam.SET_PASSWORD,payload
})