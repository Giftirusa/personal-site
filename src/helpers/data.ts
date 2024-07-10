export interface ProjectDataType {
  id: string
  title: string
  link: string
  image: string
  primaryColor: string
  bgColor?: string;
  buttonBgColor?: string;
}

export const ProjectsData: ProjectDataType[] = [
  {
    id: 'leja',
    title: "Leja",
    link: "/work/leja",
    image: "https://i.postimg.cc/C562zSbK/leja-logo.png",
    bgColor: '#030A07',
    primaryColor: '#009166',
  },
]
