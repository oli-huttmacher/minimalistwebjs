console.log(`hello webpack`);
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  /*div*/
  const divEl = document.createElement('div');
  
  
  /*nav */
  const navEl = document.createElement('nav');
  navEl.className = 'flex justify-around inline-block bg-slate-500 p-5 list-none ';
  
  
  /*li */
  const liEl1 = document.createElement('li');
  liEl1.textContent = 'Acceuil';
  liEl1.className = 'text-white '

  const liEl2 = document.createElement('li');
  liEl2.textContent = 'Game';
  liEl2.className = 'text-white'

  const liEl3 = document.createElement('li');
  liEl3.textContent = 'Contact';
  liEl3.className = 'text-white'
  
  /*div > ul */
  divEl.append(navEl);
  /*nav > li */
  navEl.append(liEl1,liEl2,liEl3);


  /*render DOM elements */
  document.body.appendChild(divEl);




});