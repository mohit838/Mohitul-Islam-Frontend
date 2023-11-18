import { expAndEdu } from "@/app/data/Data";
import CardExpLeft from "../common/CardExpLeft";
import CardExpRight from "../common/CardExpRight";
import { MiddleBar } from "../common/MiddleBar";

const Experiences = () => {
  return (
    <section>
      <div className="section-padding">
        {/* Section Title */}
        <div className="section-title">Experiences & Educations</div>
        {/* <div className="relative section-title flex items-center justify-center">
          Experiences & Educations
          <div className="absolute rotate-90 mt-[80px]">
            <MiddleBar />
          </div>
        </div> */}

        {/* Section Content */}
        {expAndEdu?.map((item) => (
          <div
            key={item?.id}
            className="all-exp-area"
          >
            {/* Job Experiences */}
            <div className="w-full mb-[-2rem] md:w-1/2 md:mb-0">
              <CardExpLeft duration={item?.duration} />
            </div>

            {/* Middle Bar */}
            <div className="rotate-90 md:rotate-0 mb-[-2rem] md:mb-0">
              <MiddleBar />
            </div>

            {/* Educations */}
            <div className="w-full md:w-1/2">
              <CardExpRight itemTitle={item} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
