import Image from "next/image";
import styles from "./styles/act.module.css";
import roostrLogo from "./images/Roostr-Logo.png";

const ActContainer = () => {
    return (
        <div className="gap-4 mt-5 act-container d-flex justify-content-center align-items-center flex-column">
            <div
                className={styles['roostr-logo'] + " mt-5"}
            >
                <Image
                    src={roostrLogo}
                />
            </div>
            <button className={"btn btn-danger btn-lg btn-check-market " + styles["btn-check-market"]}>Check out the market</button>
        </div>
    )
}

export default ActContainer;
