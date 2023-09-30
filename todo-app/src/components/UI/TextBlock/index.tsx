import { ReactNode } from "react";
import "./style.css";

interface TextBlockProps {
  children: ReactNode;
}

export const TextBlock: React.FC<TextBlockProps> = ({ children }) => {
  return <span className="text-caption">{children}</span>;
};
