const mtg = require('mtgsdk')

// mtg.card.find(3)
// .then(result => {
//     console.log(result.card.name)
//     console.log(result.card.rarity)
//     console.log(result.card.set)
//     console.log(result.card.manaCost)
//     console.log(result.card.originalText)
//     console.log(result.card.imageUrl)
// })

// mtg.set.find('VIS')
// .then(result => {
//     console.log(result.set.name)
// })

/*mtg.card.where({ name: 'Jace, Unraveler of Secrets', block: 'Shadows over Innistrad' })
.then(result => {
    console.log(console.log(result))
})*/

module.exports = async () => {
    return await mtg.card.where({ name: 'Jace, Unraveler of Secrets', block: 'Shadows over Innistrad' })
        .then(result => {
            //console.log(result);
            return result;
        })
}