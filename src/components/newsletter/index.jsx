import "./newsletter.css";
import Button from "../button";

export default function Newsletter() {
  return (
    <div className="newsletter-card">
      <h1 className="newsletter-card-title">Join Ours Newletter</h1>
      <input className="newsletter-card-input" placeholder="your email address" />
      <Button text="subscribe" color="red"></Button>
    </div>
  );
}
