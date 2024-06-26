---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/idrotf
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Lonelywood Banshee"]
---
# [Lonelywood Banshee](3-Mechanics\CLI\bestiary\undead/lonelywood-banshee-idrotf.md)
*Source: Icewind Dale: Rime of the Frostmaiden p. 81*  

This banshee is the spectral remnant of a female elf warrior who was banished for a selfish, evil act. It wields a spectral longbow that shoots phantom arrows. There is only one banshee haunting the forest. If it's destroyed, it re-forms after 24 hours in a random location in the forest, damned to its eternal exile.

```statblock
"name": "Lonelywood Banshee (IDRotF)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "58"
"hit_dice": "13d8"
"stats":
- !!int "1"
- !!int "14"
- !!int "10"
- !!int "12"
- !!int "11"
- !!int "17"
"speed": "0 ft., fly 40 ft. (hover)"
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "2"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled), [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed),\
  \ [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone), [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Elvish"
"cr": "4"
"traits":
- "desc": "The banshee can magically sense the presence of living creatures up to\
    \ 5 miles away that aren't undead or constructs. She knows the general direction\
    \ they're in but not their exact locations."
  "name": "Detect Life"
- "desc": "The banshee can move through other creatures and objects as if they were\
    \ difficult terrain. She takes 5 (1d10) force damage if she ends her turn inside\
    \ an object."
  "name": "Incorporeal Movement"
"actions":
- "desc": "Ranged Spell Attack: +4 to hit, range 150/600 ft., one target. Hit:\
    \ 12 (3d6 + 2) necrotic damage."
  "name": "Spectral Longbow"
- "desc": "Each non-undead creature within 60 feet of the banshee that can see her\
    \ must succeed on a DC 13 Wisdom saving throw or be [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. A [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ target can repeat the saving throw at the end of each of its turns, with disadvantage\
    \ if the banshee is within line of sight, ending the effect on itself on a success.\
    \ If a target's saving throw is successful or the effect ends for it, the target\
    \ is immune to the banshee's Horrifying Visage for the next 24 hours."
  "name": "Horrifying Visage"
- "desc": "The banshee releases a mournful wail, provided that she isn't in sunlight.\
    \ This wail has no effect on constructs and undead. All other creatures within\
    \ 30 feet of her that can hear her must make a DC 13 Constitution saving throw.\
    \ On a failure, a creature drops to 0 hit points. On a success, a creature takes\
    \ 10 (3d6) psychic damage."
  "name": "Wail (1/Day)"
"source":
- "IDRotF"
"image": "/3-Mechanics/CLI/bestiary/undead/token/lonelywood-banshee-idrotf.webp"
```
^statblock