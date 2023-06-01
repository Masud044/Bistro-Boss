
import SectionTile from "../../../components/sectionTitle/SectionTile";
import Menuber from "../../shared/Menuber/Menuber";
import UseMenu from "../../../Hooks/UseMenu";


const PopulerMenu = () => {
       const [populers] = UseMenu();
       
       const populer = populers.filter(item=>item.category ==='popular');
      
    return (
        <div>
             <section className="mb-4">
                 <SectionTile 
                   subheading={"Populer Items"}
                   heading={"from our menu"}
                 ></SectionTile>

                  <div className="grid md:grid-cols-2 gap-10 mb-5">
                  {
                     populer.map(p=><Menuber 
                        key={p._id}
                        item={p}
                     ></Menuber>)
                  }
                  </div>
             </section>
        </div>
    );
};

export default PopulerMenu;