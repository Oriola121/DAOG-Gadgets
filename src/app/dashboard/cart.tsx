import { PiArrowLeft } from "react-icons/pi";

export default function Cart({ onClose }) {
  return (
    <div>
      <PiArrowLeft onClick={onClose} />
      Checkout
    </div>
  );
}
