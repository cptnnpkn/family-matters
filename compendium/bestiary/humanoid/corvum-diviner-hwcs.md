---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/corvum
statblock: inline
aliases: ["Corvum Diviner"]
---
# [Corvum Diviner](3-Mechanics\CLI\bestiary\humanoid/corvum-diviner-hwcs.md)
*Source: Humblewood Campaign Setting p. 194*  

Diviners specialize in esoteric spells and rituals, which can be used to see the threads of fate that move the world. Even when such predictions fail, they usually reveal useful information in the process. Corvums prize knowledge in all its forms, often dealing in secrets the way others deal in goods, and so many are drawn to practice the diviner's art.

```statblock
"name": "Corvum Diviner (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "corvum"
"alignment": "Lawful Neutral"
"ac": !!int "12"
"ac_class": "15 with mage armor"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
"skillsaves":
  "Religion": !!int "6"
  "History": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 11"
"languages": "Birdfolk, can also understand Auran but can't speak it"
"cr": "6"
"traits":
- "desc": "The diviner is a 9th level spellcaster. Their spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks). The diviner has the following\
    \ spells prepared:\n\nCantrips (at will): [fire bolt](/3-Mechanics/CLI/spells/fire-bolt.md),\
    \ [light](/3-Mechanics/CLI/spells/light.md), [mage hand](/3-Mechanics/CLI/spells/mage-hand.md),\
    \ [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md)\n\n1st level\
    \ (4 slots): [detect magic](/3-Mechanics/CLI/spells/detect-magic.md), [mage\
    \ armor](/3-Mechanics/CLI/spells/mage-armor.md), [magic missile](/3-Mechanics/CLI/spells/magic-missile.md),\
    \ [shield](/3-Mechanics/CLI/spells/shield.md)\n\n2nd level (2 slots): [augury](/3-Mechanics/CLI/spells/augury.md),\
    \ [misty step](/3-Mechanics/CLI/spells/misty-step.md)\n\n3rd level (3 slots):\
    \ [clairvoyance](/3-Mechanics/CLI/spells/clairvoyance.md), [counterspell](/3-Mechanics/CLI/spells/counterspell.md),\
    \ [fly](/3-Mechanics/CLI/spells/fly.md)\n\n4th level (3 slots): [greater invisibility](/3-Mechanics/CLI/spells/greater-invisibility.md),\
    \ [locate creature](/3-Mechanics/CLI/spells/locate-creature.md)\n\n5th level\
    \ (1 slots): [scrying](/3-Mechanics/CLI/spells/scrying.md)"
  "name": "Spellcasting"
- "desc": "When falling at least 10 feet, the diviner can spend a reaction to fly\
    \ up to their speed in one direction as they descend. The diviner lands in an\
    \ unoccupied space at the end of their movement, and takes no falling damage.\
    \ The diviner cannot glide while carrying heavy objects, heavy weapons, or shields\
    \ (though they can drop any held items as part of their reaction)."
  "name": "Glide"
- "desc": "The diviner has advantage on Strength ([Athletics](/3-Mechanics/CLI/rules/skills.md#Athletics))\
    \ checks made to climb any surface their talons could reasonably grip."
  "name": "Talons"
- "desc": "The diviner has advantage on Dexterity ([Stealth](/3-Mechanics/CLI/rules/skills.md#Stealth))\
    \ checks made in dim light or darkness."
  "name": "Skulker"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Talons"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/corvum-diviner-hwcs.webp"
```
^statblock