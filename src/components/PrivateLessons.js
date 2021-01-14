import React from "react";
import InfoBox from "./reused/InfoBox";
import Workerlist from "./reused/Workerlist";
import icon1 from "../images/icons/back.png";
import image1 from "../images/workers/worker1_r.png";
import image2 from "../images/workers/worker2_r.png";
import image3 from "../images/workers/worker3_r.png";
import image4 from "../images/workers/worker4_r.png";
import image5 from "../images/workers/worker5_r.png";
import image6 from "../images/private/private1.jpg";
import image7 from "../images/private/private2.jpg";
import video from "../videos/video1.mp4";

const infoList = [
  {
    id: 1,
    text1: "Includes: private lessons that are designed to suit you and your dog’s needs.",
    link2: "",
    text3: "",
    link4: "",
    text5: ".",
  },
  {
    id: 2,
    text1: "Can be face-to-face or online, in Doggo’s offices or at your home, a single lesson or a series of lessons, at weekdays or weekends, etc.",
    link2: "",
    text3: "",
    link4: "",
    text5: "",
  },
  {
    id: 3,
    text1: "You can book private lessons through ",
    link2: "the online booking form",
    text3: " or a phone call.",
    link4: "",
    text5: "",
  },
  {
    id: 4,
    text1:"Price: varies depending on the length, topic and number of lessons.",
    link2: "",
    text3: "",
    link4: "",
    text5: "",
  },
];

const helsinki = [
  {
    id: 1,
    image: image1,
    text: "Anna Virtanen: obedience, rally, nosework, etc.",
    url: "/error",
  },
  {
    id: 2,
    image: image2,
    text: "Hanna Kuusinen: obedience, rally, agility, etc.",
    url: "/error",
  },
  {
    id: 3,
    image: image3,
    text: "Juha Koskinen: obedience, agility",
    url: "/error",
  },
  {
    id: 4,
    image: image4,
    text: "Leena Koivu: nosework, search and rescue tasks, etc.",
    url: "/error",
  },
];

const tampere = [
  {
    id: 1,
    image: image1,
    text: "Anna Virtanen: obedience, rally, nosework, etc.",
    url: "/error",
  },
  {
    id: 2,
    image: image2,
    text: "Hanna Kuusinen: obedience, rally, agility, etc.",
    url: "/error",
  },
  {
    id: 3,
    image: image5,
    text: "Matti Jokinen: agility, rally, nose work",
    url: "/error",
  },
];

const PrivateLessons = () => {
    return (
      <div>
        <a href="/">
          <img src={icon1} alt="sans" width="7em" class="mx-2" />
          Front page
        </a>
        <p class="big-title">Private lessons are personalized to suit you and your dog’s needs</p>
        <div class="row d-flex">
          <div class="col-sm-5 col-sx-5 d-flex align-items-center">
            <h5>
              Private lessons are a good option for those who want lessons when ever and where ever
              fits them best. They also suit for dogs who have troubles behaving in groups or who need
              special combination of taught skills.
            </h5>
          </div>
          <div class="col-sm-7 col-sm-7 d-flex align-items-center">
            <InfoBox infolist={infoList} />
          </div>
        </div>
        <div class="row d-flex pt-2">
          <div class="col-sm-7 col-sx-7 d-flex align-items-center">
            <p class="citation">
              “My rescue dog had great troubles in learning even the basic rules. Courses were out of
              the question since he could not behave around other dogs. Private lessons were a
              life-saver!” <br />- Woman, 45 years old
            </p>
          </div>
          
          <div class="col-sm-5 col-xs-5 d-flex">
            <div class="card card-video">
              <video height="180" controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div class="card-body d-flex">
                <h5 class="card-title align-items-center d-flex small-card-title">
                  Demo video: Basic obedience training for puppies
                </h5>
              </div>
            </div>
          </div>
        </div>
  
        <h4>Our workers who give private lessons in Helsinki:</h4>
        <Workerlist workers={helsinki} />
        <h4>Our workers who give private lessons in Tampere:</h4>
        <Workerlist workers={tampere} />

        <div class="row justify-content-center m-3">
          <div class="col-xs-3 col-sm-4">
            <img src={image6} alt="..." class="illustration" />
          </div>
          <div class="col-xs-5 col-sm-6">
            <img src={image7} alt="..." class="illustration" />
          </div>
        </div>
      </div>
    );
  };
  

export default PrivateLessons;
