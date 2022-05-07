import * as axios from "axios";


const instance = axios.create({
    withCredentials:true,
    headers:{
        'API-KEY':'0d99c156-c596-4397-af39-31394d84490d'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})




export const usersAPI ={
    getUsers(currentPage=1, pageSize=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=>response.data)
    },
    follow(id){
        return instance.post(`follow/${id}`)
            .then(response =>response.data)
    },
    unfollow(id){
        return instance.delete(`follow/${id}`)
            .then(response =>response.data)
    },
    getProfile(id){
        return instance.get(`profile/${id}`)
            .then(response=>response.data)
    }
}

export const authAPI={
    authMe(){
        return instance.get(`auth/me`)
            .then(response =>response.data)
    }
}