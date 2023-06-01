import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import Menuber from "../../shared/Menuber/Menuber";


const MenuCatagory = ({items,title,img}) => {
    return (
        <div className="mt-4 pt-4">
            { title && <Cover img={img} title={title}></Cover>}
              <div className="grid md:grid-cols-2 gap-10 mb-5">
                  {
                     items.map(p=><Menuber 
                        key={p._id}
                        item={p}
                     ></Menuber>)
                  }
                  </div>
                 <Link className="grid justify-center" to={`/order/${title}`}><button className="btn btn-outline border-0 uppercase border-b-2 ">read more</button></Link> 
        </div>
    );
};

export default MenuCatagory;