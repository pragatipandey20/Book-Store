import { defineStore } from "pinia";

export const Cart = defineStore('cart', {
    state : () => {
        return{
            Books : [],
            totalAmmount : 0,
            address : '',
            mobileNumber: ''
        }
    },
    getters:{
        getBooksAddedInCart (state){
            return state.Books;
        },
        count(state){
            return state.Books.length
        },
        getTotalAmmount(state){
            return state.totalAmmount;
        },
        getAddress(state){
            return state.address
        },
        getMobileNumber(state){
            return state.mobileNumberN
        }
    },
    actions:{
        addToCart(bookDetails){
            this.Books.push(bookDetails)
        },
        setTotalAmmount(amount){
            this.totalAmmount = amount;
        },
        setAddress(address){
            this.address = address;
        },
        setMobileNumber(mobileNumber){
            this.mobileNumber = mobileNumber;
        },
        setBooks(val){
            this.Books = val;
        }
    }
})