<template>
<div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">reciepe registration</h3>
        <form action="/"
	          v-on:submit.prevent="submit">
            <div class="mt-4">
                <div>
                 <router-link to="imageupload">imageupload</router-link>
                    <label class="block" for="email">Title</label>
                            <Field type="text"  v-model="reciepe.title" placeholder="reciete title" :rules="isRequired"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                                focus:ring-1 focus:ring-blue-600"/>
                                <span> {{ errorMessage }}</span>
                </div>
                <div class="mt-4">
                    <label class="block">Category</label>
                            <Field type="text"  v-model="reciepe.category" placeholder="reciepe category" :rules="isRequired"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                                focus:ring-1 focus:ring-blue-600"/>
                                <span> {{ errorMessage }}</span>
                </div>
                  <div class="mt-4">
                    <label class="block">Duration</label>
                            <Field type="text"  v-model="reciepe.duration" placeholder="reciepe.duration" :rules="isRequired"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                                focus:ring-1 focus:ring-blue-600"/>
                                <span> {{ errorMessage }}</span>
                </div>
                  <div class="mt-4">
                    <label class="block">Discription</label>
                            <Field type="text"  v-model="reciepe.discription" placeholder="discription" :rules="isRequired"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                                focus:ring-1 focus:ring-blue-600"/>
                                <span> {{ errorMessage }}</span>
                </div>
                 
             
                
                <div class="flex items-baseline justify-between">
                    <Field type="submit" class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" value="submit"/>
                   <Field type="reset" class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" value="reset"/>

                </div>
            </div>
        </form>
    </div>
</div>

                            
</template>
<script>
import gql from "graphql-tag";
import { Form, Field, ErrorMessage } from 'vee-validate';
export default {
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        return {
            'reciepe': {
                'title':'',
                'category':'',
                'duration':'',
                'discription':'',
                
               
            }
        };
    },

    methods: {
        isRequired(value) {
            if (value && value.trim()) {
                return true;
            }
            return 'This is required';
        },
    
          submit() {
            let title = this.title;
            let category = this.category;
            let discription = this.discription;
            let duration = this.duration;

            this.$apollo.mutate({
                mutation: gql `
          mutation($title: String, $category: String,$discription:String,$duration:String) {
            insert_reciepe(objects: [{ title: $title, category: $category,discription:$discription,
            duration:$duration }]) {
              returning {
                id
              }
            }
          }
        `,
                variables: {
                    title,
                    category,
                    discription,
                    duration
                },
                refetchQueries: ["getUsers"],
            });
            this.$router.push({
                name: "viewReciepe",
               
            });
        },
    }
};
</script>