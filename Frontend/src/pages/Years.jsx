import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../lib/api";
import "../styles/years.css";

export default function Years() {
  const { deptId } = useParams();
  const [years, setYears] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await API.get("/years");
        setYears(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error("Failed to load years", e);
        setYears([
          { year_id: 1, year_name: "1st Year" },
          { year_id: 2, year_name: "2nd Year" },
          { year_id: 3, year_name: "3rd Year" },
          { year_id: 4, year_name: "4th Year" },
        ]);
      }
    })();
  }, []);

  return (
    <div className="container page-padding">
      <h2>Department {deptId} — Choose Year</h2>
      <div className="grid">
        {years.map((y) => (
          <Link
            key={y.year_id}
            to={`/dept/${deptId}/year/${y.year_id}`}
            className="card"
          >
            {y.year_name}
          </Link>
        ))}
      </div>
    </div>
  );
}


