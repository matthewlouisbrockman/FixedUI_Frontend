import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Too many sites have silly features"
    description="Lots of sites have features that don't make sense. Let's make the web more usable."
  >
    <VerticalFeatureRow
      title="Twitter Search"
      description="A Twitter intern noticed how little sense Twitter search makes. This makes search for tweets for someone effortless."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Other stuff"
      description="At some point this will do other stuff."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="But not yet"
      description="Seriously, I'm just doing this for funs."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
