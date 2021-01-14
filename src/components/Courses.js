import React from "react";
import CardBig from "./reused/CardBig";
import InfoBox from "./reused/InfoBox";
import Customlist from "./reused/Customlist";
import image1 from "../images/courses/courses1.jpg";
import image2 from "../images/courses/courses2.jpg";
import image3 from "../images/courses/courses3.jpg";
import image4 from "../images/courses/courses4.jpg";
import icon1 from "../images/icons/back.png";

const popular = [
  {
    id: 1,
    name: "Basic obedience training for puppies",
    image: image1,
    tag: "face-to-face",
    text: "Puppies grow up to be a well-behaved dogs when they are trained early on. This course is meant for 3-5 month old puppies that can behave in a group of 3-5 ...",
    url: "/error",
  },
  {
    id: 2,
    name: "Calming down",
    image: image2,
    tag: "online",
    text: "Some dogs are very easily exited and often start to bark and jump. This course helps you to teach your dog to calm down in 3 online meetings. The course has also prerecorded videos ... ",
    url: "/error",
  },
  {
    id: 3,
    name: "Nosework",
    image: image3,
    tag: "face-to-face",
    text: "Nosework utilizes the same techniques that are used with professional detection dogs, but it does not have to lead to a professionalism. It can be a fun hobby for both you and your ...",
    url: "/error",
  },
  {
    id: 4,
    name: "Physical exercises with dogs",
    image: image4,
    tag: "online",
    text: "This course tell you how you can keep both you and your dog fit physically. Doing push-ups, sit-ups, balance training and stretching together is fun for both you and your dog. Included ...",
    url: "/error",
  },
];

const blogs = [
  {
    id: 1,
    name: "Online courses",
  },
  {
    id: 2,
    name: "Face-to-face courses",
  },
];

const infoList1 = [
  {
    id: 1,
    text1: "You can register and pay for courses in our ",
    link2: "online store",
    text3: " as well purchase all needed equipment, if you do not already have them.",
    link4: "",
    text5: "",
  },
  {
    id: 2,
    text1: "You can check courses’ schedules on our ",
    link2: "event calendar",
    text3: ".",
    link4: "",
    text5: "",
  },
  {
    id: 3,
    text1: "All learning materials are shared through ",
    link2: "Moodle",
    text3: " and online lectures are held in ",
    link4: "Zoom",
    text5: ".",
  },
  {
    id: 4,
    text1: "You can discuss with other students and teachers in public with ",
    link2: "Moodle",
    text3: " or send for example email for more private discussion with the teachers.",
    link4: "",
    text5: "",
  },
];

const infoList2 = [
  {
    id: 1,
    text1: "Do you have a suggestion for a new course? Send us message with email (",
    link2: "info@doggo.com",
    text3: "), in social media or through ",
    link4: "the contact form",
    text5: "",
  },
];

const faceToFace = [
  {
    id: 1,
    name: "Nosework",
  },
  {
    id: 2,
    name: "Basic obedience training for puppies",
  },
  {
    id: 3,
    name: "Calming down",
  },
  {
    id: 4,
    name: "Rally training (beginner)",
  },
  {
    id: 5,
    name: "Rally training (expert)",
  },
  {
    id: 6,
    name: "Obedience training for adult dogs (beginner)",
  },
  {
    id: 7,
    name: "Obedience training for adult dogs (expert)",
  },
  {
    id: 8,
    name: "Agility (beginner)",
  },
  {
    id: 9,
    name: "Agility (expert)",
  },
];

const online = [
  {
    id: 1,
    name: "Calming down",
  },
  {
    id: 2,
    name: "Physical exercises with dogs (beginner)",
  },
  {
    id: 3,
    name: "Physical exercises with dogs (expert)",
  },
  {
    id: 4,
    name: "Rally training (beginner)",
  },
  {
    id: 5,
    name: "Rally training (expert)",
  },
  {
    id: 6,
    name: "Obedience training (beginner)",
  },
  {
    id: 7,
    name: "Obedience training (expert)",
  },
];

const Courses = () => {
  return (
    <div>
      <a href="/">
        <img src={icon1} alt="sans" width="7em" class="mx-2" />
        Front page
      </a>
      <p class="big-title">We offer face-to-face and online courses on diverse topics</p>
      
      <div class="row">
        <div class="col-sm-4 col-xs-8">
          <p class="mt-3">
            New to courses? Let our blog writings explains with videos how everything works from
            payment and registration to receiving a certificate.
          </p>
          <Customlist list={blogs} />
        </div>
        <div class="col-sm-8 col-sx-12">
          <InfoBox infolist={infoList1} />
        </div>
      </div>

      <p class="medium-title mt-2">Most popular courses</p>
      <CardBig cardlist={popular} />
      <p class="medium-title">Face-to-face courses (Helsinki and Tampere)</p>
      <Customlist list={faceToFace} />
      <p class="medium-title">Online courses</p>
      <Customlist list={online} />
      
      <div class="row">
        <div class="col-sm-6 col-xs-4">
          <p class="citation">
            “I have been on over 5 different courses through Doggo and I have always learned new
            things and made new friends. I especially like that they have such a wide variety of
            courses. Something for beginners as well as more advanced trainers.”
            <br />- Man, 31 years old
          </p>
        </div>
        <div class="col-sm-6 col-sx-4">
          <InfoBox infolist={infoList2} />
        </div>
      </div>
    </div>
  );
};

export default Courses;