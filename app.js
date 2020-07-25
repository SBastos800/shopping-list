const addProduct = document.querySelector('.addProduct');
const list = document.querySelector('.list');
const searchForm = document.querySelector('.searchForm input');

//add a new item to the list
addProduct.addEventListener('submit', e => {
    e.preventDefault();

    const newProduct = addProduct.add.value.trim();

    list.innerHTML += `
    <li>
        <span>${newProduct}</span>
        <i class="fas fa-trash-alt delete"></i>
    </li>`;

    addProduct.reset();
});

//delete and item from the list
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
});

//filter items according to their class in order to show or hide
const filteredItems = (itemTyped) => {
    Array.from(list.children)
        .filter((item) => {
            return !item.textContent.toLowerCase().includes(itemTyped)
        })
        .forEach((item) => {
            item.classList.add("filtered");
        });

    Array.from(list.children)
        .filter((item) => {
            return item.textContent.toLowerCase().includes(itemTyped)
        })
        .forEach((item) => {
            item.classList.remove("filtered");
        });
};

searchForm.addEventListener('keyup', () => {
    const itemTyped = searchForm.value.toLowerCase().trim();
    filteredItems(itemTyped);
});



        