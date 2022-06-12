import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

// components

import CardStats from "../cards/CardStats";

export default function HeaderStats() {

  return (
    <>
      {/* Header */}
      <div className="relative bg-sky-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="data"
                  statTitle=""
                  statArrow="up"
                  statPercent="-"
                  statPercentColor="text-emerald-500"
                  statDescripiron="-"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="data"
                  statTitle="-"
                  statArrow="down"
                  statPercent="-"
                  statPercentColor="text-red-500"
                  statDescripiron="-"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="data"
                  statTitle="-"
                  statArrow="-"
                  statPercent="-"
                  statPercentColor="text-orange-500"
                  statDescripiron="-"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="data"
                  statTitle="-"
                  statArrow="-"
                  statPercent="-"
                  statPercentColor="text-emerald-500"
                  statDescripiron="-"
                  statIconName="fas fa-percent"
                  statIconColor="bg-sky-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
