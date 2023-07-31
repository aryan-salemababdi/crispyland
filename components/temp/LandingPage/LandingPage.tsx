import { useState, useEffect } from "react";
import Banner from "../../modules/Banner/Banner";
import WhyUs from "../../modules/WhyUs/WhyUs";
import AboutUs from "../../modules/AboutUs/AboutUs";
import HowToOrder from "../../modules/HowToOrder/HowToOrder";
import Guide from "../../modules/Guide/Guide";

const LandingPage = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState<number>(0);

  const arrayImage = [1, 10];

  function updateBackgroundImage() {
    backgroundImageIndex > 0
      ? setBackgroundImageIndex(0)
      : setBackgroundImageIndex(backgroundImageIndex + 1);
  }

  useEffect(() => {
    const interval = setInterval(updateBackgroundImage, 4000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <Banner image={`images/${arrayImage[backgroundImageIndex]}.jpeg`} />
      <WhyUs />
      <AboutUs />
      <HowToOrder />
      <Guide />
    </>
  );
};

export default LandingPage;
