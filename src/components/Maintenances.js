import React from "react";
import CardBig from "./reused/CardBig";
import InfoBox from "./reused/InfoBox";
import image1 from "../images/maintenance/maintes1.jpg";
import image2 from "../images/maintenance/maintes2.jpg";
import image3 from "../images/maintenance/maintes3.jpg";
import image4 from "../images/maintenance/maintes4.jpg";
import image5 from "../images/maintenance/maintes5.jpg";
import image6 from "../images/maintenance/maintes6.jpg";
import icon1 from "../images/icons/back.png";

const services = [
  {
    id: 1,
    name: "Washing",
    image: image1,
    tag: "",
    text: "We will wash your dog gently and with care so that it will not be frightening experience. We use shampoos and conditioners that are only mildly scented so that dog’s own natural ...",
    url: "/error",
  },
  {
    id: 2,
    name: "Trimming",
    image: image2,
    tag: "",
    text: "We can trim your dog with scissors or a trimmer, whichever suits your dog the best. We have trimmed for years differently sized dogs with varying length of fur. We will discuss with you the details ...",
    url: "/error",
  },
  {
    id: 3,
    name: "Cutting nails",
    image: image3,
    tag: "",
    text: "Short and healthy nails help your dog stay healthy. Too long nails can cause pain or infections, if it starts to grow inwards. We will gently cut your dog’s nails without cutting too much or hurting ...",
    url: "/error",
  },
  {
    id: 4,
    name: "Massage",
    image: image4,
    tag: "",
    text: "Massage relieves tension in muscles and stimulates muscle development. It increases blood flow to the area and relieves muscle spams, which speed up recovering from injuries and ...",
    url: "/error",
  },
  {
    id: 5,
    name: "Physiotherapy",
    image: image5,
    tag: "",
    text: "Physiotherapy improves the function and mobility of joints and muscles. It reduces pain and helps dogs recover from injuries. We use hydrotherapy, balance exercises, coordination exercises, and ...",
    url: "/error",
  },
  {
    id: 6,
    name: "Day care",
    image: image6,
    tag: "",
    text: "You can leave your dog for our care if you have a long, busy day or go for a holiday. We feed your dogs, go for walks and stimulate them with various plays. Your dog can also meet other dogs ...",
    url: "/error",
  },
];

const infoList = [
  {
    id: 1,
    text1: "Do you have a suggestion for a topic? Send us message with email (",
    link2: "info@doggo.com",
    text3: "), in social media or through ",
    link4: "the contact form",
    text5: ".",
  },
  {
    id: 2,
    text1: "You can book appointments through ",
    link2: "the online booking form",
    text3: " or a phone call.",
    link4: "",
    text5: "",
  },
  {
    id: 3,
    text1: "You can purchase products used in maintenance services from our ",
    link2: "online store",
    text3: ".",
    link4: "",
    text5: "",
  },
];

const Maintenances = () => {
  return (
    <div>
      <a href="/">
        <img src={icon1} alt="sans" width="7em" class="mx-2" />
        Front page
      </a>
      <p class="big-title">
        Come to our offices to take care of your dog’s body in a comprehensive way
      </p>
      <p class="medium-title">Our maintenance services</p>
      <CardBig cardlist={services} />
      <p class="citation">
        “Of couse I know how to wash my own dogs or cut their nails, but lettings someone else do
        those chores saves my time tremendously. While my dogs are being taken care of in Doggo, I
        can shop, work, go to gym or do anything I want!”
        <br />- Woman, 53 years old
      </p>
      <InfoBox infolist={infoList} />
    </div>
  );
};

export default Maintenances;