import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "../home/Banner.css";

const data = [
    "https://initiate.alphacoders.com/images/129/cropped-1620-280-1298385.jpg?1605",
    "https://images3.alphacoders.com/131/thumbbig-1314545.webp",
    "https://images3.alphacoders.com/131/thumbbig-1314539.webp"
]
const Banner = () => {
    return (
        <>
          <Carousel
                className="carousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                >
                {
                    data.map((image, idx) => {
                        return (
                                <img src={image} alt="img" key={idx} className="banner_img" />
                        )
                    })
                }
            </Carousel>
        </>
    )
}
export default Banner;