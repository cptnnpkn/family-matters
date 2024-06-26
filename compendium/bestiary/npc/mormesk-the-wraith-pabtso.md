---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Mormesk the Wraith"]
---
# [Mormesk the Wraith](3-Mechanics\CLI\bestiary\npc/mormesk-the-wraith-pabtso.md)
*Source: Phandelver and Below: The Shattered Obelisk p. 70*  

```statblock
"name": "Mormesk the Wraith (PaBTSO)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
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
"speed": "0 ft., fly 60 ft. (hover)"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks that aren't silvered"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned), [prone](/3-Mechanics/CLI/rules/conditions.md#prone),\
  \ [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
- "desc": "Mormesk can move through other creatures and objects as if they were difficult\
    \ terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
  "name": "Incorporeal Movement"
- "desc": "While in sunlight, Mormesk has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception)) checks\
    \ that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 21\
    \ (4d8 + 3) necrotic damage. The target must succeed on a DC 14 Constitution\
    \ saving throw or its hit point maximum is reduced by an amount equal to the damage\
    \ taken. This reduction lasts until the target finishes a long rest. The target\
    \ dies if this effect reduces its hit point maximum to 0."
  "name": "Life Drain"
- "desc": "Mormesk targets a humanoid within 10 feet of it that has been dead for\
    \ no longer than 1 minute and died violently. The target's spirit rises as a [specter](/3-Mechanics/CLI/bestiary/undead/specter.md)\
    \ in the space of its corpse or in the nearest unoccupied space. The [specter](/3-Mechanics/CLI/bestiary/undead/specter.md)\
    \ is under Mormesk's control. Mormesk can have no more than seven specters under\
    \ its control at one time."
  "name": "Create Specter"
"source":
- "PaBTSO"
"image": "/3-Mechanics/CLI/bestiary/npc/token/mormesk-the-wraith-pabtso.webp"
```
^statblock