import React from "react";

const ToolTip = ({
  children,
  value,
}: Readonly<{
  children: React.ReactNode;
  value: string;
}>) => {
  return (
    <div className="lg:tooltip" data-tip={value}>
      {children}
    </div>
  );
};

export default ToolTip;
