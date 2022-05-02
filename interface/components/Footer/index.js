import Image from "next/image";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { FaMedium, FaEye, FaWallet } from "react-icons/fa";
import logo from "./images/logo.svg";
import avax from "./images/avax.svg";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container">
                <div className="d-flex justify-content-between text-muted py-5">
                    <div className="d-flex flex-column justify-content-between">
                        <div className="d-flex flex-column ">
                            <h3 className="text-left">
                                <Image
                                    src={logo}
                                    width={"100"}
                                    height={"40"}
                                    alt=""
                                />
                            </h3>
                            <p>10,000 algorithmically generated, unique chikn NFTs that lay $egg</p>
                        </div>
                        <div className="d-flex flex-column">
                            <h5 className="text-danger">Join the community</h5>
                            <div className="d-flex flex-row gap-2">
                                <a className="btn border-dark fs-4" style={{ borderRadius: "10px" }}>
                                    <BsDiscord/>
                                </a>
                                <a className="btn border-dark fs-4" style={{ borderRadius: "10px" }}>
                                    <BsTwitter/>
                                </a>
                                <a className="btn border-dark fs-4" style={{ borderRadius: "10px" }}>
                                    <FaMedium/>
                                </a>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-2">
                            <h5 className="text-danger">Contracts</h5>
                            <div className="d-flex align-items-center flex-row gap-3">
                                <span style={{ width: "90px" }}>Chikn</span>
                                <div className="btn-group">
                                    <button className="btn btn-outline-dark">0x89...3b79</button>
                                    <button className="btn btn-outline-dark"><FaEye/></button>
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-row gap-3">
                                <span style={{ width: "90px" }}>Roostr</span>
                                <div className="btn-group">
                                    <button className="btn btn-outline-dark">0xCf...5e20</button>
                                    <button className="btn btn-outline-dark"><FaEye/></button>
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-row gap-3">
                                <span style={{ width: "90px" }}>FarmLand</span>
                                <div className="btn-group">
                                    <button className="btn btn-outline-dark">0x00...Ac47</button>
                                    <button className="btn btn-outline-dark"><FaEye/></button>
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-row gap-3">
                                <span style={{ width: "90px" }}>$EGG</span>
                                <div className="btn-group">
                                    <button className="btn btn-outline-dark">0x77...E611</button>
                                    <button className="btn btn-outline-dark"><FaEye/></button>
                                    <button className="btn btn-outline-dark"><FaWallet/></button>
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-row gap-3">
                                <span style={{ width: "90px" }}>$FEED</span>
                                <div className="btn-group">
                                    <button className="btn btn-outline-dark">0xab...8D1E</button>
                                    <button className="btn btn-outline-dark"><FaEye/></button>
                                    <button className="btn btn-outline-dark"><FaWallet/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gx-lg-5 row">
                        <div className="col-6">
                            <nav className="navbar navbar-expand navbar-light">
                                <div className="flex-column navbar-nav">
                                    <h5 className="text-danger">Site</h5>
                                    <div className="nav-item">
                                        <a className="nav-link px-3 text-capitalize  active" href="/" target="_blank">home</a>
                                    </div>
                                    <div className="nav-item">
                                        <a className="nav-link px-3 text-capitalize  active" href="/" target="_blank">mint</a>
                                    </div>
                                    <div className="nav-link px-3 pb-0 text-capitalize">
                                        Chikn
                                        <div className="nav-item">
                                            <a className="nav-link px-3 text-capitalize " href="/roost/?tab=chikn">roost</a>
                                        </div>
                                        <div className="nav-item">
                                            <a className="nav-link px-3 text-capitalize " href="/leaderboard">leaderboard</a>
                                        </div>
                                    </div>
                                    <div className="nav-link px-3 pb-0 text-capitalize">
                                        FarmLand
                                        <div className="nav-item">
                                            <a className="nav-link px-3 text-capitalize " href="/roost/?tab=chikn">LP Farm</a>
                                        </div>
                                        <div className="nav-item">
                                            <a className="nav-link px-3 text-capitalize " href="/leaderboard">Tiles / Traits</a>
                                        </div>
                                    </div>
                                    <div className="nav-link px-3 pb-0 text-capitalize">
                                        Wallet
                                        <div className="nav-item">
                                            <a className="nav-link px-3 text-capitalize " href="/roost/?tab=chikn">chikn</a>
                                        </div>
                                        <div className="nav-item">
                                            <a className="nav-link px-3 text-capitalize " href="/leaderboard">roostr</a>
                                        </div>
                                        <div className="nav-item">
                                            <a className="nav-link px-3 text-capitalize " href="/leaderboard">FarmLand</a>
                                        </div>
                                    </div>
                                    <div className="nav-link px-3 pb-0 text-capitalize">
                                        Market
                                        <div className="nav-item">
                                            <a className="nav-link px-3 text-capitalize " href="/roost/?tab=chikn">Chikn</a>
                                        </div>
                                        <div className="nav-item">
                                            <a className="nav-link px-3 text-capitalize " href="/leaderboard">Roostr</a>
                                        </div>
                                        <div className="nav-item">
                                            <a className="nav-link px-3 text-capitalize " href="/leaderboard">FarmLand</a>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-6">
                            <nav className="navbar navbar-expand navbar-light">
                                <div className="flex-column navbar-nav">
                                    <h5 className="text-danger">Other</h5>
                                    <div className="nav-item">
                                        <a className="nav-link px-3 text-capitalize  active" href="/" target="_blank">Changelog</a>
                                    </div>
                                    <div className="nav-item">
                                        <a className="nav-link px-3 text-capitalize  active" href="/" target="_blank">Roadmap</a>
                                    </div>
                                    <div className="nav-item">
                                        <a className="nav-link px-3 text-capitalize  active" href="/" target="_blank">Status</a>
                                    </div>
                                    <div className="nav-item">
                                        <a className="nav-link px-3 text-capitalize  active" href="/" target="_blank">Store</a>
                                    </div>
                                    <div className="nav-item">
                                        <a className="nav-link px-3 text-capitalize  active" href="/" target="_blank">Terms</a>
                                    </div>
                                    <div className="nav-item">
                                        <a className="nav-link px-3 text-capitalize  active" href="/" target="_blank">Docs</a>
                                    </div>
                                    <div className="nav-item">
                                        <a className="nav-link px-3 text-capitalize  active" href="/" target="_blank">API</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="d-flex align-items-center justify-content-between">
                    <span>@2022 chikn</span>
                    <a href="" target='_blank' className="text-danger">
                        <small>Powered by <svg width="18" height="18" viewBox="0 0 647 647" xmlns="http://www.w3.org/2000/svg" className="Layout__AvaxLogoSmall-sc-ln9lzc-1 hFTZBk img-avaxlogo"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M323.652 647C502.316 647 647.152 502.164 647.152 323.5C647.152 144.836 502.316 0 323.652 0C144.988 0 0.152344 144.836 0.152344 323.5C0.152344 502.164 144.988 647 323.652 647ZM225.905 470.06H150.015C132.022 470.06 123.025 470.06 117.637 466.575C111.814 462.81 108.14 456.491 107.751 449.572C107.39 443.169 111.846 435.362 120.758 419.75L120.762 419.744L286.919 128.655C295.962 112.811 300.484 104.889 306.238 101.94C312.453 98.7542 319.824 98.7487 326.044 101.926C331.802 104.866 336.335 112.782 345.401 128.612L383.723 195.52L383.724 195.522C390.317 207.032 393.613 212.788 395.063 218.86C396.641 225.471 396.644 232.358 395.072 238.969C393.628 245.043 390.336 250.803 383.752 262.32L284.392 436.139C277.713 447.825 274.373 453.668 269.797 458.035C264.816 462.789 258.776 466.293 252.174 468.257C246.108 470.06 239.374 470.06 225.905 470.06ZM496.658 470.06H408.672C390.516 470.06 381.437 470.06 376.032 466.545C370.192 462.747 366.529 456.381 366.184 449.429C365.864 442.995 370.433 435.155 379.571 419.479L423.491 344.127C432.514 328.649 437.026 320.91 442.737 318.011C448.91 314.878 456.209 314.873 462.387 317.996C468.104 320.886 472.625 328.619 481.668 344.082L481.67 344.087L525.736 419.437C534.909 435.123 539.495 442.967 539.182 449.406C538.843 456.364 535.182 462.737 529.339 466.541C523.934 470.06 514.842 470.06 496.658 470.06Z"></path></svg></small>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;