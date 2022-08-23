<template>
     <div class="mt-4">
                    <label class="block">search</label>
                            <Field type="text"  v-model="category" placeholder="category of recipe" :rules="isRequired"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                                focus:ring-1 focus:ring-blue-600"/>
                              
                </div>
</template>

<script>
import { useQuery, useResult } from '@vue/apollo-composable'
import gql from 'graphql-tag'
  let category = this.category
export default {    
  setup () {
    const { result, loading, error, refetch } = useQuery(gql`
      query byCategory {
      reciepe (category:category||title:category||duration:category){
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
      <th>reciepe title</th>
      <th>reciepe category</th>
      <th>reciepe discription</th>
      <th>reciepe duration</th>
    
    </thead>

    <tbody>
       <tr v-for="recipe of reciepe" :key="reciepe.id">
        <td>{{ recipe.title }}</td>
        <td>{{ recipe.category }}</td>
        <td>{{ recipe.disciription }}</td>
        <td>{{ recipe.duration }}</td>      
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
