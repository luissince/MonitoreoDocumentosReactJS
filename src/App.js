import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import "./assets/js/bootstrap";
import "./assets/js/pace.min";
import Header from './components/layout/Header';
import Menu from './components/layout/Menu';
import Main from "./assets/js/main";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Usuario from "./components/usuario/Usuario";
import Perfil from "./components/perfil/Perfil";
import Plan from "./components/plan/Plan";
import NotFound from "./components/error/NotFound";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    // console.log(this.props)
    // this.menuRef = React.createRef();
  }

  componentDidMount() {
    Main();
    // console.log(this.menuRef)
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Menu />
        <Switch>
          <Route
            path="/dashboard"
            name="dashboard"
            exact={true}
            render={(props) => <Dashboard {...props} />}
          />
          <Route
            path="/usuario"
            name="usuario"
            exact={true}
            render={(props) => <Usuario {...props} />}
          />
          <Route
            path="/perfil"
            name="perfil"
            exact={true}
            render={(props) => <Perfil {...props} />}
          />
          <Route
            path="/plan"
            name="plan"
            exact={true}
            render={(props) => <Plan {...props} />}
          />
          <Route
            path="/"
            name="home"
            exact={true}
            component={Home}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
