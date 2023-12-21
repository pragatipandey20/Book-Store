<template>
    <div class="container-fluid mt-2">
        <div class="row d-flex justify-items-end m-3">
            <div class="col-md-6">
                <label for="">Search Your Favorite Book </label>
                <input type="text" placeholder="Search by author or name eg. Harry Potter, J.K Rowling" class="form-control m-1" v-model="searchedText" @input="searchBooks(searchedText)">
            </div>
        </div>
        <div >
            <div class="row bg-light p-2 mt-2" v-if="filteredArray.length">
                <h6 class="tags">Search Result</h6>
                <div class="col-md-3 mt-2 mb-1" v-for="(book, index) in filteredArray" :key="index">
                    <div class="card"  >
                        <img :src="`src/assets/images/${book.image}`" style="height: 250px; width:335px" alt="...">
                        <div class="card-body shadow">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="card-title"><b>{{book.title}}</b></p>
                                </div>
                            </div>
                            <div class="row mb-1">
                                <div class="col-md-8">
                                    <span class="p-0 m-0"><i>{{book.author}}</i></span>
                                </div>
                                <div class="col-md-4">
                                    <p class="p-0 m-0"><b><u>{{book.price}}</u></b></p>
                                </div>
                            </div>
                        <button class="btn btn-primary" @click="gotobookDetails(book.title)">View</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <p v-if="searchedText.length > 3">
                    Sorry No match found to "<b> {{ searchedText }}</b>"
                </p>
            </div>
        </div>
        <div v-for="(category, index) in uniqueCategories" :key="index">
            <div class="row bg-light p-2 mt-2" >
                <h6 class="tags">{{category}}</h6>
                <div class="col-md-3 mt-2 mb-1" v-for="(book, index) in categoryWiseBooks[category]" :key="index">
                    <div class="card" >
                        <img :src="`src/assets/images/${book.image}`" style="height: 250px; width:335px" alt="...">
                        <div class="card-body shadow">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="card-title"><b>{{book.title}}</b></p>
                                </div>
                            </div>
                            <div class="row mb-1">
                                <div class="col-md-8">
                                    <span class="p-0 m-0"><i>{{book.author}}</i></span>
                                </div>
                                <div class="col-md-4">
                                    <p class="p-0 m-0"><b><u>{{book.price}}</u></b></p>
                                </div>
                            </div>
                        <button class="btn btn-primary" @click="gotobookDetails(book.title)">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { bookStore } from '../stores/books';
import { Cart } from '../stores/cart';
import { RouterLink, RouterView } from 'vue-router'

export default {
    name:"Dashboard",
    components:{RouterLink},
    data(){
        return{
            Books : [],
            cartCount : 0,
            uniqueCategories : [],
            categoryWiseBooks : {},
            searchedText: '',
            filteredArray : []
        }
    },
    methods:{
        gotobookDetails(bookName){
            console.log(bookName)
            let setter = bookStore();
            setter.setBookName(bookName)
            this.$router.push({ name: 'bookDetails'})
       },
       uniqueFields(){
        const operations = bookStore()
        for(let i=0; i< this.Books.length; i++){
            if(this.uniqueCategories.indexOf(this.Books[i].genre) === -1){
                this.uniqueCategories.push(this.Books[i].genre);
            }
        }
        console.log(this.uniqueCategories)
        this.uniqueCategories.forEach((category)=>{
            this.categoryWiseBooks[category] = []
            for(let i=0; i< this.Books.length;i++){
                if(category == this.Books[i].genre){
                    this.categoryWiseBooks[category].push(this.Books[i])
                }else{
                    continue;
                }
            }
        })
        console.log(this.categoryWiseBooks)
        operations.setCatrgotryWise(this.categoryWiseBooks)
       },
       searchBooks(txt){
        if(txt.length > 1){
            for(let i=0; i< this.Books.length; i++){
                let bookName = this.Books[i].title.toLowerCase();
                let author = this.Books[i].author.toLowerCase()
                console.log(bookName.includes(txt.toLowerCase()))
                if(bookName.includes(txt.toLowerCase()) || author.includes(txt.toLowerCase())){
                    if(this.filteredArray.indexOf(this.Books[i]) === -1){
                        this.filteredArray.push(this.Books[i])
                    }
                    console.log(this.filteredArray)
                    break;  
                }
            }
        }else{
            this.filteredArray = []
        }
       }  
    },
    mounted(){
        let books = bookStore()
        let cart = Cart();
        this.cartCount = cart.count
        this.Books = books.Books
        this.uniqueFields()
        console.log(this.uniqueCategories)

    }

}
</script>

<style lang=".scss">
    .tags{
        background-color: #3fe4ad;
        border-radius:4px;
        padding : .3rem;
        color:purple;
        margin-top:1rem
    }
    .lbs{
        font-weight: 600
    }
</style>