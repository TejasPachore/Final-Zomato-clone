import React, { useState } from "react";
import Header from "../../components/common/header";

import Tab from "../../components/common/taboption";
import Footer from "../../components/common/footer";
import Delivery from "../../components/common/Delivery component";
import NightLife from "../../components/nightlife";
// import DiningOut from "../../components/diningout";

const Homepage =()=>{

    const [activeTab, setActiveTab]= useState("Delivery");
    return(
        <div>
        <Header />
        <Tab activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
        <Footer />
        </div>
    );
};

const getCorrectScreen =(tab)=>{
    switch (tab) {
        case "Delivery":
            return <Delivery />;

        // case "DiningOut":
        //     return <DiningOut />;

        case "NightLife":
            return <NightLife />;

        default:
            return <Delivery />    
    }
};
export default Homepage;

