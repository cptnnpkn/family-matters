---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ggr
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/merfolk
statblock: inline
aliases: ["Zegana"]
---
# [Zegana](3-Mechanics\CLI\bestiary\npc/zegana-ggr.md)
*Source: Guildmasters' Guide to Ravnica p. 255*  

The regal and reticent Prime Speaker Zegana is the merfolk guildmaster of the Simic Combine. She upholds the traditional ways of the guild and its utopian philosophy, which espouses a vision of an ideal world in which nature and civilization coexist in perfect balance. Some people in the guild-members of the Adaptationist faction in particular-argue that her ways are outdated and the guild requires more practical leadership. In response, Zegana maintains that she serves as prime speaker only at the sufferance of the Speakers' Chamber, and if the other speakers wish to replace her, they are certainly within their rights to do so.

```statblock
"name": "Zegana (GGR)"
"size": "Medium"
"type": "humanoid"
"subtype": "merfolk"
"alignment": "Lawful Neutral"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "130"
"hit_dice": "20d8 + 40"
"stats":
- !!int "11"
- !!int "14"
- !!int "14"
- !!int "20"
- !!int "18"
- !!int "16"
"speed": "30 ft., swim 40 ft."
"saves":
  "Wisdom": !!int "9"
  "Intelligence": !!int "10"
"skillsaves":
  "Nature": !!int "10"
  "Insight": !!int "9"
  "Perception": !!int "9"
"damage_resistances": "cold, poison"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": "Common, Elvish, Merfolk"
"cr": "16"
"traits":
- "desc": "Zegana is a 15th-level Simic spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 18, +10 to hit with spell attacks). She has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [acid splash](/3-Mechanics/CLI/spells/acid-splash.md),\
    \ [druidcraft](/3-Mechanics/CLI/spells/druidcraft.md), [ray of frost](/3-Mechanics/CLI/spells/ray-of-frost.md),\
    \ [shape water](/3-Mechanics/CLI/spells/shape-water-xge.md)\n\n1st level (4\
    \ slots): [color spray](/3-Mechanics/CLI/spells/color-spray.md), [expeditious\
    \ retreat](/3-Mechanics/CLI/spells/expeditious-retreat.md), [fog cloud](/3-Mechanics/CLI/spells/fog-cloud.md),\
    \ [shield](/3-Mechanics/CLI/spells/shield.md)\n\n2nd level (3 slots): [enlarge/reduce](/3-Mechanics/CLI/spells/enlarge-reduce.md),\
    \ [gust of wind](/3-Mechanics/CLI/spells/gust-of-wind.md)\n\n3rd level (3 slots):\
    \ [counterspell](/3-Mechanics/CLI/spells/counterspell.md), [fly](/3-Mechanics/CLI/spells/fly.md),\
    \ [slow](/3-Mechanics/CLI/spells/slow.md)\n\n4th level (3 slots): [control\
    \ water](/3-Mechanics/CLI/spells/control-water.md), [ice storm](/3-Mechanics/CLI/spells/ice-storm.md),\
    \ [polymorph](/3-Mechanics/CLI/spells/polymorph.md)\n\n5th level (2 slots):\
    \ [conjure elemental](/3-Mechanics/CLI/spells/conjure-elemental.md), [creation](/3-Mechanics/CLI/spells/creation.md)\n\
    \n6th level (1 slots): [move earth](/3-Mechanics/CLI/spells/move-earth.md),\
    \ [wall of ice](/3-Mechanics/CLI/spells/wall-of-ice.md)\n\n7th level (1 slots):\
    \ [prismatic spray](/3-Mechanics/CLI/spells/prismatic-spray.md), [teleport](/3-Mechanics/CLI/spells/teleport.md)\n\
    \n8th level (1 slots): [control weather](/3-Mechanics/CLI/spells/control-weather.md),\
    \ [dominate monster](/3-Mechanics/CLI/spells/dominate-monster.md)"
  "name": "Spellcasting"
- "desc": "Zegana can breathe air and water."
  "name": "Amphibious"
- "desc": "If Zegana fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Zegana has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +10 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 12 (2d6 + 5) piercing damage, and the trident emits\
    \ a thunderous boom. Each creature in a 15-foot cube originating from the prongs\
    \ of the trident must make a DC 18 Constitution saving throw. On a failed save,\
    \ the creature takes 9 (2d8) thunder damage and is pushed 10 feet away from\
    \ Zegana. If the creature is underwater, the damage is increased to 13 (3d8).\
    \ On a successful save, the creature takes half as much damage and isn't pushed."
  "name": "Prime Speaker's Trident"
- "desc": "Zegana conjures a wave of water that crashes down on an area within 120\
    \ feet of her. The area can be up to 30 feet long, up to 10 feet wide, and up\
    \ to 10 feet tall. Each creature in that area must make a DC 18 Dexterity saving\
    \ throw. On a failed save, a creature takes 18 (4d8) bludgeoning damage and\
    \ is knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone). On a successful\
    \ save, a creature takes half as much damage and isn't knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\
    \ The water spreads out across the ground, extinguishing unprotected flames it\
    \ comes in contact with, and then vanishes."
  "name": "Deluge (Recharge 4-6)"
"legendary_actions":
- "desc": "Zegana gains resistance to one damage type of her choice-acid, fire, lightning,\
    \ or thunder-until the start of her next turn."
  "name": "Adaptive Skin"
- "desc": "Zegana makes one melee attack with the Prime Speaker's Trident."
  "name": "Trident"
- "desc": "Zegana casts [enlarge/reduce](/3-Mechanics/CLI/spells/enlarge-reduce.md)\
    \ on herself, using the enlarge option, without expending a spell slot."
  "name": "Enlarge (Costs 2 Actions)"
- "desc": "Zegana uses Deluge, if available."
  "name": "Deluge (Costs 3 Actions)"
"source":
- "GGR"
"image": "/3-Mechanics/CLI/bestiary/npc/token/zegana-ggr.webp"
```
^statblock