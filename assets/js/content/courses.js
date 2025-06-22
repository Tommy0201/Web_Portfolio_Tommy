// Array of courses
// const coursesTaken = [
//     'CSC 2053',
//     'CSC 1700',
//     'Course 3',
//   ];
  
  // Function to display the course sheet
  function showCourseSheet() {
    const courseContainer = document.getElementById('course-container');
    const courseSheet = document.getElementById('course-sheet');

    // Show the course sheet
    courseContainer.classList.remove('hidden');
    courseSheet.classList.remove('hidden');
    document.addEventListener('click', handleOutsideClick);

  }
  
  // Function to hide the course sheet
  function hideCourseSheet() {
    const courseSheet = document.getElementById('course-sheet');
    const courseContainer = document.getElementById('course-container');
    courseContainer.classList.add('hidden');
    courseSheet.classList.add('hidden');
  }
  
  // Attach event listener to the button
  const viewCourseButton = document.getElementById('course-button');
  viewCourseButton.addEventListener('click', showCourseSheet);
  


function handleOutsideClick(event) {
    const courseSheet = document.getElementById('course-sheet');
    const targetElement = event.target;

    if (!courseSheet.contains(targetElement) && targetElement !== viewCourseButton) {
        hideCourseSheet();
        document.removeEventListener('click', handleOutsideClick);
    }
}

hideCourseSheet();
