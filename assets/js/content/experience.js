// Array of Work Experiences
const experiences = [
    {
        title: 'Software Engineer Intern',
        location: 'SoFi',
        date: '(May, 2025 - Present)',
        imageSrc: 'assets/images/work-experience/sofilogo.png',
        tasks: [
            'Created an internal production tool using Spring Boot, ReactJS, and PostgreSQL to automate the debt sale process, eliminating 70+ manual merge requests and saving 100+ hours for engineers annually',
            "Built an aggregated debt sales tab, allow in-place sale modifications, and implemented an audit table to track all changes",
            "Created an AI tool that match similar Jira tickets and suggest SQL commands to perform Data Change Request - reaching high accuracy, enhanced efficiency for on-call engineers by ~35%",

        ],
        aosDelay: 100,
        aosDuration: 500
    },
    {
        title: 'Data Scientist Intern',
        location: 'PM Accelerator',
        date: '(Sep, 2024 - Dec, 2024)',
        imageSrc: 'assets/images/work-experience/ethosapp.png',
        tasks: [
            'Co-developing the database system for the mobile app for BIPOC-owned small businesses.',
            "Taking charge of setting up a recommendation system that recommends businesses based on users' background and preference",
        ],
        aosDelay: 100,
        aosDuration: 500
    },
    {
        title: 'AI Software Engineer Intern',
        location: 'Olli Technology',
        date: '(May, 2024 - Aug, 2024)',
        imageSrc: 'assets/images/work-experience/olli-maika.png',
        tasks: [
            'Co-developed the AI voicebot backend with 2 developers using LangGraph and GPT API; developed its prototype using Flask, React, and gRPC and helped secure a partnership with the Malaysian Minister of Education.',
            'Developed an AI-powered image suggestion feature for a marketing assistant app, leveraging Unsplash API (free image library), DALL-E API, GPT API, and gRPC, resulting in a 25% increase in user engagement.',
        ],
        aosDelay: 100,
        aosDuration: 500
    },
    {
        title: 'NLP Research Assistant',
        location: 'Center for Research and Fellowship',
        date: '(May, 2023 - May 2025)',
        imageSrc: 'assets/images/work-experience/llm-diversity.png',
        tasks: [
            "Implemented a web scraper using Python's BeautifulSoup and concurrent programming to extract over 2 million data points from sources like BBC and TedTalk, then preprocessed and analyzed the dataset, including 116,884 Igbo and 121,266 Nigerian Pidgin sentences, with 70,000 sentences annotated by native speakers.",
            "Fine-tuned Large Language Models (ByT5, NLLB, DeltaLM) for Igbo to English translation using benchmark datasets of 700,000 aligned sentence pairs, achieving a 43% BLEU-score improvement.",
            "Paper published at LoResMT workshop, part of 2025 NAACL conference"
        ],
        aosDelay: 100,
        aosDuration: 400
    },
    {
        title: 'Data Research Assistant',
        location: 'Center for Research and Fellowship',
        date: '(Jan, 2023 - April, 2023)',
        imageSrc: 'assets/images/work-experience/Text_Differences.png',
        tasks: [
            "Refined the text-generation of the AMR system, a Natural Language Processing tool, to sound more human-like",
            "Automated testing over large datasets and analyzed 80,000 sentences using Python, proposed mathematical expression learning to improve the system"
        ],
        aosDelay: 100,
        aosDuration: 300
    }
];

// Function to create a work experience card
const createExperienceCard = (experience) => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col gaap aos-init aos-animate';
    colDiv.setAttribute('data-aos', 'fade-up');
    colDiv.setAttribute('data-aos-easing', 'linear');
    colDiv.setAttribute('data-aos-delay', experience.aosDelay);
    colDiv.setAttribute('data-aos-duration', experience.aosDuration);

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card1';

    const img = document.createElement('img');
    img.src = experience.imageSrc;
    img.className = 'featured-image';
    cardDiv.appendChild(img);

    const cardBody = document.createElement('article');
    cardBody.className = 'card-body';

    const header = document.createElement('header');
    
    const titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    const h3 = document.createElement('h3');
    h3.textContent = experience.title;
    titleDiv.appendChild(h3);
    header.appendChild(titleDiv);

    const metaP = document.createElement('p');
    metaP.className = 'meta';
    const locationSpan = document.createElement('span');
    locationSpan.className = 'pre-heading';
    locationSpan.textContent = experience.location;
    metaP.appendChild(locationSpan);
    metaP.appendChild(document.createElement('br'));
    const dateSpan = document.createElement('span');
    dateSpan.className = 'author';
    dateSpan.textContent = experience.date;
    metaP.appendChild(dateSpan);
    header.appendChild(metaP);

    const ol = document.createElement('ol');
    experience.tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        ol.appendChild(li);
    });
    header.appendChild(ol);

    cardBody.appendChild(header);
    cardDiv.appendChild(cardBody);
    colDiv.appendChild(cardDiv);

    return colDiv;
};

// Append each experience card to the experience section after the video
const experienceSection = document.querySelector('#experience');

// Append the dynamically created experience cards
experiences.forEach(experience => {
    const card = createExperienceCard(experience);
    experienceSection.appendChild(card);
});
