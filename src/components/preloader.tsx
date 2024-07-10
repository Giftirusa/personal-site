/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { motion } from "framer-motion";

import { Container } from "./themed"
import { getSessionStorage, setSessionStorage } from "../helpers/base";

interface PreloaderProps {
   children?: React.ReactNode
   onCompleted?: () => void;
}

const containerVariant = {
   hidden: {
      scale: 0,
      opacity: 0,
   },
   visible: {
      scale: 1,
      opacity: 1,
      transition: {
         duration: .5,
         ease: "easeInOut",
         delayChildren: 1,
         staggerChildren: 1
      }
   },
   scaleUp: {
      scale: 1.5,
      transition: {
         duration: .5,
         delay: 8
      }
   },
   exit: {
      scale: 20,
      opacity: 0,
      transition: {
         duration: 0.5,
         ease: "easeInOut"
      }
   }
}


const iconVariant = {
   hidden: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
   },
   visible: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
      transition: {
         default: { duration: 1, ease: "easeInOut" },
         fill: { duration: .3, ease: [1, 0, 0.8, 1] }
      }
   }
}

const iconEVariantRed = {
   hidden: {
      fill: "#fff"
   },
   visible: {
      fill: "#F42177",
      transition: {
         duration: .2,
         delay: 6,
         ease: "easeIn"
      }
   }
}

const iconEVariantBlue = {
   hidden: {
      fill: "#fff"
   },
   visible: {
      fill: "#3B64F4",
      transition: {
         duration: .2,
         delay: 6,
         ease: "easeIn"
      }
   }
}

const iconEVariantYellow = {
   hidden: {
      fill: "#fff"
   },
   visible: {
      fill: "#FCC05E",
      transition: {
         duration: .2,
         delay: 6,
         ease: "easeIn"
      }
   }
}

const iconEVariantGreen = {
   hidden: {
      fill: "#fff"
   },
   visible: {
      fill: "#18D680",
      transition: {
         duration: .2,
         delay: 6,
         ease: "easeIn"
      }
   }
}

