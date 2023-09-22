import { useContext } from "react";
import { UserContext } from "../App";
import { DayPicker } from "react-day-picker";
import "react-day-picker/src/style.css"
export default function Calender() {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <DayPicker />
    </div>
  );
}
