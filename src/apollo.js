import Vue from 'vue'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
const httpLink = new HttpLink({
     // You should use an absolute URL here
     uri: 'https://dynamic-drum-69.hasura.app/v1/graphql',
     headers: {
          "x-hasura-admin-secret": "HqFjG6ZeCjRKuz3rSH80rKB9eYkBtZ6bTP46g620NRAR4PNBA4NHxbaLn8NMYi5K"
     }
})

// Create the apollo client
export const apolloClient = new ApolloClient({
     link: httpLink,
     cache: new InMemoryCache(),
     connectToDevTools: true
})

const apolloProvider = new VueApollo({
     defaultClient: apolloClient
})

// Install the vue plugin
Vue.use(VueApollo)

export default apolloProvider
