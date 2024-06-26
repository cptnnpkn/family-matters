---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/crcotn
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/wizard
statblock: inline
aliases: ["Insight Acuere"]
---
# [Insight Acuere](3-Mechanics\CLI\bestiary\npc/insight-acuere-crcotn.md)
*Source: Critical Role: Call of the Netherdeep p. 126*  

Insight is the primary archivist for the Cael Morrow archaeological project and would put her life on the line to ensure its success. She is willing to share the results of her research with fellow Allegiance members.

## Scholars of Allsight

The Allegiance of Allsight is a scholarly faction that operates primarily within the Marquesian metropolis of Ank'Harel. Though most members of the allegiance are academics unfamiliar with combat, the faction's field agents are skilled archaeologists who are also trained to contend with and overcome the threats that lurk in the depths of Exandria.

### Scholarly Mastermind

Scholarly masterminds are the formidable leaders of academic research organizations, responsible for planning and carrying out operations that delve into the secrets of the past. Some masterminds are headmasters at academies or universities. Others operate individually and in secret, pursuing agendas that might diverge wildly from those of the rest of their organization.

```statblock
"name": "Insight Acuere (CRCotN)"
"size": "Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Lawful Good"
"ac": !!int "12"
"hp": !!int "82"
"hit_dice": "15d8 + 15"
"stats":
- !!int "10"
- !!int "14"
- !!int "13"
- !!int "18"
- !!int "16"
- !!int "14"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"skillsaves":
  "Insight": !!int "6"
  "Perception": !!int "6"
  "History": !!int "7"
  "Arcana": !!int "7"
"damage_resistances": "fire"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "Aquan, Common, Infernal, Orc"
"cr": "5"
"traits":
- "desc": "[Insight](/3-Mechanics/CLI/rules/skills.md#Insight) casts one of the following\
    \ spells, requiring no material components and using Intelligence as the spellcasting\
    \ ability (spell save DC 15):\n\nAt will: [alter self](/3-Mechanics/CLI/spells/alter-self.md),\
    \ [light](/3-Mechanics/CLI/spells/light.md), [mage hand](/3-Mechanics/CLI/spells/mage-hand.md)\n\
    \n1/day each: [comprehend languages](/3-Mechanics/CLI/spells/comprehend-languages.md),\
    \ [mage armor](/3-Mechanics/CLI/spells/mage-armor.md), [zone of truth](/3-Mechanics/CLI/spells/zone-of-truth.md)"
  "name": "Spellcasting"
"actions":
- "desc": "[Insight](/3-Mechanics/CLI/rules/skills.md#Insight) makes two Arcane Shock\
    \ or Dagger of the Poisoned Mind attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Spell Attack: +7 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 26 (4d10 + 4) lightning damage. If the target is a creature,\
    \ it can't take reactions until the start of its next turn."
  "name": "Arcane Shock"
- "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d4 + 4) piercing damage plus 10 (3d6) psychic\
    \ damage. If the target is a creature, it must succeed on a DC 15 Wisdom saving\
    \ throw or be [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened) until\
    \ the end of its next turn."
  "name": "Dagger of the Poisoned Mind"
"source":
- "CRCotN"
"image": "/3-Mechanics/CLI/bestiary/npc/token/insight-acuere-crcotn.webp"
```
^statblock