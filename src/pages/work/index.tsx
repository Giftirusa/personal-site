// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, HeadFC, Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { ProjectLists } from "../../components/list"

type DataProps = {}

const Work: React.FC<PageProps<DataProps>> = (props) => (
  <Layout pageProps={props}>
    <div className="pt-12">
      <ProjectLists />
    </div>
  </Layout>
)

export const Head: HeadFC<DataProps> = () => <Seo title="Work" />

export default Work;
