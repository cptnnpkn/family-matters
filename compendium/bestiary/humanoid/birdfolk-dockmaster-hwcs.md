---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-birdfolk
statblock: inline
aliases: ["Birdfolk Dockmaster"]
---
# [Birdfolk Dockmaster](3-Mechanics\CLI\bestiary\humanoid/birdfolk-dockmaster-hwcs.md)
*Source: Humblewood Campaign Setting p. 190*  

It may be odd to see birdfolk working the docks and ships of Saltar's Port, but the sea is a way of life for some folk. Jobs in the seafaring industry are as lucrative as they are tough. For the birdfolk that choose to ply their trade on the water, life is about order and efficiency. One improperly stowed barrel or poorly lashed line can spell disaster on the sea. Dockmasters take their marine jobs very seriously.

```statblock
"name": "Birdfolk Dockmaster (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "any birdfolk"
"alignment": "Any alignment"
"ac": !!int "14"
"ac_class": "[leather armor](/3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"stats":
- !!int "10"
- !!int "16"
- !!int "13"
- !!int "8"
- !!int "13"
- !!int "15"
"speed": "30 ft."
"skillsaves":
  "Athletics": !!int "2"
  "Perception": !!int "5"
  "Persuasion": !!int "4"
"senses": "passive Perception 15"
"languages": "Birdfolk, can also understand Auran but can't speak it"
"cr": "2"
"traits":
- "desc": "When falling at least 10 feet, the dockmaster can spend a reaction to fly\
    \ up to their speed in one direction as they descend. They land in an unoccupied\
    \ space at the end of their movement, and take no falling damage. They cannot\
    \ glide while carrying heavy objects, heavy weapons, or shields (though they can\
    \ drop any held items as part of their reaction)."
  "name": "Glide"
- "desc": "The dockmaster adds their Charisma modifier to their initiative rolls."
  "name": "Confidence"
- "desc": "Once per turn, the dockmaster deals an extra 3 (1d6) damage when they\
    \ hit a target with a weapon attack and they have advantage on the attack roll,\
    \ or when the target is within 5 ft. of an ally of the dockmaster that isn't [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ and the dockmaster doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack"
"actions":
- "desc": "The dockmaster makes two saber attacks and one dagger attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Saber"
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
  "name": "Dagger"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/birdfolk-dockmaster-hwcs.webp"
```
^statblock