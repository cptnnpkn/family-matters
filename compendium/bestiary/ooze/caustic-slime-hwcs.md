---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/ooze
statblock: inline
aliases: ["Caustic Slime"]
---
# [Caustic Slime](3-Mechanics\CLI\bestiary\ooze/caustic-slime-hwcs.md)
*Source: Humblewood Campaign Setting p. 186*  

Deep in the murky marshes of the Mokk Fields, where water lays stagnant and the stench of decay permeates all, the worlds of life and death intertwine. Within this ominous mire lurk some of the most unusual natural predators in Humblewood. Collectively known as "slimes", these oozes move slowly through the muck, well-camouflaged by the dark and pungent waters, waiting to devour any hapless being that wanders within reach.

Slimes are easily provoked, and while it isn't difficult to outrun one, some who have strayed into a slime's territory only find out too late that they have been detected. Fortunately for many swampland travelers, slimes have a slow metabolism, and can go without feeding for long periods.

In addition to being an important part of the ecosystem, many slimes are either naturally magical, or yield organic materials which are in high demand among mages, scholars, and researchers. While slime hunting is a dangerous undertaking, the perch of Winnowing Reach was built on the labor of so-called "slime-wranglers", whose skill collecting valuable residue from live slimes is directly responsible for transforming the once minor outpost into a thriving site for scholarly innovation.

Three main types of slimes have been classified, but as magical creatures with strange properties, it's speculated that more elusive slime species might exist somewhere in the remote swamps. The three documented types are: [caustic slimes](/3-Mechanics/CLI/bestiary/ooze/caustic-slime-hwcs.md), [shifting slimes](/3-Mechanics/CLI/bestiary/ooze/shifting-slime-hwcs.md), and [sticky slimes](/3-Mechanics/CLI/bestiary/ooze/sticky-slime-hwcs.md).

## Caustic Slime

These pale green oozes have an astringent chemical odor, which mixes with the smell of liquefied flesh from their latest meal. Owing to the slow speed at which they digest their victims, the bones of partially-digested meals can be seen through their transparent exterior. Dissolving remnants move within the slimes in a macabre semblance of motion. This phenomena has earned them the nickname "green puppeteers".

### Natural Defenses

Capable of producing a lethal acid that can eat away at stone and metal, caustic slimes are especially deadly. Even the slightest touch on exposed fur or feathers can be dangerous. Many would-be heroes have met a slow, grim demise after being engulfed by these strange creatures.

### Scientific Interest

Though hazardous, the acid produced by these slimes is also valued for its potential uses as a powerful sorcery reagent and an ingredient in potent potions. Some claim it can be distilled into practical applications, like a solvent for metallurgists and builders.

```statblock
"name": "Caustic Slime (HWCS)"
"size": "Medium"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "22"
"hit_dice": "3d8 + 9"
"stats":
- !!int "15"
- !!int "6"
- !!int "16"
- !!int "1"
- !!int "6"
- !!int "1"
"speed": "20 ft., climb 20 ft."
"damage_immunities": "acid"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The Caustic Slime can move through a space as narrow as 1 inch wide without\
    \ squeezing."
  "name": "Amorphous"
- "desc": "The Caustic Slime can climb difficult surfaces, including upside down on\
    \ ceilings, without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "Any creature that touches the slime or hits it with a melee attack while\
    \ within 5 feet of it must succeed on a DC 12 Dexterity saving throw or take 2\
    \ (1d4) points of acid damage."
  "name": "Caustic"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) acid damage."
  "name": "Psuedopod"
"reactions":
- "desc": "When a slime that is Medium or larger and has 10 or more hit points is\
    \ hit with slashing damage, it splits into two new slimes. Each new slime has\
    \ hit points equal to half the original slime's, rounded down. New slimes are\
    \ one size smaller than the previous size."
  "name": "Split"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/ooze/token/caustic-slime-hwcs.webp"
```
^statblock