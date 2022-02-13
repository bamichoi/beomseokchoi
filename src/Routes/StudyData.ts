interface IStudyData {
  id: number;
  title: string;
  summary: string;
  skills: string[];
  period: string;
  date: string;
  projectUrl: string;
  thumb: string;
  academy: string;
  academyUrl: string;
}

interface IStudy {
  studies: IStudyData[];
}

export const StudyData: IStudy = {
  studies: [
    {
      id: 1,
      title: "KokoaTalk Challenge",
      summary: "Cloning KakaoTalk UI with HTML5, CSS3",
      skills: ["HTML5", "CSS3", "Flexbox", "Github"],
      period: "2 weeks",
      date: "Jan 26 2021",
      projectUrl: "https://bamichoi.github.io/kokoa-clone-challenge/",
      thumb: "",
      academy: "Nomad Coders",
      academyUrl: "https://nomadcoders.co/",
    },
    {
      id: 2,
      title: "Vanilla JS Challenge",
      summary:
        "Cloning 'Momentum', a Chrome App, using HTML5, CSS3 and Vanila JS",
      skills: ["Vanilla JS"],
      period: "2 weeks",
      date: "Feb 1 2021",
      projectUrl: "https://bamichoi.github.io/vanilla-js-challenge/",
      thumb: "",
      academy: "Nomad Coders",
      academyUrl: "https://nomadcoders.co/",
    },
    {
      id: 3,
      title: "Python Challenge",
      summary: "Creating web scrapper to find a job using Python",
      skills: ["Python, Flask, BeautifulSoup"],
      period: "2 weeks",
      date: "Mar 15 2021",
      projectUrl: "",
      thumb: "",
      academy: "Nomad Coders",
      academyUrl: "https://nomadcoders.co/",
    },
    {
      id: 4,
      title: "Youtube Clone Challenge",
      summary: "Cloning Youtube with Node.js",
      skills: ["Node", "Express", "Pug", "MongoDB"],
      period: "6 weeks",
      date: "Nov 1 2021",
      projectUrl: "",
      thumb: "",
      academy: "Nomad Coders",
      academyUrl: "https://nomadcoders.co/",
    },
    {
      id: 5,
      title: "React.js Challenge",
      summary: "Cloning Frontend of Netflix using React.js",
      skills: ["React", "Hooks"],
      period: "2 weeks",
      date: "Dec 26 2021",
      projectUrl: "https://bamichoi.github.io/nomflix/",
      thumb: "",
      academy: "Nomad Coders",
      academyUrl: "https://nomadcoders.co/",
    },
  ],
};
