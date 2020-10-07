import React, { createContext, useState } from "react";
export const DataContext = createContext();
// 560093 > 560095 > 560001 < 560015 < 560016 < 560018;
export function DataProvider(props) {
  const [data] = useState([
    {
      id: 1,
      category: "fruits-vegitables",
      image: "gtm.jpg",
      name: "GTM Super Market",
      address: "20th Cross Kaggadasapura ",
      pincodes: [
        {
          sku: "17",
          pincode: 560093,
        },
        {
          sku: "17",
          pincode: 560095,
        },
      ],
      description: "This rugged boot will get you up the mountain safely.",
    },
    {
      id: 2,
      category: "dals",
      image: "manu.jpg",
      name: "Manohar's Provision Store",
      address: "3rd Cross Kaggadasapura ",
      pincodes: [
        {
          sku: "28",
          pincode: 560093,
        },
        {
          sku: "28",
          pincode: 560001,
        },
      ],
      description: "Sure-footed traction in slippery conditions.",
    },
    {
      id: 3,
      category: "dals",
      image: "pavan.png",
      name: "Pavan Bazzar",
      address: "6th Main 2nd Cross Indira Nagar ",
      pincodes: [
        {
          sku: "28",
          pincode: 560093,
        },
        {
          sku: "28",
          pincode: 560095,
        },
        {
          sku: "28",
          pincode: 560001,
        },
      ],
      description: "Sure-footed traction in slippery conditions.",
    },
    {
      id: 4,
      category: "dals",
      image: "manohars.jpeg",
      name: "Naga Retail Store",
      address: "2nd Main 14th Cross Malleshwaram ",
      pincodes: [
        {
          sku: "28",
          pincode: 560093,
        },
        {
          sku: "28",
          pincode: 560095,
        },
        {
          sku: "28",
          pincode: 560001,
        },
      ],
      description: "Sure-footed traction in slippery conditions.",
    },
    {
      id: 5,
      category: "dals",
      image: "organic.jpg",
      name: "Mahesh Raitha Bazzar",
      address:
        " No 1 ,Modi Street ,Rahul Gandi road yedurappa colony Siddaramayya nagar ",
      pincodes: [
        {
          sku: "28",
          pincode: 560003,
        },
        {
          sku: "28",
          pincode: 560001,
        },
      ],
      description: "Sure-footed traction in slippery conditions.",
    },
  ]);
  return (
    <DataContext.Provider value={[data]}>{props.children}</DataContext.Provider>
  );
}
