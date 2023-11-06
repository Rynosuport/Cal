import { ReactElement } from "react";
import "./Button.css";

export type ButtonType = "number" | "operation" | "action";

export type ButtonNumberType = {
  type: Extract<ButtonType, "number">;
  value: number;
};

export type ButtonOperationType = {
  type: Extract<ButtonType, "operation">;
  value: "+" | "-" | "*" | "/";
};

export type ButtonActionType = {
  type: Extract<ButtonType, "action">;
  value: "=" | "." | "clear" | "<-";
};

export type ButtonUnionType =
  | ButtonNumberType
  | ButtonOperationType
  | ButtonActionType;

export type ButtonProps = ButtonUnionType & {
  onClick: (arg: ButtonUnionType) => void;
};

export function Button({ onClick, ...props }: ButtonProps): ReactElement {
  return (
    <button
      className="button"
      data-type={props.type}
      data-value={props.value}
      onClick={() => onClick(props)}
    >
      {props.value}
    </button>
  );
}
