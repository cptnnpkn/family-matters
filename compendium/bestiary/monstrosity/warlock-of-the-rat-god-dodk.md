---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Warlock of the Rat God"]
---
# [Warlock of the Rat God](3-Mechanics\CLI\bestiary\monstrosity/warlock-of-the-rat-god-dodk.md)
*Source: Dungeons of Drakkenheim p. 202*  

> [!quote]-  
> 
> Once we have all the shiny, the Rat God will come and help us! We'll get food! We will eat! Lots of food! All the food! We will eat the whole world! All the earth! Yes yes yes!

Many ratlings worship a fiendish entity they call the Rat God. They construct crude effigies to the Rat God, who whispers to the most cunning and intelligent ratlings, granting them magic through eldritch pacts. Ratlings understand surprisingly little about the Rat God, and make up stories and fables about the Rat God's exploits.

```statblock
"name": "Warlock of the Rat God (DoDk)"
"size": "Small"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"ac_class": "15 with [mage armor](/3-Mechanics/CLI/spells/mage-armor.md)"
"hp": !!int "27"
"hit_dice": "6d6 + 6"
"stats":
- !!int "7"
- !!int "14"
- !!int "13"
- !!int "13"
- !!int "11"
- !!int "15"
"speed": "30 ft., climb 30 ft., swim 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "4"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common"
"cr": "2"
"traits":
- "desc": "The warlock's innate spellcasting ability is Charisma. It can innately\
    \ cast the following spells (spell save DC 12, +4 to hit with spell attacks),\
    \ requiring no material components:\n\nAt will: [eldritch blast](/3-Mechanics/CLI/spells/eldritch-blast.md)\
    \ (2 beams), [mage armor](/3-Mechanics/CLI/spells/mage-armor.md) (self only),\
    \ [minor illusion](/3-Mechanics/CLI/spells/minor-illusion.md), [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy.md)\n\
    \n1/day each: [augury](/3-Mechanics/CLI/spells/augury.md), [burning hands](/3-Mechanics/CLI/spells/burning-hands.md),\
    \ [conjure animals](/3-Mechanics/CLI/spells/conjure-animals.md) (giant rats only),\
    \ [faerie fire](/3-Mechanics/CLI/spells/faerie-fire.md), [invisibility](/3-Mechanics/CLI/spells/invisibility.md),\
    \ [misty step](/3-Mechanics/CLI/spells/misty-step.md)"
  "name": "Innate Spellcasting"
- "desc": "The ratling can take the Hide action as a bonus action on each of its turns."
  "name": "Skulker"
- "desc": "The ratling has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/warlock-of-the-rat-god-dodk.webp"
```
^statblock