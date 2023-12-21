<!-- Header.vue -->

<template>
    <header class="main-header">
      <!-- Brand Logo -->
      <div class="brand-logo">
        <!-- <img src="" alt="Brand Logo" /> -->
        <h4>Pustakalay</h4>
      </div>
  
      <!-- Navigation Menu -->
      <nav class="main-menu">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
          <!-- <li><router-link to="/about">About</router-link></li> -->
          <!-- <input type="text" class="form-control" v-model="searchedText" name="" id="" @input="searchBox(searchedText)" placeholder="search book by name"> -->
        </ul>
      </nav>
  
      <!-- User Section -->
      <div class="user-section">
        <div class="profile-dropdown" v-if="username !== ''">
          <span>{{ username }}</span>
          <div class="dropdown-content">
            <button class="btn btn-primary" @click="logout()">Logout</button>
          </div>
        </div>
        <div v-else>
          <router-link to="/signIn">Login</router-link>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  import {Login} from '../../stores/login'
  export default {
    name:'newHeader',
    data() {
      return {
        username: "John Doe", // Replace with actual user data
      };
    },
    methods: {
      searchBox(txt) {
        // Implement your logout functionality here
        if(txt.length > 3){
          console.log("Logout clicked");
        }
      },
      logout(){
        alert('logging out')
      }
    },
    mounted(){
      const login = Login();
      this.username = login.getLoggedInUser
    },
    beforeMount(){
      const login = Login();
      this.username = login.getLoggedInUser
    }
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #eee;
  }
  
  .brand-logo img {
    max-width: 100px; /* Adjust as needed */
  }
  
  .main-menu ul {
    list-style: none;
    display: flex;
  }
  
  .main-menu li {
    margin-right: 20px;
  }
  
  .user-section {
    display: flex;
    align-items: center;
    border-left: 1px solid black
  }
  
  .profile-dropdown {
    position: relative;
    cursor: pointer;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }
  
  .profile-dropdown:hover .dropdown-content {
    display: block;
  }
  </style>
  