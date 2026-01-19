document.addEventListener("DOMContentLoaded", function () {

  /* =====================
     LOGIN / LOGOUT
  ===================== */
  const loginBtn = document.getElementById("login-btn");
  const loginSection = document.getElementById("login-section");

  loginBtn.addEventListener("click", () => {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
      alert("Logged out successfully");
      updateLoginUI();
    } else {
      loginSection.classList.toggle("hidden");
    }
  });

  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email.includes("@")) {
      alert("Enter a valid email address");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    localStorage.setItem("user", email);
    alert("Login successful");
    loginSection.classList.add("hidden");
    updateLoginUI();
  });

  function updateLoginUI() {
    loginBtn.textContent = localStorage.getItem("user") ? "Logout" : "Login";
  }

  updateLoginUI();

  /* =====================
     BLOG CONTENT (DETAILED LISTS)
  ===================== */
  const blogData = {
    movies: {
      title: "Top 10 Movies to Watch",
      content: `
1. Movie 1 – Action Thriller  
2. Movie 2 – Romantic Drama  
3. Movie 3 – Sci-Fi Adventure  
4. Movie 4 – Comedy Entertainer  
5. Movie 5 – Mystery Thriller  
6. Movie 6 – Historical Drama  
7. Movie 7 – Horror Thriller  
8. Movie 8 – Animated Family Film  
9. Movie 9 – Crime Drama  
10. Movie 10 – Inspirational Story  

🎬 Book tickets directly from the Movies section.
      `
    },
    events: {
      title: "How to Book Events Easily",
      content: `
Available Events:
• Event X – Tech Conference  
• Event Y – Business Meetup  
• Event Z – Cultural Festival  

Steps:
1. Choose event  
2. Select date  
3. Choose tickets  
4. Confirm booking  

📌 Booking appears instantly in dashboard.
      `
    },
    concerts: {
      title: "Upcoming Concerts in 2025",
      content: `
🎵 Concert Line-up:
• Concert A – January 2025  
• Concert B – March 2025  
• Concert C – June 2025  

🎫 Book early for best seats.
      `
    }
  };

  window.openBlog = function (type) {
    document.getElementById("modal-title").innerText = blogData[type].title;
    document.getElementById("modal-content").innerText = blogData[type].content;
    document.getElementById("blog-modal").classList.remove("hidden");
  };

  window.closeBlog = function () {
    document.getElementById("blog-modal").classList.add("hidden");
  };

  /* =====================
     PRICE LIST
  ===================== */
  const prices = {
    "Movie 1": 150,
    "Movie 2": 200,
    "Movie 3": 250,
    "Concert A": 500,
    "Concert B": 700,
    "Concert C": 900,
    "Sport Event 1": 300,
    "Sport Event 2": 400,
    "Sport Event 3": 500,
    "Event X": 350,
    "Event Y": 450,
    "Event Z": 550,
    "Paris": 5000,
    "London": 7000,
    "New York": 9000
  };

  /* =====================
     DASHBOARD DATA
  ===================== */
  let totalBookings = Number(localStorage.getItem("totalBookings")) || 0;
  let totalSpent = Number(localStorage.getItem("totalSpent")) || 0;

  updateDashboard();
  showBookings();

  /* =====================
     BOOKING LOGIC
  ===================== */
  document.querySelectorAll(".booking-section form").forEach(form => {

    const costBox = document.createElement("p");
    costBox.style.fontWeight = "bold";
    costBox.style.marginTop = "10px";
    form.appendChild(costBox);

    form.addEventListener("change", () => {
      const select = form.querySelector("select");
      const qty = form.querySelector("input[type='number']");
      if (!select || !qty.value) return;
      costBox.innerHTML = `Cost: ₹${(prices[select.value] || 0) * qty.value}`;
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!localStorage.getItem("user")) {
        alert("Please login to make a booking");
        return;
      }

      const select = form.querySelector("select");
      const date = form.querySelector("input[type='date']");
      const qty = form.querySelector("input[type='number']");

      if (!date.value || !qty.value) {
        alert("Fill all fields");
        return;
      }

      const cost = (prices[select.value] || 0) * qty.value;

      totalBookings++;
      totalSpent += cost;

      localStorage.setItem("totalBookings", totalBookings);
      localStorage.setItem("totalSpent", totalSpent);

      saveBooking(select.value, date.value, qty.value, cost);

      alert(`Booking Successful!\nTotal Cost: ₹${cost}`);
      form.reset();
      costBox.innerHTML = "";
      updateDashboard();
      showBookings();
    });
  });

  /* =====================
     BOOKINGS STORAGE
  ===================== */
  function saveBooking(item, date, qty, cost) {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.unshift({ item, date, qty, cost });
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }

  function showBookings() {
    const list = document.getElementById("booking-list");
    if (!list) return;
    list.innerHTML = "";
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.slice(0, 5).forEach(b => {
      const div = document.createElement("div");
      div.className = "booking-item";
      div.innerHTML = `
        ${b.item}<br>
        Date: ${b.date}<br>
        Tickets: ${b.qty}<br>
        <b>₹${b.cost}</b>
      `;
      list.appendChild(div);
    });
  }

  function updateDashboard() {
    document.querySelector("#dashboard-stats span").innerText = totalBookings;
    document.querySelectorAll("#dashboard-stats span")[2].innerText = `₹${totalSpent}`;
  }

});