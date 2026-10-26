import styles from "./AuditCta.module.css";

const WA_URL =
  "https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20a%20free%20digital%20audit%20for%20my%20business.";
const TEL_URL = "tel:+918287593102";

interface Props {
  heading?: string;
  body?: string;
}

export default function AuditCta({
  heading = "Get a free digital audit",
  body = "Message us your business name and city on WhatsApp. We review your Google Business Profile, website and how you appear for your main searches, then send you a short written report. No commitment.",
}: Props) {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <h2>{heading}</h2>
        <p className="intro">{body}</p>
        <div className={styles.actions}>
          <a className="btn" href={WA_URL} target="_blank" rel="noopener">
            Message us on WhatsApp
          </a>
          <a className="btn alt" href={TEL_URL}>
            Call +91 82875 93102
          </a>
        </div>
      </div>
    </section>
  );
}
