import React, { Component } from "react";
import SearchForm from '../../components/SearchForm/SearchForm'
import { spellSearch } from '../../services/api-calls'
import SpellCard from '../../components/SpellCard/SpellCard'

class SpellSearch extends Component {
  state = {
    spells: [],
  };

  handleSpellSearch = async (formData) => {
    const spells = await spellSearch(formData)
    console.log(spells.results)
    this.setState({ spells: spells.results })
  }

  render() {
    return (
      <>
       <div id = "classDiv" className = "header3">
       <h3>SEARCH THE COMPENDIUM OF SPELLS</h3>
        </div>
        
        <SearchForm 
          handleSpellSearch={this.handleSpellSearch}
        />
        {this.state.spells.length ? 
        <>
          {this.state.spells.map(spell =>
            <div id = "classDiv">
               
              <SpellCard id = "classDiv"
              spell={spell}
              key={spell.index}
            />
            </div>
            
          )}
        </>
        :
        <h3>Enter a search term to get started, or click search to see the whole book</h3>
      
        }
      </>
    );
  }
}

export default SpellSearch;