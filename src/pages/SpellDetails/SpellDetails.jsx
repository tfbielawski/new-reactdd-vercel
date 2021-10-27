//Add a persistent search box, so the user can search from the results page

import React, { Component } from 'react'
import { getSpellDetails } from '../../services/api-calls'

class SpellDetails extends Component {
  state = { 
  spellDetails: {}
  }

  async componentDidMount() {
    const spellDetails = await getSpellDetails(this.props.match.params.name)
    this.setState({ spellDetails })
  }

  //Render the spells
  render() {
    const { spellDetails } = this.state 
    return ( 
      <>
        <div id = "classDiv">
        { spellDetails.name ? 
        <>
          <h1>{spellDetails.name}</h1>
          {/* add appropriate image here */}
          <img src="" alt=""/>
          <p>{spellDetails.desc[0]}</p>
          <h2>SPELL CLASSES</h2>
          {spellDetails.classes.length ?
          <>
          {/* Map over and display the spells */}
            {spellDetails.classes.map(playerClass =>
              <div key={playerClass.index}>
                <p>{playerClass.name}</p>
              </div>
            )}
          </>
          :
          // If the spell doesn't apply to a class, display this
          <p>No player classes may use this spell</p>
          }
        </>
        :
        <>
          <p>SPELLS INCOMING!</p>
        </>
        }
        </div>
        
      </>
     );
  }
}
 
export default SpellDetails;