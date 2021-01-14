import React from "react";
import CardSmall from "./reused/CardSmall";
import InfoBox from "./reused/InfoBox";
import image1 from "../images/courses/courses1.jpg";
import image2 from "../images/blogs/blogs1.jpg";
import image3 from "../images/maintenance/maintes1.jpg";
import image4 from "../images/blogs/blogs5.jpg";
import image5 from "../images/courses/courses5.jpg";
import image6 from "../images/private/private3.jpg";
import image7 from "../images/maintenance/maintes7.jpg";

const recents = [
  {
    id: 1,
    name: "Basic obedience training for puppies",
    image: image1,
    tag: "course",
    url: "/error",
  },
  {
    id: 2,
    name: "How do online courses work?",
    image: image2,
    tag: "blog",
    url: "/error",
  },
  {
    id: 3,
    name: "Washing",
    image: image3,
    tag: "maintenance",
    url: "/error",
  },
];

const categories = [
  {
    id: 1,
    name: "Blog writings and videos",
    image: image4,
    tag: "",
    url: "/blogs",
  },
  {
    id: 2,
    name: "Courses",
    image: image5,
    tag: "",
    url: "/courses",
  },
  {
    id: 3,
    name: "Private lessons",
    image: image6,
    tag: "",
    url: "/privatelessons",
  },
  {
    id: 4,
    name: "Maintenance services",
    image: image7,
    tag: "",
    url: "/maintenances",
  },
];

const infoList = [
  {
    id: 1,
    text1: "We use ",
    link2: "Moodle",
    text3: " to share material in courses and private lessons.",
    link4: "",
    text5: "",
  },
  {
    id: 2,
    text1: "You can purchase products used in our courses, private lessons and maintenance services from our ",
    link2: "online store",
    text3: ".",
    link4: "",
    text5: "",
  },
  {
    id: 3,
    text1: "",
    link2: "Even calendar",
    text3: " shows quickly when we have courses or other happenings.",
    link4: "",
    text5: "",
  },
  {
    id: 4,
    text1: "You can book appointments through ",
    link2: "an online booking form",
    text3: "  a phone call (Helsinki 045 111 2222 or Tampere 045 333 4444).",
    link4: "",
    text5: "",
  },
];

const FrontPage = () => {
  return (
    <div>
      <p class="big-title">
        Welcome to a place where both you and your dog are served with expertise and joy
      </p>
      <p class="medium-title">Discover the most recent content</p>
      <CardSmall cardlist={recents} />
      <p class="medium-title">Categories</p>
      <CardSmall cardlist={categories} />
      <p class="citation">
        “I have used Doggo’s services since it was founded in 2015 since they offer a friendly and
        professional service. They treat customers like real persons and individuals.”
        <br />- Woman, 39 years old
      </p>
      <InfoBox infolist={infoList} />
    </div>
  );
};

export default FrontPage;
