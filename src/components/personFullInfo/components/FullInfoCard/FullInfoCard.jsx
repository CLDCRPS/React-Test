import { useReducer } from "react";
import Button from "../../../Button/Button";
import { INITIAL_STATE, reducer } from "../reducer";
import InputWithLabel from "./../InputWithLabel/InputWithLabel";
import style from "./FullInfoCard.module.scss";

const FullInfoCard = ({ person, disabled, onChange, onSubmit }) => {
  const {
    name,
    userName,
    email,
    street,
    city,
    zipCode,
    phone,
    website,
    comment,
  } = person;

  return (
    <div>
      <form onSubmit={onSubmit} onChange={onChange}>
        <InputWithLabel
          labelName={"Name"}
          disabled={disabled}
          value={name}
          hasError={!name.length}
          id="name"
        />
        <InputWithLabel
          labelName={"User name"}
          disabled={disabled}
          value={userName}
          hasError={!userName.length}
          id="userName"
        />
        <InputWithLabel
          labelName={"E-mail"}
          disabled={disabled}
          value={email}
          hasError={!email.length}
          id="email"
        />
        <InputWithLabel
          labelName={"Street"}
          disabled={disabled}
          value={street}
          hasError={!street.length}
          id="street"
        />
        <InputWithLabel
          labelName={"City"}
          disabled={disabled}
          value={city}
          hasError={!city.length}
          id="city"
        />
        <InputWithLabel
          labelName={"Zip Code"}
          disabled={disabled}
          value={zipCode}
          hasError={!zipCode.length}
          id="zipCode"
        />
        <InputWithLabel
          labelName={"Phone"}
          disabled={disabled}
          value={phone}
          hasError={!phone.length}
          id="phone"
        />
        <InputWithLabel
          labelName={"Website"}
          disabled={disabled}
          value={website}
          hasError={!website.length}
          id="website"
        />
        <InputWithLabel
          className={style.commentInput}
          labelName={"Comment"}
          disabled={disabled}
          value={comment}
          id="comment"
        />
        <Button
          color="green"
          disabled={disabled}
          className={style.submitBtn}
          text="Отправить"
        />
      </form>
    </div>
  );
};

export default FullInfoCard;
