---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Saint Gresha"]
---
# [Saint Gresha](3-Mechanics\CLI\bestiary\npc/saint-gresha-dodk.md)
*Source: Dungeons of Drakkenheim p. 124*  

Gresha was called back in spirit by Lucretia Mathias to tend her namesake chapel. If Saint Gresha is destroyed, Lucretia Mathias calls her spirit back again as soon as possible.

```statblock
"name": "Saint Gresha (DoDk)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Good"
"ac": !!int "13"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "6"
- !!int "16"
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "15"
"speed": "0 ft., fly 60 ft."
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks that aren't silvered"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned), [prone](/3-Mechanics/CLI/rules/conditions.md#prone),\
  \ [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "The languages it knew in life"
"cr": "6"
"traits":
- "desc": "Saint Gresha is an 8th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 13, +5 to hit with spell attacks). Saint Gresha knows the following\
    \ sorcerer spells:\n\nAt will: [guidance](/3-Mechanics/CLI/spells/guidance.md),\
    \ [light](/3-Mechanics/CLI/spells/light.md), [sacred flame](/3-Mechanics/CLI/spells/sacred-flame.md),\
    \ [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy.md)\n\n1/day each: [divine\
    \ word](/3-Mechanics/CLI/spells/divine-word.md), [harm](/3-Mechanics/CLI/spells/harm.md),\
    \ [heal](/3-Mechanics/CLI/spells/heal.md), [holy aura](/3-Mechanics/CLI/spells/holy-aura.md),\
    \ [sacrament of the falling fire](/3-Mechanics/CLI/spells/sacrament-of-the-falling-fire-dodk.md)\n\
    \n3/day each: [bless](/3-Mechanics/CLI/spells/bless.md), [flame strike](/3-Mechanics/CLI/spells/flame-strike.md),\
    \ [guiding bolt](/3-Mechanics/CLI/spells/guiding-bolt.md), [healing word](/3-Mechanics/CLI/spells/healing-word.md),\
    \ [prayer of healing](/3-Mechanics/CLI/spells/prayer-of-healing.md), [spirit guardians](/3-Mechanics/CLI/spells/spirit-guardians.md)\n\
    \nnew spell described in Appendix D of Dungeons of Drakkenheim."
  "name": "Spellcasting"
- "desc": "Saint Gresha can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- "desc": "While in sunlight, Saint Gresha has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception)) checks\
    \ that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 21\
    \ (4d8 + 3) necrotic damage. The target must succeed on a DC 14 Constitution\
    \ saving throw or its hit point maximum is reduced by an amount equal to the damage\
    \ taken. This reduction lasts until the target finishes a long rest. The target\
    \ dies if this effect reduces its hit point maximum to 0."
  "name": "Life Drain"
- "desc": "Saint Gresha targets a humanoid within 10 feet of it that has been dead\
    \ for no longer than 1 minute and died violently. The target's spirit rises as\
    \ a specter in the space of its corpse or in the nearest unoccupied space. The\
    \ specter is under Saint Gresha's control. Saint Gresha can have no more than\
    \ seven specters under its control at one time."
  "name": "Create Specter"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/npc/token/saint-gresha-dodk.webp"
```
^statblock