const Preloader = ({ children, onCompleted }: PreloaderProps) => {
   const [completed, setCompleted] = React.useState(false);

   const moveIconE = {
      hidden: {
         x: 0,
         scale: 1
      },
      visible: {
         x: 90,
         transition: {
            duration: .4,
            ease: "easeIn",
            delay: 6.5,
         }
      },
      scaleUp: {
         scale: 2.1,
         transition: {
            duration: .7,
            ease: "easeIn",
            delay: 7
         },
         transitionEnd: () => animationEnd()
      }
   }

   const animationEnd = () => {
      setCompleted(true);
      // setSessionStorage("loaded", true);
      onCompleted?.();
   }

   React.useEffect(() => {
      if (getSessionStorage('loaded')) {
         onCompleted?.();
         setCompleted(true);
      }
   }, [])

   if (getSessionStorage('loaded') || completed) {
      return null;
   }

   return (
      <div className="fixed w-full h-full top-0 left-0 z-50 flex items-center justify-center bg-dark">
         <Container>
            <motion.div className="w-lg">
               <motion.svg
                  variants={containerVariant}
                  initial="hidden"
                  animate={["visible"]}
                  exit="exit"
                  width="180"
                  viewBox="0 0 260 121"
                  className="w-full origin-center scale-0"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">

                  <motion.path
                     variants={iconVariant}
                     className="nipx"
                     d="M252.385 76.894V70.294H258.605V76.894H252.385Z"
                  />

                  <motion.path
                     variants={iconVariant}
                     className="nipx"
                     d="M224.626 53.613L224.167 54.2227L224.634 54.8259L241.707 76.894H233.856L220.077 59.0429L219.285 58.0171L218.493 59.0432L204.723 76.894H196.864L213.946 54.8261L214.413 54.2228L213.954 53.613L196.858 30.874H204.715L218.485 49.2634L219.285 50.3324L220.085 49.2634L233.856 30.874H241.722L224.626 53.613Z"
                  />

                  <motion.path 
                     variants={iconVariant}
                     className="nipx"
                     d="M169.165 29.854V29.8541L169.178 29.8539C172.142 29.8141 175.082 30.3795 177.819 31.5155C180.557 32.6515 183.033 34.3342 185.098 36.4606L185.105 36.4678L185.112 36.4749C189.559 40.8747 191.815 46.6276 191.815 53.624C191.815 60.6157 189.522 66.3626 185.108 70.7769L185.101 70.7838L185.094 70.7909C183.036 72.9316 180.562 74.6294 177.825 75.7803C175.087 76.9312 172.144 77.511 169.174 77.484V77.484H169.165C162.038 77.484 156.405 75.1161 152.301 70.5181L150.555 68.5619V71.184V92.124H144.145V30.974H150.555V36.164V38.7901L152.302 36.8291C156.406 32.2217 162.038 29.854 169.165 29.854ZM180.503 66.8304L180.509 66.8245C183.878 63.4871 185.555 59.0357 185.555 53.674C185.555 48.3149 183.88 43.8309 180.506 40.5112C177.218 37.2664 172.785 35.447 168.165 35.447C163.546 35.447 159.113 37.266 155.825 40.5102C154.072 42.22 152.696 44.2766 151.783 46.5487C150.874 48.8114 150.446 51.2383 150.525 53.6752C150.452 56.0952 150.885 58.5039 151.794 60.748C152.707 63.0005 154.08 65.0375 155.825 66.7284C159.104 69.975 163.526 71.8051 168.14 71.8249C172.756 71.8447 177.196 70.0512 180.503 66.8304L180.503 66.8304Z"
                  />

                  <motion.path
                     variants={iconVariant}
                     className="nipx"
                     d="M125.685 76.894V30.874H132.295V76.894H125.685Z"
                  />

                  <motion.path
                     variants={iconVariant}
                     className="nipx"
                     d="M78.315 37.214V40.0288L80.0909 37.8449C83.8369 33.2381 89.1156 30.874 95.855 30.874C101.265 30.874 105.638 32.6646 108.886 36.128C112.142 39.6014 113.835 44.2218 113.835 49.954V76.894H107.485V51.266C107.651 47.4295 106.372 43.67 103.9 40.7304L103.893 40.7211L103.884 40.712C102.708 39.3798 101.25 38.3257 99.6161 37.6257C97.9881 36.9283 96.226 36.5999 94.4563 36.664C89.5745 36.6681 85.5809 38.2887 82.6564 41.591C79.7332 44.8917 78.315 49.56 78.315 55.314V76.894H71.965V31.984H78.315V37.214Z"
                  />

                  <motion.g
                     id="logoE"
                     variants={moveIconE as any}
                     initial="hidden"
                     animate={["visible", "scaleUp"]}>

                     <motion.path
                        className="blue"
                        variants={iconEVariantBlue}
                        initial="hidden"
                        animate="visible"
                        d="M51.8205 60.4475C50.3882 63.8842 47.874 66.7599 44.6594 68.6383C41.4449 70.5168 37.7053 71.2954 34.0081 70.8561C30.3109 70.4168 26.8579 68.7836 24.173 66.2042C21.488 63.6248 19.7177 60.24 19.1306 56.5634H11.1696C11.7975 62.3529 14.4267 67.7415 18.6035 71.7993C22.7803 75.8572 28.2427 78.3297 34.0478 78.7901C39.853 79.2505 45.6367 77.6699 50.4009 74.3212C55.1651 70.9724 58.6109 66.0656 60.1435 60.4475H51.8205Z"
                     />

                     <motion.path
                        className="red"
                        variants={iconEVariantRed}
                        initial="hidden"
                        animate="visible"
                        d="M60.6039 49.1967H52.4856C51.4681 45.6148 49.3102 42.4624 46.3392 40.2178C43.3682 37.9732 39.7462 36.7587 36.0226 36.7587C32.299 36.7587 28.6769 37.9732 25.7059 40.2178C22.7349 42.4624 20.577 45.6148 19.5596 49.1967H11.4609C12.5467 43.4774 15.5944 38.3164 20.0783 34.6037C24.5622 30.8911 30.2011 28.8596 36.0226 28.8596C41.844 28.8596 47.4829 30.8911 51.9668 34.6037C56.4507 38.3164 59.4984 43.4774 60.5843 49.1967H60.6039Z"
                        fill="black"
                     />

                     <motion.path
                        className="yellow"
                        variants={iconEVariantYellow}
                        initial="hidden"
                        animate="visible"
                        d="M61.025 53.8679C61.0263 54.7684 60.9777 55.6683 60.8794 56.5635H19.1306C18.988 55.6721 18.9169 54.7706 18.9181 53.8679C18.9165 52.2885 19.1337 50.7165 19.5635 49.1967H60.604C60.8902 50.7372 61.0312 52.3011 61.025 53.8679V53.8679Z"
                        fill="black"
                     />

                     <motion.path
                        className="green"
                        variants={iconEVariantGreen}
                        initial="hidden"
                        animate="visible"
                        d="M11.4609 49.1967C11.168 50.7366 11.0205 52.3005 11.0201 53.8679C11.0189 54.7684 11.0675 55.6683 11.1657 56.5635H0.395004V49.1967H11.4609Z"
                        fill="black"
                     />
                  </motion.g>
               </motion.svg>
            </motion.div>
         </Container>
      </div>
   )
}

export default Preloader
