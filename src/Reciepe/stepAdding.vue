<template>
  <div class="hello">
    <!-- Display row titles -->
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

    <button @click="addStep()" class="add-row">addStep(break validation)</button>
  </div>
</template>

<script>
export default {
  name: "stepAdding",
  data: function() {
    return {
      dataFields: [
        { name: "", description: "", color: "", id: 0 }
      ],
      fieldNames: ["step1", "step2", "step3"]
    };
  },
  methods: {
    addStep() {
      this.dataFields.push({
        step1: "",
        step2: "",
        step3: "",
        id: 1
      });
    },
 //       
             submit() {
            let step1 = this.step1;
            let step2 = this.step2;
            let step3 = this.step3;
            let id = this.id;

            this.$apollo.mutate({
                mutation: gql `
          mutation($step1: String, $step2: String,$step3:String,$id:String){
            insert_steps(objects: [{ step1: $step1, step2: $step2,step3:$step3,
            id:$id }]) {
              returning {
                id
              }
            }
          }
        `,
                variables: {
                    step1,
                    step2,
                    step3,
                    id
                },
                refetchQueries: ["getsteps"],
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
