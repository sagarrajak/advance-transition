"use client";

import React from "react";
import styled, { css, keyframes } from "styled-components";

const SquareKeyFrame = keyframes`
    0% {
        transform: scaleY(100%)
    }
    80% {
        transform: scaleY(20%);
    }
    100% {
        transform: scaleY(100%);
    }
`;

const SquareContainer = styled.div`
  margin: 100px;
  width: 130px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${[...Array(4)].map(
    (_, index) => css`
      div:nth-child(${index + 1}) {
        width: 25px;
        height: 100%;
        background-color: blue;
        border-radius: 5px;
        animation: ${SquareKeyFrame} 1s linear infinite;
        animation-delay: ${index * 0.1}s;
        transform-origin: left bottom;
      }
    `
  )}
`;

function SqurareLoader() {
  return (
    <SquareContainer>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SquareContainer>
  );
}

export default SqurareLoader;
