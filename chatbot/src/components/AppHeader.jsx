import { AppLogoIcon } from "./icons";

export default function AppHeader() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-box">
          <AppLogoIcon />
        </div>
        <div>
          <div className="brand-name">AI Analytics Platform</div>
          <div className="brand-sub">Powered by Advanced Intelligence</div>
        </div>
      </div>

      <div className="status-badge">
        <span className="status-dot" />
        System Active
      </div>
    </header>
  );
}
