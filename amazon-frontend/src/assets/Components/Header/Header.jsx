import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            {/* logo */}
            <a href="">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="amazon log"
              />
            </a>
            <div className={classes.delivery}>
              {/* delivery */}
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliverd to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <FaSearch />
          </div>
          {/* right side link */}
          <div className={classes.right__container}>
            <div className={classes.language}>
              <img
                src="https://pngimg.com/uploads/flags/small/flags_PNG14592.png"
                alt="usa flag"
              />
              <section>
                <option value="">EN</option>
              </section>
            </div>
            {/* three components */}
            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>
            {/* orders */}
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}

            <a to={"/cart"} className={classes.cart}>
              <BiCart size={28} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
