---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/imr
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Two-Headed Crocodile"]
---
# [Two-Headed Crocodile](3-Mechanics\CLI\bestiary\beast/two-headed-crocodile-imr.md)
*Source: Infernal Machine Rebuild p. 89*  

```statblock
"name": "Two-Headed Crocodile (IMR)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "20 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "2"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": ""
"cr": "1"
"traits":
- "desc": "The two-headed crocodile can hold its breath for 15 minutes."
  "name": "Hold Breath"
- "desc": "The two-headed crocodile has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks and on saving throws against being [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
    \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened),\
    \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned),\
    \ and knocked [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)."
  "name": "Two Heads"
- "desc": "When one of the crocodile's heads is asleep, its other head is awake."
  "name": "Wakeful"
"actions":
- "desc": "The two-headed crocodile makes two attacks with its bite."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10\
    \ + 2) piercing damage, and the target is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 12). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ and that head of the crocodile can't bite another target."
  "name": "Bite"
"source":
- "IMR"
"image": "/3-Mechanics/CLI/bestiary/beast/token/two-headed-crocodile-imr.webp"
```
^statblock