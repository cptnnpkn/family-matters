---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Tower Dragon"]
---
# [Tower Dragon](3-Mechanics\CLI\bestiary\dragon/tower-dragon-dodk.md)
*Source: Dungeons of Drakkenheim p. 198*  

These young bronze dragons perch upon the towers and parapets of the city and Castle Drakken. Once noble protectors of the city, they are now controlled by the will of the Haze.

```statblock
"name": "Tower Dragon (DoDk)"
"size": "Large"
"type": "dragon"
"alignment": "Lawful Good"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"stats":
- !!int "21"
- !!int "10"
- !!int "19"
- !!int "14"
- !!int "13"
- !!int "17"
"speed": "40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "3"
  "Wisdom": !!int "4"
  "Constitution": !!int "7"
"skillsaves":
  "Stealth": !!int "3"
  "Insight": !!int "4"
  "Perception": !!int "7"
"damage_resistances": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"damage_immunities": "lightning"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "blindsight 30 ft., darkvision 120 ft., truesight 120 ft., passive Perception\
  \ 17"
"languages": "Common, Draconic"
"cr": "10"
"traits":
- "desc": "The dragon can breathe air and water."
  "name": "Amphibious"
- "desc": "The dragon doesn't require air, food, drink, or sleep."
  "name": "Constructed Nature"
- "desc": "While the dragon remains motionless, it is indistinguishable from an inanimate\
    \ bronze statue."
  "name": "False Appearance"
- "desc": "The creature(s) that caused the dragon to animate becomes its quarry. The\
    \ dragon knows the direction and distance to its quarry as long the quarry remains\
    \ within Drakkenheim or until the dragon is destroyed."
  "name": "Faultless Tracker"
- "desc": "The dragon is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The dragon has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The dragon's weapon attacks are magical."
  "name": "Magic Weapons"
- "desc": "If the tower dragon is destroyed, it regains all its hit points in 1 hour\
    \ unless a [disintegrate](/3-Mechanics/CLI/spells/disintegrate.md) spell is cast\
    \ on its remains."
  "name": "Rejuvenation"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 16\
    \ (2d10 + 5) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12\
    \ (2d6 + 5) slashing damage."
  "name": "Claw"
- "desc": "The dragon uses one of the following breath weapons.\n\n- Lightning Breath.\
    \ The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each creature\
    \ in that line must make a DC 15 Dexterity saving throw, taking 55 (10d10) lightning\
    \ damage on a failed save, or half as much damage on a successful one.  \n- Repulsion\
    \ Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature\
    \ in that area must succeed on a DC 15 Strength saving throw. On a failed save,\
    \ the creature is pushed 40 feet away from the dragon.  "
  "name": "Breath Weapons (Recharge 5-6)"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/tower-dragon-dodk.webp"
```
^statblock