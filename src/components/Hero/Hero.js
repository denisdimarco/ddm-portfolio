import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
      <LeftSection>
          <SectionTitle main center>
              Welcome to <br />
              Denis Di Marco's Portfolio
          </SectionTitle>
          <SectionText>
              I'm a full-stack developer.
          </SectionText>
          <Button onClick={() => window.open("https://www.linkedin.com/in/denisdimarco/", "_blank")}>
              Learn More
          </Button>
      </LeftSection>

  </Section>
);

export default Hero;