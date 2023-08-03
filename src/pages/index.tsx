import React from "react";

import Layout from "@components/home/Layout";
import FeaturedSection from "@components/home/FeaturedSection";
import IntroSection from "@components/home/IntroSection";
import BrandSection from "@components/home/BrandSection";
import AboutSection from "@components/home/AboutSection";
import TrackSection from "@components/home/TrackSection";
import LocationSection from "@components/home/LocationSection";
import SolutionSection from "@components/home/SolutionSection";
import TestimonialSection from "@components/home/TestimonialSection";
import MoreSection from "@components/home/MoreSection";

export default function Home() {
  return (
    <Layout pageTitle="Home" pageDescription="Home page">
      <IntroSection />
      <BrandSection />
      <AboutSection />
      <FeaturedSection />
      <TrackSection />
      <LocationSection />
      <SolutionSection />
      <TestimonialSection />
      <MoreSection />
    </Layout>
  );
}
