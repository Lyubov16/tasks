import { Item } from './Item.js'
import { items } from '/items.js'


const list = document.querySelector('.list');
const form = document.querySelector('.form');

const onItemAdd = (e) => {
    e.preventDefault();

    const { value } = e.target.elements.text
    const payload = {
        text: value,
        isDone: false,
    }
    form.reset();
    items.push(payload);
    render();
}

const render = () => {
    const lis = items.map(Item).join('');
    list.innerHTML = '';
list.insertAdjacentHTML('beforeend', lis);
}

const onListClick = (e) => {
    
}

render();

form.addEventListener('submit', onItemAdd)
list.addEventListener('click', onListClick)
