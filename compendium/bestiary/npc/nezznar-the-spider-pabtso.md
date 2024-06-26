---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
- ttrpg-cli/monster/type/humanoid/wizard
statblock: inline
aliases: ["Nezznar the Spider"]
---
# [Nezznar the Spider](3-Mechanics\CLI\bestiary\npc/nezznar-the-spider-pabtso.md)
*Source: Phandelver and Below: The Shattered Obelisk p. 74*  

The Spider—a drow mastermind named Nezznar—is searching Wave Echo Cave for the Forge of Spells, a magical forge that was used by dwarves and gnomes in bygone days to fashion powerful magic items.

The Spider wants Wave Echo Cave for himself, and he's taking steps to make sure no one else knows where it is.

```statblock
"name": "Nezznar the Spider (PaBTSO)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf, wizard"
"alignment": "Neutral Evil"
"ac": !!int "11"
"ac_class": "14 with [mage armor](/3-Mechanics/CLI/spells/mage-armor.md)"
"hp": !!int "27"
"hit_dice": "6d8"
"stats":
- !!int "9"
- !!int "13"
- !!int "10"
- !!int "16"
- !!int "14"
- !!int "13"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "5"
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "4"
  "Arcana": !!int "5"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Common, Elvish, Undercommon"
"cr": "2"
"traits":
- "desc": "Nezznar casts one of the following spells, using Intelligence as the spellcasting\
    \ ability (spell save DC 13 unless otherwise noted):\n\nAt will: [dancing\
    \ lights](/3-Mechanics/CLI/spells/dancing-lights.md), [mage hand](/3-Mechanics/CLI/spells/mage-hand.md),\
    \ [spider climb](/3-Mechanics/CLI/spells/spider-climb.md) (from spider staff),\
    \ [web](/3-Mechanics/CLI/spells/web.md) (from spider staff; save DC 15)\n\n1/day\
    \ each: [darkness](/3-Mechanics/CLI/spells/darkness.md), [faerie fire](/3-Mechanics/CLI/spells/faerie-fire.md),\
    \ [invisibility](/3-Mechanics/CLI/spells/invisibility.md), [mage armor](/3-Mechanics/CLI/spells/mage-armor.md),\
    \ [magic missile](/3-Mechanics/CLI/spells/magic-missile.md), [suggestion](/3-Mechanics/CLI/spells/suggestion.md)"
  "name": "Spellcasting"
- "desc": "Nezznar has a fully charged spider staff (see appendix B)."
  "name": "Special Equipment"
- "desc": "Nezznar has advantage on saving throws to avoid or end the [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ condition on himself, and magic can't put him to sleep."
  "name": "Fey Ancestry"
- "desc": "Nezznar has disadvantage on attack rolls while he or his target is in sunlight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "Nezznar makes two Poison Blast attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 120 ft.,\
    \ one creature. Hit: 9 (2d8) poison damage."
  "name": "Poison Blast"
"source":
- "PaBTSO"
"image": "/3-Mechanics/CLI/bestiary/npc/token/nezznar-the-spider-pabtso.webp"
```
^statblock