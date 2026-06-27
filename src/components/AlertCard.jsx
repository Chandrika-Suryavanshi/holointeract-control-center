import "./AlertCard.css";

function AlertCard({ alert }) {
  return (
    <div className={`alert-card ${alert.type}`}>
      {alert.message}
    </div>
  );
}

export default AlertCard;