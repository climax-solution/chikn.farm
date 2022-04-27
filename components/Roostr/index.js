import ActContainer from "./actContainer";
import EggContainer from "./eggContainer";
import RoostrContainer from "./roostrContainer";

const Roostr = () => {
    return (
        <div className="roostr-container overflowx-hidden">
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