ServerEvents.recipes(event => {
  //Remove straw recipe
  event.remove({ output: 'createaddition:straw' })
  event.remove({ input: 'createaddition:straw' })
})
//Remove straw from JEI
RecipeViewerEvents.removeEntries('item', event => {
  event.remove('createaddition:straw')
})