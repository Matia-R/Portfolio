let projectItems = [
    {
        title: "Digital Portfolio",
        imgUrl: process.env.PUBLIC_URL + '/img/portfolio_img.png',
        description: "A blurb about my Portfolio Website, on my Portfolio website. A Computer Science student might call that a bit ‘recursive’. All jokes aside, this project was challenging but a lot of fun to make. My biggest takeaway from this experience was getting to learn React and leverage hooks and states for a more dynamic UI. I also found React to be incredibly useful for UI component reusability which allowed me to focus on improving my styling skills. I plan to add to this site periodicacally and use it as a hub to showcase my future experiences and projects. Please take a look at my code if you’re interested and feel free to leave feedback. I’m always eager to improve my projects and learn from others!",
        tags: [
            "JavaScript",
            "Node.js",
            "React.js",
            "HTML5",
            "CSS",
            "Bootstrap",
            "Netlify"
        ],
        linkUrl: "https://github.com/Matia-R/Portfolio",
        linkText: "View Code"
    },
    {
        title: "Advantage Academy",
        imgUrl: process.env.PUBLIC_URL + '/img/advantage_academy_img.png',
        description: "Advantage Academy is an online tutoring business I co-founded with the goal of providing safe and affordable assistance to high school students during the Covid-19 pandemic. Since our launch in 2020, our client base has quadrupled, and we’ve been fortunate enough to welcome a second and third wave of tutors to our team. In addition to managing our tutoring team, I’ve leveraged my technical background to build and maintain the company website as well as devise automated solutions to our billing and payroll processes. Going forward we plan to expand the business to reach more high schools across the province and eventually offer services to university students.",
        tags: [
            "TypeScript",
            "Express.js",
            "Google Developer APIs",
            "Webflow",
            "HTML5",
            "CSS"
        ],
        linkUrl: "https://www.advantageacademy.ca/",
        linkText: "Visit Website"
    },
    {
        title: "Raven Trade",
        imgUrl: process.env.PUBLIC_URL + '/img/raven_trade_img.png',
        description: "Raven Trade is small web app with a theme inspired by Carleton University's mascot. Raven Trade aims to mimic popular stock brockerage platforms such as Questrade and Wealth Simple. I built this app with a good friend of mine, and it was a first experience in the world of web development for both of us. Together, we learned the fundamentals of JavaScript, templating technologies such as PUG and Jade, REST API development, Node.js, and git collaboration. While the app certainly has its shortcomings, it was a great introduction to many critical web technologies and laid the foundation for my experience as an Automation Developer the following summer.",
        tags: [
            "JavaScript",
            "Node.js",
            "Pug.js",
            "CSS"
        ],
        linkUrl: "https://github.com/Matia-R/RavenTrade",
        linkText: "View Code"
    },
    {
        title: "Sociallect",
        imgUrl: process.env.PUBLIC_URL + '/img/sociallect_img.png',
        description: "Sociallect is a Software Startup I co-founded in 2020 with some close colleagues from university. Our main objective is to develop tools and services that help small businesses create more effective Social Media marketing with Machine Learning. Since we started, I’ve contributed by developing our company website as well as researching options for web infrastructure and hosting. In doing so, I’ve educated myself on cloud technologies and obtained an AWS cloud practitioner certification. We are still in very early R&D stages and do not have a public presence yet, but if you’re interested in the project, please leave me a message and I’d be happy to discuss.",
        tags: [
            "JavaScript",
            "Webflow",
            "HTML5",
            "CSS"
        ],
        linkUrl: "/contact",
        linkText: "Learn More"
    },
]
  
export default projectItems;