import React from "react";

import "./UserCard.css";

const mock = {
  id: 1,
  name: "Niall Maher",
  title: "JavaScript Developer",
  username: "NiallJoeMaher",
  website: "www.codu.ie",
  skills: ["JavaScript", "CSS", "HTML", "NodeJS", "MongoDB", "AWS"],
};

function UserCard() {
  return (
    <div className="UserCard">
      <div className="UserCard__avatar-container">
        <img
          alt={`User Icon for ${mock.name}`}
          src={`https://github.com/${mock.username}.png`}
          className="UserCard__image"
        />
        <div className="UserCard__name-container">
          <h2 className="UserCard__name">{mock.name}</h2>
          <h3 className="UserCard__title">{mock.title}</h3>
        </div>
      </div>
      <div className="UserCard__details-section">
        <p className="UserCard__detail-title">GitHub</p>
        <p className="UserCard__detail-info">
          <a className="UserCard__detail-link" href={`https://github.com/${mock.username}`}>{mock.username}</a>
        </p>
      </div>
      <div className="UserCard__details-section">
        <p className="UserCard__detail-title">Website</p>
        <p className="UserCard__detail-info">
          <a className="UserCard__detail-link" href={mock.website}>{mock.website}</a>
        </p>
      </div>
      <div className="UserCard__details-section">
        <div className="UserCard__skills">
            {mock.skills.length ? mock.skills.map((skill) => {
                return <span key={skill} className="UserCard__pill">{skill}</span>
            }) : <p>No skills listed</p>}
        </div>
      </div>
    </div>
  );
}

export default UserCard;
