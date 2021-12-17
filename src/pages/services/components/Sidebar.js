import React from "react";
import { Link } from "react-router-dom";
import { BsStars } from "react-icons/bs";

import LoadSubCategories from "../../../components/subcategories/LoadCategories";

const Sidebar = () => {
  return (
    <div className="service--sidebar__container">
      <div className="service--sidebar__all">
        <Link to="" className="service--sidebar__link">
          <span>
            <BsStars />
          </span>
          <p>All</p>
        </Link>
      </div>
      <div><LoadSubCategories /></div>
    </div>
  );
};

export default Sidebar;
