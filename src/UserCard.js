import React from "react";

import "./UserCard.css";

function UserCard({ contributor }) {
  return (
    <div className="UserCard">
      <div className="UserCard__avatar-container">
        <img
          alt={`User Icon for ${contributor.name}`}
          src={`https://github.com/${contributor.username}.png`}
          className="UserCard__image"
        />
        <div className="UserCard__name-container">
          <h2 className="UserCard__name">{contributor.name}</h2>
          <h3 className="UserCard__title">{contributor.title}</h3>
        </div>
      </div>
      <div className="UserCard__details-section">
        <p className="UserCard__detail-title">GitHub</p>
        <p className="UserCard__detail-info">
          <a className="UserCard__detail-link" href={`https://github.com/${contributor.username}`}>{contributor.username}</a>
        </p>
      </div>
      <div className="UserCard__details-section">
        <p className="UserCard__detail-title">Website</p>
        <p className="UserCard__detail-info">
          <a className="UserCard__detail-link" href={contributor.website}>{contributor.website}</a>
        </p>
      </div>
      <div className="UserCard__details-section">
        <div className="UserCard__skills">
            {contributor.skills.length ? contributor.skills.map((skill) => {
                return <span key={skill} className="UserCard__pill">{skill}</span>
            }) : <p>No skills listed</p>}
        </div>
      </div>
    </div>
  );
}

export default UserCard;
