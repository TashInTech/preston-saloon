/* ---- MOBILE MENU ---- */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

/* ---- HERO SLIDER ---- */
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function slideShow(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

document.querySelector(".next").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= slides.length) currentIndex = 0;
  slideShow(currentIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = slides.length - 1;
  slideShow(currentIndex);
});

// Auto-slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  slideShow(currentIndex);
}, 5000);

/* ---- FAQ ACCORDION ---- */
document.querySelector(".heading-1").addEventListener("click", () => {
  document.querySelector(".paragraph-1").classList.toggle("one");
  document.querySelector(".heading-1").style.color = "#d4a843";
});
document.querySelector(".heading-2").addEventListener("click", () => {
  document.querySelector(".paragraph-2").classList.toggle("two");
  document.querySelector(".heading-2").style.color = "#d4a843";
});
document.querySelector(".heading-3").addEventListener("click", () => {
  document.querySelector(".paragraph-3").classList.toggle("three");
  document.querySelector(".heading-3").style.color = "#d4a843";
});
document.querySelector(".heading-4").addEventListener("click", () => {
  document.querySelector(".paragraph-4").classList.toggle("four");
  document.querySelector(".heading-4").style.color = "#d4a843";
});

/* ---- TESTIMONIAL SLIDER ---- */
const comments = document.querySelectorAll(".comment");
let commentIndex = 0;

function showNextComment() {
  const current = comments[commentIndex];
  current.classList.remove("active");
  current.classList.add("exit-left");

  commentIndex = (commentIndex + 1) % comments.length;
  const next = comments[commentIndex];
  next.classList.remove("exit-left");
  next.classList.add("active");
}

setInterval(showNextComment, 5000);

/* ---- BOOKING FORM ---- */
document.querySelector("#booking").addEventListener("submit", (e) => {
  e.preventDefault();

  const name         = document.querySelector("#name").value;
  const time         = document.querySelector("#time").value;
  const number       = document.querySelector("#number").value;
  const style        = document.querySelector("#style").value;
  const specificTime = document.querySelector("#specific-time").value;
  const email        = document.querySelector("#email") ? document.querySelector("#email").value : "";

  // WhatsApp message
  const phoneNumber = "256759258767";
  const message = `APPOINTMENT BOOKING — Preston Saloon
------------------------------
Name: ${name}
Phone: ${number}
Email: ${email || "Not provided"}
Date: ${time || "Flexible"}
Time: ${specificTime}
Service: ${style}
------------------------------
Please confirm my appointment. Thank you!`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");

  // Show success message
  const successMsg = document.getElementById("booking-success");
  if (successMsg) {
    successMsg.style.display = "block";
    successMsg.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => {
      e.target.reset();
      successMsg.style.display = "none";
    }, 4000);
  }
});