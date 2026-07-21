ServerEvents.recipes(event => {

  // Mossy Stone Bricks → Stone Bricks
  event.recipes.create.filling(
    'minecraft:mossy_stone_bricks',
    [
      'minecraft:stone_bricks',
      Fluid.of('minecraft:water', 100)
    ]
  )

  // Mossy Cobblestone → Cobblestone
  event.recipes.create.filling(
    'minecraft:mossy_cobblestone',
    [
      'minecraft:cobblestone',
      Fluid.of('minecraft:water', 100)
    ]
  )

})