
// Countdown Timer
function updateCountdown() {
  const countdownElements = document.querySelectorAll(".time-unit")
  if (countdownElements.length >= 3) {
    let hours = Number.parseInt(countdownElements[0].textContent)
    let minutes = Number.parseInt(countdownElements[1].textContent)
    let seconds = Number.parseInt(countdownElements[2].textContent)

    // Decrease seconds
    seconds--

    if (seconds < 0) {
      seconds = 59
      minutes--

      if (minutes < 0) {
        minutes = 59
        hours--

        if (hours < 0) {
          hours = 23
        }
      }
    }

    // Update display
    countdownElements[0].textContent = hours.toString().padStart(2, "0")
    countdownElements[1].textContent = minutes.toString().padStart(2, "0")
    countdownElements[2].textContent = seconds.toString().padStart(2, "0")
  }
}

// Start countdown
setInterval(updateCountdown, 1000)

// Search functionality
document.querySelector(".search-input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    performSearch()
  }
})

document.querySelector(".search-btn").addEventListener("click", performSearch)

function performSearch() {
  const searchTerm = document.querySelector(".search-input").value
  if (searchTerm.trim()) {
    alert(`Qidiruv: "${searchTerm}"`)
    // Here you would typically send the search to your backend
  }
}

// Cart functionality
let cartCount = 0
const cartCountElement = document.querySelector(".cart-count")

function addToCart() {
  cartCount++
  cartCountElement.textContent = cartCount
}

// Category dots navigation
document.querySelectorAll(".dot").forEach((dot, index) => {
  dot.addEventListener("click", function () {
    document.querySelectorAll(".dot").forEach((d) => d.classList.remove("active"))
    this.classList.add("active")
    // Here you would typically load different category content
  })
})

// Mobile menu toggle (if needed)
document.querySelector(".catalog-btn").addEventListener("click", () => {
  // Toggle mobile catalog menu
  alert("Katalog ochildi")
})

// Smooth scrolling for buttons
document.querySelectorAll(".btn-primary, .btn-secondary").forEach((button) => {
  button.addEventListener("click", function () {
    // Add your navigation logic here
    console.log("Button clicked:", this.textContent)
  })
})