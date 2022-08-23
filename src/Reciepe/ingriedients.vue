<template>
  <div class="hello">
    <th class="spacing" v-for="field in fieldNames" :key="field">{{field}} </th>


    <!-- Generate input fields and v-model -->
    <tr v-for="(row, rowIndex) in dataFields" :key="row.id">
      <td v-for="(fieldName, fieldNameIndex) in fieldNames" :key="fieldNameIndex">
        <!-- create first row and add valdiation -->
        <input
          type="text"
          class="input-style"
          v-model="dataFields[rowIndex][fieldName]"
          v-validate.initial="'required'"
          :name="fieldName + rowIndex"
          :data-vv-as="fieldName"
        >
        <br>
      </td>
    </tr>

    <button @click="addIngredient()" class="add-row">addIngredient(break validation)</button>
  </div>
</template>

<script>
export default {
  name: "addingredient",
  data: function() {
    return {
      dataFields: [
        { ingredeint1: "", ingredeint2: "", ingredient3: "", id: 0 }
      ],
      fieldNames: ["ingredeint1", "ingredeint2", "ingredeint3"]
    };
  },
  methods: {
    addStep() {
      this.dataFields.push({
        ingredeint1: "",
        ingredeint2: "",
        ingredeint3: "",
        id: 1
      });
    },
 //       
             submit() {
            let ingredeint1 = this.ingredeint1;
            let ingredeint2 = this.ingredeint2;
            let ingredeint3 = this.ingredeint3;
            let id = this.id;

            this.$apollo.mutate({
                mutation: gql `
          mutation($ingredeint1: String, $ingredeint2: String,$ingredeint1:String,$id:String){
            insert_ingredient(objects: [{ ingredeint1: $ingredeint1, ingredeint2: $ingredeint2,
            ingredeint3:$ingredeint3,
            id:$id }]) {
              returning {
                id
              }
            }
          }
        `,
                variables: {
                    ingredeint1,
                    ingredeint2,
                    ingredeint3,
                    id
                },
                refetchQueries: ["getIngredients"],
            });
            this.$router.push({
                name: "viewReciepe",
               
            });
        }, //
  }
};
</script>

<style scoped>
.spacing {
  padding: 15px;
}
.input-style {
  width: 80px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
td {
  padding: 15px;
}
tr {
  position: relative;
}
a {
  color: #42b983;
}
</style>
