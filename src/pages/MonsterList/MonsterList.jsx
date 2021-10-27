//Add a search box so the entire list doesn't need to load
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { getMonsterList } from '../../services/api-calls'

class MonsterList extends Component {
  state = { 
    monsterList: []
  }

  async componentDidMount() {
    const monsterList = await getMonsterList()
    this.setState({ monsterList: monsterList.results })
  }

  render() { 
    return ( 
      <>
          <div id = "classDiv" className = "header3">
            <h3>HERE BE MONSTERS</h3>
          </div>
        {this.state.monsterList.map((monster) => (
            <div id="classDiv" key={monster.index} >
              <Link
                  to={{
                  pathname: '/monster',
                  state: { monster }
                }}
              >
                {monster.name}
              </Link><br></br>
            </div>
        ))}
      </>
     );
  }
}
 
export default MonsterList;