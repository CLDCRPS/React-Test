import React, { useEffect } from "react";
import { useState } from "react";
import { sendRequest, requestURL } from "../Api/Api";
import Card from "./components/Card/Card";
import style from "./PersonsList.module.scss";

const PersonsList = ({ sort }) => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    sendRequest(requestURL).then((data) => setPersons(data));
  }, []);

  let personList = persons;

  if (sort === "city") {
    personList = [...persons].sort((a, b) => {
      if (a.address.city < b.address.city) {
        return -1;
      }
    });
  }

  if (sort === "company") {
    personList = [...persons].sort((a, b) => {
      if (a.company.name < b.company.name) {
        return -1;
      }
    });
  }

  return (
    <div className={style.personsList}>
      <h2>Список Пользоваталей</h2>
      {Boolean(persons.length) &&
        personList.map((person) => (
          <Card
            key={person.id}
            fullName={person.name}
            city={person.address.city}
            companyName={person.company.name}
            href={`/person/${person.id}`}
          />
        ))}
    </div>
  );
};

export default PersonsList;
