import React, { Component } from 'react'
import { getClassList } from '../../services/api-calls'
import { Link } from "react-router-dom";

//Class definition
class ClassList extends Component {
  //Declare state, init results to empty array
  state = { results: [], };

  //didMount() lifecycle method
  async componentDidMount() {
    //Get the classlist, assign to ClassData, set to state
    const classData = await getClassList()
    this.setState({ results: classData.results })
  }

  render() { 
    return ( 
      <div>
        <div id = "classDiv" className = "header3">
        <h3>LIST OF CHARACTER CLASSES</h3>
        </div>
        <div className="icon-container">
          {/* Map over the results, render each into a div */}
          {/* Display in grid */}
          {this.state.results.map((classTitle) => (
            // Key helps DOM render properly
            <div id="classDiv" key={classTitle.index}>
              <Link
                to={{
                  pathname: '/class',
                  state: { classTitle }
                }}
              >
                <img 
                  style={{ width: "100px", height: "100px" }}
                  // These images are called from the image api
                  src={`/images/${classTitle.name}.svg`} 
                  alt="class-logo"
                />
                {classTitle.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
     );
  }
}
 
export default ClassList;