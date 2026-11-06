import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  as?: "div" | "article" | "li";
  id?: string;
  className?: string;
  "aria-labelledby"?: string;
};

/** White card: 20px radius, 28px padding, 1px border, champagne border on hover. */
export default function Card({
  children,
  as: Tag = "div",
  id,
  className = "",
  ...rest
}: CardProps) {
  return (
    <Tag
      id={id}
      className={`rounded-[20px] border border-line bg-card p-7 transition-colors duration-200 hover:border-champagne ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
