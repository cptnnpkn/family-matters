---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/plant
statblock: inline
aliases: ["Oakheart"]
---
# [Oakheart](3-Mechanics\CLI\bestiary\plant/oakheart-hwcs.md)
*Source: Humblewood Campaign Setting p. 203*  

Oakheart is a huge tree-shaped creature with charred bark that smolders in places, and many small flames which burn on his branches, giving the impression of leaves. Once a treant, he bathed in the primal energies of the Scorched Grove, transforming into an entity so thoroughly possessed of the element of flame that he's capable of serving as [The Borealus'](/3-Mechanics/CLI/items/borealus-hwcs.md) keeper. He is the artifact's guardian, and will not relinquish the staff until he has been convinced that whoever has disturbed him can control the staff's considerable power, and that they mean to maintain the natural balance he sacrificed himself to protect.

```statblock
"name": "Oakheart (HWCS)"
"size": "Huge"
"type": "plant"
"alignment": "Chaotic Good"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "69"
"hit_dice": "6d12 + 30"
"stats":
- !!int "20"
- !!int "8"
- !!int "21"
- !!int "12"
- !!int "16"
- !!int "12"
"speed": "30 ft."
"damage_resistances": "bludgeoning, fire, piercing"
"senses": "passive Perception 13"
"languages": "Birdfolk, Druidic, Ignan, Sylvan"
"cr": "8"
"traits":
- "desc": "While Oakheart remains motionless, he appears as a great oak with charred\
    \ bark that smolders in places and flames in place of leaves."
  "name": "False Appearance (Treant)"
- "desc": "The Oakheart deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- "desc": "Oakheart makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16\
    \ (3d6 + 5) fire damage."
  "name": "Slam"
- "desc": "Ranged Weapon Attack: +8 to hit, range 60/180 ft., one target. Hit:\
    \ 28 (4d10 + 5) bludgeoning damage."
  "name": "Rock"
- "desc": "Oakheart magically animates one or two trees he can see within 60 feet\
    \ of him. These trees have the same statistics as Oakheart, except they have Intelligence\
    \ and Charisma scores of 1, they can't speak, and they have only the Slam action\
    \ option. An animated tree acts as an ally of Oakheart. The tree remains animate\
    \ for 1 day or until it dies; until Oakheart dies or is more than 120 feet from\
    \ the tree; or until Oakheart takes a bonus action to turn him back into an inanimate\
    \ tree. The tree then takes root if possible."
  "name": "Animate Trees (1/Day)"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/plant/token/oakheart-hwcs.webp"
```
^statblock