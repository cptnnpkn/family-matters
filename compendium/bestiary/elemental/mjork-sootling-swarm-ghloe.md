---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Mjork Sootling Swarm"]
---
# [Mjork Sootling Swarm](3-Mechanics\CLI\bestiary\elemental/mjork-sootling-swarm-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 72*  

> [!quote]-  
> 
> Is it just me, or does the darkness seem thicker? And did it just get really warm in here?

## Salvage

Within every mjork is a heart of ash hardened into smoky crystal. This crystal might already be broken in the remains of a slain mjork, making it useless. An intact crystal can be broken or hurled at a point up to 60 feet away as an action. When it breaks, which it does upon landing if hurled, the crystal releases a 20-foot-radius sphere of sooty smoke, centered on a point in the breaker's space or on the point where the crystal landed. The smoke spreads around corners, and its area is heavily obscured. It lasts for 1 minute, but a moderate wind (at least 10 miles per hour) disperses it in 4 rounds. A strong wind (20 or more miles per hour) disperses the smoke in 1 round. These crystals sell for 15 gp or more each.

The smaller crystals from sootlings or broken mjork crystals are like smoky quartz. These gems can be worth from 1 sp to 1 gp each, or more to collectors who believe they are mjork crystals. Someone who polishes them using jeweler's tools can increase their value as semiprecious stones.

## Lore

- **DC 10 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** Mjorks are made from earth and fire clashing together. These elementals often dwell near volcanoes.  
- **DC 15 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** Mjorks are vulnerable to thunder damage, which cracks their rocky skin. They can also sense through smoke as if the haze provided them blindsight.  

```statblock
"name": "Mjork Sootling Swarm (GHLoE)"
"size": "Medium"
"type": "elemental"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "9"
- !!int "15"
- !!int "12"
- !!int "4"
- !!int "10"
- !!int "3"
"speed": "25 ft."
"damage_vulnerabilities": "thunder"
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "fire, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled), [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed),\
  \ [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone), [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
  \ [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands Ignan and Terran but can't speak"
"cr": "2"
"traits":
- "desc": "A creature that ends its turn in the sootling swarm's space takes 5 (2d4)\
    \ fire damage, or 2 (1d4) fire damage if the swarm has half of its hit points\
    \ or fewer. The creature must also succeed on a DC 11 Constitution saving throw\
    \ or be [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded) and unable to\
    \ breathe until the end of its next turn."
  "name": "Hot Soot"
- "desc": "A sootling swarm in contact with smoke has blindsight in that smoke's area\
    \ in a radius of up to 120 feet."
  "name": "Smoke Sense"
- "desc": "The sootling swarm can occupy another creature's space and vice versa,\
    \ and the swarm can move through any opening large enough for a Tiny creature.\
    \ The swarm can't regain hit points or gain temporary hit points"
  "name": "Swarm"
- "desc": "For every 5 feet the sootling swarm moves in water, or for every gallon\
    \ of water splashed on it, it takes 2 cold damage."
  "name": "Water Susceptibility"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 0 ft., one target in the swarm's\
    \ space. Hit: 10 (4d4) fire damage, or 5 (2d4) fire damage if the swarm\
    \ has half of its hit points or fewer."
  "name": "Burns"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/elemental/token/mjork-sootling-swarm-ghloe.webp"
```
^statblock