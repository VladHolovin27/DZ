// ex 1
// const categoryItems = document.querySelectorAll('#categories .item');
// console.log(`У списку ${categoryItems.length} категорії.`);
// categoryItems.forEach((categoryItem) => {
// const categoryName = categoryItem.querySelector('h2').textContent;
// const categoryElements = categoryItem.querySelectorAll('li')
// console.log(`Категорія: ${categoryName}`);
// console.log(`Кількість елементів: ${categoryElements.length}`);
// });

// // ex 2
// let ingredient = document.querySelector('#ingredients')
// const ingredients = [
//     'Картопля',
//     'Гриби',
//     'Часник',
//     'Помідори',
//     'Зелень',
//     'Приправи',
// ];


// ingredients.forEach((foodText) => {
//    let elem = document.querySelector('li');
//    elem.textContent = foodText;
//    ingredient.appendChild(elem)
// })

// // ex 3
// let gallery = document.querySelector('#gallery')
// const images = [
//     {
//       url:
//         'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'White and Black Long Fur Cat',
//     },
//     {
//       url:
//         'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//       url:
//         'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Group of Horses Running',
//     },
//   ];
// images.forEach((image) => {
//         const listItem = document.createElement('li');
//         listItem.insertAdjacentHTML('beforeend', `
//             <img src="${image.url}" alt="${image.alt}" width="300">
//         `);
//         gallery.appendChild(listItem);
// })

// // ex 4
// let bntB = document.querySelector('[data-action="increment"]')
// let btnA = document.querySelector('[data-action="decrement"]')
// let value = document.querySelector('#value')

// let counterValue = 0;

// function increment() {
//     counterValue += 1;
//     value.textContent = counterValue;
// }

// function decrement() {
//     counterValue -= 1;
//     value.textContent = counterValue;
// }
// btnA.addEventListener('click', decrement)
// bntB.addEventListener('click', increment)
