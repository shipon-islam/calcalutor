import React from "react";
import { potfolio } from "../../apis";
import Heading from "../Heading";
import PotfolioCard from "../PotfolioCard";
function Potfolio() {
  return (
    <div className="box-middle">
      <Heading title="potfolio" subTitle="my work?" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {potfolio.map((item) => (
          <PotfolioCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Potfolio;
