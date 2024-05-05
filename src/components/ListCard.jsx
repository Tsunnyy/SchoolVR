import { NavLink } from "react-router-dom";

export const ListCard = ({ extraClass, img, title, data }) => {
  if (data.length === 0) return null;
  return (
    <div className={`list-card ${extraClass}`}>
      <div className="list-card-head">
        <img
          className="list-icon"
          src={`/img/icon/${img}.svg`}
          alt={`${img}`}
        />
        {title}
      </div>
      <div className="list-card-body">
        <ul className="list">
          {data.map((item, index) => {
            return index < 5 ? (
              <li key={index} className="list-item">
                <NavLink to={item.url}>{item.content}</NavLink>
              </li>
            ) : (
              ""
            );
          })}
        </ul>
      </div>
    </div>
  );
};
