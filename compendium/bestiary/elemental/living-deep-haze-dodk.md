---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Living Deep Haze"]
---
# [Living Deep Haze](3-Mechanics\CLI\bestiary\elemental/living-deep-haze-dodk.md)
*Source: Dungeons of Drakkenheim p. 204*  

Contaminated Elementals can be found all over Drakkenheim, often in areas where the eldritch magics are especially concentrated. Many who have encountered these elementals have spoken of the city itself coming to life to attack them. Reports of ruins reaching out and crushing adventurers, burning flames moving and hunting with minds of their own, or contaminated pools lurching to engulf passersby have been heard. Even the blowing air itself has mustered parts of the Haze into shifting clouds that stalk adventurers through the streets. These magical creatures are a constant reminder that nothing in the city can be trusted, and that nowhere is truly safe.

```statblock
"name": "Living Deep Haze (DoDk)"
"size": "Large"
"type": "elemental"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"stats":
- !!int "14"
- !!int "20"
- !!int "14"
- !!int "5"
- !!int "10"
- !!int "5"
"speed": "0 ft., fly 90 ft. (hover)"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled), [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed),\
  \ [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone), [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
  \ [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Deep Speech"
"cr": "5"
"traits":
- "desc": "The Living Deep Haze can enter a hostile creature's space and stop there.\
    \ It can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Fog Form"
- "desc": "A creature who enters or starts its turn in the same space as the Living\
    \ Deep Haze must succeed on a DC 15 Constitution saving throw or take 10 (3d6)\
    \ necrotic damage and gain one level of contamination."
  "name": "Deep Haze"
"actions":
- "desc": "The Living Deep Haze makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14\
    \ (2d8 + 5) bludgeoning damage."
  "name": "Slam"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/elemental/token/living-deep-haze-dodk.webp"
```
^statblock