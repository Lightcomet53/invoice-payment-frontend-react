import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="w-full h-[80px] flex items-center bg-primaryColor px-[34px] relative">
        <span className="text-white text-[32px] font-bold">LOGO</span>
        <hr className="border-[#A18DEC] absolute left-0 bottom-[2px] w-full" />
      </header>
      <main className="min-h-[calc(100vh-105px)] pt-[44px] px-[34px] w-full">{children}</main>
      <footer className="w-full h-[25px] bg-primaryColor"></footer>
    </>
  );
};

export default AppLayout;
