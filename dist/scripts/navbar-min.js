let prevScrollpos=window.pageYOffset;window.onscroll=function(){let e=window.pageYOffset,o=document.querySelector("header");o.style.top=prevScrollpos>e&&e>=0?"0":"-250px",prevScrollpos=e};