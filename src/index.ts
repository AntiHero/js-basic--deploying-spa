import './styles/style.css';

document.body.addEventListener('click', (e) => {
  if ((<HTMLElement>e.target).tagName === 'A') {
    e.preventDefault();

    if (window.history) {
      window.history.pushState(
        {},
        document.title,
        (<HTMLAnchorElement>e.target).getAttribute('href')
      );
    } else {
      throw new Error("Sorry, your browser doesn't suppor history API");
    }

    render();
  }
});

function render() {
  (<HTMLElement>document.body.querySelector('p')).innerHTML =
    window.location.href;
}

render();
