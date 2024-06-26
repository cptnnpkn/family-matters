---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bmt
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Reaper Spirit (7th-level Spell)"]
---
# [Reaper Spirit (7th-level Spell)](3-Mechanics\CLI\bestiary\undead/reaper-spirit-7th-level-spell-bmt.md)
*Source: The Book of Many Things p. 50*  

```statblock
"name": "Reaper Spirit (7th-level Spell) (BMT)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "70"
"stats":
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
"speed": "30 ft., fly 30 ft. (hover)"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "understands the languages you speak"
"traits":
- "desc": "The spirit can move through other creatures and objects as if they were\
    \ difficult terrain. If it ends its turn inside an object, it is shunted to the\
    \ nearest unoccupied space and takes 1d10 force damage for every 5 feet shunted."
  "name": "Incorporeal Movement"
"actions":
- "desc": "The spirit makes a number of Reaping Scythe attacks equal to half the level\
    \ of the spell (rounded down)."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: your spell attack modifier to hit (with advantage),\
    \ reach 5 ft., the creature haunted by Haunt Creature. Hit: 1d8 + 3 + summonSpellLevel\
    \ necrotic damage."
  "name": "Reaping Scythe"
"bonus_actions":
- "desc": "The spirit targets a creature it can see within 10 feet of itself and begins\
    \ haunting it. While the target is haunted, you and the spirit sense the direction\
    \ and distance to the target if it is on the same plane of existence as you. Additionally,\
    \ if the target starts its turn within 10 feet of the spirit, the target must\
    \ succeed on a Wisdom saving throw against your spell save DC or have the [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ condition until the start of the target's next turn. The target remains haunted\
    \ until it dies, the spirit disappears, or the spirit uses this action again."
  "name": "Haunt Creature"
"source":
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/undead/token/reaper-spirit-bmt.webp"
```
^statblock