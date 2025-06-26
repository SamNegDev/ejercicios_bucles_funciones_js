/*
Desarrolla una función que busque en un array de objetos representando mutantes 
si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder.
*/
const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(power) {
    mutantFound = false;
    mutantsFound = [];
    for (const mutant of mutants) {
        if (mutant.power == power) {
            mutantFound = true;
            mutantsFound.push(mutant.name);
        }
    }
    if (mutantFound) {
        console.log(`Se han encontrado ${mutantsFound.length} mutantes con el poder ${power}`)
        console.log(mutantsFound)
    } else {
        console.log(`Lo siento, no se han encontrado mutantes con el poder ${power}`)
    }
}

findMutantByPower("shape-shifting");
findMutantByPower("rage");
