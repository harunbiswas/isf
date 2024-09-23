import Link from "next/link";

export default function Cta() {
  return (
    <div className="cta">
      <div className="container">
        <h3>What is your possion?</h3>
        <Link href="/" className="btn">
          Find you location
        </Link>
      </div>
    </div>
  );
}
