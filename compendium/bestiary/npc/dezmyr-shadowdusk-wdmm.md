---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Dezmyr Shadowdusk"]
---
# [Dezmyr Shadowdusk](3-Mechanics\CLI\bestiary\npc/dezmyr-shadowdusk-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 287*  

```statblock
"name": "Dezmyr Shadowdusk (WDMM)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "20"
"ac_class": "[plate armor](/3-Mechanics/CLI/items/plate-armor.md), [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "180"
"hit_dice": "19d8 + 95"
"stats":
- !!int "20"
- !!int "11"
- !!int "20"
- !!int "12"
- !!int "16"
- !!int "18"
"speed": "30 ft."
"saves":
  "Charisma": !!int "10"
  "Dexterity": !!int "6"
  "Wisdom": !!int "9"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Abyssal, Common"
"cr": "17"
"traits":
- "desc": "Dezmyr is a 19th-level spellcaster. Her spellcasting ability is Charisma\
    \ (spell save DC 18, +10 to hit with spell attacks). She has the following paladin\
    \ spells prepared:\n\n1st level (4 slots): [command](/3-Mechanics/CLI/spells/command.md),\
    \ [compelled duel](/3-Mechanics/CLI/spells/compelled-duel.md), [searing smite](/3-Mechanics/CLI/spells/searing-smite.md)\n\
    \n2nd level (3 slots): [hold person](/3-Mechanics/CLI/spells/hold-person.md),\
    \ [magic weapon](/3-Mechanics/CLI/spells/magic-weapon.md)\n\n3rd level (3 slots):\
    \ [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md), [elemental weapon](/3-Mechanics/CLI/spells/elemental-weapon.md)\n\
    \n4th level (3 slots): [locate creature](/3-Mechanics/CLI/spells/locate-creature.md),\
    \ [staggering smite](/3-Mechanics/CLI/spells/staggering-smite.md)\n\n5th level\
    \ (2 slots): [destructive wave](/3-Mechanics/CLI/spells/destructive-wave.md)\
    \ (necrotic)"
  "name": "Spellcasting"
- "desc": "As a bonus action on her turn, Dezmyr can warp reality, undoing damage\
    \ dealt to herself or another creature that she can see within 20 feet of her.\
    \ The beneficiary of this warped reality instantly regains 10 hit points."
  "name": "Warp Reality"
- "desc": "Dezmyr has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Unless Dezmyr is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated),\
    \ it and undead creatures of its choice within 60 feet of it have advantage on\
    \ saving throws against features that turn undead."
  "name": "Marshal Undead"
"actions":
- "desc": "Dezmyr makes three longsword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 9\
    \ (1d8 + 5) slashing damage, or 10 (1d10 + 5) slashing damage if used with\
    \ two hands, plus 18 (4d8) necrotic damage."
  "name": "Longsword"
- "desc": "Dezmyr hurls a magical ball of fire that explodes at a point it can see\
    \ within 120 feet of it. Each creature in a 20-foot-radius sphere centered on\
    \ that point must make a DC 18 Dexterity saving throw. The sphere spreads around\
    \ corners. A creature takes 35 (10d6) fire damage and 35 (10d6) necrotic damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Hellfire Orb (1/Day)"
"reactions":
- "desc": "Dezmyr adds 6 to its AC against one melee attack that would hit it. To\
    \ do so, Dezmyr must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "WDMM"
"image": "/3-Mechanics/CLI/bestiary/npc/token/dezmyr-shadowdusk-wdmm.webp"
```
^statblock