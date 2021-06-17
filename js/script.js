
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
        eta : 3,
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


/* Milestone 2 */

const catsM = [];

const catsF = [];

cats.forEach((element) => {
    const {name,eta,color,sesso} = element;
    const fioccoF = '#ffc0cb';
    const fioccoM = '#0000ff';
    if(element.sesso == 'M'){
        catsM.push({
            name,
            eta,
            color,
            sesso,
            fiocco : fioccoM
        });
    }else{
        catsF.push({
            name,
            eta,
            color,
            sesso,
            fiocco : fioccoF
        });
    }
});

console.log(catsF);

console.log(catsM);


/* Milestone 3 */

let catsNew = [...catsF,...catsM];


catsNew.forEach((element) => {
    document.getElementById('cats2').innerHTML += 
    `
    ${element.name} <i class="fas fa-cat" style = "color:${element.color};"></i>
    <i class="fas fa-paw" style = "color:${element.fiocco};"></i>
    `
});