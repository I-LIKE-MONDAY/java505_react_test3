import React from "react";

function App4Navigator() {
  return (
    <nav className={"navbar fixed-top navbar-expand-sm text-black bg-white shadow"}>
      <a className="navbar-brand" href="#">Goutmet au Catering</a>
      <div className={"container-fluid justify-content-end"}>
        <ul className={"navbar-nav"}>
          <li className={"nav-item"}>
            <a className={"nav-link"} href={"#"}>About</a>
          </li>
          <li className={"nav-item"}>
            <a className={"nav-link"} href={"#"}>Menu</a>
          </li>
          <li className={"nav-item"}>
            <a className={"nav-link"} href={"#"}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App4Navigator;