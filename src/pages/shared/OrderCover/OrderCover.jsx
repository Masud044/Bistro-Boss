

const OrderCover = ({ p }) => {
    const {image,price,recipe,name} = p;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="bg-slate-950 absolute right-0 top-2 mr-4 text-white">${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-outline border-0 uppercase border-b-2">Add The Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCover;