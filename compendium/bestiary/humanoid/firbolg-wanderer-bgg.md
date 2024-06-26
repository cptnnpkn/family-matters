---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bgg
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/cleric
statblock: inline
aliases: ["Firbolg Wanderer"]
---
# [Firbolg Wanderer](3-Mechanics\CLI\bestiary\humanoid/firbolg-wanderer-bgg.md)
*Source: Bigby Presents: Glory of the Giants p. 137*  

Firbolgs inspired by the saga of Diancastra embark on adventures to create their own legends. These wanderers use their magic for trickery and disguise to emulate Diancastra.

## Firbolgs

Distant cousins of giants, the first firbolgs wandered the primeval forests of the multiverse, and the magic of those forests entwined itself with the firbolgs' souls. Ages later, that magic still thrums inside firbolgs.

Firbolgs are often drawn to the service or emulation of the gods Diancastra and Hiatea. Firbolgs' innate magic of obscurement and trickery resonates with Diancastra's wily resourcefulness. A traditional emphasis on community and harmony leads many firbolgs to pledge themselves to Hiatea's service.

```statblock
"name": "Firbolg Wanderer (BGG)"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "[breastplate](/3-Mechanics/CLI/items/breastplate.md)"
"hp": !!int "90"
"hit_dice": "12d8 + 36"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "14"
- !!int "17"
- !!int "16"
"speed": "30 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "5"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "6"
  "Persuasion": !!int "6"
"senses": "passive Perception 16"
"languages": "Common, Giant"
"cr": "5"
"traits":
- "desc": "The firbolg casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 14):\n\nAt will: [mage hand](/3-Mechanics/CLI/spells/mage-hand.md),\
    \ [minor illusion](/3-Mechanics/CLI/spells/minor-illusion.md), [Tasha's hideous\
    \ laughter](/3-Mechanics/CLI/spells/tashas-hideous-laughter.md)\n\n1/day each:\
    \ [detect magic](/3-Mechanics/CLI/spells/detect-magic.md), [disguise self](/3-Mechanics/CLI/spells/disguise-self.md),\
    \ [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md), [polymorph](/3-Mechanics/CLI/spells/polymorph.md)"
  "name": "Spellcasting"
"actions":
- "desc": "The firbolg makes two attacks using Longsword, Bewitching Bolt, or a combination\
    \ of them."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands,\
    \ plus 9 (2d8) psychic damage."
  "name": "Longsword"
- "desc": "Ranged Spell Attack: +6 to hit, range 60 ft., one creature. Hit:\
    \ 10 (2d6 + 3) psychic damage, and the target must succeed on a DC 14 Charisma\
    \ saving throw or have the [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ condition until the start of the target's next turn."
  "name": "Bewitching Bolt"
"bonus_actions":
- "desc": "The firbolg projects an illusory duplicate of itself in an unoccupied space\
    \ it can see within 30 feet of itself. The firbolg can then swap places with the\
    \ illusion. The illusion vanishes after 1 minute, if the firbolg is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated),\
    \ or if the illusion is more than 120 feet from the firbolg.\n\nAs a bonus action\
    \ on later turns, the firbolg can move the illusion up to 30 feet and can then\
    \ swap places with it."
  "name": "Duplicitous Movement (1/Day)"
"source":
- "BGG"
- "GotSF"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/firbolg-wanderer-bgg.webp"
```
^statblock