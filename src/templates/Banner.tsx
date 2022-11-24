import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="No idea where this is going. But you can help out!"
      subtitle="Check it out on Github."
      button={
        <Link href="https://github.com/matthewlouisbrockman/FixTwitterSearch">
          <a>
            <Button>Contribute Code</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
