---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Oblivion Whistler"]
---
# [Oblivion Whistler](3-Mechanics\CLI\bestiary\undead/oblivion-whistler-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 27*  

> [!quote]-  
> 
> If you hear the strange, low whistling in the darkness, run! They whistle before they strike, striding out of the darkness, hungry for the souls of the living.

## Salvage

There is a 25% chance that an oblivion stalker leaves behind a gemstone when it is defeated. These stones are worth between 10 and 500 gp, depending on the size of the creature. There is a 10% chance that one of these stones acts as a magnet to additional oblivion stalkers, which appear and attack the holder of the gem at midnight during a new moon. A remove curse makes the gemstone safe.

## Lore

- **DC 10 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** An oblivion stalker is at disadvantage in daylight.  
- **DC 15 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** An oblivion stalker is vulnerable to radiant damage and resistant to nonmagical weapons.  
- **DC 20 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)).** If an oblivion stalker kills a mortal, it's believed that mortal joins their shadowy ranks.  

> [!note] Customizing Oblivion Stalkers
> 
> Since oblivion stalkers can drain almost any living creature's energy, they can take just about any form. Some oblivion stalkers retain the natural abilities of their original form. For instance, an oblivion stalker that was once a wolf might retain the Pack Tactics trait. Similarly, a boar could possess a version of Charge, draining its prey while adding slashing damage and the possibility of knocking their victim prone.
> 
> Keep one special ability that makes sense for a creature of the stalker's former form without affecting the Challenge of the stalker. Avoid bestowing an oblivion stalker any ability that is magical, grants the stalker a ranged attack, or expands its resistances or immunities.
^customizing-oblivion-stalkers

```statblock
"name": "Oblivion Whistler (GHLoE)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "10"
- !!int "10"
- !!int "8"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "5"
"damage_vulnerabilities": "radiant"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned), [prone](/3-Mechanics/CLI/rules/conditions.md#prone),\
  \ [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "2"
"traits":
- "desc": "While in dim light or darkness, the oblivion whistler can take the Hide\
    \ action as a bonus action."
  "name": "Shadow Stealth"
- "desc": "While in sunlight, the oblivion whistler has disadvantage on attack rolls,\
    \ ability checks, and saving throws."
  "name": "Sunlight Weakness"
- "desc": "Creatures of the oblivion whistler's choice that aren't [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened)\
    \ and start their turn within 30 feet of the oblivion whistler must make a DC\
    \ 11 Wisdom saving throw. A target that fails is [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ until the start of its next turn and unable to hide the distress of hearing\
    \ the whistling, which is the source of the fear and considered to be within line\
    \ of sight while the target can hear and is within 30 feet of it. On a successful\
    \ saving throw, the creature is immune to any oblivion whistler's Unbearable Whistling\
    \ for 1 hour."
  "name": "Unbearable Whistling"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 10\
    \ (2d6 + 3) necrotic damage, and the target must make a DC 11 Constitution saving\
    \ throw. On a failure, the target's available Hit Dice are reduced by 1. If this\
    \ effect reduces the target's Hit Dice to 0, the target falls [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious).\
    \ The target can repeat the saving throw at the end of each of its turns, regaining\
    \ consciousness on a success. Hit Dice lost this way return at the end of a short\
    \ rest, in time to spend them to regain hit points.\n\nIf an oblivion whistler\
    \ kills a living creature with this attack when the creature is at 0 Hit Dice,\
    \ the target's soul is lost to the realm of shadow. This lost soul can be raised\
    \ from the dead only with mighty magic, such as wish or divine intervention."
  "name": "Soul Drain"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/undead/token/oblivion-whistler-ghloe.webp"
```
^statblock