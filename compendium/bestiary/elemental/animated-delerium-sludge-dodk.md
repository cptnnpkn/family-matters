---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Animated Delerium Sludge"]
---
# [Animated Delerium Sludge](3-Mechanics\CLI\bestiary\elemental/animated-delerium-sludge-dodk.md)
*Source: Dungeons of Drakkenheim p. 203*  

Contaminated Elementals can be found all over Drakkenheim, often in areas where the eldritch magics are especially concentrated. Many who have encountered these elementals have spoken of the city itself coming to life to attack them. Reports of ruins reaching out and crushing adventurers, burning flames moving and hunting with minds of their own, or contaminated pools lurching to engulf passersby have been heard. Even the blowing air itself has mustered parts of the Haze into shifting clouds that stalk adventurers through the streets. These magical creatures are a constant reminder that nothing in the city can be trusted, and that nowhere is truly safe.

```statblock
"name": "Animated Delerium Sludge (DoDk)"
"size": "Large"
"type": "elemental"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "18"
- !!int "14"
- !!int "18"
- !!int "5"
- !!int "10"
- !!int "8"
"speed": "30 ft., swim 90 ft."
"damage_resistances": "acid; bludgeoning, piercing, slashing from nonmagical attacks"
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
- "desc": "The animated sludge can enter a hostile creature's space and stop there.\
    \ It can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Sludge Form"
"actions":
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10\
    \ (3d6) necrotic damage. In addition, a target hit by this attack must succeed\
    \ on a DC 15 Constitution saving throw or gain one level of contamination."
  "name": "Contaminated Touch"
- "desc": "Each creature in the animated sludge's space must succeed on a DC 15 Strength\
    \ saving throw. On a failed save, a creature becomes [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ by the sludge if it is Large or smaller (escape DC 14). Until this grapple ends,\
    \ the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained).\
    \ If the saving throw is successful, the target is pushed out of the sludge's\
    \ space.\n\nThe sludge can grapple one Large creature or up to two Medium or smaller\
    \ creatures at one time. At the start of each of the sludge's turns, each target\
    \ [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) by it takes 28 (8d6)\
    \ necrotic damage and must succeed on a DC 15 Constitution saving throw or gain\
    \ one level of contamination.\n\nA creature within 5 feet of the sludge can attempt\
    \ to pull a creature or object out of it. This takes an action and requires a\
    \ successful DC 14 Strength check."
  "name": "Engulf"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/elemental/token/animated-delerium-sludge-dodk.webp"
```
^statblock