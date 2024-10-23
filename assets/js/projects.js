document.addEventListener("DOMContentLoaded", function() {
    const portfolio = document.getElementById("portfolio");

    const projects = [
        {
            "title": "Campus Hero App",
            "intro": "Developed a safety app that provides real-time notifications, mental health support, incident reporting, and navigation assistance to enhance on-campus security for students. It leverages AI for real-time updates and emergency features.",
            "skills": "Mobile App Development, AI Integration, Campus Safety Solutions",
            "language": "Python, Flask, Swift, React.js",
            "libraries": "Claude 3 Hakku, Open Router Llama 3, OpenCV, AWS (Amazon Elastic Container Services, Amazon Elastic Container Registry, Amazon Kinesis, AWS Bedrock)",
            "githubLink": "https://devpost.com/software/campus-hero-app",
            "imageSrc": "images/heroapp.jpg"
        },
        {
            title: "RAG Chatbot",
            intro: "Develop a retrieval-augmented generation chatbot in which users can upload their own documents and ask questions based on the uploaded files. Files are stores as vectorized chunks in a database.",
            skills: "Chatbot Design, Large Language Models, Database System",
            language: "Python, Flask, React.js, HTML, CSS",
            libraries: "LangChain, ChromaDB, Docker, AWS, OpenAI API, OpenAI Embedding",
            githubLink: "https://github.com/Tommy0201/WebApp_RAG_Chatbot",
            imageSrc: "images/ragChatbot.png"
        },
        {
            title: "Villanova University Stock Exchange Platform",
            intro: "The platform allows admin to add customized stocks (customizable) symbol, name, price, volume. Meanwhile, users can log in, buy and sell stocks, transfer and withdraw money from their (fake) banking account, read stock news, and see real-time stock data through graphs",
            skills: "Database System Design, Real-time Data Representation Design, Web Design",
            language: "Python, Flask, Javascript, MyQSL, HTML, CSS",
            libraries: "REST API, Threading, Pandas, Numpy,  ",
            githubLink: "https://github.com/Tommy0201/VU-STOCK-EXCHANGE/tree/main",
            imageSrc: "images/stockmerged.png"
        },
        {
            title: "Cocktail Recommendation Chatbot",
            intro: "The main feature is how the chatbot recommends cocktail based on tastes, weight, and alcohol preferences based on vectorization and the data of 100 classic cocktails. Aside from that, the chatbot can answer any questions related to cocktail using its own data and AI-powered engine",
            skills: "Web Scraping, Data Science, Database System, Chatbot Design",
            language: "Python, Flask, React.js, HTML, CSS",
            libraries: "BeautifulSoup, sklearn, Numpy, Pandas, OpenAI",
            githubLink: "https://github.com/Tommy0201/CocktailChatBot-Flask-App/tree/main",
            imageSrc: "images/cocktailChatbot.png"
        },
        {
            title: "WeatherApp Forecast",
            intro: "A simple weather app that shows weather based on location. Also forecast the weather in the next 5 days based on given data.",
            skills: "Web Scraping, Data Science, LLMs.",
            language: "Python, Flask, React.js, HTML, CSS",
            libraries: "OpenWeatherMap API",
            githubLink: "https://github.com/Tommy0201/Weather_App_TommyNg",
            imageSrc: "images/weatherApp.png"
        },
        {
            title: "Exploring Relationship of Word Education and Unemployment",
            intro: "A data science project that seeks to explore potential correlation between education rate and unemployment rate around the world.",
            skills: "Data preprocessing, Data wrangling, Data visualization.",
            language: "R and code in R studio.",
            libraries: "dply, ggplot2, tydr, rvest, stringr, plotly.",
            githubLink: "https://github.com/Tommy0201/World-Education-Unemployment",
            imageSrc: "images/data science proj.png"
        },
        {
            title: "Film Recommendation System",
            intro: "A simple recommendation system that collects users' ratings of movies and the movies' genres and then applies k-mean clustering to predict any user's potential recommended movies list.",
            algorithm: "K-mean Clustering.",
            methods: "Clustering and elbow method.",
            libraries: "pandas and numpy.",
            mlLibrary: "sklearn.",
            githubLink: "https://github.com/Tommy0201/Film_Recommendation_Using_Kmeans",
            imageSrc: "images/film_rec_pic.png"
        },
        {
            title: "Villanova University Calories Tracker",
            intro: "Allows Villanova Students to track their calories by adding the food to their 'cart'. The cart will display their total calories and macros (protein, carb, fiber). Students can type in their name and have their cart saved in the dropdown menu to the right.",
            frontend: "HTML, CSS.",
            javascriptLibrary: "ReactJs.",
            platform: "Firebase.",
            githubLink: "https://github.com/Tommy0201/VU_Calo_Trackers",
            imageSrc: "images/vu-calo-123.png"
        }
    ];

    let htmlContent = `<h2 class="section__title--projects">Projects</h2>`;

    projects.forEach(project => {
        htmlContent += `
            <div class="project-one">
                <h4 class="project-one__title">${project.title}</h4>
                <p class="project-one__subtitle">
                    <span id="project-intro">${project.intro}</span><br><br><br>
                    ${project.skills ? `<strong>Skills:</strong> ${project.skills}<br>` : ""}
                    ${project.language ? `<strong>Programming Language:</strong> ${project.language}<br>` : ""}
                    ${project.libraries ? `<strong>Libraries:</strong> ${project.libraries}<br>` : ""}
                    ${project.algorithm ? `<strong>Linear Algebra Algorithm:</strong> ${project.algorithm}<br>` : ""}
                    ${project.methods ? `<strong>Methods:</strong> ${project.methods}<br>` : ""}
                    ${project.mlLibrary ? `<strong>Software machine learning library:</strong> ${project.mlLibrary}<br>` : ""}
                    ${project.frontend ? `<strong>Frontend:</strong> ${project.frontend}<br>` : ""}
                    ${project.javascriptLibrary ? `<strong>Javascript library:</strong> ${project.javascriptLibrary}<br>` : ""}
                    ${project.platform ? `<strong>Platform:</strong> ${project.platform}<br>` : ""}
                </p>
                <a href="${project.githubLink}" target="_blank" class="project-one__button">
                    <i class="fab fa-github"></i> 
                    View Code
                </a>
                <a href="${project.githubLink}" target="_blank" class="project-one__item">
                    <img src="${project.imageSrc}" class="project-one__image">
                </a>
            </div>
        `;
    });

    portfolio.innerHTML = htmlContent;
});
