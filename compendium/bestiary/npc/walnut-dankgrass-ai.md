---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ai
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
aliases: ["Walnut Dankgrass"]
---
# [Walnut Dankgrass](3-Mechanics\CLI\bestiary\npc/walnut-dankgrass-ai.md)
*Source: Acquisitions Incorporated p. 204*  

> [!quote]-  
> 
> The war ever rages.

Growing up in an all-female clan of druids, healers, and rangers, Walnut Dankgrass was drawn to the role of protector from her earliest years. Dedicated to Mielikki, the matriarchal clan known as the Enclave Panax Anima defended the unspoiled wild by word and blade (with the latter option more prevalent by far). But when tragedy struck the enclave, Walnut's clan was destroyed to the last-leaving her with nothing but the all-consuming desire to seek out and destroy those responsible.

As a guardian of the wild, Walnut has long held an antipathy toward civilization and anything urban. However, understanding that civilization was the source of the evil that destroyed her people, she makes the city her home now. She embraces her role as the "C" Team's documancer, knowing that the city's power-and its weaknesses-can be fully gleaned only from within.

Walnut distrusts most folk she meets, except for those whose bearing reflects the matriarchal structure she was once part of. No matter what shape her struggles take, she knows instinctively that her beliefs are right and true-and that she will follow those beliefs to the bitter end.

```statblock
"name": "Walnut Dankgrass (AI)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Lawful Neutral"
"ac": !!int "14"
"ac_class": "[leather armor](/3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "8"
- !!int "16"
- !!int "14"
- !!int "10"
- !!int "18"
- !!int "10"
"speed": "35 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "2"
"skillsaves":
  "Athletics": !!int "1"
  "Stealth": !!int "5"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Survival": !!int "6"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "Common, Druidic, Elvish, Sylvan"
"cr": "3"
"traits":
- "desc": "Walnut is a 7th-level spellcaster. Her spellcasting ability is Wisdom (spell\
    \ save DC 14, +6 to hit with spell attacks). She has the following druid spells\
    \ prepared:\n\nCantrips (at will): [druidcraft](/3-Mechanics/CLI/spells/druidcraft.md),\
    \ [produce flame](/3-Mechanics/CLI/spells/produce-flame.md), [thorn whip](/3-Mechanics/CLI/spells/thorn-whip.md)\n\
    \n1st level (4 slots): [cure wounds](/3-Mechanics/CLI/spells/cure-wounds.md),\
    \ [entangle](/3-Mechanics/CLI/spells/entangle.md), [thunderwave](/3-Mechanics/CLI/spells/thunderwave.md)\n\
    \n2nd level (3 slots): [flame blade](/3-Mechanics/CLI/spells/flame-blade.md),\
    \ [moonbeam](/3-Mechanics/CLI/spells/moonbeam.md), [pass without trace](/3-Mechanics/CLI/spells/pass-without-trace.md)\n\
    \n3rd level (3 slots): [call lightning](/3-Mechanics/CLI/spells/call-lightning.md),\
    \ [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md), [plant growth](/3-Mechanics/CLI/spells/plant-growth.md)\n\
    \n4th level (1 slots): [blight](/3-Mechanics/CLI/spells/blight.md), [freedom\
    \ of movement](/3-Mechanics/CLI/spells/freedom-of-movement.md)"
  "name": "Spellcasting"
- "desc": "Walnut has advantage on saving throws against being [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
    \ and magic can't put her to sleep."
  "name": "Fey Ancestry"
- "desc": "Walnut can attempt to hide even when she is only lightly obscured by foliage,\
    \ heavy rain, falling snow, mist, and other natural phenomena."
  "name": "Mask of the Wild"
- "desc": "As a bonus action, Walnut can assume the shape of a dire wolf. She can\
    \ stay in this form for 3 hours or until she reverts to her normal form as a bonus\
    \ action. She automatically reverts if she falls [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious),\
    \ drops to 0 hit points, or dies.\n\nWhile transformed, Walnut's game statistics\
    \ are replaced by the statistics of the dire wolf, except she retains her alignment,\
    \ personality, and Intelligence, Wisdom, and Charisma scores.\n\nHer attacks in\
    \ beast form are magical. While in beast form, Walnut can use a bonus action to\
    \ expend one spell slot and regain 1d8 hit points per level of the spell slot\
    \ expended."
  "name": "Wild Shape (Recharges after a Short or Long rest)"
"actions":
- "desc": "Walnut makes two attacks with Foremother or her longbow."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage."
  "name": "Foremother (+1 Scimitar)"
- "desc": "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit:\
    \ 7 (1d8 + 3) piercing damage."
  "name": "Longbow"
"source":
- "AI"
"image": "/3-Mechanics/CLI/bestiary/npc/token/walnut-dankgrass-ai.webp"
```
^statblock