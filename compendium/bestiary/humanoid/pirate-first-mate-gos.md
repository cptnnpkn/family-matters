---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/gos
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
aliases: ["Pirate First Mate"]
---
# [Pirate First Mate](3-Mechanics\CLI\bestiary\humanoid/pirate-first-mate-gos.md)
*Source: Ghosts of Saltmarsh p. 248*  

These no-nonsense sailors are the trusted allies of a pirate ship's captain. Ex-soldiers and trained mercenaries often find employment as mates aboard pirate ships. In The Sinister Secret of Saltmarsh, Bloody Bjorn serves as the first mate aboard Sea Ghost.

```statblock
"name": "Pirate First Mate (GoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "[chain mail](/3-Mechanics/CLI/items/chain-mail.md)"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "14"
- !!int "11"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "13"
"speed": "30 ft."
"skillsaves":
  "Intimidation": !!int "3"
  "Athletics": !!int "4"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "1"
"traits":
- "desc": "The first mate has advantage on ability checks and saving throws to resist\
    \ being knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Sea Legs"
"actions":
- "desc": "The first mate makes two attacks with its longsword."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands.\
    \ If the target is a creature, the first mate can choose to deal no damage with\
    \ the attack to disarm the target. The target must succeed on a DC 14 Strength\
    \ saving throw or drop one item it is holding on the ground."
  "name": "Longsword"
"source":
- "GoS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/pirate-first-mate-gos.webp"
```
^statblock