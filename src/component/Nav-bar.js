/** @jsxImportSource @emotion/react */
import React from "react";
import {
  navBarHorizontalStyle,
  navItemStyle,
  designed,
} from "../EmotionStyled/NavBarStyles"; // Import the styles

const Navbar = ({
  onFavoritesToggle,
  onHomeClick,
  onPlaylistClick,
  activeLink,
}) => {
  return (
    <div css={navBarHorizontalStyle}>
      <h2
        onClick={onHomeClick}
        css={navItemStyle}
        className={activeLink === "home" ? "active" : ""}
      >
        Home
      </h2>
      <h3
        onClick={onFavoritesToggle}
        css={navItemStyle}
        className={activeLink === "favorites" ? "active" : ""}
      >
        Favorites
      </h3>

      <h3 css={designed}>Designed by Feysel</h3>
    </div>
  );
};

export default Navbar;
