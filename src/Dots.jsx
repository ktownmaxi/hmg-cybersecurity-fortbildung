import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function Dots() {
  return (
    <div className="flex gap-0.5">
      <FontAwesomeIcon
        icon={faCircle}
        className="dark:text-white text-yellow-500"
        style={{ fontSize: "8px" }}
      />
      <FontAwesomeIcon
        icon={faCircle}
        className="dark:text-white text-blue-500"
        style={{ fontSize: "8px" }}
      />
      <FontAwesomeIcon
        icon={faCircle}
        className="dark:text-white text-blue-950"
        style={{ fontSize: "8px" }}
      />
    </div>
  );
}

export default Dots;
