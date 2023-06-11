import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { techStack } from "../../constants/constants";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've Worked With A Range Of Technologies In The Web Development World.
      Always Ready To Learn More!
    </SectionText>
    <div className="skillscontainer">
      <div className="skills">
        {techStack.map(({ image, title }) => (
          <div className="logos">
            <ul>
              <li>
                <img key={title} src={image} />
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Technologies;
