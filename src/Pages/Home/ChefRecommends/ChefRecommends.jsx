import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import RecommendItem from "./RecommendItem";

const ChefRecommends = () => {
  const [recommends, setRecommends] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setRecommends(data.slice(0, 3)));
  }, []);

  return (
    <div>
      <SectionTitle
        subHeading='Should Try'
        heading='Chef Recommends'
      ></SectionTitle>

      <div className='grid md:grid-cols-3'>
        {recommends.map((recommends) => (
          <RecommendItem
            key={recommends._id}
            recommends={recommends}
          ></RecommendItem>
        ))}
      </div>
    </div>
  );
};

export default ChefRecommends;
