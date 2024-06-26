---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Oozing Vulture"]
---
# [Oozing Vulture](3-Mechanics\CLI\bestiary\monstrosity/oozing-vulture-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 38*  

> [!quote]-  
> 
> The squawking and flapping of wings didn't cause me to flee. The blood-dripping feathers and gnarled beak? A whole different story.

## Salvage

An oozing vulture's feathers are prized by tailors and arcanists alike. A character can collect `2d10` feathers with a successful DC 10 Dexterity ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)) check. Each feather is worth 3 gp.

## Lore

- **DC 10 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** Oozing vultures have a vicious bite that can knock their victims prone.  
- **DC 15 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** Oozing vultures can track the smell of blood over great distances.  
- **DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** An oozing vulture is enraged by the smell of blood and gains advantage on attacks against wounded prey.  

```statblock
"name": "Oozing Vulture (GHLoE)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "65"
"hit_dice": "10d8 + 10"
"stats":
- !!int "16"
- !!int "13"
- !!int "12"
- !!int "5"
- !!int "14"
- !!int "8"
"speed": "20 ft., fly 50 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "2"
"traits":
- "desc": "The oozing vulture has advantage on melee attack rolls against any creature\
    \ that doesn't have all its hit points."
  "name": "Blood Frenzy"
- "desc": "The oozing vulture has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on sight or smell."
  "name": "Keen Sight and Smell"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10\
    \ (2d6 + 3) slashing damage. If the target is a creature, it must succeed on\
    \ a DC 13 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Bite"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/oozing-vulture-ghloe.webp"
```
^statblock