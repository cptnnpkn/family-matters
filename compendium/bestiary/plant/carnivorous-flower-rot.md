---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/rot
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/plant
statblock: inline
aliases: ["Carnivorous Flower"]
---
# [Carnivorous Flower](3-Mechanics\CLI\bestiary\plant/carnivorous-flower-rot.md)
*Source: The Rise of Tiamat p. 67*  

```statblock
"name": "Carnivorous Flower (RoT)"
"size": "Large"
"type": "plant"
"alignment": "Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "16"
- !!int "11"
- !!int "19"
- !!int "6"
- !!int "13"
- !!int "6"
"speed": "0 ft."
"saves":
  "Constitution": !!int "7"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Otyugh"
"cr": "5"
"traits":
- "desc": "The plant can magically transmit simple messages and images to any creature\
    \ within 120 feet of it that can understand a language. This form of telepathy\
    \ doesn't allow the receiving creature to telepathically respond."
  "name": "Limited Telepathy"
"actions":
- "desc": "The plant makes three attacks: one with its bite and two with its tentacles."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12\
    \ (2d8 + 3) piercing damage. If the target is a creature, it must succeed on\
    \ a DC 15 Constitution saving throw against disease or become [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ until the disease is cured. Every 24 hours that elapse, the target must repeat\
    \ the saving throw, reducing its hit point maximum by 5 (1d10) on a failure.\
    \ The disease is cured on a success. The target dies if the disease reduces its\
    \ hit point maximum to 0. This reduction to the target's hit point maximum lasts\
    \ until the disease is cured."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7\
    \ (1d8 + 3) bludgeoning damage plus 4 (1d8) piercing damage. If the target\
    \ is Medium or smaller, it is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 13) and [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ until the grapple ends. The plant has two tentacles, each of which can grapple\
    \ one target."
  "name": "Tentacle"
- "desc": "The plant slams creatures [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ by it into each other or a solid surface. Each creature must succeed on a DC\
    \ 14 Constitution saving throw or take 10 (2d6 + 3) bludgeoning damage and be\
    \ [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned) until the end of the\
    \ plant's next turn. On a successful save, the target takes half the bludgeoning\
    \ damage and isn't [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)."
  "name": "Tentacle Slam"
"source":
- "RoT"
- "ToD"
"image": "/3-Mechanics/CLI/bestiary/plant/token/carnivorous-flower-rot.webp"
```
^statblock