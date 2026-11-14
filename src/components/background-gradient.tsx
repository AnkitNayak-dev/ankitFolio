"use client";
import React from "react";

export const BackgroundGradient = ({
  children,
  className = "",
  containerClassName = "",
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={containerClassName}
      style={{
        borderRadius: "24px",
        border: "2px solid #9333ea",
        boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)",
        display: "block",
      }}
    >
      <div
        className={className}
        style={{
          borderRadius: "22px",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
};
