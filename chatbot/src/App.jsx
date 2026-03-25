import { useRef, useState } from "react";
import "./index.css";
import AppHeader from "./components/AppHeader";
import ChatWorkspace from "./components/ChatWorkspace";
import DashboardWorkspace from "./components/DashboardWorkspace";
import LandingPage from "./components/LandingPage";
import {
  aiReplies,
  dashboardItems,
  dashboardUrl,
  initialChatMessage,
  modules,
  starterHistory,
  stats,
} from "./data/appData";

export default function App() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [activeView, setActiveView] = useState("home");
  const [selectedDashboard, setSelectedDashboard] = useState(null);
  const rippleId = useRef(0);
  const clickTimeout = useRef(null);

  const openDashboard = (dashboard) => {
    if (typeof dashboard === "string") {
      setSelectedDashboard({ name: dashboard, url: dashboardUrl });
      setActiveView("dashboard");
      return;
    }

    setSelectedDashboard({
      name: dashboard.title,
      url: dashboard.dashboardUrl ?? dashboardUrl,
    });
    setActiveView("dashboard");
  };

  const handleHubClick = () => {
    setClicked(true);
    if (clickTimeout.current) clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => setClicked(false), 600);

    const id = rippleId.current++;
    setRipples((current) => [...current, id]);
    setTimeout(() => setRipples((current) => current.filter((item) => item !== id)), 1000);
    setTimeout(() => setActiveView("chat"), 280);
  };

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(135deg,#f0f2ff 0%,#e8f0fe 50%,#f3e8ff 100%)" }}>
      {activeView === "home" && (
        <>
          <AppHeader />
          <LandingPage
            modules={modules}
            stats={stats}
            hovered={hovered}
            clicked={clicked}
            ripples={ripples}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            onHubClick={handleHubClick}
            onModuleClick={openDashboard}
          />
        </>
      )}

      {activeView === "chat" && (
        <ChatWorkspace
          onClose={() => setActiveView("home")}
          onDashboardSelect={openDashboard}
          aiReplies={aiReplies}
          dashboardItems={dashboardItems}
          starterHistory={starterHistory}
          initialChatMessage={initialChatMessage}
        />
      )}

      {activeView === "dashboard" && selectedDashboard && (
        <DashboardWorkspace
          dashboardName={selectedDashboard.name}
          dashboardUrl={selectedDashboard.url}
          onClose={() => setActiveView("home")}
          aiReplies={aiReplies}
          initialChatMessage={initialChatMessage}
        />
      )}
    </div>
  );
}
