// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client'
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import VueApollo from 'vue-apollo'

Vue.use(Vuetify)
Vue.config.productionTip = false

const networkInterface = createBatchingNetworkInterface({
  uri: 'http://localhost:1337/graphql'
})

const apolloClient = new ApolloClient({
  networkInterface,
  connectToDevTools: true
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  router,
  render: h => h(App)
})
