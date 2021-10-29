import React from "react";
import "./header.css";
function Header(params) {
  return (
    <div className="header">
      <div className="divs">Email:akshaymsutar8860@gmail.com</div>
      <div className="divs">
        Github:<a href="https://github.com/akshaysutar8860">Click</a>
      </div>
      <div className="divs">
        Linkdin:
        <a href="https://www.linkedin.com/in/akshay-sutar-392199210?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLlL20hnTQoumb49Mlt9xqQ%3D%3D">
          Click
        </a>
      </div>
      <div className="divs">
        Kaggle:<a href="https://www.kaggle.com/akshaysutar">Click</a>
      </div>
    </div>
  );
}
export default Header;
