import type { PropsWithChildren } from "react";

export function Container({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return <div className={`section-shell ${className}`.trim()}>{children}</div>;
}
