---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Sildar Hallwinter"]
---
# [Sildar Hallwinter](3-Mechanics\CLI\bestiary\npc/sildar-hallwinter-pabtso.md)
*Source: Phandelver and Below: The Shattered Obelisk p. 22*  

Sildar is a kindhearted human man of nearly fifty years who holds a place of honor in the famous griffon cavalry of Waterdeep. He is an agent of the Lords' Alliance, a group of allied political powers along the Sword Coast concerned with mutual security and prosperity. The order ensures the safety of the cities and other settlements of Faerûn by proactively handling violent threats, and order members work to bring honor and glory to their leaders and their homeland.

```statblock
"name": "Sildar Hallwinter (PaBTSO)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Good"
"ac": !!int "16"
"ac_class": "[chain mail](/3-Mechanics/CLI/items/chain-mail.md)"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "13"
- !!int "10"
- !!int "12"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "30 ft."
"saves":
  "Strength": !!int "3"
  "Constitution": !!int "3"
"skillsaves":
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "Common"
"cr": "1"
"actions":
- "desc": "Sildar makes two Longsword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands."
  "name": "Longsword"
- "desc": "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit:\
    \ 5 (1d10) piercing damage."
  "name": "Heavy Crossbow"
"reactions":
- "desc": "When an attacker Sildar can see would hit him with a melee attack, he can\
    \ roll a d6 and add the number rolled to his AC against the triggering attack,\
    \ provided he's wielding a melee weapon."
  "name": "Parry"
"source":
- "PaBTSO"
"image": "/3-Mechanics/CLI/bestiary/npc/token/sildar-hallwinter-pabtso.webp"
```
^statblock