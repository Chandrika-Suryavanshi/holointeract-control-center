import "./DeviceCard.css";

function DeviceCard({ device }) {
  return (
    <div className="device-card">

      <h3>{device.name}</h3>

      <p>📍 {device.location}</p>

      <p>Campaign: {device.campaign}</p>

      <p>Last Sync: {device.lastSync}</p>

      <span
        className={
          device.status === "Online"
            ? "online"
            : "offline"
        }
      >
        {device.status}
      </span>

    </div>
  );
}

export default DeviceCard;