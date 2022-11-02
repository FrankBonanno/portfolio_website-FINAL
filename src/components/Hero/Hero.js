import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There! <br />
        I'm Frank Bonanno
      </SectionTitle>
      <SectionText>
        I am an apprentice web developer and computer engineering student at West Virginia University. I am currently a junior expected to graduate in 2023.
        Click Learn More to send me an email with questions!
      </SectionText>

      <Button onClick={() => window.location = 'mailto:frank.bonanno@mail.wvu.edu'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;