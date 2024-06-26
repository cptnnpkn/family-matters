---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Rat Prince"]
---
# [Rat Prince](3-Mechanics\CLI\bestiary\monstrosity/rat-prince-dodk.md)
*Source: Dungeons of Drakkenheim p. 213*  

This ratling stands head-and-shoulders over the others, and has black-brown fur and a wicked grin - some of his frontmost teeth are delerium crystals. He wears scavenged bits of light armour, tattered dark blue rags, and a gold crown which is slightly too small for his head.

```statblock
"name": "Rat Prince (DoDk)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "[leather armor](/3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "12"
- !!int "19"
- !!int "13"
- !!int "9"
- !!int "15"
- !!int "9"
"speed": "30 ft., climb 30 ft., swim 30 ft."
"skillsaves":
  "Athletics": !!int "3"
  "Stealth": !!int "8"
  "Perception": !!int "6"
  "Acrobatics": !!int "6"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common"
"cr": "3"
"traits":
- "desc": "The Rat Prince can take the Dash, Disengage, or Hide action as a bonus\
    \ action on each of its turns."
  "name": "Cunning Action"
- "desc": "The Rat Prince has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- "desc": "The Rat Prince has advantage on an attack roll against a creature if at\
    \ least one of his allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
- "desc": "The Rat Prince carries 2d6 pieces of ammunition laced with delerium fragments.\
    \ These projectiles cause 1d6 extra damage on a hit, and the target must succeed\
    \ on a DC 10 Constitution saving throw or gain one level of contamination."
  "name": "Contaminated Ammunition"
"actions":
- "desc": "The Rat Prince makes three attacks: two with his short swords, and one\
    \ with his contaminated bite."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage."
  "name": "Short Sword"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 4) piercing damage, plus an extra 10 (3d6) necrotic damage, and the creature\
    \ must succeed on a DC 11 Constitution saving throw or gain one level of contamination."
  "name": "Contaminated Bite"
- "desc": "Ranged Weapon Attack: +6 to hit, range 30/120 ft., one target. Hit:\
    \ 7 (1d6 + 4) piercing damage."
  "name": "Hand Crossbow"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/rat-prince-dodk.webp"
```
^statblock