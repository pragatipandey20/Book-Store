import { defineStore } from "pinia";
import books from '@/assets/data.json'
// console.log(books)
export const bookStore = defineStore('bookStore', {
    state : () => {
        return{
            Books : books.books,
            bookDetails : null,
            searchedBookName : null,
            categoryWiseBooks: {}
        }
    },
    getters:{
        getBooks (state){
            return state.Books;
        },
        getBookName(state){
            return state.searchedBookName;
        },
        getBookDetails(state){
            return state.bookDetails;
        },
        getCategoryWiseBooks(state){
            return state.categoryWiseBooks;
        }
    },
    actions:{
        setBookName(bookName){
            this.searchedBookName = bookName
        },
        setBookDetails(details){
            this.bookDetails = details
        },
        setCatrgotryWise(categoryWiseBooks){
            this.categoryWiseBooks = categoryWiseBooks;
        }
    }
})