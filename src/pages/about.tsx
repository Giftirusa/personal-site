// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, HeadFC, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Button } from "../components/button"
import { ArrowUpRightIcon } from "../components/icons"
import { SocialLinks } from "../helpers/base"

type DataProps = {}

const About: React.FC<PageProps<DataProps>> = (props) => {
  const spanClassName = "text-white pb-1 px-1.5 rounded bg-[#1d1d1d] border border-border text-xs leading-none";

  return (
    <Layout pageProps={props}>
      <div className="px-2 pt-20 md:pt-28 pb-8">
        <p className="text-[1.375rem] md:text-2xl font-medium my-2.5">
          Excited to learn
        </p>
        <p className="text-[0.9rem] md:[0.95rem] text-light-gray mb-6 max-w-[450px] font-normal leading-6">
          As a curious maths & computer science student, I’ve contributed to various projects, taking them from concept to implementation. Currently, I work mostly with  <span className={spanClassName}>React</span>, <span className={spanClassName}>Python</span>, <span className={spanClassName}>Node.js</span>, and <span className={spanClassName}>REST</span>.

          I'm highly motivated especially when it comes to solving problems. It's like a puzzle to me, and finding the right pieces is my kind of adventure.<br /><br />

          So feel free to reach out 
        </p>
        <Link to={SocialLinks.mail}>
          <Button rightIcon={<ArrowUpRightIcon size={18} />}>
            Connect now
          </Button>
        </Link>
      </div>
    </Layout>
  )
}

export const Head: HeadFC<DataProps> = () => <Seo title="About" />

export default About;
