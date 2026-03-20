import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

declare const buttonStyles: (props?: ({
    variant?: "primary" | "secondary" | null | undefined;
    size?: "small" | "medium" | "large" | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonStyles>;
declare const Button: ({ variant, size, disabled, children, className, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

export { Button };
