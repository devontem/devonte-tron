let positions = [
  {
    role: "Software Engineer",
    description:
      "Implemented features within the Evite chat messaging system using ReactJS, Redux, and Python",
    year: "2018",
    company: "Evite"
  },
  {
    role: "Software Engineer",
    description:
      "Integrated 2017-2018 Live Streaming NFL Playoff games on Yahoo homepage, reaching 600+m monthly users",
    year: "2017",
    company: "Yahoo!"
  },
  {
    role: "Software Engineer",
    description:
      "Implemented features in Self Serve (manage account, payment, etc.) used by Koodo subscribers",
    year: "2016",
    company: "Koodo"
  },
  {
    role: "Software Developer",
    description:
      "Created and maintained multiple internal web applications using HTML, CSS, & Javascript for a Music Industry CMS",
    year: "2015",
    company: "Music Reports"
  },
  {
    role: "Software Developer",
    description:
      "Developed web applications using HTML, CSS, & Javascript for a variety of clients that interacted with a custom-built CMS system using ColdFusion ",
    year: "2015",
    company: "Creative Engine"
  },
  {
    role: "Software Developer",
    description:
      "Developed pixel-perfect web applications using HTML, CSS, & Javascript based on PSD mock-ups",
    year: "2013",
    company: "Sly & Swift"
  }
];
let resume = {
  name: "Devonte MacGlashan",
  city: "Los Angeles",
  photo_url:
    "https://avatars3.githubusercontent.com/u/3604690?s=400&u=a8842bd304ea442fa8f60e3c312294f3e14559ae&v=4",
  positions: positions,
  github_url: "https://github.com/devontem"
};
let mock_db = {
  resume,
  positions
};

module.exports = mock_db;
