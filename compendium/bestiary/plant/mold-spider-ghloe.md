---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/plant
statblock: inline
aliases: ["Mold Spider"]
---
# [Mold Spider](3-Mechanics\CLI\bestiary\plant/mold-spider-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 83*  

Mold spiders are twisted bits of plant matter that forage in dark caves and ruins for rotting matter to settle on and "eat."

```statblock
"name": "Mold Spider (GHLoE)"
"size": "Tiny"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "3"
"hit_dice": "1d4 + 1"
"stats":
- !!int "2"
- !!int "13"
- !!int "13"
- !!int "1"
- !!int "8"
- !!int "2"
"speed": "20 ft., climb 20 ft."
"damage_vulnerabilities": "fire"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 9"
"languages": ""
"cr": "0"
"traits":
- "desc": "When a mold spider dies, unless fire destroyed it, it releases spores that\
    \ regrow a mold spider in 3 days."
  "name": "Regrowth"
- "desc": "The mold spider can climb difficult surfaces, including upside down on\
    \ ceilings, without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 slashing\
    \ damage."
  "name": "Claw"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/plant/token/mold-spider-ghloe.webp"
```
^statblock