import { familiarWithStacks, skillStacks } from "@/app/data/Data";
import Image from "next/image";
import Link from "next/link";
import TechStacks from "../techStacks/TechStacks";

const Hero = () => {
  return (
    <section>
      <div className="section-padding">
        <div className="hero-content">
          {/* Intro Box */}
          <div className="w-3/4">
            <div className="main-title">
              <h1>Hello, I&apos;m Mohitul</h1>
              <span>
                <span className="focus-title">Frontend</span> Engineer
              </span>
            </div>
            <div className="mb-9">
              <p className="intro-para">
                I&apos;m Mohitul, a passionate frontend engineer with{" "}
                <span>1 year of hands-on experience.</span> I specialize in
                <span>crafting dynamic and responsive websites</span> using
                React with a <span>focus on Next.js</span>. My commitment to
                excellence extends to staying updated on industry trends and
                adhering to the highest <span>standards of code quality</span>.
              </p>
            </div>

            {/* My Staks */}
            <div className="skill-stacks">
              <div className="stack-title">My Stacks are:</div>
              <div className="single-stacks">
                {skillStacks?.map((skill) => (
                  <TechStacks
                    key={skill?.id}
                    skill={skill}
                  />
                ))}
              </div>

              <div className="single-stacks">
                {familiarWithStacks?.map((skill) => (
                  <TechStacks
                    key={skill?.id}
                    skill={skill}
                  />
                ))}
              </div>
            </div>

            {/* Connect Btn */}
            <div className="social-connect-btn">
              <Link
                href="https://www.linkedin.com/in/mohit449/"
                target="_blank"
              >
                <div className="custom-connect-btn-linkedin">{"LinkedIn"}</div>
              </Link>
              <Link
                href="https://github.com/mohit838"
                target="_blank"
              >
                <div className="custom-connect-btn">{"GitHub"}</div>
              </Link>
            </div>
          </div>

          {/* Image Box */}
          <div className="w-1/4">
            <div className="profile-image">
              <Image
                src={"mohitul-islam.webp"}
                alt={"mohitul-islam"}
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
