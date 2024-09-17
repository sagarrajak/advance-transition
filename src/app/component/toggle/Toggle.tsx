"use client";

import React from "react";
import styled from "styled-components";

const SwitchContainer = styled.label`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #007bff;
    border: 1px solid #003064;
  }

  &:focus + span {
    box-shadow: 0 0 1px #007bff;
  }

 
  &:checked,&:active + span:before {
    background-color: #07db19;
    width: 3em;
  }
  

  &:checked + span:before {
    transform: translateX(1.4em);
    background-color: #0703f0;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border: 1px solid #adb5bd;
  transition: 0.4s;
  border-radius: 30px;

  &:before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    border-radius: 20px;
    left: 0.27em;
    bottom: 0.25em;
    background-color: #dd1919;
    transition: 0.4s;
  }
`;

function Toggle() {
  return (
    <SwitchContainer>
      <Checkbox />
      <Slider />
    </SwitchContainer>
  );
}

export default Toggle;
