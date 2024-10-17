const educationLevels = [
    {
        major: "Computer Science Major | Business Minor",
        gpa: "GPA: 3.96 / 4.0",
        honors: "Honors Student",
        scholarship: " Tapia 2024 Conference VU Scholar, Veritas Scholar 2026,  Connelly-Delouvrier Scholar 2025",
        description: "Experienced in AI/ML research, software development, and building full-stack applications. Seeking a full-time Software Engineering internship for Summer 2025 with a focus on Backend Development, Full-stack Development, Data Engineering, AI/ML.",
        color: "#0f437c", 
        image: "images/VU_Logo.jpg", // Image source
        school: "Villanova University",
    },
    {
        major: "Specialization: Physics",
        gpa: "GPA: 9.8 / 10",
        honors: "Silver medal",
        scholarship: "Merit Scholarship",
        description: "Engaged in various science fairs and projects. Participated in coding competitions.",
        color: "rgb(4 96 178)",
        image: "images/pic05.jpg", 
        school: "Hanoi-Amsterdam Highschool For the Gifted",

    },
    {
        major:"",
        gpa: "GPA: 9.2 / 10",
        honors: "Graduated with Distinction",
        scholarship: "Scholarship Recipient",
        description: "Focused on foundational studies, excelling in mathematics and science.",
        color: "#517fa8",
        image: "images/pic05.jpg", 
        school: "Hanoi-Amsterdam Middle School For the Gifted",

    }
];

let currentEducationIndex = 0;

// Function to update the education display
function updateEducation() {
    const currentEducation = educationLevels[currentEducationIndex];
    
    // Update education details
    document.getElementById("education-major").textContent = `${currentEducation.major}`;
    document.getElementById("education-gpa").textContent = `${currentEducation.gpa}`;
    document.getElementById("education-honors").textContent = currentEducation.honors;
    document.getElementById("education-scholarship").textContent = currentEducation.scholarship;
    document.getElementById("education-description").textContent = currentEducation.description;
    document.getElementById("education-school").textContent = currentEducation.school;

    // Update background color
    document.getElementById("education").style.backgroundColor = currentEducation.color;

    // Update image
    document.getElementById("school-logo").src = currentEducation.image;

    const courseButton = document.getElementById("course-button");
    if (currentEducation.school === "Villanova University") {
        courseButton.style.display = "inline-block";
    }
    else {
        courseButton.style.display =  "none";
    }
}

// Event listeners for navigation buttons
document.getElementById("prev-education").addEventListener("click", () => {
    currentEducationIndex = (currentEducationIndex - 1 + educationLevels.length) % educationLevels.length; // Loop back to the last education
    updateEducation();
});

document.getElementById("next-education").addEventListener("click", () => {
    currentEducationIndex = (currentEducationIndex + 1) % educationLevels.length; // Loop back to the first education
    updateEducation();
});

// Initial display of education
updateEducation();
