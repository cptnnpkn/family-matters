---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Knifewing"]
---
# [Knifewing](3-Mechanics\CLI\bestiary\beast/knifewing-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 15*  

A knifewing is a gliding lizard about the size of a small dog. Its gliding flaps have hard edges that are sharp while stretched taut when the lizard glides.

## Salvage

The skin of a knifewing is prized for making a [knifewing cape](/3-Mechanics/CLI/items/knifewing-cape-ghloe.md) (see Appendix A of Lairs of Etharis).

```statblock
"name": "Knifewing (GHLoE)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "9"
"hit_dice": "2d6 + 2"
"stats":
- !!int "6"
- !!int "15"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "30 ft., climb 30 ft., fly 30 ft."
"senses": "blindsight 10 ft., passive Perception 10"
"languages": ""
"cr": "1/8"
"traits":
- "desc": "The knifewing doesn't provoke opportunity attacks when it flies out of\
    \ an enemy's reach."
  "name": "Flyby"
- "desc": "The knifewing can't ascend while flying and its altitude decreases by 5\
    \ feet for every 30 feet it flies. If flying, the knifewing falls if it doesn't\
    \ fly at least 30 feet during its turn."
  "name": "Glider"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Knifewing (Flying Only)"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/beast/token/knifewing-ghloe.webp"
```
^statblock