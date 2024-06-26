---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cm
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
aliases: ["Varnyr"]
---
# [Varnyr](3-Mechanics\CLI\bestiary\npc/varnyr-cm.md)
*Source: Candlekeep Mysteries p. 63*  

Varnyr is a senior scribe who has spent centuries at Candlekeep. She loves the books, which she cares for as though they were her grandchildren. She has little ambition to rise in the ranks of the Avowed, perfectly content as a senior scribe. She is hardworking and expects others to be as well.

```statblock
"name": "Varnyr (CM)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Good"
"ac": !!int "15"
"ac_class": "[breastplate](/3-Mechanics/CLI/items/breastplate.md)"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "11"
- !!int "12"
- !!int "11"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Insight": !!int "4"
  "Persuasion": !!int "5"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Elvish"
"cr": "1/8"
"traits":
- "desc": "Varnyr has advantage on saving throws against being [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
    \ and magic can't put Varnyr to sleep."
  "name": "Fey Ancestry"
"actions":
- "desc": "Varnyr makes two attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ bludgeoning damage."
  "name": "Cane"
"reactions":
- "desc": "Varnyr adds 2 to their AC against one melee attack that would hit it. To\
    \ do so, Varnyr must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "CM"
"image": "/3-Mechanics/CLI/bestiary/npc/token/varnyr-cm.webp"
```
^statblock