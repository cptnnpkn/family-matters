---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Haze Husk"]
---
# [Haze Husk](3-Mechanics\CLI\bestiary\undead/haze-husk-dodk.md)
*Source: Dungeons of Drakkenheim p. 197*  

Those who die in the ruins find no respite. The Haze reanimates their remains to wander the streets as shells forever stuck in the terror of their final moments. Billowing eldritch energies emanate from their eyes, mouth, and wounds and delerium fragments are fused into their flesh.

```statblock
"name": "Haze Husk (DoDk)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "8"
"hp": !!int "22"
"hit_dice": "3d8 + 9"
"stats":
- !!int "13"
- !!int "6"
- !!int "16"
- !!int "3"
- !!int "6"
- !!int "5"
"speed": "20 ft."
"saves":
  "Wisdom": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands all languages it spoke in life but can't speak"
"cr": "1/4"
"traits":
- "desc": "If damage reduces the haze husk to 0 hit points, the delerium fragments\
    \ in its body explode in a burst of contaminated energy, unless the damage is\
    \ radiant or from a critical hit. Each creature within 5 feet of it must succeed\
    \ on a DC 10 Constitution saving throw or take 7 (2d6) necrotic damage. Creatures\
    \ who fail this saving throw by 5 or more gain one level of contamination."
  "name": "Death Burst"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage."
  "name": "Slam"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/undead/token/haze-husk-dodk.webp"
```
^statblock