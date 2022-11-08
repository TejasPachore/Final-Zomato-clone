import React from "react";
import ExploreSection from "../exploresection";
import Filters from "../filters";
import "./delivery.css"
import DeliveryCollections from "./deliveryCollections";
import TopBrands from "./topBrands";
import { restaurants } from "../../../Data/restaurants";


    

const deliveryFilters = [
 {
    id: 1,
    title: "Filters",
 },

 {
    id: 2,
    title: "Rating = 4.0+",
 },

 {
    id: 3,
    title: "Safe and Hygienic",
 },

 {
    id: 4,
    title: "Pure Vej",
 },

 {
    id: 5,
    title: "Great Offers",
 },
]

const restaurantsList = restaurants;
const Delivery =()=>{
    return(
    <div>
        <div className="max-width">
        <Filters filtersList={deliveryFilters}/>
        </div>
        <DeliveryCollections />
        <TopBrands />
        <ExploreSection
        list={restaurantsList}
        collectionName="Delivery Restaurants in Bangalore"
      />
    </div>
    )
}
export default Delivery;