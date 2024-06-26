---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Snapjaw"]
---
# [Snapjaw](3-Mechanics\CLI\bestiary\npc/snapjaw-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 36*  

```statblock
"name": "Snapjaw (GHLoE)"
"size": "Gargantuan"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "170"
"hit_dice": "9d12 + 27"
"stats":
- !!int "21"
- !!int "9"
- !!int "17"
- !!int "10"
- !!int "10"
- !!int "7"
"speed": "30 ft., swim 50 ft."
"skillsaves":
  "Stealth": !!int "5"
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- "desc": "Snapjaw can hold its breath for 30 minutes."
  "name": "Hold Breath"
"actions":
- "desc": "Snapjaw makes three attacks: two with its bite and one with its tail."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 31\
    \ (3d10 + 15) piercing damage, and the target is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ and Snapjaw can't bite another target."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target not [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ by Snapjaw. Hit: 24 (2d8 + 15) bludgeoning damage. If the target is a creature,\
    \ it must succeed on a DC 16 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Tail"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/npc/token/snapjaw-ghloe.webp"
```
^statblock