//your JS code here. If required.
// Read the CSV file asynchronously
fs.readFile('students.csv', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Split the CSV data by newline character
  const lines = data.trim().split('\n');
  
  // Parse each line to extract student details
  const students = lines.map(line => {
    const [name, ...grades] = line.split(',');
    const averageGrade = grades.reduce((sum, grade) => sum + parseInt(grade), 0) / grades.length;
    return { name, averageGrade };
  });

  // Log the list of students and their average grades
  students.forEach(student => {
    console.log(`${student.name}: ${student.averageGrade}`);
  });
});