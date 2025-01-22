$( document ).ready(function() {

    // TAB JS

    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        tabs.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
  
        // Add active class to the clicked tab and corresponding content
        tab.classList.add('active');
        const target = document.getElementById(tab.dataset.tab);
        target.classList.add('active');
      });
    });

    var swiper = new Swiper(".play_slider", {
        slidesPerView: 4.3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
      });

});