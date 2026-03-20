import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const buttonStyles: (props?: ({
    variant?: "primary" | "secondary" | null | undefined;
    size?: "small" | "medium" | "large" | null | undefined;
    disabled?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonStyles>;
declare const Button: ({ variant, size, disabled, children, className, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
