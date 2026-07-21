ServerEvents.recipes(event => {
  // Remove Create's default Blaze Cake compacting recipe
  event.remove({ id: 'create:compacting/blaze_cake' })

  // Mixer recipe: Sugar + Cinder Flour + 100mb Water -> Blaze Cake Base
  event.recipes.create.mixing(
    'create:blaze_cake_base',
    [
      'minecraft:sugar',
      'create:cinder_flour',
      Fluid.of('minecraft:water', 100)
    ]
  )
})