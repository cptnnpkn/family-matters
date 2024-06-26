---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/ooze
statblock: inline
aliases: ["Sticky Slime"]
---
# [Sticky Slime](3-Mechanics\CLI\bestiary\ooze/sticky-slime-hwcs.md)
*Source: Humblewood Campaign Setting p. 188*  

Deep in the murky marshes of the Mokk Fields, where water lays stagnant and the stench of decay permeates all, the worlds of life and death intertwine. Within this ominous mire lurk some of the most unusual natural predators in Humblewood. Collectively known as "slimes", these oozes move slowly through the muck, well-camouflaged by the dark and pungent waters, waiting to devour any hapless being that wanders within reach.

Slimes are easily provoked, and while it isn't difficult to outrun one, some who have strayed into a slime's territory only find out too late that they have been detected. Fortunately for many swampland travelers, slimes have a slow metabolism, and can go without feeding for long periods.

In addition to being an important part of the ecosystem, many slimes are either naturally magical, or yield organic materials which are in high demand among mages, scholars, and researchers. While slime hunting is a dangerous undertaking, the perch of Winnowing Reach was built on the labor of so-called "slime-wranglers", whose skill collecting valuable residue from live slimes is directly responsible for transforming the once minor outpost into a thriving site for scholarly innovation.

Three main types of slimes have been classified, but as magical creatures with strange properties, it's speculated that more elusive slime species might exist somewhere in the remote swamps. The three documented types are: [caustic slimes](/3-Mechanics/CLI/bestiary/ooze/caustic-slime-hwcs.md), [shifting slimes](/3-Mechanics/CLI/bestiary/ooze/shifting-slime-hwcs.md), and [sticky slimes](/3-Mechanics/CLI/bestiary/ooze/sticky-slime-hwcs.md).

## Sticky Slime

A semi-solid type of ooze, sticky slimes are far more robust than their cousins. Experienced slime wranglers know never to attack them directly with weapons. The rubbery bodies of sticky slimes can suck a blade out of a wielder's hands, leaving the attacker unarmed.

### True to Form

Sticky slimes are wholly described by their name. They leave a trail of extremely thick adhesive residue in their wake. While the residue itself is harmless, it can trap adventurers where they stand, and sticky slimes tend to live in proximity of far more threatening monsters.

```statblock
"name": "Sticky Slime (HWCS)"
"size": "Medium"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "6"
"hp": !!int "13"
"hit_dice": "2d8 + 4"
"stats":
- !!int "12"
- !!int "3"
- !!int "14"
- !!int "1"
- !!int "6"
- !!int "1"
"speed": "15 ft., climb 15 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "1/8"
"traits":
- "desc": "The Caustic Slime can move through a space as narrow as 1 inch wide without\
    \ squeezing."
  "name": "Amorphous"
- "desc": "The slime leaves a trail of ooze behind it that remains tacky for up to\
    \ 15 minutes. A creature that steps in the ooze must succeed a DC 12 Strength\
    \ saving throw or become [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained).\
    \ A creature may attempt the saving throw again at the end of each of its turns,\
    \ ending the effect on a success."
  "name": "Slime Trail"
- "desc": "When the slime is hit by a melee attack, the attacker must succeed on a\
    \ DC 12 Strength saving throw or their weapon becomes stuck in the slime. The\
    \ weapon can be wrenched out by using an action to make a Strength ([Athletics](/3-Mechanics/CLI/rules/skills.md#Athletics))\
    \ check against the same DC, freeing the weapon on a success. All weapons stuck\
    \ in the slime can be retrieved once the slime is slain."
  "name": "Mucus"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) bludgeoning damage."
  "name": "Psuedopod"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/ooze/token/sticky-slime-hwcs.webp"
```
^statblock