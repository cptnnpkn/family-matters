---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bam
- ttrpg-cli/monster/cr/18
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Cosmic Horror"]
---
# [Cosmic Horror](3-Mechanics\CLI\bestiary\aberration/cosmic-horror-bam.md)
*Source: Boo's Astral Menagerie p. 18, Vecna: Eve of Ruin*  

```statblock
"name": "Cosmic Horror (BAM)"
"size": "Gargantuan"
"type": "aberration"
"alignment": "typically  Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "280"
"hit_dice": "16d20 + 112"
"stats":
- !!int "27"
- !!int "10"
- !!int "25"
- !!int "24"
- !!int "15"
- !!int "24"
"speed": "50 ft., fly 100 ft."
"saves":
  "Charisma": !!int "13"
  "Wisdom": !!int "8"
  "Intelligence": !!int "13"
"damage_immunities": "acid, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 240 ft., passive Perception 12"
"languages": "Deep Speech, telepathy 240 ft."
"cr": "18"
"traits":
- "desc": "If the horror fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The horror doesn't require air."
  "name": "Unusual Nature"
"actions":
- "desc": "The horror makes one Bite attack and two Tentacle attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 22\
    \ (4d6 + 8) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +14 to hit, reach 30 ft., one target. Hit: 18\
    \ (3d6 + 8) force damage, and if the target is a creature, it is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 18). Until this grapple ends, the horror can't use this tentacle\
    \ against other targets. The horror has 1d8 + 1 tentacles, each of which can\
    \ grapple one target."
  "name": "Tentacle"
- "desc": "The horror emits dreadful whispers in a 60-foot-radius sphere centered\
    \ on itself. Each creature in the sphere that isn't an Aberration must make a\
    \ DC 21 Wisdom saving throw, taking 33 (6d10) psychic damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Psychic Whispers (Recharge 5-6)"
"legendary_actions":
- "desc": "The horror crushes one creature it is grappling. The [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ creature must make a DC 22 Constitution saving throw, taking 18 (3d6 + 8)\
    \ force damage on a failed save, or half as much damage on a successful one."
  "name": "Crushing Tentacle"
- "desc": "Foul gas squirts from the horror in a 30-foot line that is 5 feet wide.\
    \ Each creature in the line must succeed on a DC 21 Constitution saving throw\
    \ or take 14 (4d6) poison damage."
  "name": "Poison Jet (Costs 2 Actions)"
- "desc": "The horror teleports, along with any creatures it is grappling, to an unoccupied\
    \ space it can see within 120 feet of itself."
  "name": "Teleport (Costs 2 Actions)"
"source":
- "BAM"
- "VEoR"
"image": "/3-Mechanics/CLI/bestiary/aberration/token/cosmic-horror-bam.webp"
```
^statblock