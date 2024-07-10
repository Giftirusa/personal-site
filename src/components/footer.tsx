import { Link } from "gatsby"
import * as React from "react"
import { SocialLinks } from "../helpers/base"
import { Button, ResumeButton, SocialIcon } from "./button"
import { ArrowUpRightIcon, BehanceIcon, GithubIcon, LinkedInIcon, MediumIcon, XIcon } from "./icons"


interface FooterProps {
  siteTitle?: string
}

const Footer = ({ siteTitle }: FooterProps) => (
  <footer className="mt-12">
    <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 border-y border-y-border">
      <div className="py-6 sm:border-r sm:border-r-border border-b border-b-border sm:border-b-0">
        <p className="pr-24 sm:pr-4 text-[0.9rem] mb-4">
          <span className="text-light-gray">Uncover the past: </span> See more of my work over the {' '}
          <span className="text-primary-yellow font-medium">year</span>
        </p>

        <div className="flex items-center">
          <Link to={SocialLinks.github} target="_blank">
            <Button className="mr-2" rightIcon={<GithubIcon size={18} />}>
              GitHub
            </Button>
          </Link>

          <Link to={SocialLinks.behance} target="_blank">
            <Button className="mr-2" rightIcon={<BehanceIcon size={18} />}>
              Behance
            </Button>
          </Link>
        </div>
      </div>

      <div className="sm:pl-4 py-6">
        <p className="pr-24 sm:pr-0 text-[0.9rem] mb-4">
          <span className="text-light-gray">Working Diaries: </span> See my past professional {' '}
          <span className="text-primary font-medium">experience</span>
        </p>

        <div className="flex items-center">
          <ResumeButton />
        </div>
      </div>
    </div>

    <div className="mb-4 py-6 border-b border-b-border">
      <p className="text-[0.9rem] max-w-xs mb-4">
        <span className="text-light-gray">Sense a connection:</span> Let’s connect! I’m currently {' '}
        <span className="text-primary-green font-medium">open</span> {' '}to opportunities.
      </p>

      <div className="flex items-center">
        <Link to={SocialLinks.mail}>
          <Button rightIcon={<ArrowUpRightIcon size={18} />}>
            Connect now
          </Button>
        </Link>
      </div>
    </div>

    <div className="flex items-center py-4">
      <div className="flex-1">
        <p className="text-[0.8rem] text-light-gray">
          © {new Date().getFullYear()} &middot; All right reserved
        </p>
      </div>

      <div className="gap-1.5 flex items-center">
        <SocialIcon to={SocialLinks.medium} icon={<MediumIcon size={16} />} />
        <SocialIcon to={SocialLinks.linkedin} icon={<LinkedInIcon size={16} />} />
        <SocialIcon to={SocialLinks.x} icon={<XIcon size={16} />} />
      </div>
    </div>
  </footer>
)

export default Footer
