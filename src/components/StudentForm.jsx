import styles from './StudentForm.module.css';
import { useState } from 'react';

export default function StudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [yearLevel, setYearLevel] = useState('');
  const [status, setStatus] = useState('Regular');
  const [gwa, setGwa] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    
    const newStudent = {
      name,
      course,
      yearLevel,
      status,
      gwa: parseFloat(gwa) || 0,
    };

    onAdd(newStudent);

    setName('');
    setCourse('');
    setYearLevel('');
    setStatus('Regular');
    setGwa('');
  }

  return (
    // form class
    <form onSubmit={handleSubmit} className={styles.form}>
      
      <div className={styles.inputGroup}>
        <label>Name:</label>
        {/* input class */}
        <input
          type="text"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Course:</label>
        <input
          type="text"
          className={styles.input}
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Year Level:</label>
        <input
          type="text"
          className={styles.input}
          value={yearLevel}
          onChange={(e) => setYearLevel(e.target.value)}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Status:</label>
        {/* input class to select */}
        <select
          className={styles.input}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Regular">Regular</option>
          <option value="Irregular">Irregular</option>
          <option value="On Probation">On Probation</option>
        </select>
      </div>

      <div className={styles.inputGroup}>
        <label>GWA:</label>
        <input
          type="number"
          step="0.01"
          min="1.0"
          max="5.0"
          className={styles.input}
          value={gwa}
          onChange={(e) => setGwa(e.target.value)}
          required
        />
      </div>

      <button type="submit">Add Student</button>
    </form>
  );
}   