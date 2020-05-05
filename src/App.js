import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import RateListContainer from "./components/RateList/RateListContainer";
import ConvertorContainer from "./components/Convertor/ConvertorContainer";
import { Container, Jumbotron } from "react-bootstrap";

const App = (props) => {
  return (
    <Container>
      <Header />
      <Jumbotron>
        <Switch>
          <Route exact path="/" render={() => <Redirect to={"/ratelist"}/> } />
          <Route path="/convertor" render={() => <ConvertorContainer />} />
          <Route path="/ratelist" render={() => <RateListContainer />} />
          <Route path='*'render={() => <div>404 NOT FOUND</div>}/>
        </Switch>
      </Jumbotron>
    </Container>
  );
};

export default App;
