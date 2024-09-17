"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

const keys = keyframes`
 50% {
    width: 100%;
  }

  100% {
    width: 0;
    right: 0;
    left: unset;
  }
`;

const LinnerProgress = styled.div`
  width: 80%;
  height: 8px;
  border-radius: 2px;
  background-color: #a5a5a5;
  position: relative;
  &::before {
    top: 0;
    content: "";
    position: absolute;
    background-color: red;
    width: 0%;
    height: 100%;
    animation: ${keys} 2s linear infinite;
  }
`;

function LinnerLoader() {
  return <LinnerProgress></LinnerProgress>;
}

export default LinnerLoader;
