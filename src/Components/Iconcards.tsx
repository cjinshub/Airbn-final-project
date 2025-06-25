/** @format */

import Icon1 from "../assets/Amazingviews.png";
import Icon2 from "../assets/cain2.png";
import Icon3 from "../assets/Beachfront.png";
import Icon4 from "../assets/skiiying.png";
import Icon5 from "../assets/piano2.png";
import Icon6 from "../assets/Frame 29 (3).png";
import Icon7 from "../assets/omg2.png";
import Icon8 from "../assets/Amazingpools.png";
import Icon9 from "../assets/luxe2.png";
import Icon10 from "../assets/boat2.png";
import Icon11 from "../assets/lakefront.png";
import Icon12 from "../assets/treehouse.png";
import Icon13 from "../assets/navigation.png";
import Icon14 from "../assets/Button.png";

function Iconcards() {
  const icons = [
    Icon1,
    Icon2,
    Icon3,
    Icon4,
    Icon5,
    Icon6,
    Icon7,
    Icon8,
    Icon9,
    Icon10,
    Icon11,
    Icon12,
    Icon13,
    Icon14,
  ];

  const isVisible = (index: number) => {
    // Icons 0,1,12,13 are visible on all screens
    if ([0, 1, 12, 13].includes(index))
      return "block";

    // Icons 2–5 (index 2 to 5) are visible from md screens up
    if (index >= 2 && index <= 5)
      return "hidden md:block";

    // Icons 6–11 are visible only on lg screens
    return "hidden lg:block";
  };

  return (
    <>
      <div className="flex gap-16 mb-5 cursor-pointer mt-5 ml-5 h-10 w-20">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`icon-${index}`}
            className={`${isVisible(index)} h-10 w-10`}
          />
        ))}
      </div>
    </>
  );
}

export default Iconcards;
