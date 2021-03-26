events.listen('recipes', function (e) {
    //Removals
    e.remove({
        output: [
            'angelring:itemring',
        ]
    })

    e.shaped('angelring:itemring', [
        'TNP',
        'GRG',
        'SGI'
    ], {
        'T': 'botania:terrasteel_ingot',
        'S': 'astralsorcery:starmetal_ingot',
        'R': 'angelring:itemdiamondring',
        'N': '#forge:nether_stars',
        'I': '#forge:ingots/steel',
        'P': 'mana-and-artifice:purified_vinteum_ingot',
        'G': '#forge:storage_blocks/gold',
      })
})
