/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const navBarHorizontalStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 200px;
  background: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 1000;

  @media (max-width: 1024px) {
    margin: 0;
    width: 120px;
    font-size: 7px;
    height: 100%;
    position: fixed;
  }
  @media (max-width: 780px) {
    margin: 0;
    width: 90px;
    font-size: 7px;
    height: 100%;
    position: fixed;
  }
  @media (max-width: 460px) {
    margin: 0;
    width: 50px;
    font-size: 7px;
    height: 100%;
    position: fixed;
  }
`;

export const navItemStyle = css`
  margin: 10px 0;
  color: #ecf0f1;
  cursor: pointer;
  transition: color 0.3s ease; /* Smooth transition for color changes */

  &:hover {
    color: #bdc3c7; /* Slightly lighter on hover */
  }

  &.active {
    color: #e74c3c; / Accent color for active state */
  }; e
  
`;
export const designed = css `
padding-top: 300px


`