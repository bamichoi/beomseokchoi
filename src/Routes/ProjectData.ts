interface IProjectData {
  id: number;
  name: string;
  year: string;
  period: string;
  lang: string[];
  icon: string;
  thumb: string;
  summary: string;
  url: string;
}

interface IProject {
  projects: IProjectData[];
}

export const ProjectData: IProject = {
  projects: [
    {
      id: 1,
      name: "CINEACCA",
      year: "2021",
      period: "5 months",
      lang: ["Django", "Javascript", "SCSS"],
      icon: `${process.env.PUBLIC_URL}/img/projects/cineacca.png`,
      thumb: `${process.env.PUBLIC_URL}/img/projects/cineaccathumb.png`,
      summary: "Student film streaming plattform",
      url: "https://cineacca.com",
    },
    {
      id: 2,
      name: "To Do Arancia",
      year: "2021",
      period: "1 day",
      lang: ["React.js", "TypeScript"],
      icon: `${process.env.PUBLIC_URL}/img/projects/todoarancialogo.png`,
      thumb: `${process.env.PUBLIC_URL}/img/projects/todoaranciathumb.png`,
      summary: "Cute To Do App",
      url: "https://bamichoi.github.io/todo/",
    },
    {
      id: 3,
      name: "WORMOL_",
      year: "2021",
      period: "2 days",
      lang: ["HTML", "CSS", "Javascript"],
      icon: `${process.env.PUBLIC_URL}/img/projects/wormollogo.png`,
      thumb: `${process.env.PUBLIC_URL}/img/projects/wormolthumb.png`,
      summary: "Official Website of Music Artist Wormol_",
      url: "https://wormol.000webhostapp.com/",
    },
  ],
};
