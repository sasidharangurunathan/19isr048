import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Train from './Train';
import './style.css';
import Register from './Register';



class Navbar extends Component{

  constructor(props) {
    super(props);

    this.state = {
      list: null,
    };
  }


  componentDidMount() {
    
    let arr = JSON.parse(localStorage.getItem("login"));
    //console.log(JSON.stringify({ userDetails: arr }));
    fetch("http://20.244.56.144:80/train/trains").then((response) => {
        response.json().then((result) => {
          // console.warn(result)
          this.setState({ list: result });
          console.log("check",this.state.list);
        });
      });
      
      
  
}
render(){
  return (
    <div>
       <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/train">Train</Link></li>
          <li><Link to="/register">Register</Link></li>
          
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/train" component={Train} />
        <Route exact path="/register" component={Register} />
        
        
      </Switch>
    </Router>
    </div>
  )
}
}

export default Navbar;
