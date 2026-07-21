ServerEvents.recipes(compactingclay => {
    function compacting(/** @type {$ItemStackKJS_} */LowerItem,/** @type {$ItemStackKJS_} */HigherItem) {
        compactingclay.custom({
            type: "functionalstorage:custom_compacting",
            higher_input: HigherItem,
            lower_input: LowerItem
        })
    }
    compacting(Item.of("4x minecraft:clay_ball"), Item.of("minecraft:clay"))
})