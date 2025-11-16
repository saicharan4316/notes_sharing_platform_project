import { Link } from "react-router-dom";
import "../styles/home.css";

const departments = [
  { id: 1, name: "CSE" },
  { id: 2, name: "ECE" },
  { id: 3, name: "EEE" },
  { id: 4, name: "AI & ML" },
  { id: 5, name: "CSE - DS" },
  { id: 6, name: "OTHERS" },
];

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero">
      <h1>Welcome to <span>StudyVerse</span></h1>
      <p>
        Your centralized place for notes, previous year papers, unit-wise materials,
        and quick revision resources.
      </p>

      <div className="hero-tags">
        <span>Fast</span>
        <span>Organized</span>
        <span>Student-Friendly</span>
      </div>
    </div>
      <h1 className="title">Select Your Department</h1>
      <div className="grid">
        {departments.map((d) => (
          <Link
            key={d.id}
            to={`/dept/${d.id}/years`}
            className="grid-card"
          >
            {d.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

