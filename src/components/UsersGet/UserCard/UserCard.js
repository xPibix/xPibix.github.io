import "./UserCard.scss";
import userAvatar from "../../../assets/avatar.svg";
import { useState, memo } from "react";

const UserCard = ({ email, name, phone, photo, position }) => {
  const [emailHover, setEmailHover] = useState(false);

  const onMouseEnterHandler = () => {
    setEmailHover(true);
  };
  const onMouseLeaveHandler = () => {
    setEmailHover(false);
  };

  return (
    <li className="user-get">
      <img
        src={photo}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = userAvatar;
        }}
        width="70"
        height="70"
        loading="lazy"
        alt={name}
        className="user-get__photo"
      />
      <p className="user-get__name">{name}</p>
      <div className="user-get__info">
        <p className="user-get__info--position">{position}</p>
        <p
          className="user-get__info--email"
          onMouseEnter={() => onMouseEnterHandler()}
          onMouseLeave={() => onMouseLeaveHandler()}
        >
          {email}
        </p>
        {emailHover && <p className="email-hover">{email}</p>}
        <p className="user-get__info--phone">{phone}</p>
      </div>
    </li>
  );
};

export default memo(UserCard);
