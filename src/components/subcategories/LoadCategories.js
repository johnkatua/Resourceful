import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdEmojiTransportation, MdChildCare, MdElderly } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { FiPackage, FiScissors } from "react-icons/fi";
import { RiHospitalLine } from "react-icons/ri";
import { GiSaloon } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { SiWorkplace } from "react-icons/si";

import Info from "./Info";
import { getAllSubCategories } from "../../redux/action/SubCategories";
import "./SubCategories.css";

const LoadSubCategories = () => {
  const dispatch = useDispatch();
  const { subCategories } = useSelector((state) => state.subCategories);
  console.log(subCategories);

  React.useEffect(() => {
    dispatch(getAllSubCategories());
  }, [dispatch]);

  const icons = [
    <MdEmojiTransportation />,
    <FaWarehouse />,
    <AiOutlineStock />,
    <FiPackage />,
    <FiScissors />,
    <RiHospitalLine />,
    <GiSaloon />,
    <HiColorSwatch />,
    <SiWorkplace />,
    <MdChildCare />,
    <MdElderly />,
  ];

  return (
    <div>
      {subCategories.map((subCategory, idx) => {
        return (
          <div>
            <Link to={`${subCategory.id}`}>
              <Info name={subCategory.name} icon={icons[idx]} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default LoadSubCategories;
