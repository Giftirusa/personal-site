import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { HeadFC, Link, PageProps } from "gatsby"
import { Button } from "../components/button"

type DataProps = {}

const NotFoundPage: React.FC<PageProps<DataProps>> = () => (
  <Layout hideFooter>
    <div className="py-28 flex flex-col items-center justify-center">
      <h1 className="text-2xl text-center">
        404: <span className="text-light-gray opacity-80">Not Found</span>
      </h1>
      <p className="mt-2 max-w-[375px] mx-auto text-base text-light-gray text-center">
      Whoopsie! You've landed in a digital dimension where pages occasionally decide to take a break
      </p>
      <Link to="/">
        <Button className="mt-6">Go back home</Button>
      </Link>
    </div>
  </Layout>
)

export const Head: HeadFC<DataProps> = () => <Seo title="404: Not Found" />

export default NotFoundPage

