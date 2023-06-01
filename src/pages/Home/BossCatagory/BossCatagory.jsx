import img from '../../../assets/home/chef-service.jpg'

const BossCatagory = () => {
    return (
        <div className='mb-36 bg-fixed'>
              <img src={img} alt="" />

               <div className=' w-7/12 text-center bg-white py-10 relative md:-mt-72 mx-auto'>
                    <h1 className='text-4xl uppercase mb-4'>bistro boss</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> Maxime porro sunt, cum numquam mollitia sapiente deserunt <br /> eius aliquid ut adipisci doloribus necessitatibus  </p>
               </div>
        </div>
    );
};

export default BossCatagory;