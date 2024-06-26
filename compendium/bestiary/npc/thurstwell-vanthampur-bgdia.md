---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bgdia
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Thurstwell Vanthampur"]
---
# [Thurstwell Vanthampur](3-Mechanics\CLI\bestiary\npc/thurstwell-vanthampur-bgdia.md)
*Source: Baldur's Gate: Descent Into Avernus p. 34*  

Thurstwell is a pale and sullen recluse in his forties. A veritable shut-in, he uses imps to spy on his brothers, Amrik and Mortlock. Thurstwell resents both of them—Amrik for being their mother's favorite, and Mortlock for being a monstrous dolt.

```statblock
"name": "Thurstwell Vanthampur (BGDIA)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "9"
"hp": !!int "5"
"hit_dice": "2d8 - 4"
"stats":
- !!int "7"
- !!int "8"
- !!int "6"
- !!int "15"
- !!int "17"
- !!int "12"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "3"
  "Religion": !!int "4"
  "Insight": !!int "5"
  "Perception": !!int "5"
"senses": "passive Perception 15"
"languages": "Common, Elvish, Infernal"
"cr": "1/8"
"traits":
- "desc": "Thurstwell is a 2nd-level spellcaster. His spellcasting ability is Wisdom\
    \ (spell save DC 13). He has the following cleric spells prepared:\n\nCantrips\
    \ (at will): [guidance](/3-Mechanics/CLI/spells/guidance.md), [sacred flame](/3-Mechanics/CLI/spells/sacred-flame.md)\
    \ (see \"Actions\" below), [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy.md)\n\
    \n1st level (3 slots): [command](/3-Mechanics/CLI/spells/command.md), [detect\
    \ evil and good](/3-Mechanics/CLI/spells/detect-evil-and-good.md), [sanctuary](/3-Mechanics/CLI/spells/sanctuary.md)"
  "name": "Spellcasting"
- "desc": "Thurstwell has advantage on saving throws against being [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ or [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)."
  "name": "Dark Devotion"
"actions":
- "desc": "Flame-like radiance descends on one creature Thurstwell can see within\
    \ 60 feet of him. The target must succeed on a DC 13 Dexterity saving throw or\
    \ take 4 (1d8) radiant damage, gaining no benefit from cover."
  "name": "Sacred Flame (Cantrip)"
"source":
- "BGDIA"
"image": "/3-Mechanics/CLI/bestiary/npc/token/thurstwell-vanthampur-bgdia.webp"
```
^statblock