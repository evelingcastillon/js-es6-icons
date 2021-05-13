//Milestone 1:
/* Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout. */


/* Milestone 2
Coloriamo le icone per tipo */


/* Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone */

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];
/* CICLO AGGIUNTA COLORI */
icons.forEach((item) => {

    if(item.type === 'animal') {
        item.coloreItem = 'blue';

    } else if (item.type === 'vegetable'){
        item.coloreItem = 'gold';

    } else {
        item.coloreItem = 'purple';
    }
});

/* AGGIUNTA DI OGNI ICON IN DIV CONTAINER */
icons.forEach((item) => {
    document.getElementById('container').insertAdjacentHTML('beforeend', `
        <div class="elementi">
            <i class="${item.family} ${item.prefix}${item.name}" style='color: ${item.coloreItem}'></i>
            <p class="text">${item.name.toLocaleUpperCase()}</p>
        </div>
    `)
});
/* animal slide */

document.getElementById("scelta").addEventListener("change", function() {
    let selezionato = document.getElementById('scelta').value;
    console.log(selezionato);

    const iconsAnimal = icons.filter((item) => {
        return item.type === selezionato;
    });
    if(iconsAnimal.length > 0) {
        var array = iconsAnimal;
    } else{
        var array = icons;
    }

    document.getElementById('container').innerHTML = '';

    array.forEach((item) => {
        document.getElementById('container').insertAdjacentHTML('beforeend', `
            <div class="elementi">
                <i class="${item.family} ${item.prefix}${item.name}" style='color: ${item.coloreItem}'></i>
                <p class="text">${item.name.toLocaleUpperCase()}</p>
            </div>
        `);
    });

});

/* const iconsAnimal = [];
const icons
icons.forEach((item) => {
    if(item.type === 'animal') {
        iconsAnimal.push(item)
    }
}) */

/* document.getElementById("animal").addEventListener("click", function() {
    let iconsAnimal = icons.forEach((item) => {
        document.getElementById('container').insertAdjacentHTML('beforeend', `
        <div class="elementi">
            <i class="${item.family} ${item.prefix}${item.name}" style='color: ${item.coloreItem}'></i>
            <p class="text">${item.name.toLocaleUpperCase()}</p>
        </div>
    `); 
    })
    console.log(iconsAnimal);

  }); */