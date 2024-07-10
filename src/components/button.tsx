import { Link } from "gatsby"
import * as React from "react"
import { DownloadIcon } from "./icons"
// @ts-ignore
import resumePDF from '../assets/resume.pdf';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  icon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button = (props: ButtonProps) => {
  const { icon, rightIcon, children, className, ...rest } = props;

  return (
    <button
      className={`text-sm h-[40px] rounded-full border border-dark-faded bg-black flex items-center px-4 hover:bg-[#000207] transition-colors duration-200 ease-in-out ${className || ''}`}
      {...rest}
    >
      { icon ? <span className="mr-1.5">{ icon }</span> : null }
      <span className="pb-1.5">{ children }</span>
      { rightIcon ? <span className="ml-1.5">{ rightIcon }</span> : null }
    </button>
  )
}

export const ResumeButton = (props: Partial<ButtonProps>) => {
  return (
    <a download={'Gift-Irusa-Resume'} href={resumePDF}>
      <Button rightIcon={<DownloadIcon size={18} />} {...props}>
        View Resume
      </Button>
    </a>
  )
}

interface SocialIconProps extends React.HTMLAttributes<HTMLAnchorElement> {
  icon: React.ReactNode;
  to: string;
  iconClassName?: string;
}

export const SocialIcon = (props: SocialIconProps) => {
  const { to, icon, iconClassName = '', ...rest } = props;

  return (
    <Link to={to} target="_blank" {...rest}>
      <span className={`rounded-full flex items-center justify-center bg-dark-faded hover:bg-black transition ease-in-out border border-slate-700 w-7 h-7 ${iconClassName}`}>
        { icon }
      </span>
    </Link>
  )
}