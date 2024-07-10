// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, HeadFC, Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Image, ImageRow } from "../../components/image"
import { ProjectDescription } from "../../components/list"

type DataProps = {}

const Work: React.FC<PageProps<DataProps>> = (props) => {
  const imageStyle = {
    bg: '#ABB7CD',
    bgAlt: '#ABB7CD'
  }

  return (
    <Layout pageProps={props}>
      <div className="flex flex-col gap-y-5 pt-12">
        <Image bg={imageStyle.bg} src="https://i.postimg.cc/Y24Zsm7G/big-logo.png" className="min-h-[250px]"  />

        <ProjectDescription
          type="Frontend/Backend"
          links={{
            ios: "",
            android: "https://play.google.com/store/apps/details?id=com.okoleainternational.okoleamobile&hl=en_IN&pli=1",
            web: "https://leja.co.ke/",
          }}
          description="LEJA app is a cash management and bookkeeping mobile application that helps small and micro businesses take charge of their finances. You can send money to other MPesa users, pay bills, buy MPesa float at affordable transaction rates, and buy airtime."
          role="Full-stack Intern"
          className="py-4"
        />

        <Image bg={imageStyle.bg} src="https://i.imgur.com/unDi2Hp.jpeg" />

        {/* <Image bg={imageStyle.bg} src="https://d3dga506664sw7.cloudfront.net/d1tgi7%2Fpreview%2F59137085%2Fmain_large.png?response-content-disposition=inline%3Bfilename%3D%22main_large.png%22%3B&response-content-type=image%2Fpng&Expires=1720372170&Signature=Y3BQNeE7MUUrLhUzKJhy09WZI3R14FdF75Xjm2y~rsMqKXDedERYj3~85RF2FeAt2CiFOWkGuEvXxRfj0WvZkMGFVjcaKtTkMhErE21kwSLOUcs363THh87gv9qKkvbef4b30xtNdE0lFEOyzb4D7k6C7P0URXeOsXmnf-dovr111zr8JWDyjnuJipmVHoFF9wKtvKtIA1e1TyGUo4SMI1UFSyMTgmk9VUxTmb2TcbaSLnJGZHydPHfuJ2DjXGX1bj4OkwEmr0Sgk0LAAHF2MQfrvXP80m9umIXUftA3P60rXGdJvdTl3QjlueTlaIJKwTVqqqZzWI38XTz0Oa-hvA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ" />

        <Image bg={imageStyle.bg} src="https://d15o6n34hy6cq1.cloudfront.net/n5bfi7%2Fpreview%2F59137031%2Fmain_large.png?response-content-disposition=inline%3Bfilename%3D%22main_large.png%22%3B&response-content-type=image%2Fpng&Expires=1720371715&Signature=Bot1IPbZRuq7LJeor6TqQ-ynd5E2UO--Ze29OIH0Pp3e-saoRT0Syx6WfHxqKniPX54Wq4YT4x1I7NzX-sBz-Vqt5LiypCo1rRYvz6gyVf3-kWY5GGSHTzrXlddcGyhs-2vnZJDxqR~joeE24doeuzCgsT~bPcUrXQGL0cNQyfwEWi51ALvgNNgAxAWe0j6IvMBuGCvFnjLUpgOnBK0z7bTE~REA2zgPBsJIGQoDJTTNalmlZLD3wa~aoUyUmPom~JM3EWWC23M9DxabYxMHjmEdsAInjuI3qxGCiqZiLReWJMeRzMCV2vTcTOgqTsTTZuwVYLjj-SYR1Ynlycl8wA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ" /> */}

        <Image bg={imageStyle.bg} src="https://pouch.jumpshare.com/preview/2FMTzQQr3X2Q4f9TgoYbVKxYSkHFIzcFaxhAQ0GLFYbgW4LeRxw5l7_SA_KfLGPNdL4Tzaez5rDDv3Ng-SLsxj02Wne5xsuybODMpLQhqAs" />


      </div>
    </Layout>
  )
}

export const Head: HeadFC<DataProps> = () => <Seo title="Work" />

export default Work;
