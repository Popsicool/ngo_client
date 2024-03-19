import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import { FramerMagnetic } from "./FramerMagnetic";
import { links } from "./Nav";
import sectionAnimate from "./variants/slidingVariants";
import buttonVariant from "./variants/slidingVariants";
import LoadingSpinner from "./Spinner";

const MotionLink = motion(Link);
export const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("")
  const submitForm = (e) => {
    e.preventDefault();
    var regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if (email === "" || !regex.test(email)) {
      setLoading(false);
      return;
    }
    const formdata = new FormData();
    formdata.append("email", email);
    const requestOptions = {
      method: "POST",
      body: formdata,
    };
    fetch("https://www.api.schf.org.ng/subscribe", requestOptions);
    setMsg("Thank you for subscribing!")
    setEmail("")
    setLoading(false);
  };
  return (
    <motion.footer
      variants={sectionAnimate}
      initial="start"
      whileInView="end"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <div className="join-form-div">
        <br />
        {loading && <LoadingSpinner />}
        <form className="join-form" onSubmit={submitForm}>
          <input
            placeholder="Your email address"
            className="sub-inp"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <motion.button
            className="sub-btn"
            variants={buttonVariant}
            whileHover="hover"
            disabled = {loading ? true : false}
          >
            Subscribe
          </motion.button>
        </form>
      </div>
          <p className="succ">{msg}  {msg.length > 0 && <i className="fa fa-times" style={{cursor: "pointer"}} onClick = {() => setMsg("")}></i>}</p>
      <div className="footer-top">
        <div className="footer-top-1">
          <p>
            Every click, share, and donation brings us closer to helping people
            with sickle cell disease. Join the movement and make a difference
            today!
          </p>
        </div>
        <div className="footer-top2">
          <ul>
            {links.map((link) => {
              return (
                <li key={link.path}>
                  <MotionLink
                    to={link.path}
                    whileHover={{
                      scale: 1.3,
                      originX: 0,
                      color: "#f8e112",
                    }}
                  >
                    {link.text}
                  </MotionLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-top2">
          <h3>Contact Us</h3>
          <p>EMAIL: support@schf.org.ng</p>
          <p>WORKING DAYS:</p>
          <p>MONDAYS - FRIDAYS</p>
          <p>WORKING HOURS:</p>
          <p>9:00AM - 6:00PM</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="bbP">Copyright {new Date().getFullYear()}</p>
        <div className="bbP">
          <p>Built by </p>
          <FramerMagnetic>
            <Link to="https://www.popsicool.fog-agric.com">Popsicool</Link>
          </FramerMagnetic>
        </div>
        <div className="nav-top-right icon-down">
          <FramerMagnetic>
            <Link to="mailto:akinolasamson1234@gmail.com">
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
            </Link>
          </FramerMagnetic>
          <FramerMagnetic>
            <Link to="https://www.linkedin.com/in/popsicool">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"
                />
              </svg>
            </Link>
          </FramerMagnetic>

          <FramerMagnetic>
            <Link to="https://wa.me/+2348069482021">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                />
              </svg>
            </Link>
          </FramerMagnetic>
          <FramerMagnetic>
            <Link to="https://www.github.com/Popsicool">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"
                />
              </svg>
            </Link>
          </FramerMagnetic>
          {/* <FramerMagnetic>
            <Link to="https://twitter.com/Samson_Akinola1">
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
          </FramerMagnetic> */}
        </div>
      </div>
    </motion.footer>
  );
};
