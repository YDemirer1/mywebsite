function myFunction() {
    alert("Thanks for reaching out! I will get back to you soon");
}

let i = 0;
function move1() {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar1");
    let width = 1;
    let id = setInterval(frame, 20);
    
    function frame() {
      if (width >= 65) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function move2() {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar2");
    let width = 1;
    let id = setInterval(frame, 20);
    
    function frame() {
      if (width >= 40) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function move3() {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar3");
    let width = 1;
    let id = setInterval(frame, 20);
    
    function frame() {
      if (width >= 15) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}