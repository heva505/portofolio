import { useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  return (
    <header className="flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      ></button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Project</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="mode flex">
        <span className="icon-moon-o"></span>
      </button>
      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-clear"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li>
              <a href=""></a>About
            </li>
            <li>
              <a href=""></a>Articles
            </li>
            <li>
              <a href=""></a>Project
            </li>
            <li>
              <a href=""></a>Speaking
            </li>
            <li>
              <a href=""></a>Uses
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
export default Header;
