---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/huden-gallus
statblock: inline
aliases: ["Ardwyn, Elder of Meadowfen"]
---
# [Ardwyn, Elder of Meadowfen](3-Mechanics\CLI\bestiary\npc/ardwyn-elder-of-meadowfen-hwcs.md)
*Source: Humblewood Campaign Setting p. 190*  

A venerable huden gallus with rounded grouse-like proportions and feathers that have long since lost the sheen of youth. As the village Elder, Ardwyn is a figure of authority within Meadowfen. She and her late husband kept the village running until his death, after which she took on the role alone. Elder Ardwyn is a kind and perceptive woman who exudes leadership. The villagers look to her for guidance. Ardwyn uses the [priest](/3-Mechanics/CLI/bestiary/humanoid/priest.md) stat block, adjusted with the racial traits of a huden gallus. She is neutral good.

```statblock
"name": "Ardwyn, Elder of Meadowfen (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "huden gallus"
"alignment": "Neutral Good"
"ac": !!int "13"
"ac_class": "[chain shirt](/3-Mechanics/CLI/items/chain-shirt.md)"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "10"
- !!int "11"
- !!int "12"
- !!int "13"
- !!int "18"
- !!int "13"
"speed": "30 ft."
"skillsaves":
  "Medicine": !!int "8"
  "Religion": !!int "5"
  "Persuasion": !!int "3"
"senses": "passive Perception 13"
"languages": "Birdfolk, can also understand Auran but can't speak it"
"cr": "2"
"traits":
- "desc": "Ardwyn is a 5th-level spellcaster. Her spellcasting ability is Wisdom (spell\
    \ save DC 14, +6 to hit with spell attacks). Ardwyn has the following cleric\
    \ spells prepared:\n\nCantrips (at will): [light](/3-Mechanics/CLI/spells/light.md),\
    \ [sacred flame](/3-Mechanics/CLI/spells/sacred-flame.md), [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy.md)\n\
    \n1st level (4 slots): [cure wounds](/3-Mechanics/CLI/spells/cure-wounds.md),\
    \ [guiding bolt](/3-Mechanics/CLI/spells/guiding-bolt.md), [sanctuary](/3-Mechanics/CLI/spells/sanctuary.md)\n\
    \n2nd level (3 slots): [lesser restoration](/3-Mechanics/CLI/spells/lesser-restoration.md),\
    \ [spiritual weapon](/3-Mechanics/CLI/spells/spiritual-weapon.md)\n\n3rd level\
    \ (2 slots): [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md), [spirit\
    \ guardians](/3-Mechanics/CLI/spells/spirit-guardians.md)"
  "name": "Spellcasting"
- "desc": "When falling at least 10 feet, Ardwyn can spend a reaction to fly up to\
    \ her speed in one direction as she descends. She lands in an unoccupied space\
    \ at the end of her movement, and takes no falling damage. She cannot glide while\
    \ carrying heavy objects, heavy weapons, or shields (though she can drop any held\
    \ items as part of her reaction)."
  "name": "Glide"
- "desc": "As a bonus action, Ardwyn can use her powerful feathered arms to propel\
    \ herself upward a distance equal to half her movement speed. She can use it in\
    \ conjunction with a regular jump, but not while gliding. "
  "name": "Wing Flap"
- "desc": "Ardwyn can communicate simple ideas to living plants, and is able to interpret\
    \ their responses in simple language."
  "name": "Seedspeech"
- "desc": "As a bonus action, Ardwyn can expend a spell slot to cause her melee weapon\
    \ attacks to magically deal an extra 10 (3d6) radiant damage to a target on\
    \ a hit. This benefit lasts until the end of the turn. If Ardwyn expends a spell\
    \ slot of 2nd level or higher, the extra damage increases by 1d6 for each level\
    \ above 1st."
  "name": "Divine Eminence"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage."
  "name": "Mace"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/npc/token/ardwyn-elder-of-meadowfen-hwcs.webp"
```
^statblock