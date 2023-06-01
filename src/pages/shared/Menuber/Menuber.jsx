

const Menuber = ({item}) => {
    const {image,price,recipe,name} = item;
    return (
        <div className="flex space-x-3">
             <img style={{borderRadius:'0 200px 200px 200px'}} className="w-20 " src={image} alt="" />
             <div>
             <h2 className="uppercase">{name} -------</h2>
             <p>{recipe}</p> 
             </div>
            
             <p className="text-yellow-400">${price}</p>
             
        </div>
    );
};

export default Menuber;