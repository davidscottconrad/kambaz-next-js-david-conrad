import { ReactNode } from "react";
import TOC from "./TOC";


export default function LabsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (

    <div>
      <div className="d-flex">
        <TOC />
      </div>
      <div className="flex-fill">
        {children}
      </div>
    </div>

  );
}
