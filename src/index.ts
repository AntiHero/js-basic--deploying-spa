import './styles/style.css';

document.body.addEventListener('click', (e) => {
  if ((<HTMLElement>e.target).tagName === 'A') {
    (<HTMLElement>document.body.querySelector('p')).innerHTML =
      window.location.href;
  }
});
