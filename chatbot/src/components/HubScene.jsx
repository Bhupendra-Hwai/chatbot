import OrbitalCore from "./OrbitalCore";

const ringLabelPositions = {
  "Competitor Analysis": "ring-label label-top-left",
  "Enrollment Trends": "ring-label label-top-right",
  "Plan Comparison": "ring-label label-bottom-left",
  STARS: "ring-label label-bottom-right",
};

export default function HubScene({
  modules,
  hovered,
  clicked,
  ripples,
  onMouseEnter,
  onMouseLeave,
  onClick,
  onModuleClick,
}) {
  const sceneClass = ["hub-scene", hovered ? "hovered" : "", clicked ? "clicked" : ""]
    .filter(Boolean)
    .join(" ");

  const visibleRingLabels = modules.filter((module) => ringLabelPositions[module.title]);

  return (
    <div
      className={sceneClass}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div className="hub-glow-layer glow-layer-1" />
      <div className="hub-glow-layer glow-layer-2" />

      {visibleRingLabels.map((module) => (
        <button
          key={module.title}
          type="button"
          className={ringLabelPositions[module.title]}
          onClick={(event) => {
            event.stopPropagation();
            onModuleClick(module);
          }}
        >
          {module.title}
        </button>
      ))}

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

      <div className="core-ripple core-ripple-1" />
      <div className="core-ripple core-ripple-2" />
      <div className="core-ripple core-ripple-3" />

      <div className="hub-core">
        <OrbitalCore />
        <span className="hub-ai-label">HWAI</span>
      </div>
    </div>
  );
}
