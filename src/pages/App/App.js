import './App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import ClassList from '../ClassList/ClassList'
import ClassDetails from '../ClassDetails/ClassDetails'
import MonsterList from '../MonsterList/MonsterList'
import MonsterDetails from '../MonsterDetails/MonsterDetails'
import SpellSearch from '../SpellSearch/SpellSearch'
import SpellDetails from '../SpellDetails/SpellDetails'
import Home from "../Home/Home";

class App extends Component {
    //Use state to hold the nav items
  //ES6 allows declaring state without constructor when init above render()
  state = {
    navItems: [
      {url: "/classlist", name: "CHARACTER CLASSES"}, 
      {url: "/monsterlist", name: "MONSTERS"}, 
      {url: "/spellsearch", name: "SPELL BOOK"},
      {url: "/spellsearch", name: "CHARACTER RACES"},  
      {url: "/", name: "HOME"},   
    ]
  }

  
  render() {
    return (
      <>
       {/* Render the nav bad, pass in navItems mapped in from NavBar.jsx */}
        {/* Passing state into NavBar in form of navItems */}
        
        <NavBar navItems={this.state.navItems}/>
        <Route 
        exact path="/"
        render={() => <Home />}
        />
  
        <Route 
          exact path='/classlist'
          render={() => <ClassList />}
        />
        <Route 
          exact path='/class'
          render={( {location} ) => 
            <ClassDetails 
              location={location}
            />  
          }
        />
        {/* <Route 
          exact path='/racelist'
          render={() => <RaceList />}
        />
        <Route 
          exact path='/class'
          render={( {location} ) => 
            <RaceDetails 
              location={location}
            />  
          }
        /> */}
        <Route 
          exact path='/monsterlist'
          render={() => 
            <MonsterList />
          }
        />
        <Route 
          exact path='/monster'
          render={( {location} ) => 
            <MonsterDetails 
              location={location}
            />
          }
        />
        <Route
          exact path='/spellsearch'
          render={() => 
            <SpellSearch />
          }
        />
        <Route 
          exact path='/spell/:name'
          render={({ match } ) => 
            <SpellDetails 
              match={match}
            />
          }
        />
      </>
    )
  }
}

export default App;
