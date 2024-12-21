import React from "react";
import NumberItem from "../component/NumberItem";
import { useTranslation } from "react-i18next";

const Statistics = () => {
  const { t } = useTranslation(); // Use translation hook

  return (
    <section className="py-12 bg-gray-500/20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-10 lg:justify-around items-center">
          <NumberItem
            number="256+"
            title={t("premium_clients")}
            description={t("description")}
          />
          <NumberItem
            number="362+"
            title={t("expert_members")}
            description={t("description")}
          />
          <NumberItem
            number="753+"
            title={t("winning_awards")}
            description={t("description")}
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
