import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../lib/api";
import "../styles/subjects.css";

export default function Subjects() {
  const { deptId, yearId, semId } = useParams();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await API.get("/subjects", {
          params: { sem_id: semId, dept_id: deptId }
        });
        setSubjects(data || []);
      } catch (e) {
        console.error("Failed to load subjects", e);
        setSubjects([]);
      }
    })();
  }, [deptId, semId]);

  return (
    <div className="container page-padding">
      <h2>Subjects — Dept {deptId} • Year {yearId} • Sem {semId}</h2>

      <div className="grid">
        {subjects.map((s) => (
          <Link
            key={s.subject_id}
            to={`/dept/${deptId}/year/${yearId}/sem/${semId}/files?subject_id=${s.subject_id}`}
            className="card"
          >
            {s.subject_name}
          </Link>
        ))}

        {subjects.length === 0 && (
          <div className="card">No subjects found for this semester.</div>
        )}

        <Link
          className="card secondary"
          to={`/upload?dept_id=${deptId}&year_id=${yearId}&sem_id=${semId}`}
        >
          Upload a file to this Semester
        </Link>
      </div>
    </div>
  );
}
