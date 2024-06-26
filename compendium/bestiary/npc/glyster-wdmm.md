---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Glyster"]
---
# [Glyster](3-Mechanics\CLI\bestiary\npc/glyster-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 241*  

```statblock
"name": "Glyster (WDMM)"
"size": "Huge"
"type": "dragon"
"alignment": "Lawful Good"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "212"
"hit_dice": "17d12 + 102"
"stats":
- !!int "25"
- !!int "10"
- !!int "23"
- !!int "16"
- !!int "15"
- !!int "19"
"speed": "40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "5"
  "Wisdom": !!int "7"
  "Constitution": !!int "11"
"skillsaves":
  "Stealth": !!int "5"
  "Insight": !!int "7"
  "Perception": !!int "12"
"damage_immunities": "lightning"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22"
"languages": "Common, Draconic"
"cr": "15"
"traits":
- "desc": "Glyster can breathe air and water."
  "name": "Amphibious"
- "desc": "If Glyster fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "Glyster can use its Frightful Presence. It then makes three attacks: one\
    \ with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18\
    \ (2d10 + 7) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14\
    \ (2d6 + 7) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16\
    \ (2d8 + 7) bludgeoning damage."
  "name": "Tail"
- "desc": "Each creature of Glyster's choice that is within 120 feet of Glyster and\
    \ aware of it must succeed on a DC 17 Wisdom saving throw or become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Glyster's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- "desc": "Glyster uses one of the following breath weapons.\n\n- Lightning Breath.\
    \ Glyster exhales lightning in a 90-foot line that is 5 feet wide. Each creature\
    \ in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning\
    \ damage on a failed save, or half as much damage on a successful one.  \n- Repulsion\
    \ Breath. Glyster exhales repulsion energy in a 30-foot cone. Each creature\
    \ in that area must succeed on a DC 19 Strength saving throw. On a failed save,\
    \ the creature is pushed 60 feet away from Glyster.  "
  "name": "Breath Weapons (Recharge 5-6)"
- "desc": "Glyster magically polymorphs into a humanoid or beast that has a challenge\
    \ rating no higher than its own, or back into its true form. It reverts to its\
    \ true form if it dies. Any equipment it is wearing or carrying is absorbed or\
    \ borne by the new form (Glyster's choice).\n\nIn a new form, Glyster retains\
    \ its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary\
    \ Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as\
    \ well as this action. Its statistics and capabilities are otherwise replaced\
    \ by those of the new form, except any class features or legendary actions of\
    \ that form."
  "name": "Change Shape"
"legendary_actions":
- "desc": "Glyster makes a Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- "desc": "Glyster makes a tail attack."
  "name": "Tail Attack"
- "desc": "Glyster beats its wings. Each creature within 10 feet of Glyster must succeed\
    \ on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage\
    \ and be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone). Glyster\
    \ can then fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "WDMM"
"image": "/3-Mechanics/CLI/bestiary/npc/token/glyster-wdmm.webp"
```
^statblock