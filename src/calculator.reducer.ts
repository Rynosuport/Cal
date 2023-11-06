import { ButtonOperationType, ButtonUnionType } from "./component/Button";

type CalcultatorState = {
  input: string;
  value: {
    left?: number;
    operation?: ButtonOperationType["value"];
    right?: number;
  };
  kind: "left" | "operation" | "right";
};

function operationFn({
  left,
  operation,
  right,
}: {
  left: number;
  right: number;
  operation: ButtonOperationType["value"];
}) {
  switch (operation) {
    case "*":
      return left * right;
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "/":
      return left / right;
    default:
      return operation satisfies never;
  }
}

export const CalculatorReducer = (
  state: CalcultatorState,
  action: ButtonUnionType,
): CalcultatorState => {
  switch (action.type) {
    case "number":
      return {
        value: {
          ...state.value,
          ...(state.kind === "left"
            ? {
                left: state.value.left
                  ? +(state.value.left.toString() + action.value.toString())
                  : action.value,
              }
            : {
                right: state.value.right
                  ? +(state.value.right.toString() + action.value.toString())
                  : action.value,
              }),
        },
        kind: state.kind !== "left" ? "right" : "left",
        input: state.input + action.value.toString(),
      };

    case "operation":
      if (state.kind !== "right") {
        return {
          ...state,
          input:
            state.kind === "operation"
              ? state.input.slice(0, state.input.length - 1) + action.value
              : state.input + action.value,
          kind: "operation",
          value: {
            ...state.value,
            operation: action.value,
          },
        };
      }
      return state;

    case "action":
      if (
        action.value === "=" &&
        state.value.left &&
        state.value.right &&
        state.value.operation
      ) {
        const result = operationFn({
          left: state.value.left,
          operation: state.value.operation,
          right: state.value.right,
        });
        return {
          ...state.value,
          input: result.toString(),
          value: { ...state.value, left: result },
          kind: "left",
        };
      }
      return state;

    //   if (action.value === "clear") {
    //     setCurrentKind("left");
    //     setValue({});
    //     setInputValue("");
    //   }
    //   if (action.value === "<-" && currentKind !== "operation") {
    //     if (currentKind === "left") {
    //       setValue((prev) => ({
    //         ...prev,
    //         left: prev.left
    //           ? parseInt(
    //               prev.left
    //                 .toString()
    //                 .substring(0, prev.left.toString().length - 1),
    //             )
    //           : prev.left,
    //       }));
    //     }
    //     if (currentKind === "right") {
    //       setValue((prev) => {
    //         return {
    //           ...prev,
    //           right: prev.right
    //             ? prev.right.toString().length > 1
    //               ? parseInt(
    //                   prev.right
    //                     .toString()
    //                     .substring(0, prev.right.toString().length - 1),
    //                 )
    //               : undefined
    //             : prev.right,
    //         };
    //       });
    //     }

    // setInputValue((prev) => prev.substring(0, prev.length - 1));

    default:
      return state;
  }
};
