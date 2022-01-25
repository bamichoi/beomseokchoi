interface IProjectData {
  name: string;
  year: string;
  period: string;
  lang: string[];
  icon: string;
  thumb: string;
  summary: string;
}

interface IProject {
  projects: IProjectData[];
}

export const ProjectData: IProject = {
  projects: [
    {
      name: "CINEACCA",
      year: "2021",
      period: "5 months",
      lang: ["Django, Javascript", "SCSS"],
      icon: `${process.env.PUBLIC_URL}/img/cineacca.png`,
      thumb: "",
      summary: "Student film streaming plattform",
    },
  ],
};
