interface skillStacks {
  skill: {
    id: number;
    title: string;
  };
}

const TechStacks = (skill: skillStacks) => {
  return (
    <div>
      <button className="stack-btn whitespace-nowrap">
        {skill?.skill?.title}
      </button>
    </div>
  );
};

export default TechStacks;
