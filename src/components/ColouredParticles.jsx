import React from 'react';
import Particles from "react-tsparticles";

const ColouredParticles = () => {
    const particlesInit = (main) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
    // console.log(container);
    };
    return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
        particles: {
            number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
            },
            color: {
                value: ["#ffac81","#cdeac0","#ff928b","#fec3a6"]
            },
            collisions: {
                enable: true,
            },
            move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
            },
            // opacity: {
            // value: 0.5,
            // },
            shape: {
                type: "circle",
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 2,
                  "size_min": 0,
                  "sync": false
                }
            },
            "opacity": {
                "value": 0.8,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 0.2,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
            },
            "modes": {
                "bubble": {
                  "distance": 83.91608391608392,
                  "size": 1,
                  "duration": 3,
                  "opacity": 1,
                  "speed": 3
                },
                "push": {
                  "particles_nb": 4
                },
              }
            },

        detectRetina: true,
        }}
    />
    );
};

export default ColouredParticles;
