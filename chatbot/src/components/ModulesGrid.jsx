import { getModuleIcon } from "./icons";

export default function ModulesGrid({ modules, onModuleClick }) {
  return (
    <div className="grid">
      {modules.map((module) => (
        <button
          key={module.title}
          className="card"
          type="button"
          onClick={() => onModuleClick(module)}
        >
          <div className="card-icon-box" style={{ background: module.bg, color: module.color }}>
            {getModuleIcon(module.iconName)}
          </div>
          <div>
            <div className="card-title">{module.title}</div>
            <div className="card-desc">{module.desc}</div>
          </div>
        </button>
      ))}
    </div>
  );
}
