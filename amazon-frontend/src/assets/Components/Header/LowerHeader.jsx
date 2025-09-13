import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./Header.module.css"

const LowerHeader = () => {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <AiOutlineMenu />
          <p>ALL</p>
        </li>
        <li> Today's deals</li>
        <li> Costumer Service</li>
        <li>Registry</li>
        <li>Gift cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader
