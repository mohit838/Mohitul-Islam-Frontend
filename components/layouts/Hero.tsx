import { Download, Send } from "lucide-react";
import Link from "next/link";
import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
} from "react-icons/ri";
import { Button } from "../ui/button";
import CounterBadge from "./CounterBadge";
import DevImage from "./DevImage";
import SocialIcon from "./SocialIcon";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-cover bg-no-repeat bg-bottom dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Text */}
          <div className="flex flex-col justify-center max-w-[600px] mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Frontend Engineer
            </div>
            <h1 className="h1">Hello, I'm Mohit</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              I'm Mohit, a passionate frontend engineer with almost 2 year of
              hands-on experience. I specialize incrafting dynamic and
              responsive websites using React with a focus on Next.js. My
              commitment to excellence extends to staying updated on industry
              trends and adhering to the highest standards of code quality.
            </p>

            {/* Button */}
            <div className="flex flex-col md:flex-row gap-y-3 md:flex-grow gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={"/contact"}>
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Link href={"/"}>
                <Button
                  variant={"secondary"}
                  className="gap-x-2"
                >
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>

            {/* Social Medica */}
            <SocialIcon
              contiainerStyles={`flex gap-x-6 mx-auto xl:mx-0`}
              iconsStyles={`text-foreground text-[22px] hover:text-primary transition-all`}
            />
          </div>

          {/* Image */}
          <div className="hidden xl:flex relative">
            {/* Badge 1 */}
            <CounterBadge
              contiainerStyles={`absolute top-[24%] -left-[5rem]`}
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText={"Years of experience"}
            />

            {/* Badge 2 */}
            <CounterBadge
              contiainerStyles={`absolute top-[80%] -left-[1rem]`}
              icon={<RiTodoFill />}
              endCountNum={3}
              endCounterText={""}
              badgeText={"Finnished Projects"}
            />

            {/* Badge 3 */}
            <CounterBadge
              contiainerStyles={`absolute top-[55%] -right-8`}
              icon={<RiTeamFill />}
              endCountNum={9}
              endCounterText={""}
              badgeText={"Happy Clients"}
            />

            <div className="bg-hero_shape_light dark:bg-hero_shape_dark bg-no-repeat absolute -top-1 -right-2 w-[500px] h-[500px]"></div>
            {/* Dev Image */}
            <DevImage
              contiainerStyles={`bg-hero_shape w-[510px] h-[460px] bg-no-repeat bg-bottom relative`}
              imgSrc={`/assets/hero/mohitul.png`}
            />
          </div>
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
