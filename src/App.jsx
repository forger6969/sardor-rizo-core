import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Groups from "./components/Groups";
import GroupDetails from "./components/GroupDetails";
import { teachersGroups } from "./data/teachers";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const [user, setUser] = useState(null);
  const [activeGroupId, setActiveGroupId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("teacher");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  // Agar login qilinmagan bo‘lsa → login sahifasini ko‘rsat
  if (!user) return <LoginPage setUser={setUser} />;

  // Teacherning gruppalarini topamiz (user.groups bilan)
  const groups = teachersGroups[user.groups] || [];

  // Default first group
  const activeGroup =
    groups.find((g) => g.id === activeGroupId) || groups[0] || null;

  return (
    <div className="flex flex-col h-screen">
     <Header user={user} setUser={setUser} />

     <div className="flex flex-1 relative pt-[60px]">
  <Groups
    groups={groups}
    activeGroupId={activeGroup?.id}
    setActiveGroupId={setActiveGroupId}
  />

  <main className="flex-1 ml-[120px] overflow-auto p-5">
  {activeGroup ? (
    <GroupDetails activeGroup={activeGroup} />
  ) : (
    <div className="text-center text-gray-500">No groups available</div>
  )}
</main>

</div>

    </div>
  );
};

export default App;
