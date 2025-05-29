import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonTheme = "blue" | "white" | "green" | "red" | "lightBlue";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    maxWidth?: string;
    height?: number;
    rounded?: number;
    className?: string;
    hoverEvent?: boolean;
    theme?: ButtonTheme;
    disabled?: boolean;
}
declare function Button({ children, maxWidth, height, rounded, className, hoverEvent, theme, disabled, // disabled prop 추가
...props }: ButtonProps): react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps };
