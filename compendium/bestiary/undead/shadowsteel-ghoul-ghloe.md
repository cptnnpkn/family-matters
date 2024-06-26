---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Shadowsteel Ghoul"]
---
# [Shadowsteel Ghoul](3-Mechanics\CLI\bestiary\undead/shadowsteel-ghoul-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 84*  

> [!quote]-  
> 
> Shards of dark metal pierce the skin of the foul creature. The metal pushes out from within the abomination rather than the other way.

## Salvage

Taking 1 hour to extract the shards of Shadowsteel from a Shadowsteel ghoul, someone can collect an amount worth 250 gp. A Shadowsteel ghast yields a quantity worth 500 gp.

## Lore

- **DC 15 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)).** Those who use Shadowsteel to power curses can become Shadowsteel ghouls upon death. These undead creatures seek out more of the metal. As the creature ages, it can regain a semblance of the arcane power it had in life, empowering similar creatures and cursing nearby foes.  

```statblock
"name": "Shadowsteel Ghoul (GHLoE)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "9"
- !!int "10"
- !!int "6"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "2"
"skillsaves":
  "Perception": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "one language known in life"
"cr": "4"
"traits":
- "desc": "The Shadowsteel ghoul has advantage on saving throws against spells and\
    \ other magical effects."
  "name": "Magic Resistance"
- "desc": "The Shadowsteel ghoul is coated in metal armor made of Shadowsteel."
  "name": "Shadowsteel Coat"
- "desc": "The Shadowsteel ghoul has advantage on attack rolls against creatures carrying\
    \ or wearing Shadowsteel."
  "name": "Shadowsteel Hunger"
"actions":
- "desc": "The Shadowsteel ghoul makes two claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10\
    \ (2d6 + 3) slashing damage and 5 (2d4) necrotic damage. A cursed target must\
    \ make an escalation check. If a target drops to 0 hit points due to this damage\
    \ and isn't already cursed, roll 1d4, and the target is afflicted with a curse\
    \ based on the result: 1-2 Curse of Damned Aging, 3-4 Curse of Foul Blight. (See\
    \ Grim Hollow Campaign Guide for information on curses and escalation.)"
  "name": "Claw"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/undead/token/shadowsteel-ghoul-ghloe.webp"
```
^statblock