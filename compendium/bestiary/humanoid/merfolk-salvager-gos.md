---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/gos
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/merfolk
statblock: inline
aliases: ["Merfolk Salvager"]
---
# [Merfolk Salvager](3-Mechanics\CLI\bestiary\humanoid/merfolk-salvager-gos.md)
*Source: Ghosts of Saltmarsh p. 244*  

Veterans of scouring the wrecks and ruins found in the deepest waters, these skilled warriors help defend their kin with rapier-like weapons of living coral. The salvagers escort other merfolk on scavenging missions, using their keen senses to detect danger. They are found allying with the lizardfolk in Danger at Dunwater.

```statblock
"name": "Merfolk Salvager (GoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "merfolk"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "10"
- !!int "13"
"speed": "10 ft., swim 40 ft."
"saves":
  "Dexterity": !!int "4"
"skillsaves":
  "Athletics": !!int "3"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "Aquan, Common"
"cr": "1"
"traits":
- "desc": "The salvager can breathe air and water."
  "name": "Amphibious"
"actions":
- "desc": "The salvager makes two attacks with its coral rapier."
  "name": "Multiattack"
- "desc": "Melee Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 +\
    \ 2) piercing damage."
  "name": "Coral Rapier"
- "desc": "Melee Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 +\
    \ 2) piercing damage, and the creature must succeed on a DC 12 Constitution saving\
    \ throw or be [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed) until\
    \ the end of its next turn."
  "name": "Inject Toxin (2/Day)"
"source":
- "GoS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/merfolk-salvager-gos.webp"
```
^statblock