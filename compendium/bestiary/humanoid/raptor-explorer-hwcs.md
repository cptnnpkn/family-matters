---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/raptor
statblock: inline
aliases: ["Raptor Explorer"]
---
# [Raptor Explorer](3-Mechanics\CLI\bestiary\humanoid/raptor-explorer-hwcs.md)
*Source: Humblewood Campaign Setting p. 203*  

Whether drawn by tales of treasure or the allure of faraway lands, some residents of Humblewood journey to seek out distant ruins or remote vistas to satisfy their wanderlust. Explorers are common among raptors, many of whom do so out of veneration for the Amaranthine Reya, the guide and protector of travelers. Numerous explorers embark on such adventures for the sake of self-discovery and personal growth. Those who have made a life out of exploring often find their service as guides in high demand.

```statblock
"name": "Raptor Explorer (HWCS)"
"size": "Small"
"type": "humanoid"
"subtype": "raptor"
"alignment": "Neutral"
"ac": !!int "13"
"ac_class": "[leather armor](/3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "18"
"hit_dice": "4d6 + 4"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "15"
- !!int "11"
"speed": "25 ft., swim 25 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "6"
  "History": !!int "2"
  "Survival": !!int "6"
"senses": "passive Perception 16"
"languages": "Birdfolk, can also understand Auran but can't speak it"
"cr": "1/2"
"traits":
- "desc": "When falling at least 10 feet, the explorer can spend a reaction to fly\
    \ up to their speed in one direction as they descend. They land in an unoccupied\
    \ space at the end of their movement, and take no falling damage. They cannot\
    \ glide while carrying heavy objects, heavy weapons, or shields (though they can\
    \ drop any held items as part of their reaction)."
  "name": "Glide"
- "desc": "The explorer rolls advantage on Strength ([Athletics](/3-Mechanics/CLI/rules/skills.md#Athletics))\
    \ checks made to climb any surface their talons could reasonably grip."
  "name": "Talons"
- "desc": "When the explorer reacts with a readied action, they have advantage on\
    \ the first attack roll, skill check, or ability check they make as a part of\
    \ that action."
  "name": "Patient"
- "desc": "The explorer has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
- "desc": "The explorer ignores non-magical difficult terrain."
  "name": "Sure Footing"
"actions":
- "desc": "The explorer makes two melee attacks or two attacks with their hand crossbow."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage. "
  "name": "Talons"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage. "
  "name": "Saber"
- "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit:\
    \ 5 (1d6 + 2) piercing damage."
  "name": "Hand Crossbow"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/raptor-explorer-hwcs.webp"
```
^statblock