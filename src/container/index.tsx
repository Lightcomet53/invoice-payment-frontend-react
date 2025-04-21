import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="w-full h-[80px] flex items-center bg-[#442D95] px-10">
        <span className="text-white text-[32px] font-bold">LOGO</span>
      </header>
      <main className="min-h-[calc(100vh-105px)] p-10 w-full">{children}</main>
      <footer className="w-full h-[25px] bg-[#442D95]"></footer>
    </>
  );
};
export default Container;
