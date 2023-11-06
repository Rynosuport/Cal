import { useReducer } from "react";
import "./App.css";
import { Button, ButtonUnionType } from "./component/Button";
import { Input } from "./component/Input";
import { CalculatorReducer } from "./calculator.reducer";

export type KindType = "left" | "operation" | "right";

export default function App() {
  const [state, dispatch] = useReducer(CalculatorReducer, {});

  function onClickButton(arg: ButtonUnionType) {}

  return (
    <div className="app">
      <div className="container">
        <Input value={inputValue} />
        <div className="keyboard">
          <Button value={"+"} type={"operation"} onClick={onClickButton} />
          <Button value={"-"} type={"operation"} onClick={onClickButton} />
          <Button value={"*"} type={"operation"} onClick={onClickButton} />
          <Button value={"/"} type={"operation"} onClick={onClickButton} />

          <Button value={7} type={"number"} onClick={onClickButton} />
          <Button value={8} type={"number"} onClick={onClickButton} />
          <Button value={9} type={"number"} onClick={onClickButton} />
          <Button value={"<-"} type={"action"} onClick={onClickButton} />

          <Button value={4} type={"number"} onClick={onClickButton} />
          <Button value={5} type={"number"} onClick={onClickButton} />
          <Button value={6} type={"number"} onClick={onClickButton} />
          <Button value={"clear"} type={"action"} onClick={onClickButton} />

          <Button value={1} type={"number"} onClick={onClickButton} />
          <Button value={2} type={"number"} onClick={onClickButton} />
          <Button value={3} type={"number"} onClick={onClickButton} />
          <Button value={"."} type={"action"} onClick={onClickButton} />

          <Button value={0} type={"number"} onClick={onClickButton} />
          <Button value={"="} type={"action"} onClick={onClickButton} />
        </div>
      </div>
    </div>
  );
}
/* 
  const [inputValue, setInputValue] = useState<string>("");
  const [value, setValue] = useState<ValueType>({});
  const [currentKind, setCurrentKind] = useState<KindType>("left");

  function onClick(arg: ButtonUnionType) {
    if (arg.type === "number") {
      if (currentKind === "left") {
        setValue((prev) => ({
          ...prev,
          left: prev.left
            ? parseInt(prev.left.toString() + arg.value.toString())
            : arg.value,
        }));
      }  else {
        setValue((prev) => ({
          ...prev,
          right: prev.right
            ? parseInt(prev.right.toString() + arg.value.toString())
            : arg.value,
        }));
      }

      setCurrentKind((prev) => (prev !== "left" ? "right" : "left"));
      setInputValue((prev) => prev + arg.value.toString());
    }

    if (arg.type === "operation" && currentKind !== "right") {
      setInputValue((prev) =>
        currentKind === "operation"
          ? prev.slice(0, prev.length - 1) + arg.value
          : prev + arg.value,
      );
      setCurrentKind("operation");
      setValue((prev) => ({ ...prev, operation: arg.value }));
    }

    if (arg.type === "action") {
      if (arg.value === "=" && value.left && value.right) {
        if (value.operation === "*") {
          const res = value.left * value.right;

          setInputValue(res.toString());
          setValue({ left: res });
          setCurrentKind("left");
        }
        if (value.operation === "+") {
          const res = value.left + value.right;

          setInputValue(res.toString());
          setValue({ left: res });
          setCurrentKind("left");
        }
        if (value.operation === "-") {
          const res = value.left - value.right;

          setInputValue(res.toString());
          setValue({ left: res });
          setCurrentKind("left");
        }
        if (value.operation === "/") {
          const res = value.left / value.right;

          setInputValue(res.toString());
          setValue({ left: res });
          setCurrentKind("left");
        }
      }
      if (arg.value === "clear") {
        setCurrentKind("left");
        setValue({});
        setInputValue("");
      }
      if (arg.value === "<-" && currentKind !== "operation") {
        if (currentKind === "left") {
          setValue((prev) => ({
            ...prev,
            left: prev.left
              ? parseInt(
                  prev.left
                    .toString()
                    .substring(0, prev.left.toString().length - 1),
                )
              : prev.left,
          }));
        }
        if (currentKind === "right") {
          setValue((prev) => {
            setCurrentKind(() =>
              prev.right?.toString().length > 1 ? "right" : "operation",
            );
            return {
              ...prev,
              right: prev.right
                ? prev.right.toString().length > 1
                  ? parseInt(
                      prev.right
                        .toString()
                        .substring(0, prev.right.toString().length - 1),
                    )
                  : undefined
                : prev.right,
            };
          });
        } 
       
        setInputValue((prev) => prev.substring(0, prev.length - 1)); 
      /
    }
  } 
      
  console.log(currentKind);
  console.log(value);
 
      return (
        <div className="app">
          <div className="container">
            <Input value={inputValue} />
            <div className="keyboard">
              <Button value={"+"} type={"operation"} onClick={onClick} />
              <Button value={"-"} type={"operation"} onClick={onClick} />
              <Button value={"*"} type={"operation"} onClick={onClick} />
              <Button value={"/"} type={"operation"} onClick={onClick} />

              <Button value={7} type={"number"} onClick={onClick} />
              <Button value={8} type={"number"} onClick={onClick} />
              <Button value={9} type={"number"} onClick={onClick} />

              <Button value={4} type={"number"} onClick={onClick} />
              <Button value={5} type={"number"} onClick={onClick} />
              <Button value={6} type={"number"} onClick={onClick} />

              <Button value={1} type={"number"} onClick={onClick} />
              <Button value={2} type={"number"} onClick={onClick} />
              <Button value={3} type={"number"} onClick={onClick} />

              <Button value={"<-"} type={"action"} onClick={onClick} />
              <Button value={"clear"} type={"action"} onClick={onClick} />
              <Button value={"="} type={"action"} onClick={onClick} />
            </div>
          </div>
        </div>
      );
    }
  }
} */
