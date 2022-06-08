import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
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
        <div className={cx("search")}>
          <input placeholder="Search accounts and videos"></input>
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
            {/* Loading */}
            <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />
          </button>
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx("action")}></div>
      </div>
    </header>
  );
}

export default Header;
