---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Nerozar the Defeated"]
---
# [Nerozar the Defeated](3-Mechanics\CLI\bestiary\npc/nerozar-the-defeated-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 52*  

```statblock
"name": "Nerozar the Defeated (WDMM)"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"stats":
- !!int "10"
- !!int "8"
- !!int "16"
- !!int "3"
- !!int "8"
- !!int "5"
"speed": "0 ft., fly 20 ft. (hover)"
"saves":
  "Wisdom": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone)"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands Deep Speech and Undercommon but can't speak"
"cr": "5"
"traits":
- "desc": "If damage reduces Nerozar to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, Nerozar drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 14\
    \ (4d6) piercing damage."
  "name": "Bite"
- "desc": "The zombie uses a random magical eye ray, choosing a target that it can\
    \ see within 60 feet of it.\n\n- 1. Paralyzing Ray. The targeted creature\
    \ must succeed on a DC 14 Constitution saving throw or be [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.  \n- 2. Fear Ray. The targeted\
    \ creature must succeed on a DC 14 Wisdom saving throw or be [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.  \n- 3. Enervation Ray.\
    \ The targeted creature must make a DC 14 Constitution saving throw, taking 36\
    \ (8d8) necrotic damage on a failed save, or half as much damage on a successful\
    \ one.  \n- 4. Telekinetic Ray. If the target is a creature, it must succeed\
    \ on a DC 14 Strength saving throw, or the zombie moves it up to 30 feet in any\
    \ direction. It is restrained by the ray's telekinetic grip until the start of\
    \ the zombie's next turn or until the zombie is incapacitated. If the target is\
    \ an object weighing 300 pounds or less that isn't being worn or carried, it is\
    \ moved up to 30 feet in any direction. The zombie can also exert fine control\
    \ on objects with this ray, such as manipulating a simple tool or opening a door\
    \ or container.  "
  "name": "Eye Ray"
"source":
- "WDMM"
"image": "/3-Mechanics/CLI/bestiary/npc/token/nerozar-the-defeated-wdmm.webp"
```
^statblock