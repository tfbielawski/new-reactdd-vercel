import React from 'react'
import { Link } from 'react-router-dom'

//Spell card function, pass in props
const SpellCard = (props) => {
  return ( 
    <>
    {/* Link to the spells */}
      <Link
        to={{
          pathname: `/spell/${props.spell.index}`
        }}
      >
        {props.spell.name}
      </Link>
      <br/>
    </>
  );
}
 
export default SpellCard;