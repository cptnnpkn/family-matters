---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/vulpin
statblock: inline
aliases: ["Fray Merridan"]
---
# [Fray Merridan](3-Mechanics\CLI\bestiary\npc/fray-merridan-hwcs.md)
*Source: Humblewood Campaign Setting p. 207*  

Fray is a dashing red-furred vulpin with sharp eyes and a quick wit. A highly skilled swordswoman, she was left without a home when forest fires spreading from the Scorched Grove burned her village. She saw joining the bandits as an opportunity to use her skills to provide for herself and those she cares for. She is astute and talented, but also competitive and unwilling to forget even the smallest slight against her. Fray uses the [vulpin captain](/3-Mechanics/CLI/bestiary/humanoid/vulpin-captain-hwcs.md) stat block.

```statblock
"name": "Fray Merridan (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "vulpin"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "[studded leather armor](/3-Mechanics/CLI/items/studded-leather-armor.md)"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "13"
- !!int "15"
- !!int "12"
- !!int "14"
- !!int "14"
- !!int "12"
"speed": "30 ft."
"skillsaves":
  "Perception": !!int "4"
  "Acrobatics": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Birdfolk, Vulpin"
"cr": "1"
"traits":
- "desc": "Fray includes her Intelligence modifier as a bonus to her Dexterity saving\
    \ throws."
  "name": "Evasive"
"actions":
- "desc": "Fray makes two attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Short sword"
- "desc": "Melee Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit:\
    \ 5 (1d6 + 2) piercing damage."
  "name": "Short bow"
"reactions":
- "desc": "Fray adds 2 to their AC against one melee attack that would hit her per\
    \ round. Fray must see the attacker and be wielding a melee weapon. "
  "name": "Parry"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/npc/token/fray-merridan-hwcs.webp"
```
^statblock