---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/pota
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Zegdar"]
---
# [Zegdar](3-Mechanics\CLI\bestiary\npc/zegdar-pota.md)
*Source: Princes of the Apocalypse p. 120*  

```statblock
"name": "Zegdar (PotA)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "[chain mail](/3-Mechanics/CLI/items/chain-mail.md)"
"hp": !!int "117"
"hit_dice": "9d10 + 27"
"stats":
- !!int "18"
- !!int "11"
- !!int "16"
- !!int "11"
- !!int "16"
- !!int "9"
"speed": "40 ft."
"skillsaves":
  "Perception": !!int "7"
"damage_immunities": "fire"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Abyssal"
"cr": "3"
"traits":
- "desc": "If Zegdar moves at least 10 feet straight toward a target and then hits\
    \ it with a gore attack on the same turn, the target takes an extra 9 (2d8)\
    \ piercing damage. If the target is a creature, it must succeed on a DC 14 Strength\
    \ saving throw or be pushed up to 10 feet away and knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Charge"
- "desc": "Zegdar can perfectly recall any path it has traveled."
  "name": "Labyrinthine Recall"
- "desc": "At the start of its turn, Zegdar can gain advantage on all melee weapon\
    \ attack rolls it makes during that turn, but attack rolls against it have advantage\
    \ until the start of its next turn."
  "name": "Reckless"
"actions":
- "desc": "Zegdar exhales a cloud of burning embers in a 15-foot cone. Each creature\
    \ in that area must succeed on a DC 14 Dexterity saving throw, taking 21 (6d6)\
    \ fire damage on a failed save, or half as much damage on a successful one."
  "name": "Burning Breath (Recharge 5-6)"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17\
    \ (2d12 + 4) slashing damage."
  "name": "Greataxe"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13\
    \ (2d8 + 4) piercing damage."
  "name": "Gore"
"source":
- "PotA"
"image": "/3-Mechanics/CLI/bestiary/npc/token/zegdar-pota.webp"
```
^statblock