import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  children,
  to,
  href,
  onClick,
  text = false,
  disable = false,
  primary = false,
  outline = false,
  small = false,
  large = false,
  rounded = false,
  leftIcon,
  rightIcon,
  ...passprops
}) {
  let Comp = "button";

  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
    text,
    disable,
    rounded,
    leftIcon,
    rightIcon,
  });
  const props = { onClick, ...passprops };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  return (
    <div>
      <Comp className={classes} {...props}>
        {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
        <span className={cx("title")}>{children}</span>
        {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
      </Comp>
    </div>
  );
}

export default Button;
