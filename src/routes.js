import navbar from "./components/navbar.vue";
import login from "./components/login.vue";
import signup from "./components/signup.vue";
import home from "./components/home.vue";
import about from "./components/about.vue";
import contact from "./components/contact.vue";
import stepAdding from "./components/stepAdding.vue";
import viewReciepe from "./components/viewReciepe.vue";
import starrating from "./components/starrating.vue";
import ingredient from "./components/ingredient.vue";
import addreciepe from "./components/addreciep.vue";
import comment from "./components/comment.vue";
import imageupload from "./components/imageupload.vue";
import searchByCategory from "./components/searchByCategory.vue";
import { createWebHistory, createRouter } from "vue-router";
const routes = [
     {
          path: "/",
          component: navbar,
        
     },
     {
          path: "/about",
          component: about,
          name: "about",
          default: true
     },
     {
          path: "/home",
          component: home,
          name: "home",
          default: true
     },
     {
        path: "/contact",
        component: contact,
        name: "contact",
        default: true
   },
   {
    path: "/home",
    component: home,
    name: "home",
    default: true
},
{
     path: "/viewReciepe",
     component: viewReciepe,
 },
 {
     path: "/starrating",
     component: starrating,
 },
 {
     path: "/ingredient",
     component: ingredient,
 },
 {
     path: "/addreciepe",
     component: addreciepe,
 },
 {
     path: "/searchByCategory",
     component: searchByCategory,
 },    
 {
     path: "/stepAdding",
     component: stepAdding,
 }, 
 {
     path: "/comment",
     component: comment,
 }, 
 {
     path: "/imageupload",
     component: imageupload,
 }, 
    
];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
export default router;