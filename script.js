// === for-Offcanvas ===

function openNav() {
    document.getElementById("mySidenav").style.width = "257px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
// === for current year ===
  
const currentYear = document.getElementById('fullYear');
const year = new Date();
currentYear.innerHTML += `Copyright &copy${year.getFullYear()} Pizza Ordering.`;
  

// === for cursor-Pointer ===  

let cursor = document.querySelector('.cursor');
let cursor2 = document.querySelector('.cursor2');

document.addEventListener('mousemove',function(e){
    cursor.style.cssText = cursor2.style.cssText = 'left: '+e.clientX+'px; top:  '+e.clientY +'px;';
});    



