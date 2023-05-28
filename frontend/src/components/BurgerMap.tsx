import map from "../assets/map.jpg";

export default function BurgerMap() {
  return (
    <div
      className="imgwrapper"
      style={{ "--height": "600px" } as React.CSSProperties}
    >
      <img src={map} className="image" />
    </div>
  );
}
