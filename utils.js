export function renderDisc(disc) {
    const div = document.createElement('div');
    div.classList.add('disc');

    const h1 = document.createElement('h1');
    h1.textContent = disc.name;

    const img = document.createElement('img');
    img.src = disc.image;

    const p = document.createElement('p');
    p.textContent = `The ${disc.name} has a speed of ${disc.speed} and glide of ${disc.glide}`;

    div.append(h1, img, p);
    return div;
}

export function renderGoblin(goblin) {
    const div = document.createElement('div');
    div.classList.add('goblin');

    const img = document.createElement('img');
    img.src = goblin.image;
    
    const h1 = document.createElement('h1');
    h1.textContent = goblin.name;

    const p = document.createElement('p');
    p.textContent = `${goblin.name} has ${goblin.hp} HP`;

    div.append(img, h1, p);
    return div;
}

export function renderTool(tool) {
    const div = document.createElement('div');
    div.classList.add('tool');

    const img = document.createElement('img');
    img.src = tool.image;

    const h1 = document.createElement('h1');
    h1.textContent = tool.name;

    const p = document.createElement('p');
    p.textContent = `The ${tool.name} has a digging factor of ${tool.dig} and a durability factor of ${tool.durability}`;

    const h2 = document.createElement('h2');
    h2.textContent = 'Perks';

    const ul = document.createElement('ul');
    for (let perk of tool.perks) {
        const li = document.createElement('li');
        li.textContent = perk;
        ul.append(li);
    }

    div.append(img, h1, p, h2, ul);
    return div;
}