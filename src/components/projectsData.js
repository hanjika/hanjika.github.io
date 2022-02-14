import startupImage from '../assets/startup-mobile.png';
import shopyaImage from '../assets/shopya.png';
import todoImage from '../assets/todoapp.png';
import didlydooImage from '../assets/didlydoo.png';
import collectionImage from '../assets/collection.png';
import calculatorImage from '../assets/calculator.png';
import mazeImage from '../assets/maze.png';

export const projectsdata = [
    {
        title: 'StarTup',
        description: 'A matchmaking app for entrepreneurs based on astrology. Made for mobile but responsive to desktop.',
        image: startupImage,
        link: false,
        source: 'https://github.com/hanjika/StarTup',
        fade: 'fade-left'
    },
    {
        title: 'Shopya',
        description: 'A mobile-first E-commerce website that uses the FakeStoreApi.',
        image: shopyaImage,
        link: 'https://hanjika.github.io/E-commerce/',
        source: 'https://github.com/hanjika/E-commerce',
        fade: 'fade-right'
    },
    {
        title: 'Todo',
        description: 'A simple to-do list with local storage. First project created using React.',
        image: todoImage,
        link: 'https://hanjika.github.io/intro-react/',
        source: 'https://github.com/hanjika/intro-react',
        fade: 'fade-left'
    },
    {
        title: 'Didlydoo',
        description: 'An event planner made using an API and Parcel.',
        image: didlydooImage,
        link: false,
        source: 'https://github.com/hanjika/Didlydoo',
        fade: 'fade-right'
    },
    {
        title: 'Art Collection',
        description: 'A collection of ten art movements with a selection of artists and paintings. Learning CSS Grid and Flexbox.',
        image: collectionImage,
        link: 'https://hanjika.github.io/hannas-collection/',
        source: 'https://github.com/hanjika/hannas-collection',
        fade: 'fade-left'
    },
    {
        title: 'Calculator',
        description: 'A modern JavaScript calculator with multiple themes. Made using Parcel.',
        image: calculatorImage,
        link: 'https://hanjika.github.io/calculator/',
        source: 'https://github.com/hanjika/calculator',
        fade: 'fade-right'
    },
    {
        title: 'Hungry Crab Maze',
        description: 'A simple timed maze with multiple levels and options. Made using JavaScript and CSS.',
        image: mazeImage,
        link: 'https://hanjika.github.io/amazeing/',
        source: 'https://github.com/hanjika/amazeing',
        fade: 'fade-left'
    }
];