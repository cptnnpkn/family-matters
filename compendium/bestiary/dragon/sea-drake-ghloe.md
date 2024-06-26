---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Sea Drake"]
---
# [Sea Drake](3-Mechanics\CLI\bestiary\dragon/sea-drake-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 51*  

> [!quote]-  
> 
> Descendants of the great dragons of the mythic past still roam Etharis. They have little of the majesty of their ancestors, but they're still frightening.

## Salvage

Dragons are rare on Etharis, so materials from their corpses fetch a good price. A dragon's corpse can be sold for at least 100 gp times the Challenge of the monster.

Someone who has proficiency with alchemist's supplies can reduce the brain of a prismatic drake into an oil that can be used to fashion one arrow of dragon slaying. Brewing the oil takes 5 days of work, reagents worth 2,000 gp, and a successful DC 17 Intelligence or Wisdom check. Making the arrow is a trivial task, but treating it properly with the oil takes 5 more days of work.

## Lore

- **DC 15 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** Sea drakes are cunning grapplers resistant to cold, sky drakes are adept fliers and have a bite charged with lightning, and blight drakes collect diseases that don't kill them but make for a toxic bite.  
- **DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** Prismatic drakes are the rarest drakes, rumored to be sorcerers transformed into dragons after they foolishly connected their minds to Gormadraug, the slumbering Prismatic Dragon. These drakes can cast spells.  

```statblock
"name": "Sea Drake (GHLoE)"
"size": "Medium"
"type": "dragon"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "15"
- !!int "16"
- !!int "14"
- !!int "7"
- !!int "14"
- !!int "8"
"speed": "20 ft., swim 50 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "4"
"damage_resistances": "cold"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Draconic"
"cr": "2"
"traits":
- "desc": "The sea drake can breathe air and water."
  "name": "Amphibious"
"actions":
- "desc": "The sea drake makes one bite attack and one tail attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10\
    \ (2d6 + 3) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 6\
    \ (1d6 + 3) bludgeoning damage. If the target is a Medium or smaller creature,\
    \ it is pulled within 5 feet of the sea drake and [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 13). Until this grapple ends, the drake can't use its tail on another\
    \ target."
  "name": "Tail"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/sea-drake-ghloe.webp"
```
^statblock