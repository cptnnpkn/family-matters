---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/gos
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/sahuagin
statblock: inline
aliases: ["Sahuagin Blademaster"]
---
# [Sahuagin Blademaster](3-Mechanics\CLI\bestiary\humanoid/sahuagin-blademaster-gos.md)
*Source: Ghosts of Saltmarsh p. 249, Sleeping Dragon's Wake, Locathah Rising*  

A cunning veteran of countless campaigns, the sahuagin blademaster decorates its armor with the bones of its defeated foes. As demonstrated in The Final Enemy, sahuagin blademasters often serve as officers in the sa huagin army.

```statblock
"name": "Sahuagin Blademaster (GoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "sahuagin"
"alignment": "Lawful Evil"
"ac": !!int "20"
"ac_class": "[plate armor](/3-Mechanics/CLI/items/plate-armor.md), [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "97"
"hit_dice": "15d8 + 30"
"stats":
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "12"
"speed": "30 ft., swim 40 ft."
"saves":
  "Strength": !!int "6"
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "4"
  "Athletics": !!int "6"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Sahuagin"
"cr": "6"
"traits":
- "desc": "The blademaster has advantage on melee attack rolls against any creature\
    \ that doesn't have all its hit points."
  "name": "Blood Frenzy"
- "desc": "The blademaster can breathe air and water, but it needs to be submerged\
    \ at least once every 4 hours to avoid suffocating."
  "name": "Limited Amphibiousness"
- "desc": "The blademaster can magically command any shark within 120 feet of it,\
    \ using a limited telepathy."
  "name": "Shark Telepathy"
"actions":
- "desc": "The blademaster makes three attacks with its wavecutter blade, or one attack\
    \ with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12\
    \ (2d8 + 3) slashing damage."
  "name": "Wavecutter Blade"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d10\
    \ + 3) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage."
  "name": "Claws"
"source":
- "GoS"
- "SDW"
- "LR"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/sahuagin-blademaster-gos.webp"
```
^statblock