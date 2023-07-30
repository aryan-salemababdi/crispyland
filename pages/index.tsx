import type { NextPage } from "next";
import {
  useState,
  useEffect
} from "react"
import LandingPage from "../components/temp/LandingPage/LandingPage";
import Layout from "../components/layout/Layout";
import Banner from "../components/modules/Banner/Banner";
const Home: NextPage = () => {

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
    <div style={{ height: "100vh" }}>
      <Banner image={`images/${arrayImage[backgroundImageIndex]}.jpeg`} />
      <Layout>
        <LandingPage />
      </Layout>
    </div>
  );
};

export default Home;
