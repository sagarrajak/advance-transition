"use client";

import React from "react";
import "./Loading.scss";

import styled, { keyframes } from "styled-components";
import { ThemeProvider, useTheme } from "@/app/hooks/useTheme";

const Spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div<{ theme: ReturnType<typeof useTheme> }>`
  width: ${({ theme }) => theme.spinnerSize};
  height: ${({ theme }) => theme.spinnerSize};
  position: relative;
  margin: 20px auto;
`;

const SpinnerInner = styled.div<{ theme: ReturnType<typeof useTheme> }>`
  width: 100%;
  height: 100%;
  border: ${({ theme }) => `4px solid ${theme.spinerBorderColor}`};
  border-top: ${({ theme }) => `4px solid ${theme.spinerMoverColor}`};
  border-radius: 50%;
  animation: ${Spin} 1s linear infinite;
`;

const Loading: React.FC = () => {
  const theme = useTheme();

  return (
    <ThemeProvider>
      <Spinner theme={theme}>
        <SpinnerInner theme={theme}></SpinnerInner>
      </Spinner>
    </ThemeProvider>
  );
};

export default Loading;
