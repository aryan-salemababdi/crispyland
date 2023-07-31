
import {
  useState,
  useEffect
} from "react"
import Banner from "../../modules/Banner/Banner";
import WhyUs from "../../modules/WhyUs/WhyUs";
import AboutUs from "../../modules/AboutUs/AboutUs";

const LandingPage = () => {

  const [backgroundImageIndex, setBackgroundImageIndex] = useState<number>(0);

  const arrayImage = [1,10]

  function updateBackgroundImage() {

    backgroundImageIndex > 0
        ? setBackgroundImageIndex(0)
        : setBackgroundImageIndex(backgroundImageIndex + 1)


}

useEffect(() => {
    const interval = setInterval(updateBackgroundImage, 4000);
    return () => clearInterval(interval);
},);


  return (
    <>
      <Banner image={`images/${arrayImage[backgroundImageIndex]}.jpeg`} />
      <WhyUs />
      <AboutUs />
    </>
  )
}

export default LandingPage;