---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Big Linda"]
---
# [Big Linda](3-Mechanics\CLI\bestiary\npc/big-linda-dodk.md)
*Source: Dungeons of Drakkenheim p. 163*  

> [!quote]- A quote from The Queen Of Thieves  
> 
> Big Linda has proven well worth the lives I spent to capture her. She is the prize champion of my fighting pit, and a loyal friend. I am very much excited for you to meet her. Also, before you ask, yes she bites

Big Linda resembles a dragon without wings, and has knobbly flesh accented by shimmering scales that stretch along its back. The monstrous beast has a gaping maw of razor-sharp teeth and a tail of razor-sharp spines, but dishevelled and useless forearms. Big Linda has been permanently charmed by the Queen of Thieves and (usually) obeys her spoken commands. The creature emerges from its den in response to the Queen's whistle call.

```statblock
"name": "Big Linda (DoDk)"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "13d12 + 52"
"stats":
- !!int "25"
- !!int "10"
- !!int "19"
- !!int "2"
- !!int "12"
- !!int "9"
"speed": "50 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_immunities": "acid"
"senses": "blindsight 30 ft., passive Perception 14"
"languages": ""
"cr": "9"
"actions":
- "desc": "Big Linda makes two attacks: one with its bite and one with its tail. It\
    \ can't make both attacks against the same target."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33\
    \ (4d12 + 7) piercing damage. If the target is a Medium or smaller creature,\
    \ it is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) (escape DC 17).\
    \ Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ and Big Linda can't bite another target."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 20\
    \ (3d8 + 7) bludgeoning damage."
  "name": "Tail"
- "desc": "Big Linda spews acid in a 30 foot cone. Each creature in that line of fire\
    \ must succeed on a DC 15 Dexterity saving throw, taking 49 (11d8) acid damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Acid Spew (Recharge 5-6)"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/npc/token/big-linda-dodk.webp"
```
^statblock