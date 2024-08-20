console.log(`hello webpack`);
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const element = document.createElement('div');
  element.className = 'bg-blue-500 text-white p-4';
  element.textContent = 'Hello, Tailwind CSS with Webpack!';
  document.body.appendChild(element);
});
