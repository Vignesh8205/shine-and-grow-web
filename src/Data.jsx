import { FaBrain, FaComments, FaHandsHelping } from "react-icons/fa";
// import { GiTalking } from "react-icons/gi";
// import { MdSchool } from "react-icons/md";
// import { GiPuzzle } from "react-icons/gi";


import courses1 from "./assets/courses1.jpg";
import courses2 from "./assets/courses2.jpg";
import courses3 from "./assets/courses3.jpg";
import courses4 from "./assets/courses4.jpg";
import courses5 from "./assets/courses5.jpg";
import courses6 from "./assets/courses6.jpg";
import courses7 from "./assets/courses7.jpg";
import courses8 from "./assets/courses8.jpg";

import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";
//C:\Users\HP\Desktop\growshine\growshine\src\assets\gallery\IMG-20250526-WA0002.jpg


import award1 from './assets/carousel/Frame 5.png'; 

// slides 
import OcupationalTherapy from './assets/carousel/occupational-therapy.png'; 
import SpeechTerapy from './assets/carousel/speech-therapy.png'
import SensoryIntegrationTherapy from './assets/carousel/Sensory Integration Therapy .png'

// galery images
import gallery1 from "./assets/gallery/IMG-20250526-WA0002.jpg";
import gallery2 from "./assets/gallery/IMG-20250526-WA0003.jpg";
import { MdSchool } from "react-icons/md";


export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
  },
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 3,
    href: "gallery-page",
    link: "Gallery",
  },
  {
    id: 4,
    href: "courses",
    link: "Courses",
  },
  {
    id: 5,
    href: "teacher",
    link: "Teacher",
  },
  {
    id: 6,
    href: "contact",
    link: "Contact Us",
  }
];



export const categories = [
  {
    id: 1,
    icon: <FaHandsHelping />,
    category: "Occupational Therapy",
    description: "Helping children improve daily living and motor skills through guided, playful activities.",
  },
  {
    id: 2,
    icon: <FaComments  />,
    category: "Speech Therapy",
    description: "Supporting speech, language, and communication development for clear and confident expression.",
  },
  {
    id: 3,
    icon: <MdSchool />,
    category: "Educational Therapy",
    description: "Personalized support to enhance learning, focus, and academic confidence in kids.",
  },
  {
    id: 4,
    icon: <FaBrain   />,
    category: "Sensory Integration",
    description: "Engaging sensory-based activities that help children regulate and respond to their environment.",
  },
];



export const courses = [
  {
    id: 1,
    image: courses1,
    category: "Creative Art",
    title: "Awesome Art & Craft",
    rating: 4.9,
    participants: 500,
    price: 20,
  },
  {
    id: 2,
    image: courses2,
    category: "Magic & Fun",
    title: "Learn Magic Tricks",
    rating: 4.8,
    participants: 700,
    price: 25,
  },
  {
    id: 3,
    image: courses3,
    category: "Fun Science",
    title: "Science Experiments at Home",
    rating: 4.9,
    participants: 300,
    price: 15,
  },
  {
    id: 4,
    image: courses4,
    category: "Young Bosses",
    title: "Start Your Mini Business",
    rating: 4.7,
    participants: 600,
    price: 30,
  },
  {
    id: 5,
    image: courses5,
    category: "Creative Art",
    title: "Painting with Colors & Fun",
    rating: 4.9,
    participants: 500,
    price: 20,
  },
  {
    id: 6,
    image: courses6,
    category: "Magic & Fun",
    title: "Super Cool Magic Tricks",
    rating: 4.9,
    participants: 500,
    price: 25,
  },
  {
    id: 7,
    image: courses7,
    category: "Young Bosses",
    title: "Kids Entrepreneur Adventure",
    rating: 4.9,
    participants: 500,
    price: 30,
  },
  {
    id: 8,
    image: courses8,
    category: "Fun Science",
    title: "Exciting Science Projects",
    rating: 4.9,
    participants: 500,
    price: 15,
  },
];



