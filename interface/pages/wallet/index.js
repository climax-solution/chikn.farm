import Head from "next/head";
import Image from "next/image";
import { Accordion, Button, ButtonGroup, Card, FormControl, InputGroup, Tab, Tabs } from "react-bootstrap";
import Multiselect from 'multiselect-react-dropdown';
import { BsFilter } from "react-icons/bs";
import { CollectLoader } from "../../components/Loader";
import chikn_icon from "./image/chikn_icon.png";
import farm_icon from "./image/farm_icon.png";
import avax_icon from "./image/avax.svg";

const options = [{name: 'Option 1️⃣', id: 1},{name: 'Option 2️⃣', id: 2}];

const Wallet = () => {
    return (
        <>
            <Head>
                <style>{`
                    .nav-tabs .nav-link {
                        border: none !important;
                        font-weight: bold;
                        color: #b5b5c3;
                    }
                    .nav-tabs .nav-link:hover {
                        color: #464e5f;
                    }
                    .wallet-nav .active {
                        border-bottom: 2px solid #dc3545 !important;
                        color: #464e5f;
                    }
                    .btn-group .btn {
                        border-radius: 10px;
                    }
                `}</style>
            </Head>
            <div className="container py-3">
                <h2 className="text-danger">Wallet</h2>
                
                <Card>
                    <Card.Header className="px-0 bg-white shadow">
                    <Tabs defaultActiveKey="chikn" id="uncontrolled-tab-example" className="wallet-nav mx-0">
                        <Tab
                            eventKey="chikn"
                            title={
                                <div className="d-flex align-items-center font-bold gap-2">
                                    <Image
                                        src={chikn_icon}
                                        width={"45"}
                                        height={"45"}
                                        alt=""
                                    /> CHIKN
                                </div>
                            }
                        />
                        <Tab
                            eventKey="roostr"
                            title={
                                <div className="d-flex align-items-center font-bold gap-2">
                                    <Image
                                        src={chikn_icon}
                                        width={"45"}
                                        height={"45"}
                                        alt=""
                                    /> ROOSTR
                                </div>
                            }
                        />
                        <Tab
                            eventKey="farmland"
                            title={
                                <div className="d-flex align-items-center font-bold gap-2">
                                    <Image
                                        src={farm_icon}
                                        width={"45"}
                                        height={"45"}
                                        alt=""
                                    /> FARMLAND
                                </div>
                            }
                        />
                    </Tabs>
                    </Card.Header>
                    <Card.Body>
                        <div className="text-center">
                            <h5 className="text-danger">Sales</h5>
                            <ButtonGroup>
                                <Button variant="outline-danger px-md-5">For Sale</Button>
                                <Button variant="outline-danger px-md-5">Show All</Button>
                            </ButtonGroup>
                        </div>
                        <div className="d-flex align-items-center justify-content-end gap-2">
                            <h6 className="m-0">Floor Value: 0</h6>
                            <Image
                                src={avax_icon}
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center">
                                    <h5 className="text-danger mt-3">You own 0 chikn</h5>
                                    <ButtonGroup className="w-100 mt-4 filter-button-group">
                                        <Button variant="outline-danger">Lowest Price</Button>
                                        <Button variant="outline-danger">Highest Price</Button>
                                        <Button variant="outline-danger">Highest rank</Button>
                                        <Button variant="outline-danger">Lowest rank</Button>
                                        <Button variant="outline-danger">Lowest #</Button>
                                        <Button variant="outline-danger">Highest KG</Button>
                                        <Button variant="outline-danger">Recently sold</Button>
                                        <Button variant="outline-danger">Recently listed</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="w-100 d-none mt-4">
                                        <Button variant="outline-danger">Lowest Price</Button>
                                        <Button variant="outline-danger">Highest Price</Button>
                                        <Button variant="outline-danger">Highest rank</Button>
                                        <Button variant="outline-danger">Lowest rank</Button>
                                        <Button variant="outline-danger">Lowest #</Button>
                                        <Button variant="outline-danger">Highest size</Button>
                                        <Button variant="outline-danger">Recently sold</Button>
                                        <Button variant="outline-danger">Recently listed</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="w-100 d-none mt-4">
                                        <Button variant="outline-danger">Lowest Price</Button>
                                        <Button variant="outline-danger">Highest Price</Button>
                                        <Button variant="outline-danger">Lowest #</Button>
                                        <Button variant="outline-danger">Highest size</Button>
                                        <Button variant="outline-danger">Recently sold</Button>
                                        <Button variant="outline-danger">Recently listed</Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 align-self-start col-lg-5 col-md-6 col-sm-12 col-12">
                            <InputGroup>
                                <InputGroup.Text className="bg-danger rounded-x text-white px-4">Search</InputGroup.Text>
                                <FormControl
                                    type="text"
                                    placeholder="Enter Chikn id or name"
                                    aria-label="Enter Chikn id or name"
                                    aria-describedby="btnGroupAddon"
                                    className="rounded-x"
                                />
                            </InputGroup>
                        </div>
                    </Card.Body>
                </Card>
                
                <Accordion className="my-4" defaultActiveKey={['0']}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <BsFilter size="25"/>
                            <span className="ml-2">Filters</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <h4 className="text-danger">Properties</h4>
                            <div className="row">
                                <div className="col-sm-6 col-12">
                                    <h5 className="text-danger mt-2 mb-1">Background</h5>
                                    <Multiselect
                                        options={options}
                                        displayValue="name"
                                        className="rounded-x"
                                    />
                                </div>
                                <div className="col-sm-6 col-12">
                                    <h5 className="text-danger mt-2 mb-1">Body</h5>
                                    <Multiselect
                                        options={options}
                                        displayValue="name"
                                        className="rounded-x"
                                    />
                                </div>
                                <div className="col-sm-6 col-12">
                                    <h5 className="text-danger mt-2 mb-1">Feet</h5>
                                    <Multiselect
                                        options={options}
                                        displayValue="name"
                                        className="rounded-x"
                                    />
                                </div>
                                <div className="col-sm-6 col-12">
                                    <h5 className="text-danger mt-2 mb-1">Head</h5>
                                    <Multiselect
                                        options={options}
                                        displayValue="name"
                                        className="rounded-x"
                                    />
                                </div>
                                <div className="col-sm-6 col-12">
                                    <h5 className="text-danger mt-2 mb-1">Neck</h5>
                                    <Multiselect
                                        options={options}
                                        displayValue="name"
                                        className="rounded-x"
                                    />
                                </div>
                                <div className="col-sm-6 col-12">
                                    <h5 className="text-danger mt-2 mb-1">Tail</h5>
                                    <Multiselect
                                        options={options}
                                        displayValue="name"
                                        className="rounded-x"
                                    />
                                </div>
                                <div className="col-sm-6 col-12">
                                    <h5 className="text-danger mt-2 mb-1">Torso</h5>
                                    <Multiselect
                                        options={options}
                                        displayValue="name"
                                        className="rounded-x"
                                    />
                                </div>
                                <div className="col-sm-6 col-12">
                                    <h5 className="text-danger mt-2 mb-1">Trim</h5>
                                    <Multiselect
                                        options={options}
                                        displayValue="name"
                                        className="rounded-x"
                                    />
                                </div>
                                <div className="col-sm-6 col-12">
                                    <h5 className="text-danger mt-2 mb-1"># Traits</h5>
                                    <Multiselect
                                        options={options}
                                        displayValue="name"
                                        className="rounded-x"
                                    />
                                </div>
                                <div className="col-sm-6 col-12">
                                    <h5 className="text-danger mt-2 mb-1">Rarity</h5>
                                    <Multiselect
                                        options={options}
                                        displayValue="name"
                                        className="rounded-x"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="d-flex flex-row justify-content-center pt-4 col-12">
                                    <Button variant="outline-danger" className="px-5 rounded-x">Clear Filters</Button>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div className="row mx-0">
                    <div className="empty border p-5">
                        <h5 className="text-danger text-center">No matching chikn found in your wallet.</h5>
                    </div>
                    <div className="col-3 border pb-2 px-0 rounded-x-7">
                        <CollectLoader/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wallet;