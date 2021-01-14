import React from "react";
import icon1 from "../images/icons/back.png";
import InfoBox from "./reused/InfoBox";
import SortButton from "./reused/SortButton";
import Result from "./reused/Result";
import Filter from "./Filter";

const infoList = [
  {
    id: 1,
    text1:"If you already know what kind of courses interest you, you can see their schedules in our ",
    link2: "event calendar",
    text3: ".",
    link4: "",
    text5: "",
  },
];

const results = [
  {
    id: 1,
    number: 1,
    title: "Course: Basic obedience training for puppies  (Helsinki, Tampere), 109 euros",
    text:"Puppies grow up to be a well-behaved dogs when they are trained early on. This course is meant for 3-5 month old puppies that can behave in a group of 3-5 puppies without any major problems. Course covers for example walking with a leash, meeting new dogs and basic ...",
    url: "/error",
  },
  {
    id: 2,
    number: 2,
    title: "Private lessons",
    text: "Private lessons are a good option for those who want lessons when ever and where ever fits them best. They also suit for dogs who have troubles behaving in groups or who need special combination of taught skills.",
    url: "/privatelessons",
  },
  {
    id: 3,
    number: 3,
    title: "Blog: How do online courses work?",
    text:
      "Participating in online courses for the first time can be confusing. We will tell you with videos how everything works from registration and payment to participating in lectures, studying different materials and practicing with you dog.",
    url: "/error",
  },
  {
    id: 4,
    number: 4,
    title: "Maintenance service: Washing (Helsinki, Tampere), 39-69 euros",
    text: "We will wash your dog gently and with care so that it will not be frightening experience. We use shampoos and conditioners that are only mildly scented so that dog’s own natural smell is not disturbed too much.",
    url: "/error",
  },
  {
    id: 5,
    number: 5,
    title: "Worker: Anna Virtanen",
    text: "I founded Doggo in 2015 with my friend Hanna. I have diverse education concerning animals and especially dogs and I always aim to improve my skills. I currently live with two dogs, a dalmatian and a german shephard (scroll down to see pictures of them). I would like to ...",
    url: "/error",
  },
];

const Search = () => {
  return (
    <div>
      <a href="/">
        <img src={icon1} alt="sans" width="7em" class="mx-2" />
        Front page
      </a>
      <p class="big-title">Search</p>
      <div class="row">
        <div class="col-sm-4 col-xs-12">
          <div class="input-group mb-3 search-page">
            <input
              type="text"
              class="form-control"
              placeholder="Search..."
              aria-label="search"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <a href="/search">
                <button class="btn btn-outline-secondary" type="button">
                  <i class="fas fa-search"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-8 col-xs-12">
          <InfoBox infolist={infoList} />
        </div>
      </div>
      <hr />
      <Filter />
      
      <div class="row">
        <div class="col-sm">
          <SortButton label="Relevence" />
        </div>
        <div class="col-sm">
          <SortButton label="Name" />
        </div>
        <div class="col-sm">
          <SortButton label="Type" />
        </div>
        <div class="col-sm">
          <SortButton label="Location" />
        </div>
        <div class="col-sm">
          <SortButton label="Price" />
        </div>
        <div class="col-sm">
          <SortButton label="Duration" />
        </div>
        <div class="col-sm-3">
          <SortButton label="Number of meetings" />
        </div>
      </div>
      <br />

      <Result results={results} />
    </div>
  );
};

export default Search;