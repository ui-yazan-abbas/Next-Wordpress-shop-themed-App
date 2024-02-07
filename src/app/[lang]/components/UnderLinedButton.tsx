import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface UnderlinedButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPressed: boolean;
}

const UnderLinedButton: FC<PropsWithChildren<UnderlinedButtonProps>> = ({
  isPressed = false,
  children,
  ...props
}) => {
  return (
    <button
      className={`relative ${
        isPressed ? "text-red-500" : ""
      } text-base after:bg-red-500 after:absolute after:h-px after:w-0 after:top-5 after:left-0 hover:after:w-full after:transition-all after:duration-300`}
      {...props}
    >
      {children}
    </button>
  );
};

export default UnderLinedButton;
