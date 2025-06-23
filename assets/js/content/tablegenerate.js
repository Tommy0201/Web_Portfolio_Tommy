const data = {
    "2024-2025": {
        "Fall": [
            ["CSC 5930", "Large Language Models"],
            ["CSC 4505", "Applied Machine Learning"],
            ["CSC 4480", "Database Systems"],
            ["CSC 5993", "Computer Vision (Independent)"],
            ["VSB 1015", "Business Dynamics"],
        ],
        "Spring": [
            ["VSB 2004", "Financial Accounting"],
            ["PHI 2180", "Computer Ethics"],
            ["AAH 2009", "Art History"],
            ["CHI 3412", "Classical Chinese Philosophy"],
            ["VSB 2006", "Business Strategy"],
        ],
    },    
    "2023-2024": {
        "Fall": [
            ["ECO 1001", "Intro to Microeconomies"],
            ["ETH 2050", "Ethics The Good Life"],
            ["STAT 4380", "Data Science"],
            ["PHY 2410/11", "Physics Mechanics"],
            ["CSC 2400", "Computer System I"],
            ["CSC 1800", "Organization of Programming Languages"]
        ],
        "Spring": [
            ["CSC 4700", "Software Engineering"],
            ["CSC 2405", "Computer System II"],
            ["PHY 2412/13", "Physics Electricity & Magnetism"],
            ["ECO 1002", "Intro to Macroeconomies"],
            ["ENG 1975", "Writing Ghostly Matters"],

        ],
    },
    "2022-2023": {
        "Fall": [
            ["ACS1000", "Augustanian Cultural Seminar"],
            ["THL1000", "Global Religious Experience"],
            ["HIS 1165", "Global Migration"],
            ["CSC 1052", "Data Structure and Algorithms"],
            ["CSC 1300", "Discrete Structure"],
        ],
        "Spring": [
            ["ACS1001", "Augustanian Cultural Seminar"],
            ["PHI1000", "Knowledge, Reality, Self"],
            ["CSC 1700", "Analysis of Algorithms"],
            ["CSC 2053", "Platform Based Computing"],
            ["MAT 2400", "Linear Algebra for Computing"],
            ["STAT 4310", "Statistics Method"]
        ]
    }
};


function generateTable(data) {
    let html = '<table>';
    for (let year in data) {
        html += `<th colspan="3">${year}</th>`;
        for (let semester in data[year]) {
            const courses = data[year][semester];
            html += `<tr><th rowspan="${courses.length}" class="Semester">${semester}</th>`;
            courses.forEach((course, index) => {
                if (index === 0) {
                    console.log(course);
                    html += `<td class="course-code">${course[0]}</td>`;
                    html += `<td class="course-name">${course[1]}</td></tr>`;
                } else {
                    html += `<tr><td class="course-code">${course[0]}</td>`;
                    console.log(course[0]);
                    html += `<td class="course-name">${course[1]}</td></tr>`;
                    console.log(course[1]);

                }
            });
        }
    }
    html += '</table>';
    return html;
}

document.getElementById('table-container').innerHTML = generateTable(data);
