import Image from "next/image";
import Carousel from "react-multi-carousel";
import shadowRoostr from "./images/Web_Silhouette_01.png";
/* Slider */
import Slider1 from "./images/slider/1.jpg";
import Slider2 from "./images/slider/2.jpg";
import Slider3 from "./images/slider/3.jpg";
import Slider4 from "./images/slider/4.jpg";
import Slider5 from "./images/slider/5.jpg";
import Slider6 from "./images/slider/6.jpg";
import Slider7 from "./images/slider/7.jpg";
import Slider8 from "./images/slider/8.jpg";
import Slider9 from "./images/slider/9.jpg";
import Slider10 from "./images/slider/10.jpg";
import Slider11 from "./images/slider/11.jpg";
import Slider12 from "./images/slider/12.jpg";
import Slider13 from "./images/slider/13.jpg";
import Slider14 from "./images/slider/14.jpg";
import Slider15 from "./images/slider/15.jpg";
import mask from "./images/mask.png";

/* Eco system */
import chikn from "./images/ecosystem/chikn.svg";
import egg from "./images/ecosystem/egg.svg";
import feed from "./images/ecosystem/feed.svg";
import lay from "./images/ecosystem/lay.svg";
import farm from "./images/ecosystem/farm.svg";
import size from "./images/ecosystem/size.svg";

import corn from "./images/Corn_Small_01.jpg";
import ecosys from "./images/Illustration_Ecosystem_Simple_01.png";
import styles from "./styles/slider.module.css";
import "react-multi-carousel/lib/styles.css";

const sliders = [
    Slider1,
    Slider2,
    Slider3,
    Slider4,
    Slider5,
    Slider6,
    Slider7,
    Slider8,
    Slider9,
    Slider10,
    Slider11,
    Slider12,
    Slider13,
    Slider14,
    Slider15
];

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1600 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 1600, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const Economics = () => {
    return (
        <div className="container">
            <div className={styles["eco-container"] + " d-flex flex-column py-5"}>
                <div></div>
                <div></div>
                <div className="slider d-flex flex-column gap-5">
                    <h1 className="title text-center"><span className="text-danger">10,000</span> algorithmically generated, unique chikn<br/> NFTs that lay $egg</h1>
                    <div>
                        <Carousel
                            responsive={responsive}
                            additionalTransfrom={0}
                            arrows={false}
                            autoPlay
                            autoPlaySpeed={0.1}
                            centerMode={false}
                            className=""
                            containerClass="container-with-dots"
                            customTransition="all 10s linear"
                            dotListClass=""
                            focusOnSelect={false}
                            infinite
                            itemClass=""
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                        >
                            {
                                sliders.map((item, idx) => (
                                    <Image
                                        src={item}
                                        key={idx}
                                        alt=""
                                    />
                                ))
                            }
                        </Carousel>
                    </div>
                </div>
                <div className="proposal-container position-relative">
                    <div className={"position-absolute " + styles["corn"]}>
                        <Image
                            src={corn}
                            alt=""
                        />
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <Image
                                src={shadowRoostr}
                                alt=""
                            />
                        </div>
                        <div className="col-md-8">
                            <h1 className="text-danger">Welcome to chikn. Bgaark!</h1>
                            <p>
                                <b>chikn</b> are not just NFTs that lay $egg.<br/>
                                <b>chikn</b> is an entire ecosystem built around these NFTs - encompassing novel Tri-Token Architecture.<br/>
                                <b>chikn</b> is extending the utility of Public Minting, a Marketplace, and Farming for emerging NFT+token creators on Avalanche.
                            </p>
                            <p>
                                NFTs have the unique ability to combine utility with the power of mimetism.<br/>
                                When you can have both, why not have both?
                            </p>
                            <p>
                                It&apos;s simple, really. Everyone knows that chikn lay $egg.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ecosys-container">
                    <h1 className="text-danger mb-4">Tri-Token Ecosystem</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex flex-column gap-3">
                                <div className="d-flex flex-row gap-3 align-items-center">
                                    <div className={styles["ecos-icon"]}>
                                        <Image
                                            src={chikn}
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <b>chikn</b>
                                        <p>Your upgradeable <b>chikn</b> NFT, that lays <b>$egg</b></p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row gap-3 align-items-center">
                                    <div className={styles["ecos-icon"]}>
                                        <Image
                                            src={egg}
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <b>$egg</b>
                                        <p>The governance and utility token of the <b>chikn</b><br/> ecosystem. Hodl, use, or sell on the open market</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row gap-3 align-items-center">
                                    <div className={styles["ecos-icon"]}>
                                        <Image
                                            src={feed}
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <b>$feed</b>
                                        <p>Harvested at chikn.farm, eaten by <b>chikn</b>,<br/> or sold on the open market</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row gap-3 align-items-center">
                                    <div className={styles["ecos-icon"]}>
                                        <Image
                                            src={lay}
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <b>Lay</b>
                                        <p>Roost your <b>chikn</b> and lay <b>$egg</b>.<br/> Biggr <b>chikn</b> lay more <b>$egg</b></p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row gap-3 align-items-center">
                                    <div className={styles["ecos-icon"]}>
                                        <Image
                                            src={farm}
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <b>Farm</b>
                                        <p>Received <b>$egg</b> LP tokens are used<br/> to farm <b>$feed</b> at chikn.farm</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row gap-3 align-items-center">
                                    <div className={styles["ecos-icon"]}>
                                        <Image
                                            src={size}
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <p className="mb-0"><b>Size</b> (Kg / KillerGainz)</p>
                                        <p><b>$feed</b> permanently increases the size<br/> of your <b>chikn</b>. It&apos;s written straight to the<br/> metadata of your NFT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Image
                                src={ecosys}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="community-container">
                    <h1 className="text-danger">Join the community</h1>
                    <p>For the latest news, updates and access to pre-release content.</p>
                    <button className={"btn btn-danger px-4 " + styles["community-btn"]}>Join our Discord</button>
                </div>
            </div>
        </div>
    )
}

export default Economics;