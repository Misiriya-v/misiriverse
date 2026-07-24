import AchievementCard from "./AchievementCard";
import { achievements } from "./achievementsData";

const AchievementGrid = () => {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {achievements.map((achievement, index) => (
        <AchievementCard
          key={achievement.id}
          achievement={achievement}
          index={index}
        />
      ))}
    </div>
  );
};

export default AchievementGrid;