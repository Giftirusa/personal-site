import * as React from 'react';
import { AppStoreIcon, ArrowRightIcon, PlayStoreIcon, WebStoreIcon } from './icons';
import { ProjectDataType, ProjectsData } from '../helpers/data';
import { Link } from 'gatsby';
import { Tooltip } from './tooltip';

interface GridContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  gridClassName?: string;
}

export const GridContainer = (props: GridContainerProps) => {
  const { title, children, gridClassName, ...rest } = props;

  return (
    <div {...rest}>
      { title ? <p className="mb-4">{ title }</p> : null }
      <div className={`grid grid-cols-2 gap-5 ${gridClassName || ''}`}>
        { children }
      </div>
    </div>
  )
}

export interface ProjectItemProps extends ProjectDataType, Omit<React.HTMLAttributes<HTMLDivElement>, keyof ProjectDataType> {}

export const ProjectItem = (props: ProjectItemProps) => {
  const { title, link, image, className = '', ...rest } = props;

  return (
    <Link className={`overflow-hidden ${className}`} to={link} {...rest as any}>
      <div className="overflow-hidden md:h-[201px] rounded-lg mb-2">
        <img className="transition duration-500 ease-in-out hover:scale-115" height="auto" src={image} />
      </div>
      <span className="flex items-center">
        <span className="flex-1">
          { title }
        </span>
        <ArrowRightIcon size={16} className="opacity-50" />
      </span>
    </Link>
  )
}

export const ProjectLists = () => {
  return (
    <GridContainer title="Selected Work">
      { ProjectsData.map((project, index) => {
        return <ProjectItem className="mb-2" key={index} {...project} />
      }) }
    </GridContainer>
  )
}

export type ProjectPlatform = 'web' | 'android' | 'ios';
export interface ProjectDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  type: string;
  description: string;
  links: Record<ProjectPlatform, string>;
  role: string;

}

export const ProjectDescription = (props: ProjectDescriptionProps) => {
  const { type, description, links, role, className, ...rest } = props;

  const linkIcons: Record<ProjectPlatform, React.ReactNode> = {
    web: <WebStoreIcon />,
    android: <PlayStoreIcon />,
    ios: <AppStoreIcon />
  }

  return (
    <div className={`gap-4 md:gap-0 flex flex-wrap ${className}`} {...rest}>
      <div className="w-full md:w-[40%]">
        <p className="font-medium text-lg underline text-primary-yellow mb-1.5">
          {type}
        </p>
        <div className="flex gap-x-1.5">
          { Object.keys(links).map((platform, index) => {
            const linkUrl = links[platform as ProjectPlatform];

            if (!linkUrl) return null;
            
            if (linkUrl.startsWith('tooltip:')) {
              return <Tooltip key={index} content={linkUrl.replace('tooltip:', '')} triggerElement={linkIcons[platform]} />
            }

            return <Link target="_blank" key={index} to={linkUrl}>
              { linkIcons[platform] }
            </Link>
          }) }
        </div>
      </div>

      <div className="w-full md:w-[60%]">
        <p>{ description }</p>
        { role ? <p className="mt-2.5"><span className="opacity-60">Role:</span> { role }</p> : null }
      </div>
    </div>
  )
}