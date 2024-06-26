---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/jttrc
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/celestial
statblock: inline
aliases: ["Pari"]
---
# [Pari](3-Mechanics\CLI\bestiary\celestial/pari-jttrc.md)
*Source: Journeys through the Radiant Citadel p. 167*  

A pari is an angelic harbinger gifted with foresight. A visit from a pari is often a prophetic warning or portent of an event yet to come. Pari have pastel blue skin, wear robes and armor, and have two sets of wings with vivid red feathers sprouting from their back.

```statblock
"name": "Pari (JttRC)"
"size": "Medium"
"type": "celestial"
"alignment": "typically  Lawful Good"
"ac": !!int "16"
"ac_class": "[breastplate](/3-Mechanics/CLI/items/breastplate.md)"
"hp": !!int "180"
"hit_dice": "19d8 + 95"
"stats":
- !!int "20"
- !!int "20"
- !!int "20"
- !!int "20"
- !!int "22"
- !!int "22"
"speed": "30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "11"
  "Wisdom": !!int "11"
  "Constitution": !!int "10"
"skillsaves":
  "Insight": !!int "16"
  "Perception": !!int "11"
"damage_resistances": "fire; radiant; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "13"
"traits":
- "desc": "The pari casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 19):\n\nAt will:\
    \ [detect evil and good](/3-Mechanics/CLI/spells/detect-evil-and-good.md)\n\n\
    1/day each: [commune](/3-Mechanics/CLI/spells/commune.md) (as an action),\
    \ [dispel evil and good](/3-Mechanics/CLI/spells/dispel-evil-and-good.md)\n\n\
    2/day each: [cure wounds](/3-Mechanics/CLI/spells/cure-wounds.md) (as a 6th-level\
    \ spell), [lesser restoration](/3-Mechanics/CLI/spells/lesser-restoration.md)"
  "name": "Spellcasting"
- "desc": "The pari has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The pari doesn't require food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "The pari makes three Mace attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 8\
    \ (1d6 + 5) bludgeoning damage plus 14 (4d6) radiant damage."
  "name": "Mace"
- "desc": "The pari attempts to flood the mind of one creature it can see within 60\
    \ feet of itself with visions of the future. The target must succeed on a DC 19\
    \ Wisdom saving throw or take 27 (5d10) psychic damage and have disadvantage\
    \ on attack rolls until the start of the pari's next turn."
  "name": "Disorienting Futures"
"source":
- "JttRC"
"image": "/3-Mechanics/CLI/bestiary/celestial/token/pari-jttrc.webp"
```
^statblock