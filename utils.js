export function renderDisc(disc) {
    const div = document.createElement('div');
    div.classList.add('disc');

    const h1 = document.createElement('h1');
    h1.textContent = disc.name;

}