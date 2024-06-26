---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/cervan
statblock: inline
aliases: ["Cervan Priest"]
---
# [Cervan Priest](3-Mechanics\CLI\bestiary\humanoid/cervan-priest-hwcs.md)
*Source: Humblewood Campaign Setting p. 193*  

Cervan villages are typically led by a community elder who is wise both in politics as well as the ways of the Amaranthine. Priests provide guidance to the community, ensuring that rituals are properly observed and customs upheld. As storytellers and keepers of a village's history, they are trusted with the myths and folktales used to impart knowledge necessary for survival in the forest.

```statblock
"name": "Cervan Priest (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "cervan"
"alignment": "Any Non-Lawful alignment"
"ac": !!int "10"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"stats":
- !!int "12"
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "11"
"speed": "30 ft."
"skillsaves":
  "Medicine": !!int "4"
  "Religion": !!int "2"
"senses": "passive Perception 12"
"languages": "Birdfolk, Cervan"
"cr": "1/4"
"traits":
- "desc": "The priest is a 3rd-level spellcaster. Their spellcasting ability is Wisdom\
    \ (spell save DC 12, +4 to hit with spell attacks). The priest has the following\
    \ cleric spells prepared: \n\nCantrips (at will): [guidance](/3-Mechanics/CLI/spells/guidance.md),\
    \ [light](/3-Mechanics/CLI/spells/light.md), [spare the dying](/3-Mechanics/CLI/spells/spare-the-dying.md)\n\
    \n1st level (4 slots): [bless](/3-Mechanics/CLI/spells/bless.md), [cure wounds](/3-Mechanics/CLI/spells/cure-wounds.md),\
    \ [guiding bolt](/3-Mechanics/CLI/spells/guiding-bolt.md), [shield of faith](/3-Mechanics/CLI/spells/shield-of-faith.md)\n\
    \n2nd level (2 slots): [calm emotions](/3-Mechanics/CLI/spells/calm-emotions.md),\
    \ [warding bond](/3-Mechanics/CLI/spells/warding-bond.md)"
  "name": "Spellcasting"
- "desc": "If the priest is dealt damage equal to half or more of their current remaining\
    \ hit points (even if their HP is reduced to 0 by the attack), they immediately\
    \ regain 8 (1d12 + 2) hit points."
  "name": "Surge of Vigor (Recharges after a Long Rest)"
- "desc": "If the priest moves at least 20 feet in a straight line towards an enemy,\
    \ their antler attack deals an extra 3 (1d6) points of piercing damage. If the\
    \ target of the charge is Large or smaller, they must make a DC 11 Strength saving\
    \ throw or be pushed 10 feet away from the priest."
  "name": "Charge"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) piercing damage."
  "name": "Antlers"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage, or 5 (1d8 + 1) bludgeoning damage if being held\
    \ in both hands."
  "name": "Quarterstaff"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/cervan-priest-hwcs.webp"
```
^statblock