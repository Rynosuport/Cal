import React from "react";
import "./HStack.css";

export function HStack({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className ? `hstack ${className}` : "hstack"} {...props}>
      {children}
    </div>
  );
}
