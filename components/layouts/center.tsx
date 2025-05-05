import React from "react";
import Script from "next/script";

const Center = ({ children }: { children: React.ReactNode }) => {
    return (
         <div className="flex flex-col h-[50vh] justify-center items-center">
<script
      dangerouslySetInnerHTML={{
         __html: `(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1078976})`,
      }}
   /><Script data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"/><ins id="1078976" data-width="300" data-height="112"></ins>
            {children}
        </div>
    );
};

export default Center;
