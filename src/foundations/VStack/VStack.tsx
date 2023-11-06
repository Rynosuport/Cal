import "./VStack.css";

export function VStack({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className ? `vstack ${className}` : "vstack"} {...props}>
      {children}
    </div>
  );
}
