---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/scc
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid/wizard
statblock: inline
aliases: ["Lorehold Apprentice"]
---
# [Lorehold Apprentice](3-Mechanics\CLI\bestiary\humanoid/lorehold-apprentice-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 197*  

Deep in crumbling ruins and piles of dusty scrolls, Lorehold students—first as apprentices and then as pledgemages—study the magic of the past, searching for arcane artifacts and speaking with long-dead adventurers to uncover secrets lost to time.

Though many Lorehold students bury themselves in old tomes, others take a more cavalier approach to their studies and travel the world to see history made before their eyes. Their magic can range from spells tampering with the flow of time itself to concussive blasts that break through old ruins—to sometimes just bashing things with a glowing scroll.

## Lorehold Scholars

The archaeomancers of Lorehold College draw their magical might from the flow of time and fate and the way those forces shape the course of history. Scholars of this broad mystical study divide between those who see history as an unpredictable jumble of chance and those who believe events form a perfect—and predictable—pattern.

```statblock
"name": "Lorehold Apprentice (SCC)"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "10"
- !!int "14"
- !!int "13"
- !!int "15"
- !!int "12"
- !!int "11"
"speed": "30 ft."
"saves":
  "Intelligence": !!int "4"
  "Constitution": !!int "3"
"skillsaves":
  "Investigation": !!int "6"
  "Insight": !!int "3"
  "History": !!int "6"
"senses": "passive Perception 11"
"languages": "Common plus any two languages"
"cr": "2"
"traits":
- "desc": "The apprentice casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 12):\n\nAt will: [guidance](/3-Mechanics/CLI/spells/guidance.md), [light](/3-Mechanics/CLI/spells/light.md)\n\
    \n1/day each: [comprehend languages](/3-Mechanics/CLI/spells/comprehend-languages.md),\
    \ [locate object](/3-Mechanics/CLI/spells/locate-object.md), [mage armor](/3-Mechanics/CLI/spells/mage-armor.md)"
  "name": "Spellcasting"
"actions":
- "desc": "Melee Spell Attack: +4 to hit, reach 30 ft., one target. Hit: 7 (1d10\
    \ + 2) bludgeoning damage plus 9 (2d8) thunder damage."
  "name": "Scroll Bash"
- "desc": "Thundering golden energy erupts around a creature the apprentice can see\
    \ within 90 feet of it. The creature must make a DC 12 Constitution saving throw,\
    \ taking 33 (6d10) thunder damage on a failed save, or half as much damage on\
    \ a successful one. A Construct has disadvantage on the saving throw."
  "name": "Reduce to Memory (Recharge 6)"
"reactions":
- "desc": "When another creature within 60 feet of the apprentice misses a target\
    \ with an attack roll, the apprentice magically enables the attacker to reroll\
    \ the attack roll. It must use the new roll."
  "name": "Learn from the Past (2/Day)"
"source":
- "SCC"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/lorehold-apprentice-scc.webp"
```
^statblock