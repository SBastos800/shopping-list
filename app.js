const addProduct = document.querySelector('.addProduct');
const list = document.querySelector('ul');

addProduct.addEventListener('submit', e => {
    e.preventDefault();

    const newProduct = addProduct.add.value.trim();

    list.innerHTML += `
    <li>
        <span>${newProduct}</span>
        <i class="fas fa-trash-alt"></i>
    </li>`;

})