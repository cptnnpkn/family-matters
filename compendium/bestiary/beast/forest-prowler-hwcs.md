---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Forest Prowler"]
---
# [Forest Prowler](3-Mechanics\CLI\bestiary\beast/forest-prowler-hwcs.md)
*Source: Humblewood Campaign Setting p. 183*  

> [!quote]-  
> 
> "Did you see that? Was it just the wind in the leaves, or has a prowler come calling..."

Forest prowlers feature prominently throughout folktales in Humblewood, notably as monsters in frightful stories. These cat-like beasts have the unique ability to grow leaves and moss on their spotted fur, allowing them to camouflage perfectly within the forest canopy.

## Fable and Folklore

One of the reasons forest prowlers have attained such mythic status is due to their elusive nature. They are adept at moving unseen through the canopy where they hunt, and their skills as ambush predators means that few who see them live to tell the tale. In some communities the killing of a forest prowler is considered a rite of passage among beast hunters. The large fangs seen adorning the necks of Humblewood's greatest hunters and warriors, and cloaks made from prowler fur, are trophies that showcase one's prowess and skill.

## Fierce Hunter

Forest prowlers are apex predators. They can claim virtually any prey they desire, but usually target deer, elk, and other large herbivores. Prowlers use their powerful bodies and gripping claws to drag their kill up into their tree nests, where it can be consumed at their leisure. These felines are known to travel long and winding paths through the forest, residing in temporary shelters throughout the seasons. Although nomadic, the prowlers are quite territorial of whatever area they currently inhabit. Relatively passive in the winter, they are most active in the spring and summer during peak hunting and breeding seasons.

```statblock
"name": "Forest Prowler (HWCS)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "15"
- !!int "18"
- !!int "14"
- !!int "4"
- !!int "14"
- !!int "9"
"speed": "40 ft., climb 40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "4"
"traits":
- "desc": "The prowler has advantage on Dexterity ([Stealth](/3-Mechanics/CLI/rules/skills.md#Stealth))\
    \ checks made in the forest. Creatures who attack a target that cannot see them\
    \ have advantage on their attack roll."
  "name": "Natural Camouflage"
- "desc": "If the Forest Prowler moves at least 10 feet straight toward a creature\
    \ and then hits it with a claw attack on the same turn, that target must succeed\
    \ on a DC 14 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\
    \ The prowler can use its bonus action to make another claw attack against this\
    \ target."
  "name": "Pounce"
- "desc": "The prowler can use the dash or hide action as a bonus action."
  "name": "Ambuscade"
"actions":
- "desc": "The prowler makes two claw attacks and one bite attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage,."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13\
    \ (2d8 + 4) piercing damage. If the target of the bite attack is [prone](/3-Mechanics/CLI/rules/conditions.md#prone),\
    \ it takes an additional 4 (1d8) piercing damage. "
  "name": "Bite"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/beast/token/forest-prowler-hwcs.webp"
```
^statblock