export const slides = [
  {
    title: ' Excellence in Occupational Therapy – New Horizons in Care',
    description:
      'Recognized for outstanding dedication to advancing Occupational Therapy through innovative approaches, compassionate support, and a commitment to improving daily living and functional independence.',
    image: OcupationalTherapy,
  },
  {
    title: ' Excellence in Speech Therapy – Empowering Communication',
    description: 'Recognized for exceptional commitment to advancing Speech Therapy through personalized techniques, compassionate care, and impactful communication support across all age groups',
    image: SpeechTerapy,
  },
  {
    title: 'Excellence in Sensory Integration Therapy – Enhancing Everyday Functioning',
    description: 'Recognized for our impactful efforts in delivering Sensory Integration Therapy to underserved rural communities, empowering children with developmental needs through skill-building and inclusive support programs.',
    image: SensoryIntegrationTherapy,
  },
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const accordions = [
  {
    id: 1,
    title: "What is FunLearn?",
    answer: "FunLearn is an awesome online place where kids like you can explore, play, and learn cool things like art, science, reading, and more — all from home!",
  },
  {
    id: 2,
    title: "What cool things can I learn at FunLearn?",
    answer: "You can learn to draw, read fun stories, do science experiments, solve puzzles, learn good habits, and even try music and dance!",
  },
  {
    id: 3,
    title: "Can I become a teacher at FunLearn?",
    answer: "Only grown-ups can be teachers on FunLearn, but you can become a super helper or leader in class by participating and sharing your ideas!",
  },
  {
    id: 4,
    title: "What fun stuff comes with my FunLearn membership?",
    answer: "Your membership gives you animated lessons, games, coloring sheets, quizzes, storytime, certificates, and lots more fun activities!",
  },
  {
    id: 5,
    title: "How do I start learning at FunLearn?",
    answer: "Just ask your parent or guardian to help you sign up, and then you can choose your favorite topic and start learning right away!",
  },
  {
    id: 6,
    title: "Is FunLearn safe for kids?",
    answer: "Yes! FunLearn is designed to be super safe, with no ads or strangers — just fun learning with friendly teachers and friends.",
  },
  {
    id: 7,
    title: "Can I learn with my friends on FunLearn?",
    answer: "Absolutely! You can invite your friends to join too, and you can enjoy learning together and even do group challenges!",
  },
  {
    id: 8,
    title: "Do I need a parent to sign up for FunLearn?",
    answer: "Yes, a parent or guardian needs to help you sign up to make sure everything is safe and fun for you!",
  },
  {
    id: 9,
    title: "What if I get stuck while learning?",
    answer: "Don’t worry! You can watch the lesson again, ask your teacher, or get help from your parents. We’re always here to help you learn happily!",
  },
  {
    id: 10,
    title: "Can I get a certificate after finishing a course?",
    answer: "Yes! When you finish a course, you’ll get a colorful certificate you can print and show off to your family and friends!",
  },
];


 export const numbers = ['+919344779625', '+919176762025', '+916383930936'];


 export const socialmedialink={
  email:"debe@shinegrowkids.com",
  facebook:"https://www.facebook.com/tcftechnologys",
  instagram:"https://www.instagram.com/tcf_technologies/#",
  youtupe:"https://www.youtube.com/@tcftechnologys",
  twiter:"",
  websiteUrl:"http://www.shinegrowkids.com"
 }



 export  const galleryItems = [
     {
       title: "Classroom Activities",
       image: award1,
     },
     {
       title: "Outdoor Play",
       image: gallery2,
     },
     {
       title: "Festival Celebrations",
       image: gallery2,
     },
     {
       title: "Creative Corner",
       image: gallery2,
     },
     {
       title: "Learning through Fun",
       image:gallery2,
     },
     {
       title: "Picnic Day",
       image:gallery2,
     },
   ];


   export const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3694.170631492238!2d80.2208941!3d13.069377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52676a87cd028d%3A0xd69dda2824e34ec1!2sTCF%20Technologies!5e1!3m2!1sen!2sin!4v1749670885259!5m2!1sen!2sin";

