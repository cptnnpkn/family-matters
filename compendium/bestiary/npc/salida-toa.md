---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/toa
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/yuan-ti
statblock: inline
aliases: ["Salida"]
---
# [Salida](3-Mechanics\CLI\bestiary\npc/salida-toa.md)
*Source: Tomb of Annihilation p. 35*  

```statblock
"name": "Salida (ToA)"
"size": "Medium"
"type": "humanoid"
"subtype": "yuan-ti"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "11"
- !!int "12"
- !!int "11"
- !!int "13"
- !!int "12"
- !!int "14"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "3"
  "Perception": !!int "3"
  "Survival": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Abyssal, Common, Draconic"
"cr": "1"
"traits":
- "desc": "Salida's spellcasting ability is Charisma (spell save DC 12). Salida can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [animal friendship](/3-Mechanics/CLI/spells/animal-friendship.md) (snakes\
    \ only)\n\n3/day each: [poison spray](/3-Mechanics/CLI/spells/poison-spray.md),\
    \ [suggestion](/3-Mechanics/CLI/spells/suggestion.md)"
  "name": "Innate Spellcasting"
- "desc": "Salida has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Salida makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) slashing damage."
  "name": "Scimitar"
- "desc": "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit:\
    \ 4 (1d6 + 1) piercing damage plus 7 (2d6) poison damage."
  "name": "Shortbow"
"source":
- "ToA"
"image": "/3-Mechanics/CLI/bestiary/npc/token/salida-toa.webp"
```
^statblock