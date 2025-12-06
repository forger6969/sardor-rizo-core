import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Attendance");

  const tabs = ["Attendance", "Tasks", "Topshiriqlar"];

  return (
    <div className="flex gap-4 mb-5">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            relative pb-2
            transition-colors duration-300
            ${activeTab === tab ? "text-[#2CC5E4]" : "text-gray-500 hover:text-black"}
          `}
        >
          {tab}
          <span
            className={`
              absolute bottom-0 left-0 h-[3px] bg-[#2CC5E4] 
              transition-all duration-300
              ${activeTab === tab ? "w-full" : "w-0"}
            `}
          />
        </button>
      ))}
    </div>
  );
};

export default Tabs;
