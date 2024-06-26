---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/gos
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/locathah
statblock: inline
aliases: ["Locathah"]
---
# [Locathah](3-Mechanics\CLI\bestiary\humanoid/locathah-gos.md)
*Source: Ghosts of Saltmarsh p. 243, Infernal Machine Rebuild*  

These resilient and proud fish-folk (found in Danger at Dunwater) have endured war, slavery, and mistreatment at the hands of other aquatic creatures. They dwell in submerged tribal communities along seacoasts, and hunt both above and below the water.

```statblock
"name": "Locathah (GoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "locathah"
"alignment": "Neutral"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "13"
- !!int "12"
- !!int "12"
- !!int "11"
- !!int "10"
- !!int "11"
"speed": "30 ft., swim 30 ft."
"saves":
  "Dexterity": !!int "3"
"skillsaves":
  "Athletics": !!int "3"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "Aquan, Common"
"cr": "1/2"
"traits":
- "desc": "The locathah has advantage on saving throws against being [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
    \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed),\
    \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned), [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned),\
    \ or put to sleep."
  "name": "Leviathan Will"
- "desc": "The locathah can breathe air and water, but it needs to be submerged at\
    \ least once every 4 hours to avoid suffocating."
  "name": "Limited Amphibiousness"
"actions":
- "desc": "The locathah makes two melee attacks with its spear."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing\
    \ damage if used with two hands."
  "name": "Spear"
"source":
- "GoS"
- "IMR"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/locathah-gos.webp"
```
^statblock