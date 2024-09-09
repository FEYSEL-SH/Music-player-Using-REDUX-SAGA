// FavoritesStyles.js
import { css } from "@emotion/css";

export const favoritesContainer = css`
  padding: 15px;
  background-color: #2b2b2b;
  border: 1px solid #444;
  border-radius: 8px;
  margin: 15px auto;
  max-width: 700px;
  color: #f5f5f5;
  margin-left: 400px;
  @media (max-width: 1024px) {
    max-width: 100%;
    margin-left: 180px;
  }
  @media (max-width: 780px) {
    align-items: center;
    margin-top: 20px;
    margin-left: 145px;
    margin-right: 20px;
  }
  @media (max-width: 460px) {
    align-items: center;
    margin-top: 20px;
    width: 300px;
    margin-left: 110px;
    margin-right: 20px;
  }
`;

 

export const favoritesTitle = css`
  font-size: 20px;
  margin-bottom: 10px;
  color: #ff6b6b;
  @media (max-width: 460px) {
    font-size: .1em;
  }
`;

export const favoritesTrack = css`
  display: flex; 
  align-items: center; 
  padding: 8px; 
  border-bottom: 1px solid #444; 

  &:last-child {
    border-bottom: none; 
  }
`;

export const favoritesTrackImage = css`
  width: 40px; 
  height: 40px; 
  margin-right: 10px; 
  border-radius: 5px; 
  border: 2px solid #ff6b6b; 
`;

export const favoritesTrackInfo = css`
  flex-grow: 1; 
`;

export const favoritesTrackTitle = css`
  font-size: 16px; 
  font-weight: bold; 
  color: #f5f5f5; 

  @media (max-width: 460px) {
    font-size: 8px;
  }
`;

export const favoritesTrackDuration = css`
  font-size: 12px; 
  color: #a9a9a9; 
  @media (max-width: 460px) {
    font-size: 8px;
  }
`;

export const removeButton = css`
  background-color: #e74c3c; 
  color: white; 
  border: none; 
  border-radius: 5px; 
  padding: 5px 10px; 
  cursor: pointer; 
  transition: background-color 0.3s; 
  margin-left: 15px; 

  &:hover {
    background-color: #c0392b; 
  }
`;




