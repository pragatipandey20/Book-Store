
<template>
  <div class="container">
    <div class="div shodow p-4 m-4"  v-if="addedBooks.length">
      <h6><u>Cart</u></h6>
      <table class="table ">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Item Name</th>
            <th scope="col">Item Details</th>
            <th scope="col">Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book,index) in addedBooks" :key="index">
            <td>{{index+1}}</td>
            <td>{{book.title}}</td>
            <td>{{book.author}}-{{book.genre}}</td>
            <td>{{book.price}}</td>
            <td>
              <button class="btn btn-danger" @click="removeItem(index)">Remove Item</button>
              <button class="btn btn-success" @click="addItem(index)">Add Item</button>
              
            </td>
          </tr>
        </tbody>
      </table>
      <div class="container">
        <div class="row align-itmes-center">
          <hr>
          <h6>Purchase Details</h6>
          <div class="col-md-6 txt shadow p-4">
            <div class="row clr p-2 rounded">
              <div class="col-md-6">
                <span for="">Total Items         : </span>
                <span><b>{{addedBooks.length}}</b></span>
              </div>
              <div class="col-md-6 align-text-center">
                <span for="">Total Payble Amount : </span>
                <span><b>{{totalAmmount}}</b></span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 d-grid d-md-block">
                <button class="btn btn-primary mt-2" @click="buy()"> Buy</button>
              </div>
            </div>
          </div>
          <div class="col-md-6 txt shadow p-4" v-if="isVerified">
            <div class="row clr p-2 rounded">
              <div class="col-md-12 mt-1">
                <label for="">Shipping Address<span class="info">*</span></label>
                <input class="form-control" type="text" name="" id="" v-model="address">
              </div>
              <div class="col-md-12 mt-1">
                <label for="">Mobile Number  <span class="info">*</span></label>
                <input class="form-control" type="text" name="" id="" v-model="mobileNumber">
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 d-grid d-md-block">
                <button class="btn btn-success mt-2" @click="buy()"> Buy </button>
                <!-- <button class="btn btn-outline-success mt-2 mr-2"> Home </button> -->
              </div>
              <div class="col-md-6 d-grid d-md-block">
                <!-- <button class="btn btn-success ml-2"> Buy </button> -->
                <button class="btn btn-outline-primary mt-2 mr-2" @click="goToHome()"> Home </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="" v-else>
      <table class="p-6 m-6" else>
        <h6>No Items in Cart</h6>
      </table>
    </div>
   
  </div>
</template>

<script>
import {bookStore} from '../stores/books'
import {Cart} from '../stores/cart'
import {Login} from '../stores/login'
export default{
  name:'CartView',
  data(){
    return{
      addedBooks : [],
      totalAmmount : 0,
      address: '',
      mobileNumber: '',
      isVerified : false
    }
  },
  methods:{
    verify(){
      this.isVerified = true
    },
    saveAddress(){
      const cart = Cart()
      if(this.address != ''){
        if(this.mobileNumber != ''){
          cart.setAddress(this.address)
          cart.setMobileNumber(this.mobileNumber)
          return true
        }else{
          alert('mobile number is required')
          return false
        }
      }else{
          alert('address is required')
          return false
        }
    },
    buy(){
      let login = Login()
      let token = login.token
      console.log(token)
      if(token){
        
          console.log('going to payment')
          const cart = Cart()
          cart.setTotalAmmount(this.totalAmmount)
          this.$router.push({ name: 'purchase'})
        
      }else{
        console.log('going to login')
        const cart = Cart()
        cart.setTotalAmmount(this.totalAmmount)
        // this.saveAddress()
        login.setPreviousState('purchase')
        this.$router.push({ name: 'Signin'})
      }
    },
    goToHome(){
      this.$router.push({ name: 'home'})
    },
    removeItem(idx){
      console.log(idx)
      this.addedBooks.splice(idx,1)
      this.payble()
     
    },
    addItem(idx){
      console.log(idx)
      this.addedBooks.push(this.addedBooks[idx])
      this.payble();
    },
    payble() {
      if(this.addedBooks.length){
        let total = 0;
        for(let i=0; i<this.addedBooks.length;i++){
          total+=this.addedBooks[i].price;
        }
        this.totalAmmount = total;
      }
    }
  },
  beforeMount(){
    const cart = Cart();
    this.addedBooks = cart.getBooksAddedInCart
    this.payble()
  }
}

</script>

<style lang="scss">
.info{
  color:red
}
.clr{
  background-color: #dbe0e9
}
.txt{
  font-size: 18px;
  font-weight: 600;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>