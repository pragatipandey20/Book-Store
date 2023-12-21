<template>
    <div class="container d-flex justify-content-center mt-5 rounded">
        <div class="row d-flex justify-content-center shadow  mt-5 rounded p-4">
            <h1>Successfull Purchase</h1>
            <h6>of Rupees <span class="infos">{{finalAmmount}} /-</span></h6>
            <div>
                <button class="btn btn-primary" @click="gotoHome()">Go to Home Page</button>
            </div>  
        </div>
    </div>
</template>

<script>
import {Cart} from '../stores/cart'
import { bookStore } from '../stores/books'
import { Login } from '../stores/login';

export default {
    name:"purchase",
    data(){
        return{
            finalAmmount : 0,
            address:''
        }
    },
    methods:{
        gotoHome(){
            this.$router.push({ name: 'home'})
            const cart = Cart()
            cart.setBooks([])
            cart.setTotalAmmount(null)
            cart.setAddress(null)
            cart.mobileNumber(null)
            const bookStr = bookStore()
            bookStr.setBookDetails(null)
        }
    },
    beforeMount(){
        const cart = Cart()
        this.finalAmmount = cart.getTotalAmmount;
        this.address = cart.getAddress
    }
}
</script>

<style>
.infos{
    color:green;
    font-size: 18px;
    font-weight: 600
}
</style>