---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/gos
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
aliases: ["Pirate Bosun"]
---
# [Pirate Bosun](3-Mechanics\CLI\bestiary\humanoid/pirate-bosun-gos.md)
*Source: Ghosts of Saltmarsh p. 247*  

The bosun (or boatswain) is tasked with organizing the cargo and crew aboard a ship. Bosuns are capable fighters whose experience with hauling cargo and delivering beatings make them tough opponents. Foul Frithoff in The Sinister Secret of Saltmarsh is the bosun who protects the cargo aboard the smugglers' ship. Ever since a bad accident, he has worn a hook at the end of one arm in place of a hand.

```statblock
"name": "Pirate Bosun (GoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "[studded leather](/3-Mechanics/CLI/items/studded-leather-armor.md)"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "16"
- !!int "11"
- !!int "13"
- !!int "11"
- !!int "10"
- !!int "13"
"speed": "30 ft."
"skillsaves":
  "Intimidation": !!int "3"
  "Athletics": !!int "5"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "1/2"
"traits":
- "desc": "The bosun has advantage on Strength checks."
  "name": "Cargo Hauler"
- "desc": "The bosun has advantage on ability checks and saving throws to resist being\
    \ knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Sea Legs"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) bludgeoning damage."
  "name": "Light Hammer"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage, and the target is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 13)."
  "name": "Hook"
"source":
- "GoS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/pirate-bosun-gos.webp"
```
^statblock