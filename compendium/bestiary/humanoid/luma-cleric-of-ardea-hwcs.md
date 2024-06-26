---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/luma
statblock: inline
aliases: ["Luma Cleric of Ardea"]
---
# [Luma Cleric of Ardea](3-Mechanics\CLI\bestiary\humanoid/luma-cleric-of-ardea-hwcs.md)
*Source: Humblewood Campaign Setting p. 201*  

Clerics of Ardea travel the Wood on holy pilgrimages to sacred groves resplendent with life fostered by the Dawnmother. They spread Ardea's message of kindness wherever they go, taking it upon themselves to protect all life, great and small. Clerics serve the communities they pass through as healers, mediators, and occasionally as valiant defenders. Lumas who heed the call of the Amaranthine find their natural charisma and mystic talents to be of great help as they walk the cleric's path.

```statblock
"name": "Luma Cleric of Ardea (HWCS)"
"size": "Small"
"type": "humanoid"
"subtype": "luma"
"alignment": "Any Good alignment"
"ac": !!int "14"
"ac_class": "[chain shirt](/3-Mechanics/CLI/items/chain-shirt.md)"
"hp": !!int "27"
"hit_dice": "6d6 + 6"
"stats":
- !!int "10"
- !!int "13"
- !!int "12"
- !!int "10"
- !!int "16"
- !!int "14"
"speed": "25 ft."
"skillsaves":
  "Medicine": !!int "7"
  "Religion": !!int "2"
  "Persuasion": !!int "4"
"senses": "passive Perception 13"
"languages": "Birdfolk, one other language, can understand Auran but can't speak it"
"cr": "2"
"traits":
- "desc": "The cleric is a 5th-level spellcaster. Their spellcasting ability is Wisdom\
    \ (spell save DC 13, +5 to hit with spell attacks). The cleric has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [light](/3-Mechanics/CLI/spells/light.md),\
    \ [sacred flame](/3-Mechanics/CLI/spells/sacred-flame.md), [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy.md)\n\
    \n1st level (4 slots): [bless](/3-Mechanics/CLI/spells/bless.md), [cure wounds](/3-Mechanics/CLI/spells/cure-wounds.md),\
    \ [guiding bolt](/3-Mechanics/CLI/spells/guiding-bolt.md)\n\n2nd level (3 slots):\
    \ [lesser restoration](/3-Mechanics/CLI/spells/lesser-restoration.md), [spiritual\
    \ weapon](/3-Mechanics/CLI/spells/spiritual-weapon.md)\n\n3rd level (2 slots):\
    \ [beacon of hope](/3-Mechanics/CLI/spells/beacon-of-hope.md), [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md)"
  "name": "Spellcasting"
- "desc": "When falling at least 10 feet, the cleric can spend a reaction to fly up\
    \ to their speed in one direction as they descend. They land in an unoccupied\
    \ space at the end of their movement, and take no falling damage. They cannot\
    \ glide while carrying heavy objects, or heavy weapons, or shields (though they\
    \ can drop any held items as part of their reaction)."
  "name": "Glide"
- "desc": "As a bonus action, the cleric can use their powerful feathered arms to\
    \ propel themselves upward up to half their movement speed. The cleric can use\
    \ this in conjunction with a regular jump, but not while gliding."
  "name": "Wing Flap"
- "desc": "The luma cleric can choose to reroll any attack roll, skill check, or saving\
    \ throw."
  "name": "Fated (Recharges after a Long Rest)"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage, or 4 (1d8) bludgeoning damage if used with both hands."
  "name": "Staff"
- "desc": "The cleric calls on the powers of Ardea to imbue their allies with her\
    \ protective life force. The luma cleric and up to 3 allies within 30 feet gain\
    \ 5 (2d4) temporary hit points. For one minute, anyone under this effect gains\
    \ 5 temporary hit points at the start of each of their turns."
  "name": "Ardea's Vigor (1/Day)"
- "desc": "The cleric can cast [charm person](/3-Mechanics/CLI/spells/charm-person.md).\
    \ Charisma is their spellcasting ability (spell save DC 12) and the spell does\
    \ not require any somatic components to cast."
  "name": "Songbird (Recharges after a Long Rest)"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/luma-cleric-of-ardea-hwcs.webp"
```
^statblock