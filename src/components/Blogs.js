import React from 'react';
import CardBig from './reused/CardBig';
import InfoBox from './reused/InfoBox';
import Customlist from './reused/Customlist';
import image1 from '../images/blogs/blogs1.jpg';
import image2 from '../images/blogs/blogs2.jpg';
import image3 from '../images/blogs/blogs3.jpg';
import image4 from '../images/blogs/blogs4.jpg';
import icon1 from '../images/icons/back.png';

const recents = [
    {
        id: 1,
        name: 'How do online courses work?',
        image: image1,
        tag: 'practicalities',
        text: 'Participating in online courses for the first time can be confusing. We will tell you with videos how everything works from registration and payment to participating in lectures, studying ...',
        url: '/error'
    },
    {
        id: 2,
        name: 'The benefits of positive training?',
        image: image2,
        tag: 'training',
        text: 'Positive training focuses on praises and rewards. Unwanted behavior is ignored and wanted behavior is rewarded. Positive training helps you maintain a good relationship with your dog and ...',
        url: '/error'
    },
    {
        id: 3,
        name: 'Rarely known facts about the welsh corgi',
        image: image3,
        tag: 'dog breeds',
        text: "Welsh corgi a strong, athletic, and active herder. They are small, only 10-12 inches as adults, and one of the world's most popular herding breeds. Still, there are some facts ...",
        url: '/error'
    },
    {
        id: 4,
        name: 'History of poodles',
        image: image4,
        tag: 'dog breeds',
        text: 'There is agreement that there are three size varieties for poodles: Standard, Miniature, and Toy. However, there is disagreement about whether poodles originate from Germany as a type of ...',
        url: '/error'
    }
]

const practicalities = [
            {
                id: 1,
                name: "How do online courses work?"
            },
            {
                id: 2,
                name: "Good to know when you come first time to a face-to-face course"
            },
            {
                id: 3,
                name: "We love to hear your feedback through various channels"   
            },
            {
                id: 4,
                name: "How to book a suitable combination of different services?"     
            }
]

const training = [
            {
                id: 1,
                name: "The benefits of positive training"
            },
            {
                id: 2,
                name: "What is rally obedience training?"
            },
            {
                id: 3,
                name: "Training with puppies"   
            },
            {
                id: 4,
                name: "Nosework: competitive possibilities in Finland"     
            },
            {
                id: 5,
                name: "How to train dogs with severe problem behavior"     
            }
]

const dogbreeds = [
            {
                id: 1,
                name: "Rarely known facts about the welsh corgi"
            },
            {
                id: 2,
                name: "History of poodles"
            },
            {
                id: 3,
                name: "Labrador Retrievers and their three color variations"   
            },
            {
                id: 4,
                name: "Beagles and their famous representatives"     
            }
]

const wellbeing = [
            {
                id: 1,
                name: "Choosing the best diet for you dog"
            },
            {
                id: 2,
                name: "Hereditary diseases in different dog breeds"
            },
            {
                id: 3,
                name: "What do dogs signal by whining?"   
            },
            {
                id: 4,
                name: "Different specialists looking after your dog’s well-being"     
            },
            {
                id: 5,
                name: "How to support your dog’s well-being with 5 little things"     
            }
]

const infoList = [
    {
        id: 1,
        text1: 'Do you have a suggestion for a topic? Send us message with email (', 
        link2: 'info@doggo.com', 
        text3: '), in social media or through ',
        link4: 'the contact form',
        text5: '.'
    }
]

const Blogs = () => { 

    return (
       <div>
          <a href="/"><img src={icon1} alt="sans" width="7em" class="mx-2"/>Front page</a>
          <p class="big-title">Check out our blog writings and videos!</p>
          <p class="medium-title">Most recent blog writings and videos</p>
          <CardBig cardlist={recents} />
            <p class="medium-title">Practicalities</p> 
            <Customlist list={practicalities} />
            <p class="medium-title">Training</p> 
            <Customlist list={training} />          
            <p class="medium-title">Dog breeds</p> 
            <Customlist list={dogbreeds} />
            <div class="row">
                <div class="col-lg"> 
                    <p class="medium-title">Well-being</p> 
                    <Customlist list={wellbeing} />               
                </div>
                <div class="col-sm d-flex align-items-end">
                    <InfoBox infolist={infoList} />
                </div> 
            </div>
       </div>
    );
}
 
export default Blogs;