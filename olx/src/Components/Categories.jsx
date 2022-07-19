import React from "react";
import "./categories.css"
// import add from "../images/add.png"
// import mainimg from "../images/mainimg.png"
// import add2 from "../images/add2.png"
// import add3 from "../images/add3.png"
const Categories = () => {
  return (
    <div>
      <section id="upperBody">
        <div className="categories" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <p>ALL CATEGORIES </p>
            <span class="fas fa-caret-down"></span>
            <p>Cars</p>
            <p>Motercycles</p>
            <p>Mobile Phones </p>
            <p>For Sale: Houses & Apartments</p>
            <p>Scooters</p>
            <p>Commercial & Other Vehicles</p>
            <p>For Rent: Houses & Apartments</p>
          </ul>
        </div>
        {/* <div className="mainImg">
        <img src={mainimg} width="100%" />
      </div>
      <div className="add">
        <img src={add} />
      </div> */}
      </section>
    </div>
  );
};

export default Categories;
