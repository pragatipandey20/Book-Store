<script setup>
import {bookStore} from '../stores/books'
import NewHeader from '../components/common/NewHeader.vue';
const book = bookStore()
// const run = ()=>{
//   alert(book.BookName)
// }
</script>
<template>
  <div class="about">
    <NewHeader/>
    <h1>This is an about page</h1>
    <!-- {{ book.BookName  }} -->
    <!-- <button @click="run">Run</button> -->
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
