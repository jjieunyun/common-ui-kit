import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonTheme = "blue" | "white" | "green" | "red" | "lightBlue";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  maxWidth?: string;
  height?: number;
  rounded?: number;
  className?: string;
  hoverEvent?: boolean;
  theme?: ButtonTheme;
  disabled?: boolean;
}

export function Button({
  children,
  maxWidth = "",
  height = 56,
  rounded = 8,
  className = "",
  hoverEvent = true,
  theme = "blue" as "blue" | "white" | "green" | "red" | "lightBlue",
  disabled = false, // disabled prop 추가
  ...props
}: ButtonProps) {
  const themes = {
    blue: "bg-[#2e58ec] text-white",
    white: "bg-white border-1 border-border-gray-100",
    green: "bg-[#0a8e6f] text-white",
    red: "bg-red-300 text-white",
    lightBlue: "bg-[#e3eeff] text-[#2e58ec]",
  };

  const disabledClass = disabled
    ? "bg-[#c3c9ce] text-white hover:opacity-100 cursor-default"
    : "cursor-pointer";

  const baseClasses = [
    className,
    maxWidth,
    "w-full",
    hoverEvent ? "hover:opacity-80 transition-all" : "",
  ].join(" ");

  const themeClasses = disabled ? disabledClass : themes[theme] || "";

  return (
    <button
      style={{
        height: `${height}px`,
        borderRadius: `${rounded}px`,
      }}
      {...props}
      className={`${baseClasses} ${themeClasses} `}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
