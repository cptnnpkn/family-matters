---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/scc
- ttrpg-cli/monster/cr/22
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon/bard
statblock: inline
aliases: ["Shadrix Silverquill"]
---
# [Shadrix Silverquill](3-Mechanics\CLI\bestiary\npc/shadrix-silverquill-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 212*  

Centuries ago, the dragon Shadrix Silverquill mastered the magic of light and shadow, and he focused that magic through communication. Shadrix's words thrummed with power, inspiring his allies and demoralizing his enemies.

He established Silverquill College on the principles of eloquence and leadership, seeking to produce leaders who would go forth to guide others.

```statblock
"name": "Shadrix Silverquill (SCC)"
"size": "Gargantuan"
"type": "dragon"
"subtype": "bard"
"alignment": "Neutral"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "363"
"hit_dice": "22d20 + 132"
"stats":
- !!int "25"
- !!int "14"
- !!int "23"
- !!int "18"
- !!int "18"
- !!int "26"
"speed": "40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "15"
  "Dexterity": !!int "9"
  "Wisdom": !!int "11"
  "Constitution": !!int "13"
"skillsaves":
  "Deception": !!int "15"
  "Perception": !!int "11"
  "Arcana": !!int "18"
  "Persuasion": !!int "15"
"damage_immunities": "psychic, radiant"
"senses": "blindsight 120 ft., passive Perception 21"
"languages": "all"
"cr": "22"
"traits":
- "desc": "Shadrix casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 23):\n\n1/day\
    \ each: [darkness](/3-Mechanics/CLI/spells/darkness.md), [daylight](/3-Mechanics/CLI/spells/daylight.md),\
    \ [hypnotic pattern](/3-Mechanics/CLI/spells/hypnotic-pattern.md), [sending](/3-Mechanics/CLI/spells/sending.md),\
    \ [suggestion](/3-Mechanics/CLI/spells/suggestion.md)"
  "name": "Spellcasting"
- "desc": "If Shadrix fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "Shadrix makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 12\
    \ (1d10 + 7) piercing damage plus 4 (1d8) radiant damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 10\
    \ (1d6 + 7) slashing damage. If the target is a creature, it is wracked with\
    \ despair and has disadvantage on attack rolls until the end of its next turn."
  "name": "Claw"
- "desc": "Shadrix exhales an entwined burst of blinding radiance and unnerving shadow\
    \ in a 90-foot cone. Each creature in that area must make a DC 21 Constitution\
    \ saving throw. On a failed save, a creature takes 31 (7d8) radiant damage and\
    \ 31 (7d8) psychic damage and is [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)\
    \ until the start of Shadrix's next turn. On a successful save, a creature takes\
    \ half as much damage and isn't [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)."
  "name": "Illuminating Shadow Breath (Recharge 5-6)"
"legendary_actions":
- "desc": "Shadrix makes one Claw attack."
  "name": "Claw"
- "desc": "Shadrix becomes an inky cloud of shadow and can move up to half his flying\
    \ speed without provoking opportunity attacks, then resumes his true form. During\
    \ this movement, he can move through creatures and objects as if they were difficult\
    \ terrain. If he moves through a creature, it must succeed on a DC 21 Constitution\
    \ saving throw or become [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)\
    \ until the end of its next turn. If Shadrix ends this move inside an object,\
    \ he takes 5 (1d10) force damage and is shunted to the nearest unoccupied space."
  "name": "Shadow Slip (Costs 2 Actions)"
- "desc": "Shadrix magically summons 1d4 [inkling mascots](/3-Mechanics/CLI/bestiary/ooze/inkling-mascot-scc.md)\
    \ in unoccupied spaces he can see within 60 feet of himself. The inklings obey\
    \ his commands and take their turns immediately after his. While any of these\
    \ inklings live, Shadrix has advantage on attack rolls and saving throws. These\
    \ inklings disappear after 10 minutes, when Shadrix dies, or when he uses this\
    \ action again."
  "name": "Flash of Inspiration (Costs 3 Actions)"
"source":
- "SCC"
"image": "/3-Mechanics/CLI/bestiary/npc/token/shadrix-silverquill-scc.webp"
```
^statblock