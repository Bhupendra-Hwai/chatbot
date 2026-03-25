import HubScene from "./HubScene";
import ModulesGrid from "./ModulesGrid";
import StatsRow from "./StatsRow";

export default function LandingPage({
  modules,
  stats,
  hovered,
  clicked,
  ripples,
  onHoverStart,
  onHoverEnd,
  onHubClick,
  onModuleClick,
}) {
  return (
    <>
      <div className="hero">
        <HubScene
          modules={modules}
          hovered={hovered}
          clicked={clicked}
          ripples={ripples}
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          onClick={onHubClick}
          onModuleClick={onModuleClick}
        />

        <p className="hero-text">
          Your intelligent command center for comprehensive analytics, market insights, and strategic
          <br />
          decision-making across all business dimensions
        </p>
      </div>

      <ModulesGrid modules={modules} onModuleClick={onModuleClick} />
      <StatsRow stats={stats} />
    </>
  );
}
