import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Browse the web\n'}
            <span className="text-primary-500">Without the pain</span>
          </>
        }
        description="Browse websites the way that makes sense."
        button={
          <Link href="https://chrome.google.com/webstore/detail/fixedui/ccjnldpmocfclkchljacnjmbgdfcgbmi">
            <a>
              <Button xl>Download the Extension</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
