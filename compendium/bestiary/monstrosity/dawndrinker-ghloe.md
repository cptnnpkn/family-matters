---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Dawndrinker"]
---
# [Dawndrinker](3-Mechanics\CLI\bestiary\monstrosity/dawndrinker-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 49*  

> [!quote]-  
> 
> Sometimes it's darkest after the dawn.

## Salvage

Dawndrinkers have a special organ that stores and processes light the way that other creatures digest food. Most of the creature's body disintegrates after it dies, but this light stomach remains. Someone who has proficiency with alchemist's supplies, cook's utensils, or an herbalism kit can prepare the stomach with other ingredients worth 25 gp. If the preparer succeeds on a DC 13 Wisdom or Intelligence check, the organ makes a tasty, sweet meal for up to four creatures. After partaking, those creatures add 60 feet to their darkvision range for 24 hours, those that lack darkvision gain it to a range of 60 feet. All partakers also gain blindsight to a range of 10 feet for the same duration.

## Lore

- **DC 10 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** A dawndrinker is a cunning predator that can easily hide and move in shadow. It greatly lessens and even extinguishes light sources.  
- **DC 15 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** A dawndrinker can sense light, its food, at a great distance. The monster is also resistant to fire, absorbing some of its energy, and immune to radiant damage, which is a source of quick nourishment for the dawndrinker.  
- **DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** A dawndrinker's attacks can temporarily take away the victim's ability to perceive light.  

```statblock
"name": "Dawndrinker (GHLoE)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "18"
- !!int "14"
- !!int "19"
- !!int "3"
- !!int "11"
- !!int "7"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "5"
"damage_resistances": "fire"
"damage_immunities": "radiant"
"senses": "blindsight 120 ft., darkvision 240 ft., passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- "desc": "The dawndrinker can take a bonus action to drink light within 30 feet of\
    \ it. If it does so, nonmagical light sources in this area go out, extinguishing\
    \ any flames that are the source of the light. Provided the light comes from an\
    \ effect of 3rd level or lower, or a creature of CR 7 or lower, magical bright\
    \ light becomes dim light, and magical dim light goes out. If a magical effect's\
    \ light is extinguished, the effect is dispelled. A creature's or object's inherent\
    \ light returns to normal after 1 minute. The dawndrinker can dim or extinguish\
    \ stronger effects by succeeding on a Constitution check with a DC of 10 + the\
    \ effect's level or 5 + the creator's CR, whichever is lower."
  "name": "Drink Light"
- "desc": "The dawndrinker can sense any light source within 120 feet of it. This\
    \ sense penetrates most barriers, but it is blocked by 3 feet of wood or dirt,\
    \ 1 foot of stone, or 1 inch of metal."
  "name": "Light Sense"
- "desc": "Whenever the dawndrinker is subjected to radiant damage, it takes no damage\
    \ and instead regains hit points equal to the radiant damage dealt."
  "name": "Radiant Absorption"
- "desc": "In dim light or darkness, the dawndrinker can take a bonus action to use\
    \ the Disengage or Hide actions."
  "name": "Shadow Cunning"
"actions":
- "desc": "The dawndrinker makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) bludgeoning damage and 7 (2d6) cold damage. If the target is a creature,\
    \ it must succeed on a DC 13 Constitution saving throw or be [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)\
    \ until the end of the dawndrinker's next turn."
  "name": "Slam"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/dawndrinker-ghloe.webp"
```
^statblock