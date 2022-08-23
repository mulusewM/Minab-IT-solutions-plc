<script>
import { useQuery, useResult } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import StarRating from "./Reciepe/StarRating";
export default {
   components: {
    StarRating
  },
  data: (vm) => ({
    rating: 2,
  }),
  setup (){
    const { result, loading, error, refetch } = useQuery(gql`
      query reciepe {
      reciepe{
        id
        title
        category
        discription
        duration
      }
    }
    `)
    const reciepe = useResult(result)
    return {
      reciepe,
      loading,
      error,
      refetch,
    }
  },
}
</script>

<template>
  <div v-if="loading">Loading...</div>

  <div v-else-if="error">Error: {{ error.message }}</div>

  <table>
    <thead>
      <th>reciepe id</th>
      <th>reciepe title</th>
      <th>reciepe category</th>
      <th>reciepe discription</th>
      <th>reciepe duration</th>
       <th>Actions</th>
    </thead>

    <tbody>
       <tr v-for="recipe of reciepe" :key="reciepe.id">
        <td>{{ recipe.id }}</td>
          <td>{{ recipe.title }}</td>
        <td>{{ recipe.category }}</td>
        <td>{{ recipe.desciription }}</td>
        <td>{{ recipe.duration }}</td>

           <td>
         <router-link :to="{ path: 'addingsteps', params: { Id: reciepe.id }}">addingSteps</router-link>
         <router-link :to="{ path: 'ingredient', params: { Id: reciepe.id }}">addIngredient</router-link>

          <router-link :to="{ path: 'comment', params: { Id: reciepe.id }}"><font-awesome-icon icon="fas fa-comments" /></router-link>

           <router-link :to="{ path: 'like', params: { Id: reciepe.id }} ">like</router-link>

           <router-link :to="{ path: 'favorite', params: { Id: reciepe.id }}">favorite</router-link>
          </td>
                <td>
                 <div id="app" class="min-h-screen flex
                  justify-center items-center">
                <StarRating v-model="rating"/>
                </div>
                </td>
       </tr>
    </tbody>
  </table>

</template>


<style>
  table,thead, td, th {
    border: 1px solid black;
    /* border-collapse: collapse; */
  }

  th {
    padding: 10px;
    background-color: lightblue;
  }

  td {
    background-color: lightgray;
  }

  table {
    margin: 20px
  }

  div {
    display: inline;
  }
</style>
