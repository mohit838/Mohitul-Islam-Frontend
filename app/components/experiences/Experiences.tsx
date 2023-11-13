import CardExp from "../common/CardExp";

const Experiences = () => {
  return (
    <section>
      <div className="section-padding">
        {/* Section Title */}
        <div className="section-title">Experiences</div>

        {/* Section Content */}
        <div className="all-exp-area">
          {/* Educations */}
          <div>
            <CardExp />
          </div>

          {/* Middle Bar */}
          <div className="w-[2px] h-10 bg-black"></div>

          {/* Job Experiences */}
          <div>
            <CardExp />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
