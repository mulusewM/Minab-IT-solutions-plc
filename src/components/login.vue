<template>
<div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Login to your account</h3>
        <form action="/" v-on:submit.prevent="submit">
            <div class="mt-4">
                <div>
                    <label class="block" for="email">Email</label>
                            <Field type="email"  v-model="user.email" placeholder="Email" :rules="isRequired"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                                focus:ring-1 focus:ring-blue-600"/>
                                <span> {{ errorMessage }}</span>
                </div>
                <div class="mt-4">
                    <label class="block">Password</label>
                            <Field type="email"  v-model="user.password" placeholder="password" :rules="isRequired"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                                focus:ring-1 focus:ring-blue-600"/>
                                <span> {{ errorMessage }}</span>
                </div>
                   <div class="flex items-baseline justify-between">
                    <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" @click="submit">Login</button>
                    <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
                </div>
            </div>
        </form>
    </div>
</div>                           
</template>
<script>
import { useQuery, useResult } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { Form, Field, ErrorMessage } from 'vee-validate';
export default{
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        return {
            'user': {
                'email':'',
                'password':'',
               
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
         validateEmail(value) {
            // if the field is empty
            if (!value) {
                return 'This field is required';
            }
            // if the field is not a valid email
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!regex.test(value)) {
                return 'This field must be a valid email';
            }
            return true;
        },
        
    methods: {
        submit() {
            let email = this.email;
            let password = this.password;
            this.$apollo.mutate({
                mutation: gql `
          mutation($email: String,$password:String) {
            insert_users(objects: [{email: $email,password:$password }]) {
              returning {
                user_id
              }
            }
          }
        `,
                variables: {
                   
                    email,
                    password,
                },
                refetchQueries: ["getusers"],
            });
            let message = "You are logged in successfully.";
            this.$router.push({
                name: "viewreciepe",
                params: { message },
            });
        },
    },
   
          };
 

</script>