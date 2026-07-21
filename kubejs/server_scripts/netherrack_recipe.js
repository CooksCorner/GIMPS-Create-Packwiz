ServerEvents.recipes(event => {
  event.recipes.create.filling(
    'minecraft:netherrack',
    [
      'minecraft:cobblestone',
      Fluid.of('minecraft:lava', 250)
    ]
  )
})