---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/jerbeen
statblock: inline
aliases: ["Jerbeen Thief"]
---
# [Jerbeen Thief](3-Mechanics\CLI\bestiary\humanoid/jerbeen-thief-hwcs.md)
*Source: Humblewood Campaign Setting p. 200*  

While criminals can often be found picking pockets in large perch cities, only the most successful end up recruited by the Bandit Coalition. Small of stature, jerbeens can easily move about unnoticed; their swiftness is responsible for the expression "quick as a jerbeen." This, coupled with their natural charm, makes jerbeens perfectly suited for the thieving arts.

```statblock
"name": "Jerbeen Thief (HWCS)"
"size": "Small"
"type": "humanoid"
"subtype": "jerbeen"
"alignment": "Neutral Evil"
"ac": !!int "13"
"ac_class": "[leather armor](/3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "14"
"hit_dice": "4d6"
"stats":
- !!int "12"
- !!int "14"
- !!int "10"
- !!int "8"
- !!int "14"
- !!int "14"
"speed": "30 ft."
"skillsaves":
  "Sleight of Hand": !!int "4"
  "Acrobatics": !!int "4"
"senses": "passive Perception 12"
"languages": "Birdfolk, Jerbeen"
"cr": "1/2"
"traits":
- "desc": "The thief's long jump is up to 30 feet and their high jump is up to 15\
    \ feet, with or without a running start."
  "name": "Standing Leap"
- "desc": "The thief can take the [Help](/3-Mechanics/CLI/rules/actions.md#Help) action\
    \ as a bonus action."
  "name": "Team Tactics"
"actions":
- "desc": "The thief makes two dagger attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"reactions":
- "desc": "When a creature fails a melee attack roll against the thief, the thief\
    \ can make a Dexterity ([Sleight of Hand](/3-Mechanics/CLI/rules/skills.md#Sleight%20of%20Hand))\
    \ check against a DC equal to 10 + the target creature's Dexterity modifier. On\
    \ a success, the thief steals one item of the GMs choosing from the target. It\
    \ cannot be an item actively held or worn by the target."
  "name": "Opportunist"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/jerbeen-thief-hwcs.webp"
```
^statblock