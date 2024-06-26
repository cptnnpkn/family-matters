---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/jttrc
- ttrpg-cli/monster/cr/20
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Sholeh"]
---
# [Sholeh](3-Mechanics\CLI\bestiary\npc/sholeh-jttrc.md)
*Source: Journeys through the Radiant Citadel p. 14*  

```statblock
"name": "Sholeh (JttRC)"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral Good"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "297"
"hit_dice": "17d20 + 119"
"stats":
- !!int "27"
- !!int "10"
- !!int "25"
- !!int "16"
- !!int "15"
- !!int "19"
"speed": "40 ft., burrow 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "10"
  "Dexterity": !!int "6"
  "Wisdom": !!int "8"
  "Constitution": !!int "13"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "14"
  "History": !!int "9"
  "Persuasion": !!int "10"
"damage_immunities": "fire"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 24"
"languages": "Common, Draconic"
"cr": "20"
"traits":
- "desc": "If Sholeh fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "Sholeh can use its Frightful Presence. It then makes three attacks: one\
    \ with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19\
    \ (2d10 + 8) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15\
    \ (2d6 + 8) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17\
    \ (2d8 + 8) bludgeoning damage."
  "name": "Tail"
- "desc": "Each creature of Sholeh's choice that is within 120 feet of Sholeh and\
    \ aware of it must succeed on a DC 18 Wisdom saving throw or become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Sholeh's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- "desc": "Sholeh uses one of the following breath weapons:\n\n- Fire Breath.\
    \ Sholeh exhales fire in a 90-foot line that is 10 feet wide. Each creature in\
    \ that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire\
    \ damage on a failed save, or half as much damage on a successful one.  \n- Sleep\
    \ Breath. Sholeh exhales sleep gas in a 90-foot cone. Each creature in that\
    \ area must succeed on a DC 21 Constitution saving throw or fall [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)\
    \ for 10 minutes. This effect ends for a creature if the creature takes damage\
    \ or someone uses an action to wake it.  "
  "name": "Breath Weapons (Recharge 5-6)"
- "desc": "Sholeh magically polymorphs into a humanoid or beast that has a challenge\
    \ rating no higher than its own, or back into its true form. It reverts to its\
    \ true form if it dies. Any equipment it is wearing or carrying is absorbed or\
    \ borne by the new form (Sholeh's choice).\n\nIn a new form, Sholeh retains its\
    \ alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary\
    \ Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as\
    \ well as this action. Its statistics and capabilities are otherwise replaced\
    \ by those of the new form, except any class features or legendary actions of\
    \ that form."
  "name": "Change Shape"
"legendary_actions":
- "desc": "Sholeh makes a Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- "desc": "Sholeh makes a tail attack."
  "name": "Tail Attack"
- "desc": "Sholeh beats its wings. Each creature within 15 feet of Sholeh must succeed\
    \ on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage\
    \ and be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone). Sholeh can\
    \ then fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "JttRC"
"image": "/3-Mechanics/CLI/bestiary/npc/token/sholeh-jttrc.webp"
```
^statblock