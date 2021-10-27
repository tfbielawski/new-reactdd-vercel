import React, { Component } from 'react'
import { getDetails } from '../../services/api-calls'

class MonsterDetails extends Component {
  state = { 
    url: this.props.location.state.monster.url,
    monsterDetails: {}
  }

  async componentDidMount() {
    const monsterDetails = await getDetails(this.state.url)
    this.setState({ monsterDetails })
  }
  render() {
    const { monsterDetails } = this.state 
    return ( 
      <>
          <div id = "classDiv" className = "header3">
          <h3>MONSTER DETAILS</h3>
        {/* ADD LOADING IMAGE */}
        {/* ADD SEARCH BOX  */}
        <img src="" alt=""/>
        <h2>{monsterDetails.name}</h2>
        <h4>Size: {monsterDetails.size}</h4>
        <h4>Type: {monsterDetails.type}</h4>
        <h4>AC: {monsterDetails.armor_class}</h4>
        <h4>Actions:</h4>
        {monsterDetails.actions ?
        <>
          {monsterDetails.actions.map(action => 
            <div key={action.name}>
              <h4 >{action.name}</h4>
              <h5>{action.desc}</h5>
            </div>
          )}
        </>
        :
        // If the monster has no special actions, display this
        <p>Nothing to see here, move along</p>
        }
          </div>
        
      </>
     );
  }
}
 
export default MonsterDetails;