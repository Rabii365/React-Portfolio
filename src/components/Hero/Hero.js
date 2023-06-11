import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Welcome to my digital domain, where creativity and code intertwine.
        Explore my portfolio showcasing immersive web experiences. Witness my
        passion, dedication, and commitment to transforming ideas into tangible
        realities. Let's embark on an inspiring journey together!
      </SectionText>
      <Button
        onClick={() => (window.location = "mailto:rabiithebig@gmail.com")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
