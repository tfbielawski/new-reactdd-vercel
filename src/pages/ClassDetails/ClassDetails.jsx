import React, { Component } from 'react';
import { getDetails } from '../../services/api-calls'

class ClassDetails extends Component {
  state = {
    url: this.props.location.state.classTitle.url, 
    //Empty object to contain data from api
    classDetails: {}
   }

  async componentDidMount() {
    //Call the api with state
    const classDetails = await getDetails(this.state.url)
    //Set classDetails to state
    this.setState({ classDetails })
  }

  render() {
    const { classDetails } = this.state; 
    return (
      <div>
    
        {/* Render the loading page */}
        {classDetails.name ?
        <>
          {/* Add appropriate image */}
          <div id = "classDiv" className = "header3">
          <img src="" alt=""/>
          <h2>{classDetails.name}</h2>
          <div>Hit die: d{classDetails.hit_die}</div>
          </div>
          
          <div id = "classDiv" className = "header3">
          <h3>Proficiencies:</h3>
          {classDetails.proficiencies.map((proficiency) => (
            <div key={proficiency.index}>{proficiency.name}</div>
          ))}
          </div>
          
        </>
        :
        <>
          <p>CLASSES ARE COMING.</p>
        </>
        }
      
      </div>
    );
  }
}
 
export default ClassDetails;