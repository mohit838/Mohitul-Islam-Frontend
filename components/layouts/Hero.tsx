import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-cover bg-no-repeat bg-bottom dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Text */}
          <div>
            <div>Frontend Engineer</div>
            <h1 className="h1">Hello, my name is Mohit</h1>
            <p>
              I'm Mohit, a passionate frontend engineer with 1 year of hands-on
              experience. I specialize incrafting dynamic and responsive
              websites using React with a focus on Next.js. My commitment to
              excellence extends to staying updated on industry trends and
              adhering to the highest standards of code quality.
            </p>
          </div>

          {/* Image */}
          <div>Img</div>
        </div>

        {/* Social */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
