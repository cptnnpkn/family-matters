---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/gos
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Giant Coral Snake"]
---
# [Giant Coral Snake](3-Mechanics\CLI\bestiary\beast/giant-coral-snake-gos.md)
*Source: Ghosts of Saltmarsh p. 236*  

Comfortable on land or in water, these brilliantly colored snakes are renowned for their potent and hallucinogenic venom. They are most often found in coastal caves. In the abandoned chambers of the hermitage in Tammeraut's Fate, these giant serpents feed on any creature that crosses their path.

```statblock
"name": "Giant Coral Snake (GoS)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"stats":
- !!int "12"
- !!int "16"
- !!int "14"
- !!int "2"
- !!int "10"
- !!int "3"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "blindsight 10 ft., passive Perception 12"
"languages": ""
"cr": "4"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4\
    \ + 3) piercing damage, and the target must succeed on a DC 12 Constitution saving\
    \ throw or be [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned) until the\
    \ end of its next turn. On a failed save, the target begins to hallucinate and\
    \ is afflicted with a [short-term madness](/3-Mechanics/CLI/tables/short-term-madness.md)\
    \ effect (determined randomly or by the DM; see \"Madness\" in chapter 8 of the\
    \ \"Dungeon Master's Guide\"). The effect lasts 10 minutes."
  "name": "Bite"
"source":
- "GoS"
"image": "/3-Mechanics/CLI/bestiary/beast/token/giant-coral-snake-gos.webp"
```
^statblock