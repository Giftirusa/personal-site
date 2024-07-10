/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import 'react-tooltip/dist/react-tooltip.css';

import * as React from "react"

import Header from "./header"
import Footer from "./footer"
import { ImagePaths } from "../helpers/base"
import { Container } from "./themed"
// import Preloader from "./preloader"
import { PageProps } from "gatsby"
import { Fade } from "./animation"

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
  hideHeader?: boolean;
  pageProps?: PageProps;
}

const Layout = ({ children, hideFooter, hideHeader, pageProps }: LayoutProps) => {
  // const [isPreloaderCompleted, setIsPreloaderCompleted] = React.useState(true);

  return (
    <div className="relative overflow-hidden">
      {/* <Preloader onCompleted={() => setIsPreloaderCompleted(true)} /> */}
      <img className="absolute -z-10 right-1/2 translate-x-1/2" src={ImagePaths.backgroundPattern} />
      <Fade>
        <Container>
          { hideHeader ? null : <Header {...pageProps} /> }
          <div className={!hideHeader ? 'pt-14' : ''}>
            <main>{children}</main>
          </div>
          { hideFooter ? null : <Footer /> }
        </Container>
      </Fade>
    </div>
  )
}

export default Layout
