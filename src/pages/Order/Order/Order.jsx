import { Helmet } from "react-helmet";
import img from '../../../assets/shop/banner2.jpg'
import Cover from "../../shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import UseMenu from "../../../Hooks/UseMenu";
import OrderCatagory from "../OrderCatagory";
import { useParams } from "react-router-dom";



const Order = () => {
    const catagories = ['Dessert','Soup','Salad','Pizza','Drinks'];
    const{catagory}= useParams();
    const indexInital = catagories.indexOf(catagory)
    const [tabIndex, setTabIndex] = useState(indexInital);
    const [popular] =UseMenu();

     const dessert = popular.filter(item=>item.category ==='dessert');
     const soup = popular.filter(item=>item.category ==='soup');
     const salad = popular.filter(item=>item.category ==='salad');
     const pizza = popular.filter(item=>item.category ==='pizza');
     const drinks = popular.filter(item=>item.category ==='drinks');
    return (
        <div>
            <Helmet>
                <title> Bistro|Our order  </title>
            </Helmet>
            <Cover img={img} title='our Shop'></Cover>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Dessert</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel><OrderCatagory items={dessert}></OrderCatagory></TabPanel>
                <TabPanel><OrderCatagory items={soup}></OrderCatagory></TabPanel>
                <TabPanel><OrderCatagory items={salad}></OrderCatagory></TabPanel>
                <TabPanel><OrderCatagory items={pizza}></OrderCatagory></TabPanel>
                <TabPanel><OrderCatagory items={drinks}></OrderCatagory></TabPanel>
               
            </Tabs>
        </div>
    );
};

export default Order;