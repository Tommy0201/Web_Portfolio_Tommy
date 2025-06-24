const hobbies = [
    {
        title: "Combat Sports",
        description: `I started Boxing and Muay Thai to learn self-defense, make use of my strength, and challenge my limits. 
        I trained for three years, from age 16 to 18, under a professional trainer. Although I don’t train as often now, I still practice occasionally.`,
        videoSrc: "videos/boxingg.mp4", 
    },
    {
        title: "Badminton",
        description: 
        `Badminton has been my passion since I was 8 years old. I trained for three years with a former national player in Vietnam, but I couldn’t continue due to financial and time constraints. 
         However, I was able to pick up the sport again in college, where I am currently the President of the Badminton Club.`,
        videoSrc: "videos/badminton-merge.mp4", 
    },
    {
        title: "Piano",
        description: "I have been playing the piano for two and a half years, primarily focusing on soothing ballads. I also play jazz, classical music, and trending pop songs.",
        videoSrc: "videos/piano-merged.mp4", 
    },
    {
        title: "Community Services",
        description: `I was involved with Villanova Special Olympics for two years. As a committee member, I administered 2000 volunteeers with 3 other members during the Fall Festival.
        The event included more than 1,000 atheletes, 400 coaches, and a total of 5,000 volunteers. I was also the Vice President of the Vietnamese Student Association, working with 30 members to host events to increase Vietnamese culture awareness. `,
        videoSrc: "videos/ECAs-Villanova.mp4", 
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
