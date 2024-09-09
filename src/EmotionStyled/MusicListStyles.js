/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const musicContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 700px;
  margin: 15px auto;
  padding: 20px;
  background-color: #ecf0f1;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-left: 400px;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-left: 180px;
  }
  @media (max-width: 780px) {
    max-width: 100%;
    margin-left: 150px;
  }
  @media (max-width: 460px) {
    width: 300px;
    margin-left: 110px;
  }
`;

export const trackStyle = css`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const trackImageStyle = css`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  margin-right: 15px;

  @media (max-width: 460px) {
    width: 30px;
    height: 30px;
  }
`;

export const trackInfoStyle = css`
  flex-grow: 1;
  @media (max-width: 460px) {
    font-size: 0.5em;
  }
`;

export const trackTitleStyle = css`
  margin: 0;
  font-size: 1em;
  color: #2c3e50;
  font-weight: bold;
  @media (max-width: 780px) {
    font-size: 0.5em;
  }
  @media (max-width: 460px) {
    font-size: 0.4em;
  }
`;

export const trackDurationStyle = css`
  margin: 0;
  color: #7f8c8d;
  font-size: 1em;
`;

export const favoriteButtonStyle = css`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #4caf50;
  font-size: 1.5em;
  margin-right: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #388e3c;
  }
`;

export const removeButtonStyle = css`
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b;
  }
`;

export const editFormStyle = css`
  display: flex;
  align-items: center;
  margin-left: 10px;
  background-color: #f9f9f9;
  padding: 5px;
  border: 1px solid #4caf50;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const editInputStyle = css`
  margin-right: 10px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  width: 150px;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }
  @media (max-width: 780px) {
    font-size: 0.4em;
    width: 60px;
  }
  @media (max-width: 460px) {
    font-size: 0.5em;
    width: 50px;
  }
`;

export const saveButtonStyle = css`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #388e3c;
  }
`;

export const cancelButtonStyle = css`
  background-color: transparent;
  color: #e74c3c;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #c0392b;
  }
`;
