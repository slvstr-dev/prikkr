import clsx from "clsx";
import { ButtonProps } from "./Button.props";

export default function Button({ variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={clsx("w-max rounded-full px-3 py-1 text-lg", {
        "bg-white text-black hover:bg-black hover:text-white transition-colors":
          variant === "primary",
        "bg-red-600 text-red-50 hover:bg-red-500 hover:text-white":
          variant === "error",
      })}
      {...props}
    />
  );
}
