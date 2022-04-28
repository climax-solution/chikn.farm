import Image from "next/image";
import styles from "./styles/roostr.module.css";
import roostr from "./images/Web_Colonel_Large_02.png";

const RoostrContainer = () => {
    return (
        <div className={styles["inner-container"]}>
            <Image
                src={roostr}
                alt=""
            />
        </div>
    )
}

export default RoostrContainer;