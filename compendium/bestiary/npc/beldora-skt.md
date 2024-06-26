---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/skt
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/illuskan-human
statblock: inline
aliases: ["Beldora"]
---
# [Beldora](3-Mechanics\CLI\bestiary\npc/beldora-skt.md)
*Source: Storm King's Thunder p. 249*  

Beldora is a member of the Harpers who survives using her wits and wiles. She looks like a homeless waif, but she's a survivor who shies away from material wealth.

Ideal:"We should all strive to help one another."

Bond:"I'll risk my life to protect the powerless."

Flaw:"I like lying to people. Makes life more interesting, no?"

```statblock
"name": "Beldora (SKT)"
"size": "Medium"
"type": "humanoid"
"subtype": "Illuskan human"
"alignment": "Chaotic Good"
"ac": !!int "12"
"hp": !!int "18"
"hit_dice": "4d8"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "16"
- !!int "12"
- !!int "16"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Investigation": !!int "5"
  "Insight": !!int "3"
  "Perception": !!int "5"
  "Persuasion": !!int "5"
"senses": "passive Perception 13"
"languages": "Common, Draconic, Dwarvish, Halfling"
"traits":
- "desc": "Beldora is a member of the harpers who survives using her wits and wiles.\
    \ She looks like a homeless waif, but she's a survivor who shies away from material\
    \ wealth.\n\nIdeal: \"We should all strive to help one another\"\n\nBond: \"I'll\
    \ risk my life to protect the powerless.\"\n\nFlaw: \"I like lying to people.\
    \ Makes life more interesting, no?\""
  "name": "Roleplaying Information"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit:\
    \ 5 (1d6 + 2) piercing damage. Beldora carries ten crossbow bolts."
  "name": "Hand Crossbow"
"reactions":
- "desc": "Beldora adds 2 to her AC against one ranged attack that would hit her.\
    \ To do so, Beldora must see the attacker and can't be [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ or [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)."
  "name": "Duck and Cover"
"source":
- "SKT"
"image": "/3-Mechanics/CLI/bestiary/npc/token/beldora-skt.webp"
```
^statblock