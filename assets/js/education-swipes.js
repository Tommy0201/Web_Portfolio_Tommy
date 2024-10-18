const educationLevels = [
    {
        major: "Computer Science Major | Business Minor",
        gpa: "GPA: 3.96 / 4.0",
        honors: "Honors Student",
        scholarship: " Tapia 2024 Conference VU Scholar, Veritas Scholar 2026,  Connelly-Delouvrier Scholar 2025",
        description: "Hi, I am Minh (Tommy) Nguyen, a Computer Science student with a passion for AI/ML research and full-stack development. I’ve had the opportunity to work on exciting projects like developing AI-powered voicebots in my internship and fine-tuning large language models for low-resource languages in my research. I love the challenge of creating innovative solutions and am always eager to learn. Currently, as the Badminton Club President, I enjoy leading others to compete in badminton championships. I’m actively seeking a software engineering internship or data science internship for Summer 2025 to continue growing my expertise and making an impact.",
        color: "#0f437c", 
        image: "images/vu2.jpg", 
        school: "Villanova University",
    },
    {
        major: "Specialization: Physics",
        gpa: "GPA: 9.8 / 10 ",
        honors: "AP Computer Science A: 5; AP Calculus BC: 5",
        scholarship: "AI-JAM Silicon Valley 2021 Gold, International Young Scientists Innovation Exhibition 2021 Gold, Asian Science and Mathematics Olympiad 2021 1st Runner up, Singapore Asian Schools Math Olympiad 2020 Bronze",
        description: " I attended the top one highschool in Vietnam with acceptance rate of 10%. During this time, I won multiple awards related to Math and Sciences. I was also the President of an astronomy organization where I developed content, hosted courses, and engaged hundreds of students. Additionally, I took pride in leading various community initiatives, such as teaching English to underprivileged children and organizing school-wide events.",
        color: "#517fa8",

        image: "images/pic05.jpg", 
        school: "Hanoi-Amsterdam Highschool For the Gifted",

    },
    // {
    //     major:"",
    //     gpa: "GPA: 9.2 / 10",
    //     honors: "Graduated with in top 1 student cohort in Math in my middle school",
    //     scholarship: "",
    //     description: "I attended the top one secondary school in Vietnam with acceptance rate of < 10%. During middle school, I competed and won various Math and Physics competition.",
    //     color: "rgb(66 66 66)",

    //     image: "images/pic05.jpg", 
    //     school: "Hanoi-Amsterdam Middle School For the Gifted",

    // }
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
