import { useEffect } from "react"
import { ProjectsData } from "../helpers/data";

export const usePageBg = (pathname?: string) => {

  const updateBodyBackground = () => {
    const body = document.body;

    if (!body) {
      return;
    }

    // Use location.pathname or any logic to determine the current page
    const currentPage = pathname;

    const currentPageData = ProjectsData.find((project) => currentPage?.includes(project.id));

    // const defaultBgColor = '#0D0E0F';
    const defaultBgColor = '#0D0E0F';
    const defaultPrimaryColor = '#3B64F4';

    if (currentPageData) {
      const { primaryColor, bgColor } = currentPageData;

      body.style.backgroundColor = bgColor || defaultBgColor;
      body.style.borderTopColor = primaryColor;
    } else {
      body.style.backgroundColor = defaultBgColor; // Default background color
      body.style.borderTopColor = defaultPrimaryColor; // Default primary color
    }
  };

  useEffect(() => {
    updateBodyBackground();
  }, [pathname])
}