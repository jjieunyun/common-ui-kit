"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
