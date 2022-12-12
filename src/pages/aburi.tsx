import React from "react";

import CardAddress from "@/components/card-address/CardAddress";
import HeroSectionSM from "@/components/hero-section-sm/HeroSectionSM";
import Layout from "@/components/layout/Layout";
import PageShape from "@/components/page-shape/PageShape";
import Seo from "@/components/Seo";

export default function AburiPage() {
  return (
    <Layout>
      <Seo templateTitle="Aburi" />

      <main>
        <div className="accra-page">
          <PageShape />
          <HeroSectionSM
            image="/images/header-bg/accra-bg.jpg"
            name="Aburi"
            desc="Event guide"
          />
          <div className="lg:p-4">
            <CardAddress
              title="Welcome reception"
              date="27 January (Evening)"
              desc="An exclusive welcome cocktail reception with participants for the Presidential and Business Executives’ Dialogues"
              image="/images/avatar-icon.svg"
              name="Hosted by KGL Group"
              location="Kempinski Hotel, Accra, Ghana"
            />
            <CardAddress
              title="Banquet & Awards"
              date="27 January (Evening)"
              desc="Official Banquet, Awards ceremony, and Launch of the Africa Investment Promotion Agencies."
              image="/images/avatar-icon.svg"
              name="AfDB and GIPC"
              location="Kempinski Hotel, Accra, Ghana"
              byInvitation
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
