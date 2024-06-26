---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Entropic Flame"]
---
# [Entropic Flame](3-Mechanics\CLI\bestiary\elemental/entropic-flame-dodk.md)
*Source: Dungeons of Drakkenheim p. 204*  

Contaminated Elementals can be found all over Drakkenheim, often in areas where the eldritch magics are especially concentrated. Many who have encountered these elementals have spoken of the city itself coming to life to attack them. Reports of ruins reaching out and crushing adventurers, burning flames moving and hunting with minds of their own, or contaminated pools lurching to engulf passersby have been heard. Even the blowing air itself has mustered parts of the Haze into shifting clouds that stalk adventurers through the streets. These magical creatures are a constant reminder that nothing in the city can be trusted, and that nowhere is truly safe.

```statblock
"name": "Entropic Flame (DoDk)"
"size": "Large"
"type": "elemental"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "78"
"hit_dice": "12d10 + 12"
"stats":
- !!int "10"
- !!int "17"
- !!int "13"
- !!int "5"
- !!int "10"
- !!int "5"
"speed": "30 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "fire, poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled), [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed),\
  \ [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone), [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
  \ [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Deep Speech"
"cr": "5"
"traits":
- "desc": "The entropic flame can move through a space as narrow as 1 inch wide without\
    \ squeezing. A creature that touches the flame or hits it with a melee attack\
    \ while within 5 feet of it takes 5 (1d10) fire damage. In addition, the flame\
    \ can enter a hostile creature's space and stop there. The first time it enters\
    \ a creature's space on a turn, that creature takes 5 (1d10) fire damage and\
    \ catches fire; until someone takes an action to douse the fire, the creature\
    \ takes 5 (1d10) fire damage at the start of each of its turns."
  "name": "Fire Form"
- "desc": "The entropic flame sheds bright light in a 30-foot radius and dim light\
    \ for an additional 30 feet."
  "name": "Illumination"
"actions":
- "desc": "The entropic flame makes three hurl flame attacks. Before or after making\
    \ each attack, the entropic flame can teleport up to 10 feet to a space it can\
    \ see. It may teleport into a space occupied by another creature."
  "name": "Multiattack"
- "desc": "Ranged Weapon Attack: +6 to hit, range 120 ft., one target. Hit:\
    \ 10 (3d6) fire damage."
  "name": "Hurl Flame"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10\
    \ (2d6 + 3) fire damage. If the target is a creature or a flammable object,\
    \ it ignites. Until a creature takes an action to douse the fire, the target takes\
    \ 5 (1d10) fire damage at the start of each of its turns."
  "name": "Touch"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/elemental/token/entropic-flame-dodk.webp"
```
^statblock