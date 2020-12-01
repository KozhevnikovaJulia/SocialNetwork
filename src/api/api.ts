import Axios from "axios";

const instance = Axios.create ({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
     withCredentials: true,
     headers: {"API-KEY": "e8243223-a75b-4e21-bef9-7420804623b6"}
})

export const UserAPI = {
    getUsers (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}& count=${pageSize}`)
    }
}

export const AuthAPI = {
    getAuthMe () {
        return instance.get(`auth/me`)
    }
}

export const ProfileAPI = {
    getUserProfile (userId:string) {
        return instance.get(`profile/` + userId)
    }
}

export const FollowAPI = {
    postUserFollow (userId: number) {
        return instance.post(`follow/` + userId, {})
    },
    deleteUserFollow (userId: number) {
        return instance.delete(`follow/`+ userId)
    },
}

