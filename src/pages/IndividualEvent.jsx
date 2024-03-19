import React from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useSnapshot } from "valtio";
import { state } from "../App";
import { TopText } from "../components/TopText";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/individualEventPage.css";

export const IndividualEvent = () => {
  const isImage = (url) => {
    return /\.(jpeg|jpg|gif|png)$/i.test(url);
  };
  const isVideo = (url) => {
    return /\.(mp4|ogg|webm)$/i.test(url);
  };
  const navigation = useNavigate();
  const { events } = useSnapshot(state);
  const { id } = useParams();
  const filterEvent = events.filter((event) => event.id == id);
  if (filterEvent.length < 1) {
    navigation("/events");
    return;
  }
  const singleEvent = filterEvent[0];
  return (
    <motion.div>
      <TopText text={singleEvent.title} />
      <motion.div className="indeventpage">
        <Carousel useKeyboardArrows={true}>
          {singleEvent.img.map((URL, index) => (
            <div className="slide eventpageImg" key={index}>
              { isImage(URL) ? <img alt="sample_file" src={URL} key={index} /> : isVideo(URL) && <video controls>
              <source src={URL} type="video/mp4" />
              Your browser does not support the video tag.
            </video> }
            </div>
          ))}
        </Carousel>
        <p className="eventdescription">Report</p>
        <p>{singleEvent.report}</p>
        {singleEvent.achievement?.length > 0 && (
          <>
            <p className="eventdescription">Achievement</p>
            <p>{singleEvent.achievement}</p>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};
