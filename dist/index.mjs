// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
function Button({
  children,
  maxWidth = "",
  height = 56,
  rounded = 8,
  className = "",
  hoverEvent = true,
  theme = "blue",
  disabled = false,
  // disabled prop 추가
  ...props
}) {
  const themes = {
    blue: "bg-[#2e58ec] text-white",
    white: "bg-white border-1 border-border-gray-100",
    green: "bg-[#0a8e6f] text-white",
    red: "bg-red-300 text-white",
    lightBlue: "bg-[#e3eeff] text-[#2e58ec]"
  };
  const disabledClass = disabled ? "bg-[#c3c9ce] text-white hover:opacity-100 cursor-default" : "cursor-pointer";
  const baseClasses = [
    className,
    maxWidth,
    "w-full",
    hoverEvent ? "hover:opacity-80 transition-all" : ""
  ].join(" ");
  const themeClasses = disabled ? disabledClass : themes[theme] || "";
  return /* @__PURE__ */ jsx(
    "button",
    {
      style: {
        height: `${height}px`,
        borderRadius: `${rounded}px`
      },
      ...props,
      className: `${baseClasses} ${themeClasses} `,
      disabled,
      children
    }
  );
}
export {
  Button
};
