import OrbitalCore from "./OrbitalCore";

export default function HubScene({
  hovered,
  clicked,
  ripples,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) {
  const sceneClass = ["hub-scene", hovered ? "hovered" : "", clicked ? "clicked" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={sceneClass}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div className="orbit-ring ring-1">
        <div className="ring-dot" />
        <div className="ring-dot-2" />
      </div>
      <div className="orbit-ring ring-2">
        <div className="ring-dot" />
      </div>
      <div className="orbit-ring ring-3">
        <div className="ring-dot" />
      </div>

      {ripples.map((id) => <div key={id} className="ripple" />)}

      <div className="hub-core">
        <OrbitalCore />
        <span className="hub-ai-label">AI</span>
      </div>
    </div>
  );
}
