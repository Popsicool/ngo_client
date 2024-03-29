import React, { useState } from "react";
import "../styles/nav.css";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FramerMagnetic } from "./FramerMagnetic";
import logo from "../assets/img/ssf2.jpg";
// import logo from "../assets/img/logo.png"

export const links = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/gallery",
    text: "Gallery",
  },
  {
    path: "/events",
    text: "Events",
  },
  // {
  //   path:"/report",
  //   text: "Report"
  // },
  // {
  //   path:"/agenda",
  //   text: "Agenda"
  // },
  {
    path: "/contact",
    text: "Contact",
  },
];
const navVariance = {
  start: {
    opacity: 0,
    y: "-100vh",
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      when: "beforeChildren",
      staggerChildren: 0.5,
      type: "spring",
      stiffness: 120,
    },
  },
};
const eachLinkVariance = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    scale: [1.3, 1],
    transition: {
      duration: 0.3,
    },
  },
};
const allLinksVariance = {
  start: {
    y: "-100vh",
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.5,
      type: "spring",
      stiffness: 120,
    },
  },
};
const MotionLink = motion(Link);
export const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <motion.nav
        variants={navVariance}
        // className={width > 600 ? "nav-desk": showMenu ? "nav-mobile" : "hide"}
        className="nav-desk"
        initial="start"
        animate="end"
      >
        <div className="nav-top">
          <div className="nav-top-left">
          <Link to="mailto:support@schf.org.ng">
            <FramerMagnetic>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.29973 8.19371 4.21192 8.11766 4.14189 8.02645C4.07186 7.93525 4.02106 7.83078 3.99258 7.71937C3.96409 7.60796 3.9585 7.49194 3.97616 7.37831C3.99381 7.26468 4.03434 7.15581 4.09528 7.0583C4.15623 6.96079 4.23632 6.87666 4.33073 6.811C4.42513 6.74533 4.53187 6.69951 4.6445 6.6763C4.75712 6.65309 4.87328 6.65297 4.98595 6.67595C5.09863 6.69893 5.20546 6.74453 5.3 6.81L12 11L18.7 6.81C18.7945 6.74453 18.9014 6.69893 19.014 6.67595C19.1267 6.65297 19.2429 6.65309 19.3555 6.6763C19.4681 6.69951 19.5749 6.74533 19.6693 6.811C19.7637 6.87666 19.8438 6.96079 19.9047 7.0583C19.9657 7.15581 20.0062 7.26468 20.0238 7.37831C20.0415 7.49194 20.0359 7.60796 20.0074 7.71937C19.9789 7.83078 19.9281 7.93525 19.8581 8.02645C19.7881 8.11766 19.7003 8.19371 19.6 8.25Z"
                  fill="white"
                />
              </svg>
            </FramerMagnetic>
            </Link>
            <Link to="mailto:support@schf.org.ng">
            <p>support@schf.org.ng</p>
            </Link>
          </div>
          <div className="nav-top-right">
            <FramerMagnetic>
              <Link to="fb.com">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </FramerMagnetic>

            <FramerMagnetic>
              <Link to="fb.com">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </FramerMagnetic>
            <FramerMagnetic>
              <Link to="fb.com">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </FramerMagnetic>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="nav-bottom-left">
            <Link to="/">
              <div className="logo-wrap">
                <img src={logo} alt="sshf logo" />
              </div>
            </Link>
          </div>
          <div className="nav-bo">
            <AnimatePresence>
              <motion.ul className={!showMenu ? "hide" : ""}>
                {links.map((link) => {
                  return (
                    <MotionLink
                      variants={eachLinkVariance}
                      to={link.path}
                      key={link.path}
                      onClick={() => {
                        setShowMenu(false);
                      }}
                      whileHover={{
                        scale: 1.3,
                        originX: 0,
                        color: "#f8e112",
                      }}
                    >
                      <FramerMagnetic>{link.text}</FramerMagnetic>
                    </MotionLink>
                  );
                })}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
        
        <i
          className={showMenu ? "fa fa-times hamguer" : "fa fa-bars hamguer"}
          onClick={() => setShowMenu(!showMenu)}
          aria-hidden="true"
        ></i>
      </motion.nav>
    </>
  );
};
