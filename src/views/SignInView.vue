<template>
<div class="container">
  <div class="card mt-3 login-container">
    <div class="card-body">
      <div class="text-center">
        <h4>login</h4>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label for="">username</label>
          <input v-model="username" type="text" class="form-control" name="" id="">
        </div>
        <div class="col-md-12">
          <label for="">password</label>
          <input v-model="password" type="password" class="form-control" name="" id="">
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <button class="btn btn-primary w-100" @click="login()">Login</button>
        </div>
        <div class="col-md-6">
          <button class="btn btn-outline-primary w-100">Register</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {Login} from '../stores/login'
export default {
data() {
  return {
    username: '',
    password: ''
  };
},
methods: {
  login() {
    const login = Login()
    let users = login.getUsers;
    console.log(users.users)
    users = users.users
    for(let i=0; i < users.length; i++){
      if(this.username == users[i].userName){
          if(this.password == users[i].password){
              login.setAuth('success')
              login.setLoggeduser(users[i].user)
              console.log('Logged in successfully')
              if(login.previousState != null){
               this.$router.push({ name: 'purchase'})
              }else{
                this.$router.push({name:'home'})
              }
          }else{
              console.log('password is wrong please enter valid password.S')
          }
      }else{
          console.log('Un-Athorized User.')
          return
      }
      console.log(users[i])
    }
  }
}
};
</script>

<style scoped>
.login-container {
  margin-top: 3rem;
max-width: 400px;
margin: auto;
padding: 20px;
border: 1px solid #ccc;
border-radius: 5px;
}

form {
display: flex;
flex-direction: column;
}

label {
margin-bottom: 5px;
}

input {
margin-bottom: 10px;
padding: 8px;
}
</style>