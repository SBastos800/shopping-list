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

    // scrollTo(0, 0);

    addProduct.reset();
})

const filteredItems = (itemTyped) => {
    Array.from(list.children)
        .filter((item) => {
            return !item.textContent.toLowerCase().includes(itemTyped)})
        .forEach((item) => {
            item.classList.add("filtered");
        });
}

filteredItems(itemTyped);



