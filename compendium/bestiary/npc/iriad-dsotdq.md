---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dsotdq
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
aliases: ["Iriad"]
---
# [Iriad](3-Mechanics\CLI\bestiary\npc/iriad-dsotdq.md)
*Source: Dragonlance: Shadow of the Dragon Queen p. 212*  

[Iriad](/3-Mechanics/CLI/bestiary/npc/iriad-dsotdq.md) is a Kagonesti elf from the lush woodlands of Southern Ergoth, where she learned to move undetected across the terrain. When Silvanesti elves began arriving at Southern Ergoth as refugees, she decided to lend her skills in the fight against the Dragon Armies before they can invade her homeland. She is a talented spy and scout who isn't afraid to bring her blades to bear if the situation demands it.

```statblock
"name": "Iriad (DSotDQ)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Good"
"ac": !!int "14"
"ac_class": "[leather armor](/3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "11"
- !!int "16"
- !!int "12"
- !!int "11"
- !!int "13"
- !!int "11"
"speed": "35 ft."
"saves":
  "Dexterity": !!int "4"
"skillsaves":
  "Nature": !!int "2"
  "Athletics": !!int "2"
  "Stealth": !!int "5"
  "Investigation": !!int "2"
  "Perception": !!int "5"
  "Acrobatics": !!int "5"
  "Survival": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Elvish"
"traits":
- "desc": "Iriad is proficient with simple weapons, light armor, [cartographer's tools](/3-Mechanics/CLI/items/cartographers-tools.md),\
    \ and [woodcarver's tools](/3-Mechanics/CLI/items/woodcarvers-tools.md)."
  "name": "Bonus Proficiencies"
- "desc": "Iriad has advantage on saving throws made to avoid or end the [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ condition on herself, and magic can't put her to sleep."
  "name": "Fey Ancestry"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 3 (1d6) poison\
    \ damage."
  "name": "Poison Dagger"
"bonus_actions":
- "desc": "Iriad takes the [Help](/3-Mechanics/CLI/rules/actions.md#Help) action."
  "name": "Helpful"
"source":
- "DSotDQ"
"image": "/3-Mechanics/CLI/bestiary/npc/token/iriad-dsotdq.webp"
```
^statblock