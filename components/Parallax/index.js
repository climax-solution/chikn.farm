import Image from "next/image";
import layer1 from "./images/layer1.png";
import layer2 from "./images/layer2.png";
import layer3 from "./images/layer3.png";
import styles from "./styles/parallax.module.css";

const Parallax = () => {
    return (
        <div className="d-lg-inline-block">
            <div className={styles["parallax-banner"]}>
                <div className={styles["parallax-outer"]}>
                    <div className={styles["parallax-inner"]}>
                        <div className={styles["parallax-banner-layer-0"]}>
                            <div className={styles["parallax-image-wrapper"]}>
                                <div className={styles["image-top"]}></div>
                                <Image
                                    src={layer3}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["parallax-outer"]}>
                    <div className={styles["parallax-inner"]}>
                        <div className={styles["parallax-banner-layer-1"]}>
                            <div className={styles["parallax-image-wrapper"]}>
                                <div className={styles["image-top"]}></div>
                                <Image
                                    src={layer2}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["parallax-outer"]}>
                    <div className={styles["parallax-inner"]}>
                        <div className={styles["parallax-banner-layer-2"]}>
                            <div className={styles["parallax-image-wrapper"]}>
                                <div className={styles["image-top"]}></div>
                                <Image
                                    src={layer1}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parallax;