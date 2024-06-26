---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Shatter Corpse"]
---
# [Shatter Corpse](3-Mechanics\CLI\bestiary\undead/shatter-corpse-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 16*  

> [!quote]-  
> 
> The sound of breaking glass startles most, but think twice before going to see what caused it if it is followed by the sound of moaning.

## Salvage

The glass from ten shatter corpses can be used to create a suit of [glass-studded armor](/3-Mechanics/CLI/items/glass-studded-armor-ghloe.md) (see Appendix A of Lairs of Etharis) with a successful DC 10 Dexterity ([Sleight of Hand](/3-Mechanics/CLI/rules/skills.md#Sleight%20of%20Hand)) check by someone proficient with jeweler's tools. Crafting this item takes 10 days and costs 1000 gp.

## Lore

- **DC 10 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)).** Shatter corpses are a stronger kind of zombie that arises when someone dies from being impaled on broken glass.  
- **DC 15 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** Those that attempt to use a melee attack against a shatter corpse are likely to cut themselves unless they attack with carefully.  
- **DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** Shatter corpses can launch volleys of broken glass.  

```statblock
"name": "Shatter Corpse (GHLoE)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Neutral"
"ac": !!int "10"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "13"
- !!int "6"
- !!int "16"
- !!int "3"
- !!int "6"
- !!int "5"
"speed": "20 ft."
"saves":
  "Wisdom": !!int "0"
"damage_immunities": "piercing, poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands the languages it knew in life but can't speak"
"cr": "1"
"traits":
- "desc": "Each time a creature makes a melee attack against a shatter corpse, it\
    \ takes 3 piercing damage. A creature can choose to make an attack with disadvantage\
    \ to avoid this damage."
  "name": "Glass Spikes"
- "desc": "Creatures have advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks made to hear the approach of a shatter corpse."
  "name": "Loud"
- "desc": "The shatter corpse has advantage on saving throws against any effect that\
    \ turns undead."
  "name": "Turn Resistance"
- "desc": "If damage reduces the shatter corpse to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the shatter corpse drops to 1 hit point\
    \ instead."
  "name": "Undead Fortitude"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage and 2 (1d4) piercing damage."
  "name": "Slam"
- "desc": "The shatter corpse flicks a volley of glass shards in a 15-foot cone. Each\
    \ creature in that area must make a DC 13 Dexterity saving throw, taking 10 (3d6)\
    \ slashing damage on a failed save, or half as much damage on a successful one."
  "name": "Volley of Glass (Recharge 6)"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/undead/token/shatter-corpse-ghloe.webp"
```
^statblock