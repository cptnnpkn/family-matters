---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cm
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
aliases: ["Faerl"]
---
# [Faerl](3-Mechanics\CLI\bestiary\npc/faerl-cm.md)
*Source: Candlekeep Mysteries p. 104*  

Faerl, a neutral evil wood elf, is proud and cruel. He believes that he must be in control at all times. He dresses in pompous finery and an oversized red hat. He speaks precisely, but in a volume so low that it forces people to pay close attention to him.

```statblock
"name": "Faerl (CM)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
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
"senses": "passive Perception 12"
"languages": "Common, Elvish"
"cr": "1/8"
"traits":
- "desc": "Faerl has advantage on saving throws against being [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
    \ and magic can't put him to sleep."
  "name": "Fey Ancestry"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) piercing damage."
  "name": "Rapier"
"reactions":
- "desc": "Faerl adds 2 to his AC against one melee attack that would hit it. To do\
    \ so, he must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "CM"
"image": "/3-Mechanics/CLI/bestiary/npc/token/faerl-cm.webp"
```
^statblock