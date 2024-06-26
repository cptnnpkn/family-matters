---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Shieldhead"]
---
# [Shieldhead](3-Mechanics\CLI\bestiary\beast/shieldhead-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 97*  

A shieldhead has a broad bone faceplate to protect itself and to ram foes. An expert rider can also use the bone like a shield. People have domesticated shieldheads for riding.

```statblock
"name": "Shieldhead (GHLoE)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "30"
"hit_dice": "4d10 + 8"
"stats":
- !!int "16"
- !!int "11"
- !!int "14"
- !!int "2"
- !!int "12"
- !!int "7"
"speed": "50 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "If the shieldhead moves at least 20 feet straight toward a target and then\
    \ hits it with a ram attack on the same turn, the target takes an extra 7 (2d6)\
    \ bludgeoning damage. If the target is a creature, it must succeed on a DC 13\
    \ Strength saving throw or fall [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Charge"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10\
    \ (2d6 + 3) bludgeoning damage."
  "name": "Ram"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/beast/token/shieldhead-ghloe.webp"
```
^statblock