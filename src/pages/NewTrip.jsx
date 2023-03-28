import { useNavigate } from "react-router-dom";
import { useNav } from "../contexts/NavContext";
import { useEffect } from "react";

function NewTrip() {
  const navigate = useNavigate();
  // const { pnavOpen } = useNav();

  return (
    <div>
      <div className="ml-96 bg-blue-100">
        This is the Create CreateTrip page.
      </div>
      <button onClick={() => navigate("/results")}>Select options</button>
    </div>
  );
}

export default NewTrip;
