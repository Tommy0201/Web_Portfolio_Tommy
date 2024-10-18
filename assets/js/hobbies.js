const hobbies = [
    {
        title: "Boxing",
        description: "I started boxing as a way to stay fit and push myself beyond my limits. I’ve been training for over 2 years and have even competed in local amateur competitions.",
        videoSrc: "videos/boxing.mp4", // Replace with your actual video path
    },
    {
        title: "Badminton",
        description: "Badminton has always been my passion since high school. I play competitively in local leagues and have won several awards for my performance in doubles.",
        videoSrc: "videos/badminton.mp4", // Replace with your actual video path
    },
    {
        title: "Piano",
        description: "I started learning piano at the age of 6. Over the years, I’ve performed in multiple recitals and composed my own pieces.",
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
