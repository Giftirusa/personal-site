// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, HeadFC, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Badge } from "../components/badge"
import { Button } from "../components/button"
import { ArrowUpRightIcon } from "../components/icons"
import { ProjectLists } from "../components/list"
import { SocialLinks } from "../helpers/base"

type DataProps = {}

const Home: React.FC<PageProps<DataProps>> = (props) => (
  <Layout pageProps={props}>
    <div className="px-2 py-24 md:py-28">
      <Badge text="Open to Professional Collaborations" />
      <p className="text-[1.375rem] md:text-2xl font-medium my-2.5">
        Crafting Digital Solutions with Passion
      </p>
      <p className="text-[0.9rem] md:text-base text-light-gray mb-6 max-w-[450px] font-normal">
        I’m Gift, a dedicated mathematics and computer science student from 🇰🇪 Kenya.
        I develop user-focused apps and websites that tackle real-world problems and am always eager to learn and grow.
        {' '}
        <Link to="/about" className="text-primary-green font-semibold underline tracking-wide text-sm">Learn more</Link>
      </p>
      <Link to={SocialLinks.mail}>
        <Button rightIcon={<ArrowUpRightIcon size={18} />}>
          Connect now
        </Button>
      </Link>
    </div>

    <ProjectLists />

  </Layout>
)

export const Head: HeadFC<DataProps> = () => <Seo title="Home" />

export default Home;
