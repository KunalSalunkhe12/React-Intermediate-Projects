import React from "react";

function Header({ handleMode }) {


  return (
    <header>
      <p className="logo">Noted.</p>
      <button className="mode-btn" onClick={() => handleMode(previousMode => !previousMode)}>
        Toggle Mode
      </button>
    </header>
  );
}

export default Header;
