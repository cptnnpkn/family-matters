---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
aliases: ["Enchanter Wizard"]
---
# [Enchanter Wizard](3-Mechanics\CLI\bestiary\humanoid/enchanter-wizard-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 261*  

Enchanters know how to magically influence minds. Benign enchanters use this magic to defuse violence and sow peace, while malevolent enchanters are some of the most evil of all spellcasters.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

```statblock
"name": "Enchanter Wizard (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with [mage armor](/3-Mechanics/CLI/spells/mage-armor.md)"
"hp": !!int "49"
"hit_dice": "11d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
"skillsaves":
  "History": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "5"
"traits":
- "desc": "The enchanter casts one of the following spells, using Intelligence as\
    \ the spellcasting ability (spell save DC 14):\n\nAt will: [friends](/3-Mechanics/CLI/spells/friends.md),\
    \ [mage hand](/3-Mechanics/CLI/spells/mage-hand.md), [message](/3-Mechanics/CLI/spells/message.md)\n\
    \n2/day each: [charm person](/3-Mechanics/CLI/spells/charm-person.md), [mage\
    \ armor](/3-Mechanics/CLI/spells/mage-armor.md), [hold person](/3-Mechanics/CLI/spells/hold-person.md),\
    \ [invisibility](/3-Mechanics/CLI/spells/invisibility.md), [suggestion](/3-Mechanics/CLI/spells/suggestion.md),\
    \ [tongues](/3-Mechanics/CLI/spells/tongues.md)"
  "name": "Spellcasting"
"actions":
- "desc": "The enchanter makes three Arcane Burst attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Spell Attack: +6 to hit, reach 5 ft. or range 120 ft.,\
    \ one target. Hit: 19 (3d10 + 3) psychic damage."
  "name": "Arcane Burst"
"reactions":
- "desc": "When a visible creature within 30 feet of the enchanter makes an attack\
    \ roll against it, the enchanter forces the attacker to make a DC 14 Wisdom saving\
    \ throw. On a failed save, the attacker redirects the attack roll to the creature\
    \ closest to it, other than the enchanter or itself. If multiple eligible creatures\
    \ are closest, the attacker chooses which one to target."
  "name": "Instinctive Charm (Recharge 4-6)"
"source":
- "MPMM"
- "VGM"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/enchanter-wizard-mpmm.webp"
```
^statblock

## Environment

urban