import { useState } from "react";

export function TwitterFollowCard({ name, userName, initialIsFollowing, initialVerified }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? "Siguiendo" : "Seguir";

  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const verifiedIcon = initialVerified ? (
    <img
      src="https://cdn-icons-png.flaticon.com/128/7641/7641727.png"
      alt="Verificado"
      style={{ width: '16px', height: '16px', marginLeft: '4px' }}
    />
  ) : null;

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="Doge Avatar"
          src={`https://unavatar.io/x/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>
            {name}
            {verifiedIcon}
          </strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow"> Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
