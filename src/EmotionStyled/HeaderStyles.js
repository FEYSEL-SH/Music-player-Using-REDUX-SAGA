// // HeaderStyles.js
// import { css } from "@emotion/css";

// export const headerContainer = css`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 20px;
//   background-color: #f8f9fa;
//   position: relative;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   margin-left: 242px;

//   @media (max-width: 1024px) {
//     margin-left: 160px;
//     width: 100%
//   }
//   @media (max-width: 780px) {
//     margin-left: 130px;
//     width: 100%
//   }
//   @media (max-width: 460px) {
//     margin-left: 90px;
//     width: 300px;
//     height: 25px;
//   }
// `;

// export const search = css`
//   padding: 12px; 
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   width: 250px; 
//   transition: border-color 0.3s ease, box-shadow 0.3s ease; 
//   font-size: 1em; 

//   &:focus {
//     border-color: #7289da; 
//     outline: none;
//     box-shadow: 0 0 5px rgba(114, 137, 218, 0.5); 

//     @media (max-width: 460px) {
//     padding: 8px; 
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     width: 200px; 
//     transition: border-color 0.3s ease, box-shadow 0.3s ease; 
//     font-size: 0.6em; 
//   }
// `;

// export const headerTitle = css`
//   margin: 0;
//   font-size: 1.5em; 
//   color: #333; /* Dark text color 
//   @media (max-width: 460px) {
//     margin: 0;
//     font-size: 0.5em;
//     color: #333; 
//   }
// `;

// export const searchResults = css`
//   position: absolute; 
//   top: 60px;
//   right: 0;
//   background-color: white;
//   border: 1px solid #ccc;
//   z-index: 1000; 
//   max-height: 200px; 
//   overflow-y: auto; 
// `;

// export const searchItem = css`
//   display: flex;
//   align-items: center;
//   padding: 8px; /* Reduced padding for smaller elements */
//   cursor: pointer; /* Change cursor to pointer for clickable items */

//   &:hover {
//     background-color: #f0f0f0; /* Highlight on hover */
//   }
// `;

// export const trackImage = css`
//   width: 30px; /* Reduced image width */
//   height: 30px; /* Reduced image height */
//   margin-right: 8px; /* Reduced margin between image and text */
// `;

// export const trackTitle = css`
//   margin: 0;
//   font-size: 0.9em; /* Reduced title font size */
//   color: #333; /* Dark text color */
// `;

// export const trackDuration = css`
//   margin: 0;
//   font-size: 0.8em; /* Reduced duration font size */
//   color: gray; /* Color for description */
// `;


// HeaderStyles.js
import { css } from "@emotion/css";

export const headerContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #f8f9fa;
  position: relative;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-left: 242px;

  @media (max-width: 1024px) {
    margin-left: 160px;
    width: 100%;
  }
  @media (max-width: 780px) {
    margin-left: 130px;
    width: 100%;
  }
  @media (max-width: 460px) {
    margin-left: 90px;
    width: 300px;
    height: 25px;
  }
`;

export const search = css`
  padding: 12px; 
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 250px; 
  transition: border-color 0.3s ease, box-shadow 0.3s ease; 
  font-size: 1em; 

  &:focus {
    border-color: #7289da; 
    outline: none;
    box-shadow: 0 0 5px rgba(114, 137, 218, 0.5); 
  }

  @media (max-width: 460px) {
    padding: 8px; 
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 200px; 
    transition: border-color 0.3s ease, box-shadow 0.3s ease; 
    font-size: 0.6em; 
  }
`;

export const headerTitle = css`
  margin: 0;
  font-size: 1.5em; 
  color: #333; 
  @media (max-width: 460px) {
    margin: 0;
    font-size: 0.5em;
    color: #333; 
  }
`;

export const searchResults = css`
  position: absolute; 
  top: 60px; 
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  z-index: 1000; 
  max-height: 200px; 
  overflow-y: auto; 
`;

export const searchItem = css`
  display: flex;
  align-items: center;
  padding: 8px; 
  cursor: pointer; 

  &:hover {
    background-color: #f0f0f0; 
  }
`;

export const trackImage = css`
  width: 30px; 
  height: 30px; 
  margin-right: 8px; 
`;

export const trackTitle = css`
  margin: 0;
  font-size: 0.9em; 
  color: #333; 
`;

export const trackDuration = css`
  margin: 0;
  font-size: 0.8em; 
  color: gray; 
`;