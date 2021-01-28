import Axios from "axios"
import {ProfileType} from "../redux/ProfileReducer"

const instance = Axios.create ({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
     withCredentials: true,
     headers: {"API-KEY": "e9273c8b-70eb-4960-b897-692d970ce8cd"}
})

export const UserAPI = {
    getUsers (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}& count=${pageSize}`)
    },
    postUserFollow (userId: number) {
        return instance.post(`follow/` + userId, {})
    },
    deleteUserFollow (userId: number) {
        return instance.delete(`follow/`+ userId)
    },
}

export const AuthAPI = {
    getAuthMe () {
        return instance.get(`auth/me`)
    },
    login (email: string, password:string, rememberMe: boolean, captcha: string) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout () {
        return instance.delete(`auth/login`)
    }
}

export const SecurityAPI = {
    getCaptchaUrl () {
        return instance.get(`security/get-captcha-url`)
    }    
}

export const ProfileAPI = {
    getUserProfile (userId:number) {
        return instance.get(`profile/` + userId)
    },
    getStatus (userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus (status: string) {
        return instance.put(`profile/status`, {status} )
    },
    saveProfile(profile: any) {
        return instance.put(`profile/`, profile )
    },
    savePhoto (photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type" : "multipart/form-data"
            }
        } )
    },
}
