---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/rot
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Ice Toad"]
---
# [Ice Toad](3-Mechanics\CLI\bestiary\monstrosity/ice-toad-rot.md)
*Source: The Rise of Tiamat p. 90*  

Arauthator has attracted a number of ice toads to Oyaviggaton, where they help to maintain the iceberg and the dragon's many treasures and trophies. The ice toads are good at this job, thanks to their exceptionally intelligent leader, Marfulb.

Feeding on seals, sea birds, and fish caught for them by the Ice Hunters, Oyaviggaton's ice toads are not automatically hostile to strangers. Once characters get inside Arauthator's lair, they might find that these creatures can be helpful to their quest. Ice toads normally speak only their own obscure language. Those in Oyaviggaton know a little Draconic and Uluik (the language of the Ice Hunters), but their accents are thick and their pronunciation atrocious. Marfulb is fluent in Draconic thanks to many hours spent conversing with Arauthator.

When the characters encounter ice toads, their intelligence won't be apparent until they act or attempt to speak. Even then, characters might not recognize the ice toads' croaking as language. Ice toads move on all fours, but their webbed front feet are surprisingly dexterous. Some carry tools and useful items in pouches slung around their necks.

```statblock
"name": "Ice Toad (RoT)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "32"
"hit_dice": "5d8 + 10"
"stats":
- !!int "13"
- !!int "10"
- !!int "14"
- !!int "8"
- !!int "10"
- !!int "6"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "2"
"damage_immunities": "cold"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Ice Toad"
"cr": "1"
"traits":
- "desc": "The toad can breathe air or water."
  "name": "Amphibious"
- "desc": "Any creature that starts its turn within 5 feet of the toad takes 3 (1d6)\
    \ cold damage."
  "name": "Cold Aura"
- "desc": "The toad's long jump is up to 20 feet and its high jump is up to 10 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d8)\
    \ cold damage. If the target is a Medium or smaller creature it is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 11). Until this grapple ends, the toad can't bite another target."
  "name": "Bite"
"source":
- "RoT"
- "ToD"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/ice-toad-rot.webp"
```
^statblock