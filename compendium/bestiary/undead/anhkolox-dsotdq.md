---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dsotdq
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Anhkolox"]
---
# [Anhkolox](3-Mechanics\CLI\bestiary\undead/anhkolox-dsotdq.md)
*Source: Dragonlance: Shadow of the Dragon Queen p. 192*  

Anhkoloxes are vicious undead creatures created from the bones of bears and other beasts. Their barbed bones grind and crack, often moving in seemingly impossible ways. Anhkoloxes are driven by territorial instinct and a predatory urge to hunt and devour living prey. They run on all fours and rear up onto their hind legs when they corner their quarry. When they strike, they wallop foes about with their claws—they delight in knocking foes into pits full of jagged bones—and their barbed rib cage cracks open like a hunting trap to snap closed around a victim.

```statblock
"name": "Anhkolox (DSotDQ)"
"size": "Huge"
"type": "undead"
"alignment": "typically  Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "157"
"hit_dice": "15d12 + 60"
"stats":
- !!int "22"
- !!int "11"
- !!int "18"
- !!int "4"
- !!int "14"
- !!int "2"
"speed": "50 ft."
"saves":
  "Wisdom": !!int "6"
"skillsaves":
  "Perception": !!int "6"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": ""
"cr": "9"
"traits":
- "desc": "The anhkolox doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "The anhkolox makes two Claw attacks and one Entrapping Rend attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 17\
    \ (2d10 + 6) piercing damage. If the target is a Large or smaller creature,\
    \ it must succeed on a DC 18 Strength saving throw or be pushed up to 20 feet\
    \ in a horizontal direction of the anhkolox's choice."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 23\
    \ (5d6 + 6) piercing damage, and if the target is a Large or smaller creature,\
    \ the target must succeed on a DC 18 Strength saving throw or be trapped in the\
    \ anhkolox's rib cage and [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 18). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ and the anhkolox can't use Entrapping Rend on another target."
  "name": "Entrapping Rend"
"source":
- "DSotDQ"
"image": "/3-Mechanics/CLI/bestiary/undead/token/anhkolox-dsotdq.webp"
```
^statblock