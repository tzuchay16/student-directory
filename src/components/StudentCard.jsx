import styles from './StudentCard.module.css';

export default function StudentCard({ student }) {
  const { name, course, yearLevel, status, gwa } = student;
  
  
  const cardClass = status === 'On Probation' 
    ? `${styles.card} ${styles.probation}` 
    : styles.card;

  return (
    <div className={cardClass}>
      <h3>{name}</h3>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Year Level:</strong> {yearLevel}</p>
      <p><strong>GWA:</strong> {gwa}</p>
      <p><strong>Status:</strong> {status}</p>

      {/* Dean's Lister badge shows only if GWA is 1.75 or better */}
      {gwa <= 1.75 && (
        <span className={styles.badge}>Dean's Lister</span>
      )}
    </div>
  );
}