---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdh
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Aurinax"]
---
# [Aurinax](3-Mechanics\CLI\bestiary\npc/aurinax-wdh.md)
*Source: Waterdeep: Dragon Heist p. 194*  

```statblock
"name": "Aurinax (WDH)"
"size": "Huge"
"type": "dragon"
"alignment": "Lawful Good"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "256"
"hit_dice": "19d12 + 133"
"stats":
- !!int "27"
- !!int "14"
- !!int "25"
- !!int "16"
- !!int "15"
- !!int "24"
"speed": "40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "13"
  "Dexterity": !!int "8"
  "Wisdom": !!int "8"
  "Constitution": !!int "13"
"skillsaves":
  "Stealth": !!int "8"
  "Insight": !!int "8"
  "Perception": !!int "14"
  "Persuasion": !!int "13"
"damage_immunities": "fire"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 24"
"languages": "Common, Draconic"
"cr": "17"
"traits":
- "desc": "Aurinax can breathe air and water."
  "name": "Amphibious"
- "desc": "If Aurinax fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "Aurinax can use its Frightful Presence. It then makes three attacks: one\
    \ with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19\
    \ (2d10 + 8) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15\
    \ (2d6 + 8) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17\
    \ (2d8 + 8) bludgeoning damage."
  "name": "Tail"
- "desc": "Each creature of Aurinax's choice that is within 120 feet of Aurinax and\
    \ aware of it must succeed on a DC 21 Wisdom saving throw or become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Aurinax's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- "desc": "Aurinax uses one of the following breath weapons.\n\n- Fire Breath.\
    \ Aurinax exhales fire in a 60-foot cone. Each creature in that area must make\
    \ a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed\
    \ save, or half as much damage on a successful one.  \n- Weakening Breath.\
    \ Aurinax exhales gas in a 60-foot cone. Each creature in that area must succeed\
    \ on a DC 21 Strength saving throw or have disadvantage on Strength-based attack\
    \ rolls, Strength checks, and Strength saving throws for 1 minute. A creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success.  "
  "name": "Breath Weapons (Recharge 5-6)"
- "desc": "Aurinax magically polymorphs into a humanoid or beast that has a challenge\
    \ rating no higher than its own, or back into its true form. It reverts to its\
    \ true form if it dies. Any equipment it is wearing or carrying is absorbed or\
    \ borne by the new form (Aurinax's choice).\n\nIn a new form, Aurinax retains\
    \ its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary\
    \ Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as\
    \ well as this action. Its statistics and capabilities are otherwise replaced\
    \ by those of the new form, except any class features or legendary actions of\
    \ that form."
  "name": "Change Shape"
"legendary_actions":
- "desc": "Aurinax makes a Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- "desc": "Aurinax makes a tail attack."
  "name": "Tail Attack"
- "desc": "Aurinax beats its wings. Each creature within 10 feet of Aurinax must succeed\
    \ on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage\
    \ and be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone). Aurinax\
    \ can then fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "WDH"
"image": "/3-Mechanics/CLI/bestiary/npc/token/aurinax-wdh.webp"
```
^statblock