import React from 'react';
import CardBig from './reused/CardBig';
import image1 from '../images/workers/worker1.jpg';
import image2 from '../images/workers/worker2.jpg';
import image3 from '../images/workers/worker3.jpg';
import image4 from '../images/workers/worker4.jpg';
import image5 from '../images/workers/worker5.jpg';
import image6 from '../images/workers/worker6.jpg';
import image7 from '../images/workers/worker7.jpg';
import image8 from '../images/workers/worker8.jpg';
import image9 from '../images/workers/worker9.jpg';
import image10 from '../images/workers/worker10.jpg';
import icon1 from '../images/icons/back.png';

const workers = [
   {
       id: 1,
       name: 'Anna Virtanen',
       image: image1,
       tag: '',
       text: 'I founded Doggo in 2015 with my friend Hanna. I have diverse education concerning animals and especially dogs and I always aim to improve my skills. I currently live with two dogs, a dalmatian and ...',
       url: '/error'
   },
   {
       id: 2,
       name: 'Hanna Kuusinen',
       image: image2,
       tag: '',
       text: 'I am one the founders of Doggo. Working with dogs has been my dream since I was a little girl. Training dogs is my specialty and I especially like training agility and rally. I have two dogs at the ...',
       url: '/error'
   },
   {
       id: 3,
       name: 'Juha Koskinen',
       image: image3,
       tag: '',
       text: 'I have worked full-time at Doggo since 2017. I give obedience and agility training as well as grooming services in Helsinki. I have vocational education in animal care and I have won competitions ...',
       url: '/error'
   },
   {
       id: 4,
       name: 'Leena Koivu',
       image: image4,
       tag: '',
       text: 'Hi everyone! My name is Leena and my specialty is nosework and search and rescue tasks. I have been volunteering in rescue task since 2013. I also give grooming services in Helsinki. My dream ... ',
       url: '/error'
   },
   {
       id: 5,
       name: 'Matti Jokinen',
       image: image5,
       tag: '',
       text: 'I teach agility, nosework and rally as well as give grooming services in Tampere. I work full-time and can be flexible about my work hours. For example, I can work at weekends or late afternoons ...',
       url: '/error'
   },
   {
       id: 6,
       name: 'Kaisa Laakso',
       image: image6,
       tag: '',
       text: 'Hey! I’m Kaisa and I’m a professional dog massager and  physiotherapist. I also give grooming services in Tampere. I have been working full-time at Doggo since 2018, but before ...',
       url: '/error'
   },
   {
       id: 7,
       name: 'Liisa Kivinen',
       image: image7,
       tag: '',
       text: 'I work part-time in Tampere and provide grooming services. I have almost finished my vocational education in animal care. I did my practice here in Doggo and have worked here since spring 2020 ...',
       url: '/error'
   },
   {
       id: 8,
       name: 'Taina Lampinen',
       image: image8,
       tag: '',
       text: 'I have a vocational training in animal care as well as diploma for dog massaging. I work part-time in Tampere providing massages and grooming services. I plan to study more about dog physiotherapy ...',
       url: '/error'
   },
   {
       id: 9,
       name: 'Maija Lehtinen',
       image: image9,
       tag: '',
       text: 'I provide grooming, massaging and physiotherapy in Helsinki. I work part-time since I have two small children and three dogs. My dream is to discover new ways to improve the well-being of dogs and ...',
       url: '/error'
   },
   {
       id: 10,
       name: 'Sari Mäkinen',
       image: image10,
       tag: '',
       text: 'Hi! My name is Sari and I work part-time in Helsinki. My vocational training is still in progress, so I only provide day care services at the moment. After graduation, I will start working full-time and ...',
       url: '/error'
   }
]

const About = () => {
    return (
       <div>
          <a href="/"><img src={icon1} alt="sans" width="7em" class="mx-2"/>Front page</a>
          <p class="big-title">Taking care of your dog’s well-being professionally for over 5 years</p>
          <p class="mx-5">Anna Virtanen and Hanna Kuusinen founded Doggo in 2015 in Helsinki. Their dream was to provide the best possible services 
             for dogs and their owners. Little by little Doggo grow, and in 2017 a new office in Tampere was founded. Nowadays, Doggo 
             has 6 full-time workers and 4 part-time workers. All of our full-timers and half of our part-timers have at least vocational 
             education in animal care. 5 of us have further studies in animal training, 3 of us have diploma about dog massaging, and 
             2 of us have further studies in animal physiotherapy. </p>
          <p class="medium-title">Meet our talented professionals</p>
          <CardBig cardlist={workers} />
          <p class="mx-5 text-center">The fastest way to contact us is to call (Helsinki 045 111 2222 or Tampere 045 333 4444) or email 
          us (<a href="/error">info@doggo.com</a> or firstname.lastname@doggo.com). You can also send messages with 
          our <a href="/error">contact form</a>.</p>
       </div>
    );
}
 
export default About;