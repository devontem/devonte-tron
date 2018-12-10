import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import Resume from "./components/resume/Resume";

const client = new ApolloClient({
  uri: "/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <a className="navbar-brand" href="/">
                Devonte - Tron
              </a>
            </nav>
          </header>
          <div className="container">
            <Resume />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
