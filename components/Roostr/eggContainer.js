import Image from "next/image";
import styles from "./styles/egg.module.css";

import egg1 from "./images/Web_Egg_01.png";
import egg2 from "./images/Web_Egg_02.png";

const EggContainer = () => {
    return (
        <div className={styles["egg-container"]}>
            <div className={styles["egg-photo-top"]}>
                <Image
                    src={egg2}
                    alt=""
                />
            </div>
            <div className={styles["egg-photo-bottom"]}>
                <Image
                    src={egg1}
                    alt=""
                />
            </div>
        </div>
    )
}

export default EggContainer;