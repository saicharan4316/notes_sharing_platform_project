import '../styles/footer.css'
export default function Footer(){
  return (
    <footer style={{ textAlign: "center", padding: 18, marginTop: 36, color: "#666" }}>
      © {new Date().getFullYear()} StudyVerse — Built by Sai Charan
    </footer>
  );
}
