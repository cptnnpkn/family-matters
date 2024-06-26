---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/kftgv
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Crimson Helmed Horror"]
---
# [Crimson Helmed Horror](3-Mechanics\CLI\bestiary\construct/crimson-helmed-horror-kftgv.md)
*Source: Keys from the Golden Vault p. 152*  

```statblock
"name": "Crimson Helmed Horror (KftGV)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "20"
"ac_class": "[plate armor](/3-Mechanics/CLI/items/plate-armor.md), [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"stats":
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "30 ft., fly 30 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't adamantine"
"damage_immunities": "force, necrotic, poison"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed),\
  \ [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned),\
  \ [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 14"
"languages": "understands the languages of its creator but can't speak"
"cr": "4"
"traits":
- "desc": "The helmed horror has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "The helmed horror is immune to [burning hands](/3-Mechanics/CLI/spells/burning-hands.md),\
    \ [fireball](/3-Mechanics/CLI/spells/fireball.md), and [scorching ray](/3-Mechanics/CLI/spells/scorching-ray.md)."
  "name": "Spell Immunity"
"actions":
- "desc": "The helmed horror makes two longsword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) fire damage, or 9 (1d10 + 4) fire damage if used with two hands."
  "name": "Flaming Longsword"
"bonus_actions":
- "desc": "As a bonus action on its first turn in combat, the helmed horror conjures\
    \ a longsword-sized blade of fire, which appears in its free hand. This sword\
    \ disappears in a cloud of smoke when the helmed horror drops to 0 hit points."
  "name": "Conjure Sword"
"source":
- "KftGV"
"image": "/3-Mechanics/CLI/bestiary/construct/token/crimson-helmed-horror-kftgv.webp"
```
^statblock