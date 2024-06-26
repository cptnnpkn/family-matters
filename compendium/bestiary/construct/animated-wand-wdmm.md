---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Animated Wand"]
---
# [Animated Wand](3-Mechanics\CLI\bestiary\construct/animated-wand-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 299*  

```statblock
"name": "Animated Wand (WDMM)"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "20"
"stats":
- !!int "4"
- !!int "18"
- !!int "10"
- !!int "3"
- !!int "3"
- !!int "1"
"speed": "30 ft."
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"traits":
- "desc": "If the wand lacks legs or other appendages it can use for locomotion, it\
    \ instead has a flying speed of 30 feet and can hover. If the wand is securely\
    \ attached to a surface or larger wand, such as a chain bolted to a wall, its\
    \ speed is 0.\n\nWhen the animated wand drops to 0 hit points, it reverts to its\
    \ original wand form, and any remaining damage carries over to its original wand\
    \ form.\n\nThe DM might rule that a specific wands slam attack inflicts slashing\
    \ or piercing damage based on its form."
  "name": "Animated"
"actions":
- "desc": "The animated wand can expend 1 of its charges and target a random creature\
    \ with one of its [randomly determined effects](/3-Mechanics/CLI/items/wand-of-wonder.md).\
    \ Any such effect that would target the wand's user targets the wand instead.\
    \ If reduced to 0 hit points, the wand crumbles into dust and is destroyed."
  "name": "Wand of Wonder"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 6 (1d4\
    \ + 4) bludgeoning damage."
  "name": "Slam"
"source":
- "WDMM"
"image": "/3-Mechanics/CLI/bestiary/construct/token/animated-wand-wdmm.webp"
```
^statblock