---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Ontharyx"]
---
# [Ontharyx](3-Mechanics\CLI\bestiary\npc/ontharyx-pabtso.md)
*Source: Phandelver and Below: The Shattered Obelisk p. 115*  

```statblock
"name": "Ontharyx (PaBTSO)"
"size": "Medium"
"type": "aberration"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "12"
- !!int "18"
- !!int "14"
- !!int "11"
- !!int "13"
- !!int "15"
"speed": "30 ft., fly 30 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"damage_resistances": "psychic"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Common, telepathy 60 ft."
"cr": "4"
"traits":
- "desc": "While in sunlight, Ontharyx has disadvantage on attack rolls."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "Ontharyx makes two Unarmed Strike or Nightmare Blast attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage plus 10 (3d6) psychic damage."
  "name": "Unarmed Strike"
- "desc": "Ranged Weapon Attack: +6 to hit, range 60 ft., one creature. Hit:\
    \ 7 (2d6) psychic damage, and the target must succeed on a DC 12 Wisdom saving\
    \ throw or have the [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ condition until the start of Ontharyx's next turn."
  "name": "Nightmare Blast"
"reactions":
- "desc": "Immediately after taking damage, Ontharyx flies up to its speed. This movement\
    \ doesn't provoke opportunity attacks."
  "name": "Defensive Flight"
"source":
- "PaBTSO"
"image": "/3-Mechanics/CLI/bestiary/npc/token/ontharyx-pabtso.webp"
```
^statblock