import { garallyItems } from "@/app/data/Data";
import GallaryCard from "../common/GallaryCard";

const Gallary = () => {
  return (
    <section className="section-padding">
      {/* Section Title */}
      <div className="section-title">Gallary</div>

      {/* Section Content */}
      <div className="grallary-section-card">
        {garallyItems.slice(0, 2)?.map((item) => (
          <GallaryCard
            key={item?.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallary;
