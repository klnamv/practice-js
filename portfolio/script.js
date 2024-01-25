import { greetings } from './greetings.js';

document.addEventListener('DOMContentLoaded', (event) => {
    const helloWorldEl = document.getElementById('helloWorld');
    let currentGreeting = 0;
  
    const changeGreeting = () => {
      helloWorldEl.style.opacity = 0;
      setTimeout(() => {
        helloWorldEl.innerHTML = `<div>${greetings[currentGreeting].text}</div>
            <div class="language">${greetings[currentGreeting].language}</div>`;
        helloWorldEl.style.opacity = 1;
        currentGreeting = (currentGreeting + 1) % greetings.length; 
      }, 1000); 
    };
  
    setInterval(changeGreeting, 4000);
  });