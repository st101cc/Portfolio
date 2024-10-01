export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Project',
      href: '#project',
    },
    {
      id: 6,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const myProjects = [
    {
      title: 'London Cafe Database',
      desc: 'Collected 451 independent and chain cafe data (location, reviews, rating) in London using Google Maps’s Nearby Search API to obtain data within 50,000 meters from the center of each borough',
      subdesc: 'Stored collected data in DB browser and formulated SQL queries to obtain a list of best-recommended cafes in each borough and the top 10 rated cafes by consumers in London',
      href: 'https://github.com/lse-st207/project-at2023-group5.git',
      texture: '/textures/project/project1.png',
      spotlight: '/assets/spotlight1.png',
    },
    {
      title: 'Public Perception of LSE on Reddit',
      desc: 'Implemented Reddit API to scrape 800+ posts in the subreddit “TheLse”, cleaned data using NLTK and string libraries, and visualized collected data with word cloud and bar charts',
      subdesc: 'Analyzed the public\'s interest in LSE\'s master\'s program, LSE\'s application process, and accommodation choices by looking at the most common words in post titles and contents',
      href: 'https://github.com/st101cc/reddit/tree/main',
      texture: '/textures/project/project2.png',
      spotlight: '/assets/spotlight2.png',
    },
    {
      title: 'eBay Auction Outcome Prediction',
      desc: 'Queried eBay API and stored listings of selected categories (Harry Potter books and wall clocks) in SQLite database',
      subdesc: 'Predicted selling price with 5 classifiers and regressors and found that seller feedback is the most influential factor on the probability of sale when compared to length of auction and end time',
      href: 'https://github.com/ml24330/dss2022',
      texture: '/textures/project/project3.png',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 1 : isMobile ? 1 : 1,
      deskPosition: isMobile ? [0.1, -4, -2.7] : [0.1, -5, -2.7],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Software Enginner Intern',
      pos: 'J.P. Morgan Chase & Co',
      duration: 'June 2024 - Aug 2024',
      title: "Developed a trigger framework to prevent the platform from reaching governor limits and created a dashboard to monitor and alert failing endpoints in the organization using out-of-the-box functionalities. ",
      icon: '/assets/jpmorgan.png',
      animation: 'salute',
    },
    {
      id: 2,
      name: 'Data Science Project Lead',
      pos: 'LSESU Data Science Society',
      duration: 'Sept 2023 - June 2024',
      title: "Led multiple teams of peers from diverse coding backgrounds to complete data science projects, including airline sentiment analysis, art generation using GANs, and stock market prediction.",
      icon: '/assets/dssoc.jpeg',
      animation: 'clapping',
    },
  ];