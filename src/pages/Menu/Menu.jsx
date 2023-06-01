import { Helmet } from "react-helmet";
import Cover from "../shared/Cover/Cover";
import menuimg from '../../assets/menu/banner3.jpg'
import dessertimg from '../../assets/menu/dessert-bg.jpeg'
import pizzaimg from '../../assets/menu/pizza-bg.jpg'
import saladimg from '../../assets/menu/salad-bg.jpg'
import soupimg from '../../assets/menu/soup-bg.jpg'
import UseMenu from "../../Hooks/UseMenu";
import SectionTile from "../../components/sectionTitle/SectionTile";
import MenuCatagory from "./MenuCatagory/MenuCatagory";



const Menu = () => {
     const [popular] =UseMenu();
     const dessert = popular.filter(item=>item.category ==='dessert');
     
     const soup = popular.filter(item=>item.category ==='soup');
     const salad = popular.filter(item=>item.category ==='salad');
     const pizza = popular.filter(item=>item.category ==='pizza');
     const offered = popular.filter(item=>item.category ==='offered');
     
     
    return (
        <div>
              <Helmet>
            <title>

               Bistro|Menu 
          </title>
           

        </Helmet>
        <Cover img={menuimg} title='our menu'></Cover>
        <SectionTile 
          subheading={"Don't miss"} heading={'Todays offer'}
        ></SectionTile>
        <MenuCatagory items={offered}></MenuCatagory>
        <MenuCatagory items={dessert} img={dessertimg} title='Dessert'></MenuCatagory>
        <MenuCatagory items={soup} img={soupimg} title='Soup'></MenuCatagory>
        <MenuCatagory items={salad} img={saladimg} title='Salad'></MenuCatagory>
        <MenuCatagory items={pizza } img={pizzaimg} title='Pizza'></MenuCatagory>
        
       
       
        </div>

       

    );
};

export default Menu;