<script>
import { bookStore } from '../stores/books';
import {Cart} from '../stores/cart'
export default {
    name:'bookDetails',
    data(){
        return{
            a:"require(@/assets/images/redwine.jpg)",
            bookDetail: null,
            recomendations : []
        }
    },
    methods:{
        addToCart(){
            let cart = Cart();
            cart.addToCart(this.bookDetail)
            alert(`${this.bookDetail.title} is added to cart`)
            this.$router.push({ name: 'home'})
        },
        selectBook(book){
            let currentBook = this.bookDetail;
            this.bookDetail = book;
            this.recomendations.push(currentBook);
            let idx = this.recomendations.indexOf(book)
            this.recomendations.splice(idx,1)
        }
    },
    beforeMount(){
        let books = bookStore()
        let searchedBookName = books.searchedBookName;
        let Books = books.Books;

        for(let i=0; i < Books.length; i++){
            if(searchedBookName == Books[i].title){
                books.setBookDetails(Books[i])
                this.bookDetail = books.getBookDetails;
                break
            }
        }

        const categoryWise = books.getCategoryWiseBooks;
        console.log(categoryWise[this.bookDetail.genre])
        this.recomendations = categoryWise[this.bookDetail.genre];
        const idx = this.recomendations.indexOf(this.bookDetail);
        this.recomendations.splice(idx,1)

    }
}
</script>

<template>
    <div class="container mt-2 shadow">
        <div class="row p-3">
            <div class="col-md-6">
                <h4 class="mb-2">Book Details</h4>
                <div class="row align-itmes-center">
                    <div class="col-md-12 p-3 d-flex">
                        <img :src="`src/assets/images/${bookDetail.image}`" style="height: 200px; width:250px" alt="img">
                        <div class="mx-3">
                            <p class="title-name">Name:{{ bookDetail.title }} </p>
                            <p class="author">Author: {{ bookDetail.author }} </p>
                            <p class="price">Genre: {{ bookDetail.genre }} </p>
                            <p class="price">Price:₹{{ bookDetail.price }} </p>
                            <button class="btn btn-secondary" @click="addToCart()">AddToCart</button>
                        </div>
                    </div>
                    <!-- <div class="col-md-6">
                    </div> -->
                </div>
            </div>
            
        </div>
        <div class="row p-3">
            <div class="col-md-6">
                <h6 class="mb-2"><u>You may also like ....</u></h6>
                <div class="horizontal-scrollable-container">
                    <div class="horizontal-scrollable-content">
                        <div class="col-md-2 p-3 d-flex" v-for="(bookDetail, i) in recomendations" :key="i">
                            <!-- {{ bookDetail }} -->
                            <img :src="`src/assets/images/${bookDetail.image}`" style="height: 200px; width:250px" alt="img">
                            <div class="mx-3">
                                <p class="title-name">Name:{{ bookDetail.title }} </p>
                                <p class="author">Author: {{ bookDetail.author }} </p>
                                <p class="price">Genre: {{ bookDetail.genre }} </p>
                                <p class="price">Price:₹{{ bookDetail.price }} </p>
                                <button class="btn btn-secondary" @click="selectBook(bookDetail)">View Details</button>
                            </div>
                        </div>
                    </div>
                  </div>
                <!-- <div class="row align-itmes-center">
                    <div class="col-md-12 p-3 d-flex" v-for="(bookDetail, i) in recomendations" :key="i">
                      
                        <img src="../assets/images/redwine.jpg" alt="img">
                        <div class="mx-3">
                            <p class="title-name">Name:{{ bookDetail.title }} </p>
                            <p class="author">Author: {{ bookDetail.author }} </p>
                            <p class="price">Genre: {{ bookDetail.genre }} </p>
                            <p class="price">Price:₹{{ bookDetail.price }} </p>
                            <button class="btn btn-secondary" @click="addToCart()">AddToCart</button>
                        </div>
                    </div> -->
                    <!-- <div class="col-md-6">
                    </div> -->
                <!-- </div> -->
            </div>
            
        </div>
    </div>
</template>
<style>
h1 {
    color: Green;
}

div.scroll {
    margin: 4px, 4px;
    padding: 4px;
    
    width: 100vh;
    overflow: auto;
    white-space: nowrap;
}
.title-name{
    color: tomato;
}
.author{
    color: rgb(95, 92, 92)
}
.price{
    color: cornflowerblue
}
.horizontal-scrollable-container {
    width: 100vw; /* Full width of the viewport */
    height: 225px; /* Adjust the height as needed */
    overflow-y: auto; /* Enable horizontal scrollbar */
    white-space: nowrap; /* Prevent text from wrapping */
  }
  
  .horizontal-scrollable-content {
    padding: 10px;
    display: inline-block; /* Ensure each item stays on the same line */
  }
  
  /* Style for the scrollbar */
  .horizontal-scrollable-container::-webkit-scrollbar {
    height: 8px;
  }
  
  .horizontal-scrollable-container::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
  
  .horizontal-scrollable-container::-webkit-scrollbar-track {
    background-color: #eee;
    border-radius: 4px;
  }
</style>
