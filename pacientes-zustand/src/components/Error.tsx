/** @format */

import { ReactNode } from "react";

const Error = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase text-sm">
      {children}
    </p>
  );
};

export default Error;
