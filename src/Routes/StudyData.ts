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
}

interface IStudy {
  studies: IStudyData[];
}

export const StudyData: IStudy = {
  studies: [
    {
      id: 1,
      title: "KokoaTalk Clone Challenge",
      summary: "Cloning KakaoTalk UI with HTML5, CSS3",
      skills: ["HTML5", "CSS3", "Flexbox", "Github"],
      period: "2 weeks",
      date: "Jan 26 2021",
      projectUrl: "",
      thumb: "",
      academy: "Nomad Coders",
    },
  ],
};
