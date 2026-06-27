import "./StatCard.css";

function StatCard({ title, value, icon: Icon, color }) {
  return (
    <div className="stat-card">

      <div
        className="stat-icon"
        style={{ background: color }}
      >
        <Icon />
      </div>

      <div>
        <p>{title}</p>
        <h2>{value}</h2>
      </div>

    </div>
  );
}

export default StatCard;