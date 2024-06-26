---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/kobold
statblock: inline
aliases: ["Morbus Kobold"]
---
# [Morbus Kobold](3-Mechanics\CLI\bestiary\humanoid/morbus-kobold-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 29*  

> [!quote]-  
> 
> If a group of lions is called a pride, a group of morbus kobolds is called an infection.

## Salvage

Someone who has proficiency with Medicine can attempt a DC 13 Wisdom ([Medicine](/3-Mechanics/CLI/rules/skills.md#Medicine)) check to extract the largest tumor from a morbus kobold elder. If this check succeeds, someone who has proficiency with alchemist's supplies or an herbalism kit can wrap the tumor with herbs and reagents worth 200 gp. The wrapped tumor must be left in open air so it receives daily sunlight for 7 days. Someone must cast lesser restoration on the tumor during this time. At the end of the process, the tumor can be polished and set in a necklace, making a periapt of health.

## Lore

- **DC 13 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** Morbus kobolds are a known for spreading disease. Despite their role in propagating contagions, they are immune to the effects of all known diseases.  
- **DC 13 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** The first documented record of an encounter with a morbus kobold was in the city of Liesech during the early days of the Weeping Pox. Shortly after this encounter, the Weeping Pox began spreading in nearby regions.  
- **DC 16 Wisdom ([Medicine](/3-Mechanics/CLI/rules/skills.md#Medicine)).** The largest tumors in morbus kobold elders can be treated then dried in sunlight to create a ward against diseases.  

```statblock
"name": "Morbus Kobold (GHLoE)"
"size": "Small"
"type": "humanoid"
"subtype": "kobold"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "9"
"hit_dice": "2d6 + 2"
"stats":
- !!int "6"
- !!int "14"
- !!int "13"
- !!int "10"
- !!int "9"
- !!int "8"
"speed": "30 ft., swim 30 ft."
"saves":
  "Constitution": !!int "3"
"skillsaves":
  "Medicine": !!int "1"
  "Stealth": !!int "4"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Draconic and one other language"
"cr": "1/8"
"traits":
- "desc": "The morbus kobold can contract a disease but is immune to effects other\
    \ than cosmetic symptoms."
  "name": "Carrier"
- "desc": "A creature that touches the morbus kobold or anything it has touched in\
    \ the past 24 hours is exposed to a disease, usually sewer plague."
  "name": "Infection"
- "desc": "The morbus kobold has advantage on an attack roll against a creature if\
    \ at least one of the kobold's allies is within 5 feet of the creature and the\
    \ ally isn't [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
- "desc": "While in sunlight, the morbus kobold has disadvantage on attack rolls,\
    \ as well as on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage and Infection."
  "name": "Dagger"
- "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit:\
    \ 4 (1d4 + 2) bludgeoning damage and Infection."
  "name": "Sling"
- "desc": "The morbus kobold throws a sack filled with diseased gore at a point it\
    \ can see within 20 feet of it. Each creature within 5 feet of the chosen point\
    \ is subjected to Infection. A kobold usually carries only one such bag at a time."
  "name": "Gore Bag"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/morbus-kobold-ghloe.webp"
```
^statblock