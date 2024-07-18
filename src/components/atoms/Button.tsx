import { ComponentPropsWithRef } from "react";

type ButtonProps = ComponentPropsWithRef<"button">;

export default function Button({ children, ...rest }: ButtonProps) {
  return <button {...rest}>{children}</button>;
}
