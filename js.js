
const lightTheme = document.getElementById('light');
const darkTheme = document.getElementById('dark');
const toggleBtn = document.getElementById('toggle-theme');

function setTheme(theme) {
  if (theme === 'dark') {
    lightTheme.disabled = true;
    darkTheme.disabled = false;
  } else {
    lightTheme.disabled = false;
    darkTheme.disabled = true;
  }
  localStorage.setItem('theme', theme);
}

toggleBtn.addEventListener('click', function() {
  const isDark = !darkTheme.disabled;
  setTheme(isDark ? 'light' : 'dark');
});

// Apply saved theme when page loads
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);


const popElements = document.querySelectorAll('.pop-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // remove this line if you want it to stay visible after first appearing
    }
  });
}, {
  threshold: 0.2 // triggers when 20% of the element is visible
});

popElements.forEach((el) => {
  observer.observe(el);
});