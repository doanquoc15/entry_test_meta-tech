import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MySlider from "./components/MySlider";
import "./App.css";
import { categoriesData, fashionData, fashionData2, shopStyleData } from "./data";
import Card from "./components/Card";
import Category from "./components/Category";
import { MdOutlineMessage } from "react-icons/md";
import Arrival from "./components/Arrival";
import ShopStyle from "./components/ShopStyle";
import Reward from "./components/Reward";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="font-[Roboto]">
      <TopBar />
      <Header />
      <Banner />
      <div className="flex px-6">
        <div className="flex mt-24 justify-center items-center min-w-8 h-8 bg-slate-300 rounded-[50%]">
          <MdOutlineMessage color="white" />
        </div>
        <div className="w-full">
          <div className="mt-6">
            <MySlider title="Best sellers" titleBtn="shop now">
              {fashionData.map((item, index) => (
                <Card key={index} data={item} />
              ))}
            </MySlider>
          </div>
          <div className="mt-6">
            <MySlider title="Up to 30% Off" titleBtn="shop Bars">
              {fashionData2.map((item, index) => (
                <Card key={index} data={item} />
              ))}
            </MySlider>
          </div>
          <div className="mt-6">
            <MySlider title="15% Off Top Categories" titleBtn="">
              {categoriesData.map((item, index) => (
                <Category key={index} data={item} />
              ))}
            </MySlider>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <Arrival />
      </div>
      <div className="w-full">
        <div className="mt-6">
          <MySlider title="Our Crew is Raving" titleBtn="">
            {shopStyleData.map((item, index) => (
              <ShopStyle key={index} data={item} />
            ))}
          </MySlider>
        </div>
      </div>
      <div className="mt-[50px]">
        <Reward />
      </div>
      <div className="mt-[40px]">
        <About />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
