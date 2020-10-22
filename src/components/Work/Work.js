import React from "react";
import Icon1 from "../../images/AI.svg";
import Icon2 from "../../images/ML.svg";
import Icon3 from "../../images/cv.svg";
import Icon4 from "../../images/react.svg";
import Icon5 from "../../images/open.svg";
import Icon6 from "../../images/developer.svg";
import {
  WorkCard,
  WorkContainer,
  WorkH1,
  WorkH2,
  WorkIcon,
  WorkP,
  Workwrapper,
} from "./WorkElement";

const Work = () => {
  return (
    <WorkContainer id="work">
      <WorkH1>My works</WorkH1>
      <Workwrapper>
        <WorkCard>
          <WorkIcon src={Icon1} />
          <WorkH2>Artificial Intelligence</WorkH2>
          <WorkP>
            Using this technology i have made a virtual body measurement system
            that will give you measurement of your body.
          </WorkP>
        </WorkCard>
        <WorkCard>
          <WorkIcon src={Icon2} />
          <WorkH2>Machine Learning</WorkH2>
          <WorkP>
            Using this technology i have made a Fake News Detector that will
            help you tell is the news is real or fake one.
          </WorkP>
        </WorkCard>
        <WorkCard>
          <WorkIcon src={Icon3} />
          <WorkH2>Computer Vision</WorkH2>
          <WorkP>
            Using this technology i have made a harry potter invisibility cloak
            using opencv.
          </WorkP>
        </WorkCard>
        <WorkCard>
          <WorkIcon src={Icon4} />
          <WorkH2>ReactJS</WorkH2>
          <WorkP>
            Using this technology i have made clone of big companies like
            netflix,spotify,slack and amazon and covid tracker.
          </WorkP>
        </WorkCard>
        <WorkCard>
          <WorkIcon src={Icon5} />
          <WorkH2>Open Source Projects</WorkH2>
          <WorkP>
            Open Source Projects are great platform to work with different
            developer and learn and implement new things.
          </WorkP>
        </WorkCard>
        <WorkCard>
          <WorkIcon src={Icon6} />
          <WorkH2>Want to Know More</WorkH2>
          <WorkP>
            All my projects are stored in my Github. Check it out my Github to
            know more about my work.
          </WorkP>
        </WorkCard>
      </Workwrapper>
    </WorkContainer>
  );
};

export default Work;
