import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import { faMagnifyingGlass, faSpinner, faSignIn } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/Components/Button";

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 3000);
  });
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div>
          <img
            height="50"
            src="https://iconape.com/wp-content/png_logo_vector/formedia-logo-2.png"
            alt="logoMain"
          ></img>
          <span>
            <img alt="LogoTma" src="/asset/logo-tma.png" style={{ width: "100px" }} />
          </span>
          {/* <span className={cx("logo")}>LPOP</span> */}
        </div>

        <FontAwesomeIcon icon="fa-light fa-circle-xmark" />
        <Tippy
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search accounts and videos"></input>
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("action")}>
          <Button text>Upload</Button>
          <Button rounded rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
