document.addEventListener("DOMContentLoaded", function() {
    const portfolio = document.getElementById("portfolio");

    const projects = [
        {
            title: "SAT-Test Taking Platform",
            shortIntro: "500+ student user SAT test taking app for an education company in Vietnam; developed with 2 other FAANG engineers",
            intro: "Developed a safety app with 3 others that provides real-time notifications, mental health support, incident reporting, and navigation assistance to enhance on-campus security for students. It leverages AI for real-time updates and emergency features.",
            skills: "Web App Development, AI Integration, Campus Safety Solutions",
            language: "Spring Boot, Reactjs, Firestore, AWS, Digital Ocean",
            libraries: "Claude 3 Hakku, Open Router Llama 3, OpenCV, AWS (Amazon Elastic Container Services, Amazon Elastic Container Registry, Amazon Kinesis, AWS Bedrock)",
            githubLink: "https://chisat.org",
            imageSrc: "assets/images/work-experience/sat-test.png"
        },
        {
            title: "Campus Hero App",
            shortIntro: "Enhancing campus safety with real-time alerts, mental health support, and AI-powered emergency tools.",
            intro: "Developed a safety app with 3 others that provides real-time notifications, mental health support, incident reporting, and navigation assistance to enhance on-campus security for students. It leverages AI for real-time updates and emergency features.",
            skills: "Mobile App Development, AI Integration, Campus Safety Solutions",
            language: "Python, Flask, Swift, React.js",
            libraries: "Claude 3 Hakku, Open Router Llama 3, OpenCV, AWS (Amazon Elastic Container Services, Amazon Elastic Container Registry, Amazon Kinesis, AWS Bedrock)",
            githubLink: "https://devpost.com/software/campus-hero-app",
            imageSrc: "assets/images/projects/campus.jpg"
        },
        {
            title: "RAG Chatbot",
            shortIntro: "AI-personalized RAG chatbot based on uploaded documents. Computer vision model integrated for image-to-text extraction.",
            intro: "Develop a retrieval-augmented generation chatbot in which users can upload their own documents and ask questions based on the uploaded files. Files are stores as vectorized chunks in a database.",
            skills: "Chatbot Design, Large Language Models, Database System",
            language: "Python, Flask, React.js, HTML, CSS",
            libraries: "LangChain, ChromaDB, Docker, AWS, OpenAI API, OpenAI Embedding",
            githubLink: "https://github.com/Tommy0201/WebApp_RAG_Chatbot",
            imageSrc: "assets/images/projects/ragChatbot.png"
        },
        {
            title: "VU Stock Exchange Platform",
            shortIntro: "Experience live stock trading, portfolio management, and real-time market updates on a custom-built platform.",
            intro: "The platform allows admin to add customized stocks (customizable) symbol, name, price, volume. Meanwhile, users can log in, buy and sell stocks, transfer and withdraw money from their (fake) banking account, read stock news, and see real-time stock data through graphs",
            skills: "Database System Design, Real-time Data Representation Design, Web Design",
            language: "Python, Flask, Javascript, MyQSL, HTML, CSS",
            libraries: "REST API, Threading, Pandas, Numpy,  ",
            githubLink: "https://github.com/Tommy0201/VU-STOCK-EXCHANGE/tree/main",
            imageSrc: "assets/images/projects/stockmerged.png"
        },
        {
            title: "Cocktail Recommendation Chatbot",
            shortIntro: "Personalized cocktail recommendations and instant answers, powered by AI and taste profiling.",
            intro: "The main feature is how the chatbot recommends cocktail based on tastes, weight, and alcohol preferences based on vectorization and the data of 100 classic cocktails. Aside from that, the chatbot can answer any questions related to cocktail using its own data and AI-powered engine",
            skills: "Web Scraping, Data Science, Database System, Chatbot Design",
            language: "Python, Flask, React.js, HTML, CSS",
            libraries: "BeautifulSoup, sklearn, Numpy, Pandas, OpenAI",
            githubLink: "https://github.com/Tommy0201/CocktailChatBot-Flask-App/tree/main",
            imageSrc: "assets/images/projects/cocktailChatbot.png"
        },
        {
            title: "Word Education and Unemployment",
            shortIntro: "Analyzing global data to uncover the relationship between education levels and unemployment rates.",
            intro: "A data science project that seeks to explore potential correlation between education rate and unemployment rate around the world.",
            skills: "Data preprocessing, Data wrangling, Data visualization.",
            language: "R and code in R studio.",
            libraries: "dply, ggplot2, tydr, rvest, stringr, plotly.",
            githubLink: "https://github.com/Tommy0201/World-Education-Unemployment",
            imageSrc: "assets/images/projects/data science proj.png"
        },
        {
            title: "Film Recommendation System",
            shortIntro: "Predicts movie preferences using user ratings and genre-based clustering for smarter recommendations.",
            intro: "A simple recommendation system that collects users' ratings of movies and the movies' genres and then applies k-mean clustering to predict any user's potential recommended movies list.",
            algorithm: "K-mean Clustering.",
            methods: "Clustering and elbow method.",
            language: "pandas and numpy.",
            mlLibrary: "sklearn.",
            githubLink: "https://github.com/Tommy0201/Film_Recommendation_Using_Kmeans",
            imageSrc: "assets/images/projects/film_rec_pic.png"
        },
        // {
        //     title: "WeatherApp Forecast",
        //     shortIntro: "Accurate weather tracking with location-based updates and 5-day forecasts.",
        //     intro: "A simple weather app that shows weather based on location. Also forecast the weather in the next 5 days based on given data.",
        //     skills: "Web Scraping, Data Science, LLMs.",
        //     language: "Python, Flask, React.js, HTML, CSS",
        //     libraries: "OpenWeatherMap API",
        //     githubLink: "https://github.com/Tommy0201/Weather_App_TommyNg",
        //     imageSrc: "assets/images/projects/weatherApp.png"
        // },
        // {
        //     title: "Villanova University Calories Tracker",
        //     intro: "Allows Villanova Students to track their calories by adding the food to their 'cart'. The cart will display their total calories and macros (protein, carb, fiber). Students can type in their name and have their cart saved in the dropdown menu to the right.",
        //     frontend: "HTML, CSS.",
        //     javascriptLibrary: "ReactJs.",
        //     platform: "Firebase.",
        //     githubLink: "https://github.com/Tommy0201/VU_Calo_Trackers",
        //     imageSrc: "assets/images/projects/vu-calo-123.png"
        // }
    ];

    let htmlContent = `<h2 class="section__title--projects">Projects</h2>`;
    htmlContent += `<div class="projects-wrapper">`;  // Start horizontal scroll container

    projects.forEach((project, index) => {
        htmlContent += `
            <div class="project-one" data-index="${index}">
                <h4 class="project-one__title">${project.title}</h4>
                <img src="${project.imageSrc}" class="project-one__image" />
                <p class="project-one__intro">${project.shortIntro}</p>
                <p class="project-one__intro">${project.language}</p>
                <div class="project-one__buttons">
                    <a href="${project.githubLink}" target="_blank" class="project-one__button">View Code</a>
                </div>
            </div>
        `;
    });

                        // <button class="see-more-btn" data-index="${index}">See More</button>


    htmlContent += `</div>`;

    // Modal container
    htmlContent += `
        <div id="project-modal" class="modal hidden">
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <div id="modal-details"></div>
            </div>
        </div>
    `;

    portfolio.innerHTML = htmlContent;

    // Modal functionality
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-details');
    const closeModal = document.querySelector('.modal-close');

    document.querySelectorAll('.see-more-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const project = projects[button.dataset.index];

            modalContent.innerHTML = `
                <h2>${project.title}</h2>
                <img src="${project.imageSrc}" style="width: 100%; max-width: 500px;" />
                <p>${project.intro}</p>
                ${project.skills ? `<p><strong>Skills:</strong> ${project.skills}</p>` : ""}
                ${project.language ? `<p><strong>Language:</strong> ${project.language}</p>` : ""}
                ${project.libraries ? `<p><strong>Libraries:</strong> ${project.libraries}</p>` : ""}
                ${project.algorithm ? `<p><strong>Algorithm:</strong> ${project.algorithm}</p>` : ""}
                ${project.methods ? `<p><strong>Methods:</strong> ${project.methods}</p>` : ""}
                ${project.mlLibrary ? `<p><strong>ML Library:</strong> ${project.mlLibrary}</p>` : ""}
                ${project.frontend ? `<p><strong>Frontend:</strong> ${project.frontend}</p>` : ""}
                ${project.javascriptLibrary ? `<p><strong>JS Library:</strong> ${project.javascriptLibrary}</p>` : ""}
                ${project.platform ? `<p><strong>Platform:</strong> ${project.platform}</p>` : ""}
                <a href="${project.githubLink}" target="_blank" class="project-one__button">View</a>
            `;

            modal.classList.remove('hidden');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
