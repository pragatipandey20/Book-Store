import { defineStore } from "pinia";
import users from '@/assets/users.json'
export const Login = defineStore('login', {
    state : () => {
        return{
            users,
            token:null,
            previousState:null,
            loggedInUser : 'pragati',
        }
    },
    getters:{
        getUserName : (state) =>  state.userName,
        getAuthTocken (state){
            return state.token
        },
        getUsers(state){
            return this.users
        },
        getPreviousState(state){
            return state.previousState;
        },
        getLoggedInUser(state){
            return state.loggedInUser;
        }
    },
    actions:{
        login(username,password){
            let users = this.users.users;
            console.log(users)
            for(let i=0; i < users.length; i++){
                if(username == users[i].userName){
                    if(password == users[i].password){
                        this.token = 'success'
                        console.log('Logged in successfully')
                    }else{
                        console.log('password is wrong please enter valid password.S')
                    }
                }else{
                    console.log('Un-Athorized User.')
                    return
                }
            }
        },
        setAuth(token){
            this.token = token
        },
        setPreviousState(prev){
            this.previousState = prev;
        },
        setLoggeduser(user){
            this.loggedInUser = user;
        }
    }
})