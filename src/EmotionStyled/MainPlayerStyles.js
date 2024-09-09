import { css } from "@emotion/css";

export const musicPlayer = css`
  background-color: #2c3e50;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin-left: 400px;
  margin-right: auto;
  display: flex;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 1024px) {
    max-width: 100%;
    margin-left: 180px;
  }
  @media (max-width: 780px) {
    height: 80px;
    max-width: 100%;
    margin-left: 150px;
  }
  @media (max-width: 460px) {
    height: 60px;
    width: 300px;
    margin-left: 110px;
    margin-right: 20px;
  }
`;

export const trackInfo = css`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const trackImage = css`
  width: 70px;
  height: 70px;
  border-radius: 5px;
  margin-right: 15px;

  @media (max-width: 780px) {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  @media (max-width: 460px) {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
  }
`;

export const trackTitle = css`
  font-size: 1.4em;
  font-weight: bold;
  color: #ecf0f1;
  margin: 0;
`;

export const controls = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  @media (max-width: 780px) {
    display: block;
    justify-content: center;
    align-items: center;
    flex-grow: 2;
    position: relative;
    padding-left: 0;
    .fa-solid {
      font-size: 0.7rem;
    }
  }
  @media (max-width: 460px) {
    display: block;
    justify-content: center;
    align-items: center;
    flex-grow: 2;
    position: relative;
    padding-left: 0;
    .fa-solid {
      font-size: 0.5rem;
    }
  }
`;

export const button = css`
  background-color: #2980b9;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #21618c;
  }

  &:focus {
    outline: none;
  }
`;

export const volumeSlider = css`
  -webkit-appearance: none;
  width: 150px;
  height: 5px;
  background: #4a4e57;
  border-radius: 5px;
  margin: 0 10px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  &::-webkit-slider-thumb:hover {
    background-color: #bdc3c7;
  }
`;

export const volumeIcon = css`
  margin: 0 10px;
  color: #ecf0f1;
  font-size: 1.5em;
`;

export const mediaQuery = css`
  @media screen and (max-width: 768px) {
    ${musicPlayer} {
      flex-direction: column;
    }

    ${trackInfo} {
      margin-bottom: 20px;
    }

    ${volumeSlider} {
      width: 100%;
    }
  }
`;
