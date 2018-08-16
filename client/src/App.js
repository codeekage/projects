//Modules
import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import AddVideos from './components/Video/AddVideos';
import Home from './components/Home/Home'

//GraphQL Apollo
const apolloClient = new ApolloClient({
  uri: '/graphql'
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <div>
          <Header />
          <Route exact path='/' component={Home}/>
          <Route exact path='/videos' component={AddVideos} />
          <Footer/>
        </div>

      </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
