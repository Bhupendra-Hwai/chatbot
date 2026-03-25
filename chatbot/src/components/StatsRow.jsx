export default function StatsRow({ stats }) {
  return (
    <div className="stats-row">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-card">
          <div className={`stat-value ${stat.cls}`}>{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
