import { SETEMAIL, SETNAME, SETID, SETPIC } from './actionTypes'

export const setemail = (email) => {
    return{
    type: SETEMAIL,
    email
    }
}
export const setname = (name) => {
    return{
    type: SETNAME,
    name
    }
}
export const setid = (id) => {
    return{
    type: SETID,
    id
    }
}
export const setpic = (url) => {
    return{
        type: SETPIC,
        url
    }
}