"use client";
import React from "react";
import styled, { css, keyframes } from "styled-components";

const frames = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0.25;
  }
`;
const LoadingSpinnerContainer = styled.div`
  margin: 100px;
  width: 100px;
  height: 100px;
  position: relative;
  ${[...Array(12)].map(
    (_, index) => css`
      div:nth-child(${index + 1}) {
        position: absolute;
        width: 3px;
        height: 40px;
        border-radius: 2px;
        top: 50%;
        right: 50%;
        transform: rotate(${(index + 1) * 30}deg) translate(0, -130%);
        background-color: black;
        transform-origin: top center;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        animation: ${frames} 1s linear infinite;
        animation-delay: ${(index+1)*0.1}s;
      }
    `
  )}
`;

function LoadingSpinner() {
  return (
    <LoadingSpinnerContainer>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoadingSpinnerContainer>
  );
}

export default LoadingSpinner;
