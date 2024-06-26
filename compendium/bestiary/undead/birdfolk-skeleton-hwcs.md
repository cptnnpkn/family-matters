---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Birdfolk Skeleton"]
---
# [Birdfolk Skeleton](3-Mechanics\CLI\bestiary\undead/birdfolk-skeleton-hwcs.md)
*Source: Humblewood Campaign Setting p. 180*  

Deceased birdfolk granted a semblance of life through necromantic spells don't have memory per se, but their skeletal bodies retain familiarity with tasks they performed in life. They also remain skilled with weapons they wielded in life, making them useful guards or servants.

## Unnatural Life

Animated skeletons are common among the practitioners of the necromantic arts. Even at the Avium, where necromancy is forbidden in practice, it is taught in theory. A common exception is the use of animated skeletons for menial tasks around the college. The reanimation of birdfolk who did not give their express consent in life is seen as a violation of their memory, so these skeletons usually consist of former college staff who desired to stay and help long past their own time. Not all scholars agree that even this relatively benign form of necromancy should be allowed, while others don't see why permission from the dead should be necessary, believing that "dead is dead". Though the consent policy remains in place, heady debates over the ethics of certain forms of necromancy have resulted in the shunning of more morally flexible scholars.

```statblock
"name": "Birdfolk Skeleton (HWCS)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "13"
"hit_dice": "2d8 + 4"
"stats":
- !!int "11"
- !!int "15"
- !!int "14"
- !!int "7"
- !!int "8"
- !!int "3"
"speed": "30 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands Auran and Birdfolk, but can't speak"
"cr": "1/4"
"traits":
- "desc": "The birdfolk skeleton has advantage on Strength ([Athletics](/3-Mechanics/CLI/rules/skills.md#Athletics))\
    \ checks made to climb any surface its talons could reasonably grip."
  "name": "Talons"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Talons"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/undead/token/birdfolk-skeleton-hwcs.webp"
```
^statblock