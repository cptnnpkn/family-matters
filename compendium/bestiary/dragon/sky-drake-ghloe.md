---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Sky Drake"]
---
# [Sky Drake](3-Mechanics\CLI\bestiary\dragon/sky-drake-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 63*  

> [!quote]-  
> 
> Descendants of the great dragons of the mythic past still roam Etharis. They have little of the majesty of their ancestors, but they're still frightening.

## Salvage

Dragons are rare on Etharis, so materials from their corpses fetch a good price. A dragon's corpse can be sold for at least 100 gp times the Challenge of the monster.

## Lore

- **DC 15 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** Sea drakes are cunning grapplers resistant to cold, sky drakes are adept fliers and have a bite charged with lightning, and blight drakes collect diseases that don't kill them but make for a toxic bite.  

```statblock
"name": "Sky Drake (GHLoE)"
"size": "Large"
"type": "dragon"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"stats":
- !!int "18"
- !!int "11"
- !!int "17"
- !!int "8"
- !!int "14"
- !!int "11"
"speed": "20 ft., fly 60 ft."
"skillsaves":
  "Athletics": !!int "6"
  "Perception": !!int "4"
  "Survival": !!int "4"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Draconic and one other language"
"cr": "4"
"traits":
- "desc": "The sky drake doesn't provoke opportunity attacks when it flies out of\
    \ an enemy's reach."
  "name": "Flyby"
- "desc": "The sky drake has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- "desc": "The sky drake makes one bite attack and one attack with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11\
    \ (2d6 + 4) piercing damage and 5 (2d4) lightning damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13\
    \ (2d8 + 4) slashing damage."
  "name": "Claws"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/sky-drake-ghloe.webp"
```
^statblock