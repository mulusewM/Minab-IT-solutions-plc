<template>
<div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">sign up </h3>
        <form action="/"
	v-on:submit.prevent="submit">
            <div class="mt-4">
                <div>
                    <label class="block" for="firstname">first Name</label>
                            <Field type="text"  v-model="user.firstName" placeholder="firstName" :rules="isRequired"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                                focus:ring-1 focus:ring-blue-600"/>
                                <span> {{ errorMessage }}</span>
                </div>
                <div class="mt-4">
                    <label class="block">last Name</label>
                            <Field type="text"  v-model="user.lastName" placeholder="lastName" :rules="isRequired"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                                focus:ring-1 focus:ring-blue-600"/>
                                <span> {{ errorMessage }}</span>
                </div>
                  <div class="mt-4">
                    <label class="block">email</label>
                            <Field type="email"  v-model="user.email" placeholder="email" :rules="isRequired"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                                focus:ring-1 focus:ring-blue-600"/>
                                <span> {{ errorMessage }}</span>
                </div>
                  <div class="mt-4">
                    <label class="block">phone</label>
                            <Field type="tel"  v-model="user.phone" placeholder="phone" :rules="isRequired"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                                focus:ring-1 focus:ring-blue-600"/>
                                <span> {{ errorMessage }}</span>
                </div>
                  <div class="mt-4">
                    <label class="block">userName</label>
                            <Field type="text"  v-model="user.userName" placeholder="userName" :rules="isRequired"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                                focus:ring-1 focus:ring-blue-600"/>
                                <span> {{ errorMessage }}</span>
                </div>
                  <div class="mt-4">
                    <label class="block">password</label>
                            <Field type="password"  v-model="user.password" placeholder="password" :rules="isRequired"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                                focus:ring-1 focus:ring-blue-600"/>
                                <span> {{ errorMessage }}</span>
                </div>
                  <div class="mt-4">
                    <label class="block">confirm password</label>
                            <Field type="password"  v-model="user.confirm" placeholder="confirm" :rules="isRequired"
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

                            
</template><script>
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
            'user': {
                'firstname':'',
                'lastname':'',
                'email':'',
                'phone':'',
                'username':'',
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
    
          submit() {
            let firstName = this.firstName;
            let lastName = this.lastName;
            let email = this.email;
            let phone = this.phone;
            let userName = this.userName;
            let password = this.password;
         

            this.$apollo.mutate({
                mutation: gql `
          mutation($firstName: String, $lastName: String,$email:String,$phone:String,$userName:String,$password:String) {
            insert_users(objects: [{ lastname: $firstName, lastname: $lastname,email:$email,
            phone:$phone,:userName:$userName,password:$password}]) {
              returning {
                id
              }
            }
          }
        `,
                variables: {
                    firstName,
                    lastName,
                    email,
                    phone,
                    userName,
                    password,
                },
                refetchQueries: ["getUsers"],
            });
          
        },
    }
};
</script>