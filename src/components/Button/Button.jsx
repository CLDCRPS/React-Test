import clsx from "clsx";
import styles from "./Button.module.scss";

const Button = ({ className, text, disabled = false, color="blue", onClick }) => {
  const handleClick = () => onClick?.();
  return (
    <button
      className={clsx(styles.submitBtn, className, styles[color],{
        [styles.disabledButton]: disabled,
      })}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
