---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/veor
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Sarusanda Allester"]
---
# [Sarusanda Allester](3-Mechanics\CLI\bestiary\npc/sarusanda-allester-veor.md)
*Source: Vecna: Eve of Ruin*  

```statblock
"name": "Sarusanda Allester (VEoR)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Neutral"
"ac": !!int "11"
"hp": !!int "77"
"hit_dice": "14d8 + 14"
"stats":
- !!int "10"
- !!int "12"
- !!int "12"
- !!int "19"
- !!int "16"
- !!int "15"
"speed": "30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"skillsaves":
  "Nature": !!int "7"
  "Religion": !!int "10"
  "History": !!int "7"
  "Arcana": !!int "10"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)"
"senses": "truesight 30 ft., passive Perception 13"
"languages": "Celestial, Common, Draconic, Elvish, any four languages, telepathy 120\
  \ ft."
"cr": "8"
"traits":
- "desc": "Sarusanda casts one of the following spells, requiring no components and\
    \ using Intelligence as the spellcasting ability (spell save DC 15):\n\nAt will:\
    \ [detect magic](/3-Mechanics/CLI/spells/detect-magic.md), [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md),\
    \ [levitate](/3-Mechanics/CLI/spells/levitate.md), [mage armor](/3-Mechanics/CLI/spells/mage-armor.md),\
    \ [mage hand](/3-Mechanics/CLI/spells/mage-hand.md), [sending](/3-Mechanics/CLI/spells/sending.md),\
    \ [speak with dead](/3-Mechanics/CLI/spells/speak-with-dead.md)\n\n1/day each:\
    \ [Otiluke's resilient sphere](/3-Mechanics/CLI/spells/otilukes-resilient-sphere.md),\
    \ [telekinesis](/3-Mechanics/CLI/spells/telekinesis.md)"
  "name": "Innate Spellcasting (Psionics)"
"actions":
- "desc": "Sarusanda attacks twice."
  "name": "Multiattack"
- "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 22\
    \ (4d8 + 4) force damage, and if the target is a Large or smaller creature,\
    \ Sarusanda can push it up to 10 feet away."
  "name": "Force Bolt"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage, or 9 (1d10 + 4) if used with two hands, plus 18 (4d8)\
    \ force damage."
  "name": "Silver Longsword"
- "desc": "Each creature in a 20-foot-radius sphere centered on a point Sarusanda\
    \ can see within 120 feet of it must succeed on a DC 15 Constitution saving throw\
    \ or take 31 (6d8 + 4) force damage and be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)\
    \ and moved to the unoccupied space closest to the sphere's center. Large and\
    \ smaller objects that aren't being worn or carried in the sphere automatically\
    \ take the damage and are similarly moved."
  "name": "Implode (Recharge 4-6)"
"reactions":
- "desc": "In response to being hit by an attack roll, Sarusanda increases its AC\
    \ by 4 against the attack. If this causes the attack to miss, the attacker is\
    \ hit by the attack instead."
  "name": "Telekinetic Deflection"
"source":
- "VEoR"
"image": "/3-Mechanics/CLI/bestiary/npc/token/sarusanda-allester-veor.webp"
```
^statblock