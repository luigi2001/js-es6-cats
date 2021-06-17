
/* Milestone 1 */

const cats = [
    {
        name : 'Garfild',
        eta : 5,
        color : '#ffa500',
        sesso : 'M'
    },
    {
        name : 'Felix',
        eta : 7,
        color : '#ff0000',
        sesso : 'M'
    },
    {
        name : 'Jerry',
        eta : 10,
        color : '#000000',
        sesso : 'M'
    },
    {
        name : 'Kitty',
        eta : 10,
        color : '#ffff00',
        sesso : 'F'
    }
];

cats.forEach((element) => {
    document.getElementById('cats').innerHTML += 
    `
    ${element.name} <i class="fas fa-cat" style = "color:${element.color};"></i>
    `
});