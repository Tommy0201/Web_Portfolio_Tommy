// Array of Work Experiences
const experiences = [
    {
        title: 'Software Engineer Intern',
        location: 'SoFi',
        date: '(May, 2025 - Aug, 2025)',
        imageSrc: 'assets/images/work-experience/sofilogo.png',
        tasks: [
            "Technologies: Java, Spring Boot, ReactJS, PostgreSQL, GraphQL, SourceGraph",
            "💸 Debt Sales Automation",
            "🤖 AI-Powered SQL Suggestions"
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
            "Technologies: Python, Pandas, NumPy, Scikit-learn",
            "🌐 Social Visibility Recommendation System",
            "🗄️ BIPOC-Owned Businesses Vector Database",
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
            "Technologies: Python, LangGraph, LangChain, Flask, React, gRPC",
            "🎙️ Multi-Agent AI Voicebot for Customized Conversations", 
            "🖼️ Content-Based AI Image Suggestion System",
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
            "Technologies: Python, Transformer, NLTK, Pandas, BeautifulSoup, Concurrent, HuggingFace",
            "🤖 Fine-tuned 3 LLMs, +43% BLEU score",
            "🌍 Built datasets for Nigerian languages",
            "📄 Paper accepted at LoResMT, NAACL"
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
            "Technologies: Python, NLTK, Pandas, NumPy",
            "🗣️ AMR System for More Human-Like Text",
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

    const ul = document.createElement('ul');
    experience.tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task;
            ul.appendChild(li);
    });
    header.appendChild(ul);

    // experience.tasks.forEach(task => {
    // const div = document.createElement('div');
    // div.textContent = task;
    // header.appendChild(div);
    // });

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
