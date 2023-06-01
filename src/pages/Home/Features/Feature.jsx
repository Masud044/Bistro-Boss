import SectionTile from "../../../components/sectionTitle/SectionTile";
import img from '../../../assets/home/banner.jpg'
import  './Feature.css'


const Feature = () => {
    return (
        <div className="mb-4 feature-item bg-fixed ">
              <SectionTile
                subheading={'check it out'} 
                heading={'from our menu'}
              >

              </SectionTile>

            <div className="md:flex justify-center items-center space-x-10 py-20 px-32 bg-gradient-to-r from-orange-200  ">
                 <img className="md:w-5/12" src={img} alt="" /> 

                  <div className="text-white">
                      <p>March 20,2023</p>
                      <h3 className="uppercase text-3xl ">Where can i get some</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Exercitationem omnis officiis ipsa alias nam sit deleniti veniam <br /> at velit maiores ratione quam aliquid commodi <br />
                      ad numquam voluptate possimus quasi perspiciatis similique officia</p>
                       <button className="btn btn-outline border-0 uppercase border-b-2">read more</button>
                 </div> 
            </div>
              
        </div>
    );
};

export default Feature;
