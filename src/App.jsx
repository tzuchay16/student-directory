import { useState } from 'react';
import { initialStudents } from './data/students';
import StudentDirectory from './components/StudentDirectory';
import StudentForm from './components/StudentForm';
import DirectoryControls from './components/DirectoryControls';

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  //  TODO 1: handleAddStudent
  const handleAddStudent = (newStudent) => {
    const studentWithId = {
      ...newStudent,
      id: Date.now(),
    };
    setStudents((prevStudents) => [...prevStudents, studentWithId]);
  };

  //  TODO 2: visibleStudents
  const visibleStudents = students
    .filter((student) => {
      // Search filter 
      if (searchTerm && !student.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      return true;
    })
    .filter((student) => {
      // Status filter
      if (statusFilter === 'deansLister') {
        return student.gwa <= 1.75;
      }
      if (statusFilter === 'probation') {
        return student.status === 'On Probation';
      }
      return true; // 'all'
    });

  return (
    <div>
      <h1>Student Directory</h1>
      {/*  TODO 3: Pass handleAddStudent */}
      <StudentForm onAdd={handleAddStudent} />
      <DirectoryControls
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
      />
      {/*  TODO 4: Pass visibleStudents */}
      <StudentDirectory students={visibleStudents} />
    </div>
  );
}   