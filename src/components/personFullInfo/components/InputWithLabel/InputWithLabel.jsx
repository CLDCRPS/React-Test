import clsx from "clsx";
import style from "./InputWithLabel.module.scss";

const InputWithLabel = ({
  className,
  labelName,
  disabled,
  value,
  hasError,
  onChange,
  id,
}) => {
  const handleChange = (event) => {
    onChange?.(event)
  }
  return (
    <div className={style.inputAndLabel}>
      <label>{labelName}</label>
      <input
        id={id}
        className={clsx(className, { [style.errorInput]: hasError })}
        disabled={disabled}
        type="input"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputWithLabel;
