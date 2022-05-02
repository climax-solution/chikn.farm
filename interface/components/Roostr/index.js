import ActContainer from "./actContainer";
import EggContainer from "./eggContainer";
import RoostrContainer from "./roostrContainer";

import styles from "./styles/roostr.module.css";

const Roostr = () => {
    return (
        <div className={styles["roostr-container"]}>
            <div className="container">
                <div className="position-relative">
                    
                    <EggContainer/>
                    <ActContainer/>
                    <RoostrContainer/>
                </div>
            </div>
        </div>
    )
}

export default Roostr;