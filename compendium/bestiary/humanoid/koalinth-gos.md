---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/gos
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/goblinoid
statblock: inline
aliases: ["Koalinth"]
---
# [Koalinth](3-Mechanics\CLI\bestiary\humanoid/koalinth-gos.md)
*Source: Ghosts of Saltmarsh p. 239*  

The koalinth, found in Danger at Dunwater, are martial and aggressive aquatic hobgoblins, with brightly colored faces and functional gills. They are known for their ferocity, and for their hatred of elves.

```statblock
"name": "Koalinth (GoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Lawful Evil"
"ac": !!int "14"
"ac_class": "[scale mail](/3-Mechanics/CLI/items/scale-mail.md)"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "11"
- !!int "10"
- !!int "11"
"speed": "30 ft., swim 20 ft."
"saves":
  "Dexterity": !!int "2"
"skillsaves":
  "Athletics": !!int "3"
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Goblin"
"cr": "1/2"
"traits":
- "desc": "The koalinth can breathe air and water."
  "name": "Amphibious"
- "desc": "Once per turn, the koalinth can deal an extra 7 (2d6) damage to a creature\
    \ it hits with a weapon attack if that creature is within 5 feet of an ally of\
    \ the koalinth that isn't [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)."
  "name": "Martial Advantage"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing\
    \ damage if used with two hands to make a melee attack."
  "name": "Trident"
"source":
- "GoS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/koalinth-gos.webp"
```
^statblock