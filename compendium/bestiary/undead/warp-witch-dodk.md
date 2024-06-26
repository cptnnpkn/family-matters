---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Warp Witch"]
---
# [Warp Witch](3-Mechanics\CLI\bestiary\undead/warp-witch-dodk.md)
*Source: Dungeons of Drakkenheim p. 198*  

These ethereal phantoms haunt the places where they died, grasping for any memory of their former identities. Their mental anguish breaks the minds of those who hear their wails, and they induce rapid mutations when they possess humanoid bodies.

```statblock
"name": "Warp Witch (DoDk)"
"size": "Medium"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "45"
"hit_dice": "10d8"
"stats":
- !!int "7"
- !!int "13"
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "17"
"speed": "0 ft., fly 40 ft. (hover)"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled), [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed),\
  \ [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone), [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any languages it knew in life"
"cr": "4"
"traits":
- "desc": "The warp witch can see 60 feet into the Ethereal Plane when it is on the\
    \ Material Plane, and vice versa."
  "name": "Ethereal Sight"
- "desc": "The warp witch can move through other creatures and objects as if they\
    \ were difficult terrain. It takes 5 (1d10) force damage if it ends its turn\
    \ inside an object."
  "name": "Incorporeal Movement"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17\
    \ (4d6 + 3) necrotic damage."
  "name": "Withering Touch"
- "desc": "The warp witch enters the Ethereal Plane from the Material Plane, or vice\
    \ versa. It is visible on the Material Plane while it is in the Border Ethereal,\
    \ and vice versa, yet it can't affect or be affected by anything on the other\
    \ plane."
  "name": "Etherealness"
- "desc": "Every creature within 30 feet of the warp witch must succeed on a DC 13\
    \ Intelligence saving throw or take 10 (3d6) psychic damage and become [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ until the end of the warp witches next turn."
  "name": "Psychic Wail (Recharge 5-6)"
- "desc": "The warp witch can use a bonus action while it is possessing a creature\
    \ to force mutations upon its host. The possessed creature must succeed on a DC\
    \ 13 Charisma saving throw or gain one level of contamination. Rather than rolling\
    \ to determine if a mutation occurs, the warp witch automatically causes a random\
    \ mutation."
  "name": "Mutate Host"
- "desc": "One humanoid that the warp witch can see within 5 feet of it must succeed\
    \ on a DC 13 Charisma saving throw or be possessed by the warp witch; the warp\
    \ witch then disappears, and the target is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ and loses control of its body. The warp witch now controls the body but doesn't\
    \ deprive the target of awareness. The warp witch can't be targeted by any attack,\
    \ spell, or other effect, except ones that turn undead, and it retains its alignment,\
    \ Intelligence, Wisdom, Charisma, and immunity to being [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ and [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened). It otherwise\
    \ uses the possessed target's statistics, but doesn't gain access to the target's\
    \ knowledge, class features, or proficiencies.\n\nThe possession lasts until the\
    \ body drops to 0 hit points, the warp witch ends it as a bonus action, or the\
    \ warp witch is turned or forced out by an effect like the [dispel evil and good](/3-Mechanics/CLI/spells/dispel-evil-and-good.md)\
    \ spell. When the possession ends, the warp witch reappears in an unoccupied space\
    \ within 5 feet of the body. The target is immune to this warp witch's Possession\
    \ for 24 hours after succeeding on the saving throw or after the possession ends."
  "name": "Possession (Recharge 6)"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/undead/token/warp-witch-dodk.webp"
```
^statblock