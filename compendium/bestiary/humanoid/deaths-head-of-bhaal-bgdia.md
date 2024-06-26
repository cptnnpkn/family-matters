---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bgdia
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Death's Head of Bhaal"]
---
# [Death's Head of Bhaal](3-Mechanics\CLI\bestiary\humanoid/deaths-head-of-bhaal-bgdia.md)
*Source: Baldur's Gate: Descent Into Avernus p. 233*  

Bhaal's cultists emulate their deity, carrying out gruesome murders to spread fear and horror. They are charming and disarming when they wish, but in combat their true, bloodthirsty nature comes to the fore.

## Bloodletters

All cultists of Bhaal learn to call upon their god's power to leave their victims vulnerable to their long-bladed knives. When Bhaal's magic works its power, stab wounds erupt in terrible gouts of blood. Seemingly minor wounds plunge deep into a victim's body and cause terrible pain and bleeding.

## Killers from the Shadows

Bhaal's followers are cunning murderers who kill to strike fear and thrive on sowing terror in the cities they inhabit. They can call upon their god's power to blend into the shadows with ease, or even turn [invisible](/3-Mechanics/CLI/rules/conditions.md#invisible) for a crucial moment.

## Cult Ranks

Low-ranking cultists of Bhaal are called night blades, whom Bhaal blesses with [darkvision](/3-Mechanics/CLI/rules/senses.md#darkvision) and superior stealth. Reapers are the next rank up. They gain the ability to turn [invisible](/3-Mechanics/CLI/rules/conditions.md#invisible) and can use Bhaal's magic to evade suspicion. The highest rank are the death's heads, who can take on the skull-faced guise of their deity to terrify their prey. In combat, they intimidate foes by shrugging off the deadliest attacks with ease, showing that resisting Bhaal's schemes is futile.

```statblock
"name": "Death's Head of Bhaal (BGDIA)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "76"
"hit_dice": "8d8 + 40"
"stats":
- !!int "20"
- !!int "20"
- !!int "20"
- !!int "14"
- !!int "13"
- !!int "16"
"speed": "50 ft."
"skillsaves":
  "Intimidation": !!int "6"
  "Stealth": !!int "11"
  "Perception": !!int "4"
  "Persuasion": !!int "6"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common"
"cr": "5"
"traits":
- "desc": "As long as the death's head is not [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated),\
    \ hostile creatures within 5 feet of it gain vulnerability to piercing damage\
    \ unless they have resistance or immunity to such damage."
  "name": "Aura of Murder"
- "desc": "The death's head has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The death's head uses Stunning Gaze and makes two dagger attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d4 + 5) piercing damage."
  "name": "Dagger"
- "desc": "The death's head targets one creature it can see within 30 feet of it.\
    \ The target must succeed on a DC 14 Wisdom saving throw or be [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)\
    \ until the end of its next turn."
  "name": "Stunning Gaze"
"reactions":
- "desc": "The death's head reduces the damage it takes from an attack to 0."
  "name": "Unstoppable (3/Day)"
"source":
- "BGDIA"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/deaths-head-of-bhaal-bgdia.webp"
```
^statblock