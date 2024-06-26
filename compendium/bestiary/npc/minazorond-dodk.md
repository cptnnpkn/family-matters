---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/22
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Minazorond"]
---
# [Minazorond](3-Mechanics\CLI\bestiary\npc/minazorond-dodk.md)
*Source: Dungeons of Drakkenheim p. 183*  

Minazorond is eternally bound to serve as the guardian of Castle Drakken. He roosts atop the Stair Tower of the royal palace with his mind awash in nightmares. The dragon now believes the monstrous creatures dwelling in the castle to be its proper inhabitants, and perceives humanoid creatures as trespassers to be destroyed. Minazorond awakes with a thunderous roar that can be heard for miles away, and attacks if intruders approach within one hundred fifty feet of the royal palace by any means. The dragon does not speak, nor respond to reason or parley. He does not pursue his quarry beyond the castle grounds. However, Minazorond is too large to enter buildings or the palace, and cannot pursue creatures who flee inside.

Minazorond may be rebuked by a creature bearing a*Seal of Drakkenheim*. Only a wish spell can cure his madness: he interacts as a dutiful, stoic, and wise protector thereafter.

```statblock
"name": "Minazorond (DoDk)"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Lawful Good"
"ac": !!int "22"
"ac_class": "natural armor"
"hp": !!int "444"
"hit_dice": "24d20 + 192"
"stats":
- !!int "29"
- !!int "10"
- !!int "27"
- !!int "18"
- !!int "17"
- !!int "21"
"speed": "40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "12"
  "Dexterity": !!int "7"
  "Wisdom": !!int "10"
  "Constitution": !!int "15"
"skillsaves":
  "Stealth": !!int "7"
  "Insight": !!int "10"
  "Perception": !!int "17"
"damage_resistances": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"damage_immunities": "lightning"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "blindsight 60 ft., darkvision 120 ft., truesight 120 ft., passive Perception\
  \ 27"
"languages": "Common, Draconic"
"cr": "22"
"traits":
- "desc": "Minazorond can breathe air and water."
  "name": "Amphibious"
- "desc": "Minazorond doesn't require air, food, drink, or sleep."
  "name": "Constructed Nature"
- "desc": "While Minazorond remains motionless, he is indistinguishable from an inanimate\
    \ bronze statue."
  "name": "False Appearance"
- "desc": "The creature(s) that caused Minazorond to animate becomes his quarry. Minazorond\
    \ knows the direction and distance to his quarry as long the quarry remains within\
    \ Drakkenheim or until Minazorond is destroyed."
  "name": "Faultless Tracker"
- "desc": "Minazorond is immune to any spell or effect that would alter his form."
  "name": "Immutable Form"
- "desc": "If Minazorond fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Minazorond has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Minazorond's weapon attacks are magical."
  "name": "Magic Weapons"
- "desc": "If Minazorond is destroyed, he regains all his hit points in 1 hour unless\
    \ a [disintegrate](/3-Mechanics/CLI/spells/disintegrate.md) spell is cast on his\
    \ remains."
  "name": "Rejuvenation"
"actions":
- "desc": "Minazorond can use his Frightful Presence. He then makes three attacks:\
    \ one with his bite and two with his claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20\
    \ (2d10 + 9) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16\
    \ (2d6 + 9) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18\
    \ (2d8 + 9) bludgeoning damage."
  "name": "Tail"
- "desc": "Each creature of Minazorond's choice that is within 120 feet of Minazorond\
    \ and aware of him must succeed on a DC 20 Wisdom saving throw or become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Minazorond's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- "desc": "Minazorond uses one of the following breath weapons."
  "name": "Breath Weapons (Recharge 5-6)"
- "desc": "Minazorond exhales lightning in a 120-foot line that is 10 feet wide. Each\
    \ creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10)\
    \ lightning damage on a failed save, or half as much damage on a successful one."
  "name": "Lightning Breath"
- "desc": "Minazorond exhales repulsion energy in a 30-foot cone. Each creature in\
    \ that area must succeed on a DC 23 Strength saving throw. On a failed save, the\
    \ creature is pushed 60 feet away from Minazorond."
  "name": "Repulsion Breath"
- "desc": "Minazorond magically polymorphs into a humanoid or beast that has a challenge\
    \ rating no higher than his own, or back into his true form. He reverts to his\
    \ true form if he dies. Any equipment he is wearing or carrying is absorbed or\
    \ borne by the new form (Minazorond's choice).\n\nIn a new form, Minazorond retains\
    \ his alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary\
    \ Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as\
    \ well as this action. His statistics and capabilities are otherwise replaced\
    \ by those of the new form, except any class features or legendary actions of\
    \ that form."
  "name": "Change Shape"
"legendary_actions":
- "desc": "Minazorond makes a Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- "desc": "Minazorond makes a tail attack."
  "name": "Tail Attack"
- "desc": "Minazorond beats his wings. Each creature within 15 feet of Minazorond\
    \ must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning\
    \ damage and be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone). Minazorond\
    \ can then fly up to half his flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/npc/token/minazorond-dodk.webp"
```
^statblock