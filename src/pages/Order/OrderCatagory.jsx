import OrderCover from "../shared/OrderCover/OrderCover";


const OrderCatagory = ({items}) => {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-10 mb-5">
                  {
                     items.map(p=><OrderCover 
                        key={p._id}
                        p={p}
                     ></OrderCover>)
                  }
                  </div>
        </div>
    );
};

export default OrderCatagory;