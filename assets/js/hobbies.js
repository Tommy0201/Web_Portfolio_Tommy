const hobbies = [
    {
        title: "Combat Sports",
        description: "I started Boxing and Muay Thai to learn self-defense, make use of my strength, and challenge my limits. I trained for three years, from age 16 to 18, under a professional trainer. Although I don’t train as often now, I still practice occasionally.",
        videoSrc: "videos/boxing.mp4", // Replace with your actual video path
    },
    {
        title: "Badminton",
        description: 
        "Badminton has been my passion since I was 8 years old. I trained for three years with a former national player in Vietnam, but I couldn’t continue due to financial and time constraints. However, I was able to pick up the sport again in college, where I am currently the President of the Badminton Club. I’m co-leading a team of 10 members to compete in the Eastern Collegiate Championship this October.",
        videoSrc: "images/badminton-merge.mp4", // Replace with your actual video path
    },
    {
        title: "Piano",
        description: "I have been playing the piano for three years, primarily focusing on soothing ballads. I also play jazz, classical music, and trending pop songs.",
        videoSrc: "videos/piano.mp4", // Replace with your actual video path
    }
];

let currentHobbyIndex = 0;

// Function to update the hobby display
function updateHobby() {
    const currentHobby = hobbies[currentHobbyIndex];

    // Update the hobby details
    document.getElementById("hobby-title").textContent = currentHobby.title;
    document.getElementById("hobby-description").textContent = currentHobby.description;
    document.getElementById("hobby-video").src = currentHobby.videoSrc;
}

// Event listeners for navigation buttons
document.getElementById("prev-hobby").addEventListener("click", () => {
    currentHobbyIndex = (currentHobbyIndex - 1 + hobbies.length) % hobbies.length; // Loop back to the last hobby
    updateHobby();
});

document.getElementById("next-hobby").addEventListener("click", () => {
    currentHobbyIndex = (currentHobbyIndex + 1) % hobbies.length; // Loop back to the first hobby
    updateHobby();
});

// Initial display of hobby
updateHobby();
