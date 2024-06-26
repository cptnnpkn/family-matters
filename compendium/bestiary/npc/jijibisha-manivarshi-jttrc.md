---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/jttrc
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/yugoloth
statblock: inline
aliases: ["Jijibisha Manivarshi"]
---
# [Jijibisha Manivarshi](3-Mechanics\CLI\bestiary\npc/jijibisha-manivarshi-jttrc.md)
*Source: Journeys through the Radiant Citadel p. 128*  

Jijibisha Manivarshi, a vicious soul from the land's past, lurks in the nearby forest. Long ago she made a deal with wicked otherworldly forces that gave her longevity and fiendish powers, a bargain that ultimately resulted in the ruin of Manivarsha.

Despite her fiendish powers, she looks like an ancient, withered human.

```statblock
"name": "Jijibisha Manivarshi (JttRC)"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Neutral Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "153"
"hit_dice": "18d8 + 72"
"stats":
- !!int "16"
- !!int "16"
- !!int "18"
- !!int "18"
- !!int "15"
- !!int "19"
"speed": "30 ft., fly 60 ft."
"skillsaves":
  "Intimidation": !!int "9"
  "Stealth": !!int "8"
  "Perception": !!int "7"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "truesight 120 ft., passive Perception 17"
"languages": "Abyssal, Infernal, telepathy 120 ft."
"cr": "13"
"traits":
- "desc": "Jijibisha's innate spellcasting ability is Charisma (spell save DC 17).\
    \ Jijibisha can innately cast the following spells, requiring no material components:\n\
    \nAt will: [alter self](/3-Mechanics/CLI/spells/alter-self.md), [clairvoyance](/3-Mechanics/CLI/spells/clairvoyance.md),\
    \ [darkness](/3-Mechanics/CLI/spells/darkness.md), [detect magic](/3-Mechanics/CLI/spells/detect-magic.md),\
    \ [detect thoughts](/3-Mechanics/CLI/spells/detect-thoughts.md), [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md),\
    \ [invisibility](/3-Mechanics/CLI/spells/invisibility.md) (self only), [suggestion](/3-Mechanics/CLI/spells/suggestion.md)\n\
    \n1/day each: [fire storm](/3-Mechanics/CLI/spells/fire-storm.md), [mass suggestion](/3-Mechanics/CLI/spells/mass-suggestion.md)\n\
    \n3/day each: [dimension door](/3-Mechanics/CLI/spells/dimension-door.md),\
    \ [fear](/3-Mechanics/CLI/spells/fear.md), [wall of fire](/3-Mechanics/CLI/spells/wall-of-fire.md)"
  "name": "Innate Spellcasting"
- "desc": "Jijibisha has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Jijibisha's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "Jijibisha can use its Hypnotic Gaze and makes three melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
  "name": "Longsword"
- "desc": "Jijibisha's eyes sparkle with opalescent light as it targets one creature\
    \ it can see within 30 feet of it. If the target can see Jijibisha, the target\
    \ must succeed on a DC 17 Wisdom saving throw against this magic or be [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ until the end of Jijibisha's next turn. The [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ target is [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned). If the target's\
    \ saving throw is successful, the target is immune to Jijibisha's gaze for the\
    \ next 24 hours."
  "name": "Hypnotic Gaze"
- "desc": "Jijibisha magically teleports, along with any equipment it is wearing or\
    \ carrying, up to 60 feet to an unoccupied space it can see."
  "name": "Teleport"
"source":
- "JttRC"
"image": "/3-Mechanics/CLI/bestiary/npc/token/jijibisha-manivarshi-jttrc.webp"
```
^statblock