const countriesList = document.querySelector("#countries-list")

addEventListener('scroll', (event) => {
    let scrollPosition = window.scrollY

    if (scrollPosition > 50) {
        document.querySelector("nav").classList.add("bg-light")
    } else {
        document.querySelector("nav").classList.remove("bg-light")
    }
});

document.querySelector(".navbar-toggler").addEventListener("click", (e) => {
  document.querySelector("nav").classList.toggle("bg-light")
})
  

window.addEventListener('DOMContentLoaded', (event) => {

    let lazyloadImages;    
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      let imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let image = entry.target;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {  
      let lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");
      
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
  
        lazyloadThrottleTimeout = setTimeout(function() {
          let scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }
  
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }

    for (let key in countryFlagEmoji.data) {
        let li = document.createElement("li")
        li.textContent = `${countryFlagEmoji.data[key].emoji} ${countryFlagEmoji.data[key].name}`
        li.setAttribute("class", "mx-5")
        countriesList.append(li)
    }
});
