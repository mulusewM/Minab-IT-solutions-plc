//import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({
     // You should use an absolute URL here
     uri: 'http://localhost:8080/v1/graphql',
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
