import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../lib/api";
import "../styles/semester.css";

export default function Semester() {
  const { deptId, yearId } = useParams();
  const [sems, setSems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await API.get("/semesters", { params: { year_id: yearId } });
        setSems(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error("Failed to load semesters", e);
        setSems([
          { sem_id: 1, sem_name: "1-1" },
          { sem_id: 2, sem_name: "1-2" },
        ]);
      }
    })();
  }, [yearId]);

  return (
    <div className="container page-padding">
      <h2>Select Semester — Dept {deptId} • Year {yearId}</h2>

      <div className="grid">
        {sems.map((s) => (
          <Link
            key={s.sem_id}
            to={`/dept/${deptId}/year/${yearId}/sem/${s.sem_id}/subjects`}
            className="card"
          >
            {s.sem_name}
          </Link>
        ))}
      </div>
    </div>
  );
}
