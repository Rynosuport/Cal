import "./Input.css";

export function Input({ value }: { value: string }) {
  return <input className="input" value={value} />;
}
