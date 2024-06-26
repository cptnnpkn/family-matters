---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Stormborn Ithjar"]
---
# [Stormborn Ithjar](3-Mechanics\CLI\bestiary\monstrosity/stormborn-ithjar-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 94*  

> [!quote]-  
> 
> It takes mere moments for an ithjar to transform from a kite-like swirl of gray and red in the distance to a menace of snapping teeth.

## Salvage

Ithjar teeth and hide can fetch a fair price in larger markets. Necklaces and other decorations can be made from the teeth, and clothing can be fashioned from the skin and scales. Popular superstition says wearing ithjar teeth or hide imparts some of the creature's nimbleness to the wearer. This belief isn't wholly true, but someone who has proficiency with leatherworker's tools can make hide armor from the hide that has a base AC of 13 and allows a wearer to apply their full Dexterity bonus to AC. Creating this armor takes 10 days. Such hide armor fashioned from a stormborn ithjar is armor of resistance (lightning and thunder). This armor takes no longer to make, but it requires other materials worth 2,000 gp

The central fang of a stormborn ithjar can be fashioned into a javelin of lightning that deals `2d8` lightning damage and `2d8` thunder damage instead of only `4d6` lightning damage. A creature hit by the javelin must also succeed on a DC 13 Strength saving throw or fall prone. Someone who has proficiency with smith's tools can make this weapon with 10 days of work and other materials worth 250 gp. Somebody must also cast thunderwave on the weapon three times during its creation.

## Lore

- **DC 10 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** Ithjars are fast-moving ferocious fliers, but the more powerful of these flying serpents are imbued with the power of storms and can exhale lightning and thunder.  
- **DC 15 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** It's difficult to capture an ithjar. They slither out of an enemy's clutches and other restraints quickly and easily.  
- **DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** The stormborn ithjar is immune to lightning and thunder, allowing it to travel within storm clouds.  

```statblock
"name": "Stormborn Ithjar (GHLoE)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Chaotic Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "189"
"hit_dice": "18d12 + 72"
"stats":
- !!int "21"
- !!int "20"
- !!int "19"
- !!int "3"
- !!int "12"
- !!int "5"
"speed": "40 ft., fly 120 ft."
"skillsaves":
  "Perception": !!int "5"
  "Acrobatics": !!int "9"
"damage_immunities": "lightning, thunder"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "9"
"traits":
- "desc": "The stormborn ithjar has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Keen Sight"
- "desc": "The stormborn ithjar has advantage on ability checks or saving throws made\
    \ to escape a grapple and saving throws to avoid being [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed)\
    \ or [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)."
  "name": "Slippery Serpent"
"actions":
- "desc": "The stormborn ithjar attacks once with its bite and once with its tail."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 21\
    \ (3d10 + 5) slashing damage and 9 (2d8) lightning damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 18\
    \ (3d8 + 5) bludgeoning damage and 7 (2d6) thunder damage. If the target is\
    \ a Large or smaller creature, it is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 17). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ and the stormborn ithjar can't use its tail on another target."
  "name": "Tail"
- "desc": "The stormborn ithjar exhales a 30-foot cone of lightning and thunder. Each\
    \ creature in that area must make a DC 16 Dexterity saving throw. On a failure,\
    \ a creature takes 31 (7d8) lightning damage and 31 (7d8) thunder damage and\
    \ falls [prone](/3-Mechanics/CLI/rules/conditions.md#prone). If the save succeeds,\
    \ the creature takes half the lightning and thunder damage and doesn't fall [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\
    \ The discharge of this breath weapon is audible for 1 mile outside and 300 feet\
    \ inside."
  "name": "Storm Breath (Recharge 5-6)"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/stormborn-ithjar-ghloe.webp"
```
^statblock