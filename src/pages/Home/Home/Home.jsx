import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import BossCatagory from "../BossCatagory/BossCatagory";
import Catagory from "../Catagories/Catagory";
import Feature from "../Features/Feature";
import Testimonial from "../Testimonial/Testimonial";
import PopulerMenu from "../populerMenu/PopulerMenu";


const Home = () => {
    return (
        <div>
             <Helmet>
             <title>  Bistro|Home  </title>
            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <BossCatagory></BossCatagory>
            <PopulerMenu></PopulerMenu>
            <Feature></Feature>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;