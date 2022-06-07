import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/6c7877ffb244cb7912d605db285881d0.jpeg?x-expires=1654779600&amp;x-signature=rGeCQci52pgiSD%2B8wFCTs2jF48w%3D"
        alt="Hoa"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon
            icon={faCheckCircle}
            className={cx("check")}
          ></FontAwesomeIcon>
        </h4>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
