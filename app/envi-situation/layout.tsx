import React from "react";
import DjHeader from "../components/DjHeader";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DjHeader></DjHeader>
      {children}
    </div>
  )
}

export default Layout