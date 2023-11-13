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
            <div className="w-1/2">
              <CardExpLeft duration={item?.duration} />
            </div>

            {/* Middle Bar */}
            <MiddleBar />

            {/* Educations */}
            <div className="w-1/2">
              <CardExpRight itemTitle={item} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
