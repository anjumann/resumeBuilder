import React from "react";

// components

import CardLineChart from "../../Components/DashboardComp/cards/CardLineChart";
import CardBarChart from "../../Components/DashboardComp/cards/CardBarChart.js";
import CardPageVisits from "../../Components/DashboardComp/cards/CardPageVisits.js";
import CardSocialTraffic from "../../Components/DashboardComp/cards/CardSocialTraffic.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
