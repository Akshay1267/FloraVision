// PlantCard.jsx
import MainBg from "../assets/Main-bg.png";

export default function PlantCard() {
  return (
    <div className="fixed inset-0 -z-10">
      <img
        src={MainBg}
        alt="Background"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
