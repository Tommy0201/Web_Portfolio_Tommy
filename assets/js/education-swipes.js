const educationLevels = [
    {
        major: "Computer Science Major | Business Minor",
        gpa: "GPA: 3.96 / 4.0",
        honors: "Honors Student",
        scholarship: " Tapia 2024 Conference VU Scholar, Veritas Scholar 2026,  Connelly-Delouvrier Scholar 2025",
        description: 
        `Hi, I am Minh (Tommy) Nguyen, a Computer Science student from Vietnam with a passion for AI/ML research and full-stack development. 
         I have had the opportunity to work on exciting projects like developing AI voicebot tutors in my internship and fine-tuning large language models for low-resource languages in my research.
         I love the challenge of creating innovative solutions, and I am always eager to learn. I aspire to use STEM to propel education in under-developed areas.
         I am actively seeking a software engineering internship or data science internship for Summer 2025 to continue growing my expertise and making an impact.`,
        color: "#0f437c", 
        images: ["images/vu2.jpg", "images/vu1.jpg","images/badmintonpair.jpg","images/VU_Logo.jpg"],
        school: "Villanova University",
    },
    {
        major: "Specialization: Physics",
        gpa: "GPA: 9.8 / 10 ",
        honors: "AP Computer Science A: 5; AP Calculus BC: 5",
        scholarship: "AI-JAM Silicon Valley 2021 Gold, International Young Scientists Innovation Exhibition 2021 Gold, Asian Science and Mathematics Olympiad 2021 1st Runner up, Singapore Asian Schools Math Olympiad 2020 Bronze",
        description: `I attended the top one highschool in Vietnam with acceptance rate of 10%. During this time, I won multiple awards related to Math and Sciences. 
        I was also the President of an astronomy organization where I developed content, hosted courses, and engaged more than 100 students. 
        Additionally, I took pride in leading various community initiatives, such as teaching soft skills to more than 200 underprivileged children and organizing school-wide events for 2000 students.`,
        color: "#517fa8",
        images: ["images/highschool.jpg","images/BanhMiKhong.jpg","images/scribbles.jpg","images/Hanoiamsterdam_logo.jpg"], 
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


// Function to handle the image fade-out and reveal the next one
function nextImage() {
    const images = document.querySelectorAll('.stacked-image');
    images[currentImageIndex].classList.remove('active');
    images[currentImageIndex].classList.add('fading');
    
    setTimeout(() => {
        images[currentImageIndex].classList.remove('fading');
        images[currentImageIndex].classList.add('hidden');
        
        // Update index and loop back if necessary
        currentImageIndex = (currentImageIndex + 1) % images.length;
        
        images[currentImageIndex].classList.remove('hidden');
        images[currentImageIndex].classList.add('active');
    }, 500); // Match this to your CSS transition time
}

function updateImageStack(imagesArray) {
    const imageStack = document.getElementById('image-stack');
    imageStack.innerHTML = ''; // Clear existing images
    currentImageIndex = 0;

    imagesArray.forEach((imageSrc, index) => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `School Logo ${index + 1}`;
        img.classList.add('stacked-image');
        if (index === 0) {
            img.classList.add('active');
        } else {
            img.classList.add('hidden');
        }
        imageStack.appendChild(img);
    });

    // Add click event to the image stack
    imageStack.addEventListener('click', nextImage);
}

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

    // Update image stack with new images
    updateImageStack(currentEducation.images);


    const courseButton = document.getElementById("course-button");
    courseButton.style.display = currentEducation.school === "Villanova University" ? "inline-block" : "none";
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
