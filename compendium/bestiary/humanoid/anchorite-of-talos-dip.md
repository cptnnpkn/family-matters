---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dip
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/half-orc
- ttrpg-cli/monster/type/humanoid/shapechanger
statblock: inline
aliases: ["Anchorite of Talos"]
---
# [Anchorite of Talos](3-Mechanics\CLI\bestiary\humanoid/anchorite-of-talos-dip.md)
*Source: Dragon of Icespire Peak p. 51, Divine Contention, Sleeping Dragon's Wake*  

These religious recluses are granted spellcasting power by Talos, the god of storms. Their human ancestors bred with orcs, and now all anchorites of Talos are half-orcs.

```statblock
"name": "Anchorite of Talos (DIP)"
"size": "Medium"
"type": "humanoid"
"subtype": "half-orc, shapechanger"
"alignment": "Neutral Evil"
"ac": !!int "13"
"ac_class": "[hide armor](/3-Mechanics/CLI/items/hide-armor.md)"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "9"
- !!int "15"
- !!int "12"
"speed": "30 ft."
"skillsaves":
  "Nature": !!int "1"
  "Stealth": !!int "3"
  "Survival": !!int "4"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Orc"
"cr": "3"
"traits":
- "desc": "The anchorite's innate spellcasting ability is Wisdom (spell save DC 12).\
    \ It can innately cast the following spells, requiring no material components:\n\
    \n1/day each: [augury](/3-Mechanics/CLI/spells/augury.md), [bless](/3-Mechanics/CLI/spells/bless.md),\
    \ [lightning bolt](/3-Mechanics/CLI/spells/lightning-bolt.md) (8d6 damage),\
    \ [revivify](/3-Mechanics/CLI/spells/revivify.md)\n\n3/day: [thunderwave](/3-Mechanics/CLI/spells/thunderwave.md)\
    \ (2d8 damage)"
  "name": "Innate Spellcasting"
- "desc": "The anchorite can use its action to polymorph into a boar or back into\
    \ its true form, which is humanoid. Its statistics are the same in each form.\
    \ Any equipment it is wearing or carrying isn't transformed. It reverts to its\
    \ true form if it dies."
  "name": "Shapechanger"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) slashing damage."
  "name": "Clawed Gauntlet (Humanoid Form Only)"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Tusk (Boar Form Only)"
"source":
- "DIP"
- "DC"
- "SDW"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/anchorite-of-talos-dip.webp"
```
^statblock