import { FeaturesGrid } from "@/components/marketing/features/FeaturesGrid";
import { Footer } from "@/components/marketing/footer/Footer";
import { Hero } from "@/components/marketing/hero/Hero";
import { Navbar } from "@/components/marketing/navbar/Navbar";
import PricingSection from "@/components/marketing/pricing/PricingSection";
import HomePageLayout from "@/components/shared/layouts/HomePageLayout";
import SharedHead from "@/components/shared/SharedHead";
import { Box } from "@mantine/core";
import { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <SharedHead />
      <Box maw={1400} m="0 auto" pt={"lg"} px={"md"}>
        <Navbar />
      </Box>
      <Hero />
      <div id="features">
        <FeaturesGrid />
      </div>
      <PricingSection />
      <Footer />
    </>
  );
};

export default Home;
Home.getLayout = (page) => {
  return <HomePageLayout>{page}</HomePageLayout>;
};
