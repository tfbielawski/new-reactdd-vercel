import React from 'react'

//Define the NavBar function, pass in props
const NavBar = (props) => {
  return(
    <header className="App-header">
      {/* Header image parameters */}
      <img 
      src="/images/DD.png" 
      alt="logo"
      style={{ width: "100px", height: "100px"}}
      className="App-logo"
      />
       {/* Map over the nav items from App.js */}
      {props.navItems.map((navItem, idx) => 
        <div className = "classDiv">
          <a key={idx} href={navItem.url}>{navItem.name}</a>
        </div>
      )}
    </header>
  )
}

export default NavBar