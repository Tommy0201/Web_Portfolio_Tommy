/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

const particleConfig = 
  
    {
      "particles": {
        "number": {
          "value": 200,
          "density": {
            "enable": true,
            "value_area": 2000
          }
        },
        "color": {
          "value": "#0f437c"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#0f437c"
          },
          "polygon": {
            "nb_sides": 3
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 100,
          "color": "#0000ff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    };

function initializeParticles() {
    // List all your particle container IDs here
    const particleIds = [
        'particles-js-1',
        'particles-js-2', 
        'particles-js-3',
        'particles-js-4',
        'particles-js-5',
        'particles-js-6',
        'particles-js-7',
        'particles-js-8',
        'particles-js-9',
    ];
    
    particleIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            particlesJS(id, particleConfig);
        }
    });
}

    // Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
});

// Alternative: If you prefer to manually specify each section
// Uncomment this and comment out the above function if you want more control



  