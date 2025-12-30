// Typed.js effect
document.addEventListener('DOMContentLoaded', function () {
  // Typing animation
  const typedTextSpan = document.querySelector('.typed-text');
  const cursorSpan = document.querySelector('.cursor');

  const textArray = ['Projects', 'Experiments', 'Creations', 'Code'];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000;
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains('typing'))
        cursorSpan.classList.add('typing');
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorSpan.classList.remove('typing');
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if (!cursorSpan.classList.contains('typing'))
        cursorSpan.classList.add('typing');
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      cursorSpan.classList.remove('typing');
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  // Start animation
  if (textArray.length) setTimeout(type, newTextDelay + 250);

  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Projects data - replace with your actual projects
  const projects = [
    {
      title: 'Ecommerce Website',
      description:
        'Responsive ecommerce site with product listing and cart functionality',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: './assets/images/ecomm.png',
      demoUrl: 'https://wood-ecomm-site.netlify.app',
      codeUrl:
        'https://github.com/SwarajThakre/Js_Projects/tree/main/Ecommerce-Website',
    },
    {
      title: 'Weather App',
      description: 'Get current weather and forecast using the OpenWeather API',
      tags: ['API', 'Async/Await', 'Geolocation'],
      image: './assets/images/weather-site.png',
      demoUrl: 'https://weather-report-sites.netlify.app',
      codeUrl:
        'https://github.com/SwarajThakre/Js_Projects/tree/main/Weather_site',
    },
    {
      title: 'To-Do List',
      description: 'Simple to-do list with local storage for persistence',
      tags: ['Local Storage', 'DOM Manipulation', 'Event Handling'],
      image: './assets/images/to-do.png',
      demoUrl: 'https://yours-todo-lists.netlify.app',
      codeUrl:
        'https://github.com/SwarajThakre/Js_Projects/tree/main/To-do-List',
    },
    {
      title: 'Quiz Game',
      description: 'Interactive quiz game with multiple choice questions',
      tags: ['JavaScript', 'DOM Manipulation', 'Game Logic'],
      image: './assets/images/quiz.png',
      demoUrl: 'https://quiz-sitte.netlify.app',
      codeUrl: 'https://github.com/SwarajThakre/Js_Projects/tree/main/Quiz-app',
    },
    {
      title: 'Expense Tracking',
      description:
        'Simple expense tracking app with local storage for data persistence',
      tags: ['Local Storage', 'DOM Manipulation', 'Event Handling'],
      image: './assets/images/expense.png',
      demoUrl: 'https://aexpenses-track.netlify.app',
      codeUrl:
        'https://github.com/SwarajThakre/Js_Projects/tree/main/expense_tracker',
    },
    {
      title: 'Forex converter app',
      description: 'Get current currency rates and convert between currencies',
      tags: ['API', 'Async/Await', 'DOM Manipulation', 'Event Handling'],
      image: './assets/images/forrates.png',
      demoUrl: 'https://globexrates.netlify.app/',
      codeUrl: 'https://github.com/SwarajThakre/forex_sites',
    },
  ];

  // Render projects
  const projectsContainer = document.getElementById('projects-container');

  projects.forEach((project) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    projectCard.innerHTML = `
    <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
    </div>
    <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
        <div class="project-links">
            <a href="${project.demoUrl}" target="_blank">Live Demo</a>
            <a href="${project.codeUrl}" target="_blank">View Code</a>
        </div>
    </div>
`;

    projectsContainer.appendChild(projectCard);
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
});
