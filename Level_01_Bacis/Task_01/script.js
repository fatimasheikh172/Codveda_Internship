// Scroll-based reveal
const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );
  
  // Observe all animated elements
  document.querySelectorAll(".animate").forEach(el => observer.observe(el));
  
  // Burger menu toggle
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");
  
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Simple validation
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Show success message (simulate submission)
    document.getElementById("formMessage").textContent = "Thanks for contacting us, " + name + "!";
  
    // Reset form
    document.getElementById("contactForm").reset();
  });