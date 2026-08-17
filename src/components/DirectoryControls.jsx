import styles from './DirectoryControls.module.css'; 

export default function DirectoryControls({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange
}) {
  return (
    // Use styles.controls
    <div className={styles.controls}>
      
      {/* Controlled Search Input */}
      <input
        type="text"
        placeholder="Search students..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {/* Filter Buttons */}
      {/*Use styles.filterButtons */}
      <div className={styles.filterButtons}>
        <button
          onClick={() => onStatusFilterChange('all')}
          //using template literals and styles object
          className={`${styles.filterButton} ${statusFilter === 'all' ? styles.activeFilter : ''}`}
        >
          All
        </button>
        
        <button
          onClick={() => onStatusFilterChange('deansLister')}
          className={`${styles.filterButton} ${statusFilter === 'deansLister' ? styles.activeFilter : ''}`}
        >
          Dean's Listers
        </button>
        
        <button
          onClick={() => onStatusFilterChange('probation')}
          className={`${styles.filterButton} ${statusFilter === 'probation' ? styles.activeFilter : ''}`}
        >
          Probation
        </button>
      </div>
    </div>
  );
}   