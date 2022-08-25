import style from "./Card.module.scss";

const Card = ({ fullName, city, companyName, href }) => (
    <ul className={style.personInfo}>
      <li>{`ФИО: ${fullName} `}</li>
      <li>{`город: ${city}`}</li>
      <li>
        <p>{`компания: ${companyName}`}</p>
        {href ? <a href={href}>Подробнее</a> : null}
      </li>
    </ul>
  );

export default Card