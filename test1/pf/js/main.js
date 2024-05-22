
  //   const navigation = document.querySelector(".primary-navigation");

  //   const navigationHeight = navigation.offsetHeight;

  //   document.documentElement.style.setProperty(
  //     "--scroll-padding",
  //     navigationHeight + "px"
  //   );
  //   $('.navbar-collapse a').click(function () {
  //     $(".navbar-collapse").collapse('hide');
  //   });
  //   $(window).scroll(function () {
  //     if ($(this).scrollTop() > 50) {
  //       $('.vv').addClass('vv2 vv3 shadow-sm');
  //     } else {
  //       $('.vv').removeClass('vv2 shadow-sm');
  //     }
  //   });
  //   /* Code for changing active
  //         link on clicking */
  //   var btns =
  //     $(".navbar-nav .nav-link");

  //   for (var i = 0; i < btns.length; i++) {
  //     btns[i].addEventListener("click",
  //       function () {
  //         var current = document
  //           .getElementsByClassName("active");

  //         current[0].className = current[0]
  //           .className.replace(" active", "");

  //         this.className += " active";
  //       });
  //   }

  //   /* Code for changing active
  //   link on Scrolling */
  //   $(window).scroll(function () {
  //     var distance = $(window).scrollTop();
  //     $('.page-section').each(function (i) {

  //       if ($(this).position().top
  //         <= distance + 250) {

  //         $('a.nav-link.active')
  //           .removeClass('active');

  //         $('a.nav-link').eq(i)
  //           .addClass('active');
  //       }
  //     });
  //   }).scroll();

  //   $('.imageGallery1 a').simpleLightbox();

  //   const swiper = new Swiper('.swiper', {
  //     // Optional parameters
  //     loop: true,
    
  //     // If we need pagination
  //     pagination: {
  //       el: '.swiper-pagination',
  //     },
  //   });


  //   function grow(element) {
  //     element.style.transform = "scale(1.2)";
  //   }
    
  //   function shrink(element) {
  //     element.style.transform = "scale(1)";
  //   }


  //   document.addEventListener('DOMContentLoaded', function () {
  //     const tooltips = document.querySelectorAll('.tooltip');
      
  //     tooltips.forEach(function (tooltip) {
  //       const tooltipText = tooltip.querySelector('.tooltiptext');
        
  //       tooltip.addEventListener('mouseover', function () {
  //         tooltipText.style.visibility = 'visible';
  //         tooltipText.style.opacity = '1';
  //       });
        
  //       tooltip.addEventListener('mouseout', function () {
  //         tooltipText.style.visibility = 'hidden';
  //         tooltipText.style.opacity = '0';
  //       });
  //     });
  //   });


  //   function expandBubble() {
  //     document.querySelector('.bubble').classList.add('expand');
  // }
  
  // function shrinkBubble() {
  //     document.querySelector('.bubble').classList.remove('expand');
  // }


  const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir le fichier HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

// Gérer la soumission du formulaire de contact
app.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log(`Nom: ${name}, Email: ${email}, Sujet: ${subject}, Message: ${message}`);
    
    // Logique pour traiter les données du formulaire, comme les enregistrer dans une base de données ou envoyer un email
    
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});


document.addEventListener('DOMContentLoaded', () => {
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(bubble => {
      bubble.addEventListener('mouseenter', () => {
        bubble.classList.add('expanded');
      });
      bubble.addEventListener('mouseleave', () => {
        bubble.classList.remove('expanded');
      });
    });
  });
  