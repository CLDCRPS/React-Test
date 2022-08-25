import React, { useState, useEffect, useReducer } from "react";
import { sendRequest, requestURL } from "../Api/Api";
import { useParams } from "react-router-dom";
import FullInfoCard from "./components/FullInfoCard/FullInfoCard";
import style from "./PersonFullInfo.module.scss";
import Button from "../Button/Button";
import { ACTION_TYPES, INITIAL_STATE, reducer } from "./components/reducer";

const PersonInfo = () => {
  const { personId } = useParams();
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  // const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (personId) {
      dispatch({ type: ACTION_TYPES.SET_IS_LOADING });
      sendRequest(`${requestURL}/${personId}`).then((data) => {
        dispatch({ type: ACTION_TYPES.SET_IS_LOADING });
        dispatch({ type: ACTION_TYPES.SET_PERSON, payload: data });
      });
    }
  }, [personId]);

  const toggleDisabled = () => {
    dispatch({ type: ACTION_TYPES.SET_IS_DISABLED });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ACTION_TYPES.SET_IS_DISABLED });
    console.log(state.person);
  };

  const handleChange = (event) => {
    event.preventDefault();
    dispatch({
      type: ACTION_TYPES.CHANGE_PERSON_INPUT,
      payload: { inputName: event.target.id, inputValue: event.target.value },
    });
  };

  return (
    <div className={style.personFullInfo}>
      <Button
        text="Редактировать"
        className={style.changeBtn}
        onClick={toggleDisabled}
      />
      <h2>Профиль Пользователя</h2>
      {state.isLoading ? (
        <img src="/preloader.gif" />
      ) : (
        <FullInfoCard
          onSubmit={handleSubmit}
          onChange={handleChange}
          person={state.person}
          disabled={state.isDisabled}
        />
      )}
    </div>
  );
};

export default PersonInfo;
