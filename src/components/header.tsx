import * as React from "react"
import { Link, PageProps } from "gatsby"
import { ArrowRightIcon, BehanceIcon, GithubIcon, LogoIcon, MediumIcon, XIcon } from "./icons"
import { Button, ResumeButton, SocialIcon } from "./button";
import { SocialLinks } from "../helpers/base";
import { usePageBg } from "../hook/use-bg";
import { ProjectsData } from "../helpers/data";

interface HeaderProps extends Partial<PageProps> {}

const HeaderLink = ({ to, children, active, className }: { to: string; children: React.ReactNode; active?: string; className?: string }) => {
  const highlightCls = {
    yellow: 'bg-primary-yellow',
    green: 'bg-primary-green',
  }


  return (
    <Link to={to} className={`flex items-center ${className || ''}`}>
      <span className={`rounded-full h-1 w-1 mr-1.5 inline-block ${active ? highlightCls?.[active] || 'bg-primary-yellow' : 'bg-slate-700'}`} />
      <span className={`transition duration-200 ${active ? 'text-light underline' : 'text-light-gray'} hover:text-light text-[0.95rem] md:text-lg leading-none pb-2`}>
        { children }
      </span>
    </Link>
  )
}

export const AboutHeader = () => {
  return (
    <div className="px-4 md:px-0 md:pl-2 flex items-center w-full mx-auto">
      
      <Link to="/">
        🏠
      </Link> 

      <div className="ml-3 md:ml-5  flex items-center flex-1 gap-x-4 md:gap-x-5">
        <HeaderLink active="yellow" to="/about">
          about
        </HeaderLink>

        <HeaderLink to="/work">
          work
        </HeaderLink>
      </div>

      <div className="flex gap-x-1.5 md:gap-x-2">
        <SocialIcon iconClassName="w-8 h-8 md:w-8 md:h-8" icon={<MediumIcon size={16} />} to={SocialLinks.medium} />
        <SocialIcon iconClassName="w-8 h-8 md:w-8 md:h-8" icon={<GithubIcon size={16} />} to={SocialLinks.github} />
        <SocialIcon iconClassName="w-8 h-8 md:w-8 md:h-8" icon={<XIcon size={16} />} to={SocialLinks.x} />
      </div>
    </div>
  )
}

export const WorkHeader = () => {
  return (
    <div className="px-4 md:px-0 md:pl-2 flex items-center w-full mx-auto">
      
      {/* <Link to="/">
        <LogoIcon width={36} />
      </Link> */}

      <Link to="/">
        🏠
      </Link> 


      <div className="ml-3 md:ml-5 flex items-center flex-1 gap-x-4 md:gap-x-5">
        <HeaderLink to="/about">
          about
        </HeaderLink>

        <HeaderLink active="green" to="/work">
          work
        </HeaderLink>
      </div>

      <ResumeButton className="px-2 md:px-4 text-xs md:text-sm h-[36px]" />
    </div>
  )
}

export const WorkDetailsHeader = ({ id }: { id: string }) => {
  const projectIndex = ProjectsData.findIndex((project) => project.id === id);

  const project = ProjectsData?.[projectIndex];
  
  const nextProject = ProjectsData?.[projectIndex + 1] || ProjectsData?.[0];


  return (
    <div className="px-4 md:px-0 md:pl-2 flex items-center w-full mx-auto">
      
      {/* <Link to="/">
        <LogoIcon width={36} />
      </Link> */}

      <Link to="/">
        🏠
      </Link> 


      <div className="ml-3 md:ml-5 flex items-center flex-1 gap-x-4 md:gap-x-5">
        <HeaderLink to="/about">
          about
        </HeaderLink>

        <HeaderLink to="/work">
          work
        </HeaderLink>
      </div>

      <Link to={nextProject.link}>
        <Button
          rightIcon={<ArrowRightIcon size={16} />}
          className="border-0"
          style={{ backgroundColor: project?.buttonBgColor || project.primaryColor }}>
          See next
        </Button>
      </Link>
    </div>
  )
}

const Header = (props: HeaderProps) => {
  const { location } = props;

  const isHome = location?.pathname === '/';

  const isAbout = location?.pathname === '/about/';

  const isWork = location?.pathname === '/work/';

  const isWorkDetail = location?.pathname?.includes('/work/') && !isWork;

  const workPath = location?.pathname?.split?.('/')?.[2] || '';

  usePageBg(location?.pathname)

  const renderContent = () => {
    if (isAbout) {
      return <AboutHeader />
    }

    if (isWorkDetail) {
      return <WorkDetailsHeader id={workPath} />
    }

    if (isWork) {
      return <WorkHeader />
    }

    return (
      <div className="flex items-center justify-between w-8/12 mx-auto">
        <HeaderLink to="/about">
          about
        </HeaderLink>
        {/* <Link to="/">
          <LogoIcon width={36} />
        </Link> */}

      <Link to="/">
        🏠
      </Link> 


        <HeaderLink to="/work">
          work
        </HeaderLink>
      </div>
    )
  }

  return (
    <header className="right-2/4 translate-x-2/4 fixed w-full max-w-[500px] px-0 md:px-2 h-14 bg-dark-dim border border-dark-faded rounded-full flex justify-center z-50" style={{ width: 'calc(100% - 2rem)' }}>
      { renderContent() }
    </header>
  )
}

export default Header
