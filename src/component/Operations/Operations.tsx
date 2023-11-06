export function Add() {
  return <div>Operations</div>;
}
export function Rest() {
  return <div>Operations</div>;
}

export function Left(left: number | undefined = undefined) {
  return left;
}
/* let right: number | undefined = undefined; */

export function Delete(val: string) {
  if (Left === undefined) {
    Left(parseInt(val));
  }
}

export function Mult() {
  return <div>Operations</div>;
}

export function Div() {
  return <div>Operations</div>;
}

export function Clear() {
  return <div>Operations</div>;
}
