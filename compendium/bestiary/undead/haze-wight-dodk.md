---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Haze Wight"]
---
# [Haze Wight](3-Mechanics\CLI\bestiary\undead/haze-wight-dodk.md)
*Source: Dungeons of Drakkenheim p. 198*  

A haze wight is more sentient than their haze husk minions, but has still been stripped of their former life. Many were former adventurers, military officers, or mighty warriors who died in the Haze. Many still believe themselves to be great heroes rallying the common folk of Drakkenheim against invaders, but in their madness they see all humanoids as monsters.

```statblock
"name": "Haze Wight (DoDk)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "[studded leather](/3-Mechanics/CLI/items/studded-leather-armor.md)"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "15"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "3"
"traits":
- "desc": "While in sunlight, the haze wight has disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "The haze wight makes two longsword attacks or two longbow attacks. It can\
    \ use its Contaminated Touch or Create Haze Husk in place of one longsword attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10\
    \ (3d6) necrotic damage. The target must succeed on a DC 13 Constitution saving\
    \ throw or gain one level of contamination."
  "name": "Contaminated Touch"
- "desc": "The wight targets a humanoid within 10 feet of it that has been dead for\
    \ no longer than 1 minute and died violently. It rises as a haze husk in an unoccupied\
    \ space within 5 feet. The haze husk is under the wight's control. The wight can\
    \ have no more than 12 haze husks under its control at one time."
  "name": "Create Haze Husk"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
  "name": "Longsword"
- "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/undead/token/haze-wight-dodk.webp"
```
^statblock