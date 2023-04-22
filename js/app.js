




// jsdelivr

const text =  baffle(".data");
text.set({
  characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',

        speed: 150
});

text.start();
text.reveal(4000);


// Renkleri tanımla
let colors = ["#FF5733","#820000", "#DAF7A6", "#C70039", "#900C3F", "#581845", "#8E44AD", "#16A085", "#2C3E50", "#F1C40F", "#E67E22"];

// Container div'i seç
let container = document.querySelector(".container");

// Arka plan rengini al
let savedColor = localStorage.getItem("background-color");

// Eğer kaydedilmiş bir renk varsa, onu kullan
if (savedColor) {
  container.style.backgroundColor = savedColor;
}

// Butonu seç
let button = document.getElementById("color");
button.addEventListener("click", function() {
  // Rastgele bir renk seç
  let randomIndex = Math.floor(Math.random() * colors.length);
  let randomColor = colors[randomIndex];
  
  // Container div'in arka plan rengini değiştir
  container.style.backgroundColor = randomColor;
  
  // Arka plan rengini kaydet
  localStorage.setItem("background-color", randomColor);
});



// let colors = ["#FF5733","#820000", "#DAF7A6", "#C70039", "#900C3F", "#581845", "#8E44AD", "#16A085", "#2C3E50", "#F1C40F", "#E67E22"];

// let button = document.getElementById("color");

// button.addEventListener("click", function() {
//   let randomIndex = Math.floor(Math.random() * colors.length);
//   let randomColor = colors[randomIndex];
//   let container = document.querySelector(".container");
//   container.style.backgroundColor = randomColor;
// });








//   const text = document.getElementById("text");
//   const message = "Frontend Developer";
//   let i = 0;
  
//   function typeWriter() {
//     if (i < message.length) {
//       text.innerHTML += message.charAt(i);
//       i++;
//       setTimeout(typeWriter, 50); // her 50 milisaniyede bir karakter ekle
//     }
//   }
  
//   typeWriter(); // yazıyı karakter karakter yazdırmak için typeWriter fonksiyonunu çağır
  






