/**
* Magnetic Buttons
*/
function initMagneticButtons() {
    
    // Magnetic Buttons
    // Found via: https://codepen.io/tdesero/pen/RmoxQg
    var magnets = document.querySelectorAll('.magnetic');
    var strength = 100;
    
    // START : If screen is bigger as 540 px do magnetic
    if(window.innerWidth > 540){
    // Mouse Reset
    magnets.forEach( (magnet) => {
      magnet.addEventListener('mousemove', moveMagnet );
      $(this.parentNode).removeClass('not-active');
      magnet.addEventListener('mouseleave', function(event) {
          gsap.to( event.currentTarget, 1.5, {
            x: 0, 
            y: 0, 
            ease: Elastic.easeOut
          });
          gsap.to( $(this).find(".btn-text"), 1.5, {
            x: 0, 
            y: 0, 
            ease: Elastic.easeOut
          });
      });
    });
  
    // Mouse move
    function moveMagnet(event) {
      var magnetButton = event.currentTarget;
      var bounding = magnetButton.getBoundingClientRect();
      var magnetsStrength = magnetButton.getAttribute("data-strength");
      var magnetsStrengthText = magnetButton.getAttribute("data-strength-text");
        
      gsap.to( magnetButton, 1.5, {
          x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrength,
          y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrength,
          rotate: "0.001deg",
          ease: Power4.easeOut
      });
      gsap.to( $(this).find(".btn-text"), 1.5, {
          x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrengthText,
          y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrengthText,
          rotate: "0.001deg",
          ease: Power4.easeOut
      });
    }
  
    }; // END : If screen is bigger as 540 px do magnetic
  
    // Mouse Enter
    $('.btn-click.magnetic').on('mouseenter', function() {
      if($(this).find(".btn-fill").length) {
      gsap.to($(this).find(".btn-fill"), .6, {
          startAt: {y: "76%"},
          y: "0%",
          ease: Power2.easeInOut
      });
      }
      if($(this).find(".btn-text-inner.change").length) {
      gsap.to($(this).find(".btn-text-inner.change"), .3, {
          startAt: {color: "#1C1D20"},
          color: "#FFFFFF",
          ease: Power3.easeIn,
      });
      }
      $(this.parentNode).removeClass('not-active');
    });
  
    // Mouse Leave
    $('.btn-click.magnetic').on('mouseleave', function() {
      if($(this).find(".btn-fill").length) {
      gsap.to($(this).find(".btn-fill"), .6, {
          y: "-76%",
          ease: Power2.easeInOut
      });
      }
      if($(this).find(".btn-text-inner.change").length) {
      gsap.to($(this).find(".btn-text-inner.change"), .3, {
          color: "#1C1D20",
          ease: Power3.easeOut,
          delay: .3
      });
      }
      $(this.parentNode).removeClass('not-active');
    });
  }