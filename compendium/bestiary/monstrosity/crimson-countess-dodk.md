---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Crimson Countess"]
---
# [Crimson Countess](3-Mechanics\CLI\bestiary\monstrosity/crimson-countess-dodk.md)
*Source: Dungeons of Drakkenheim p. 208*  

The Crimson Countess is a powerful harpy matriarch. Recognizable by her red-feathered wings and deep crimson hair, she is clad in black and gold armour and carries with her a spear that crackles with electrical energies.

-     - **Personality Trait.** I screech blood-curdling war cries and perform aerial stunts as intimidation.    
-     - **Ideal.** Any who walk the earth are prey for those who soar the sky.    
-     - **Bond.** I collect trophies from my kills to remind my flock who is the mightiest.    
-     - **Flaw.** I am aggressively territorial, envious of my rivals, and covetous of my trinkets.    

```statblock
"name": "Crimson Countess (DoDk)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "130"
"hit_dice": "20d8 + 40"
"stats":
- !!int "10"
- !!int "21"
- !!int "15"
- !!int "13"
- !!int "14"
- !!int "19"
"speed": "20 ft., fly 60 ft."
"saves":
  "Wisdom": !!int "5"
  "Constitution": !!int "5"
"skillsaves":
  "Deception": !!int "7"
  "Perception": !!int "8"
  "Acrobatics": !!int "11"
"damage_immunities": "lightning, thunder"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Abyssal"
"cr": "8"
"traits":
- "desc": "On each of her turns, the Crimson Countess can use a bonus action to take\
    \ the Dash, Disengage, or Dodge action."
  "name": "Aerial Acrobat"
- "desc": "The Crimson Countess has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- "desc": "The Crimson Countess can use her Frightful Screech. She then makes two\
    \ attacks with her talons or one with her javelin."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11\
    \ (1d10 + 5) slashing damage."
  "name": "Talons"
- "desc": "Each creature of the Crimson Countess' choice that is within 120 feet of\
    \ her and not [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened) must succeed\
    \ on a DC 15 Wisdom saving throw or become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. If a creature's saving throw is successful or the effect ends\
    \ for it, the creature is immune to the effects of the Crimson Countess' Frightful\
    \ Screech for the next 24 hours.\n\nWhile [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ by this effect, a creature must take the Dash action and move away from the\
    \ Crimson Countess by the safest available route on each of its turns, unless\
    \ there is nowhere to move. If the creature ends its turn in a location where\
    \ it doesn't have line of sight to the Crimson Countess, the creature can repeat\
    \ the saving throw. On a successful save, the effect ends for that creature."
  "name": "Frightful Screech"
- "desc": "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or ranged 20/60\
    \ feet, one target. Hit: 9 (1d6 + 5) piercing damage, plus 14 (4d6) lightning\
    \ damage."
  "name": "Javelin"
- "desc": "The Crimson Countess unleashes a thunderous cry in a 15-foot cube. Each\
    \ creature in the cube must succeed on a DC 15 Constitution saving throw, taking\
    \ 14 (4d6) thunder damage on a failed save, or half as much damage on a successful\
    \ one. Creatures who fail this saving throw are pushed 10 feet and knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Thunder Blast (Recharge 5-6)"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/crimson-countess-dodk.webp"
```
^statblock