---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Ithjar"]
---
# [Ithjar](3-Mechanics\CLI\bestiary\monstrosity/ithjar-ghloe.md)
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
"name": "Ithjar (GHLoE)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "102"
"hit_dice": "12d10 + 36"
"stats":
- !!int "18"
- !!int "20"
- !!int "17"
- !!int "3"
- !!int "10"
- !!int "5"
"speed": "30 ft., fly 90 ft."
"skillsaves":
  "Perception": !!int "3"
  "Acrobatics": !!int "8"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "5"
"traits":
- "desc": "The ithjar has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Keen Sight"
- "desc": "The ithjar has advantage on ability checks and saving throws made to escape\
    \ a grapple or saving throws to avoid being [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed)\
    \ or [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)."
  "name": "Slippery Serpent"
"actions":
- "desc": "The ithjar attacks once with its bite and once with its tail."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15\
    \ (2d10 + 4) slashing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 13\
    \ (2d8 + 4) bludgeoning damage. If the target is a Medium or smaller creature,\
    \ it is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) (escape DC 15).\
    \ Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ and the ithjar can't use its tail on another target."
  "name": "Tail"
"reactions":
- "desc": "When [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled), the ithjar\
    \ can attempt to escape."
  "name": "Writhing Escape"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/ithjar-ghloe.webp"
```
^statblock