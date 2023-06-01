import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SectionTile from "../../../components/sectionTitle/SectionTile";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div>
            <SectionTile
                subheading={'What Our client Say'}
                heading={'Testimonial'}
            ></SectionTile>



            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >

                {
                    review.map(rev => <SwiperSlide
                        key={rev._id}>
                        <div className=" flex flex-col items-center m-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rev.rating}
                                readOnly
                            />
                            <p>{rev.details}</p>
                            <h1 className="text-orange-500 text3xl">{rev.name}</h1>
                        </div>


                    </SwiperSlide>)
                }



            </Swiper>
        </div>
    );
};

export default Testimonial;