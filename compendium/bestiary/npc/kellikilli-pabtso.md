---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Kellikilli"]
---
# [Kellikilli](3-Mechanics\CLI\bestiary\npc/kellikilli-pabtso.md)
*Source: Phandelver and Below: The Shattered Obelisk p. 121*  

```statblock
"name": "Kellikilli (PaBTSO)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "58"
"hit_dice": "9d10 + 9"
"stats":
- !!int "17"
- !!int "16"
- !!int "13"
- !!int "11"
- !!int "10"
- !!int "10"
"speed": "0 ft., swim 60 ft."
"damage_resistances": "fire; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled), [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned), [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone), [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)"
"senses": "blindsight 30 ft., passive Perception 10"
"languages": "understands Aquan but doesn't speak"
"cr": "3"
"traits":
- "desc": "Kellikilli is [invisible](/3-Mechanics/CLI/rules/conditions.md#invisible)\
    \ while fully immersed in water."
  "name": "Invisible in Water"
- "desc": "Kellikilli dies if it leaves the water to which it is bound or if that\
    \ water is destroyed."
  "name": "Water Bound"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit:\
    \ 13 (3d6 + 3) bludgeoning damage. If the target is Medium or smaller, it is\
    \ [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) (escape DC 13) and\
    \ pulled 5 feet toward Kellikilli. Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ Kellikilli tries to drown it, and Kellikilli can't constrict another target."
  "name": "Constrict"
"source":
- "PaBTSO"
"image": "/3-Mechanics/CLI/bestiary/npc/token/kellikilli-pabtso.webp"
```
^statblock