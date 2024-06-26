---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead/mind-flayer
- ttrpg-cli/monster/type/undead/wizard
statblock: inline
aliases: ["Oshundo the Alhoon"]
---
# [Oshundo the Alhoon](3-Mechanics\CLI\bestiary\npc/oshundo-the-alhoon-pabtso.md)
*Source: Phandelver and Below: The Shattered Obelisk p. 153*  

Oshundo lived in Illithinoch at the height of the mind flayer empire many centuries ago, but Oshundo was driven out for practicing arcane magic. It's obvious that this rejection still stings Oshundo, who refers to Illithinoch's longdead leaders as "ignorant fools" who are "closed to the flexibility and power of arcane magic."

```statblock
"name": "Oshundo the Alhoon (PaBTSO)"
"size": "Medium"
"type": "undead"
"subtype": "mind flayer, wizard"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"stats":
- !!int "11"
- !!int "12"
- !!int "16"
- !!int "19"
- !!int "17"
- !!int "17"
"speed": "30 ft., fly 15 ft. (hover)"
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "7"
  "Intelligence": !!int "8"
  "Constitution": !!int "7"
"skillsaves":
  "Stealth": !!int "5"
  "Insight": !!int "7"
  "Perception": !!int "7"
  "History": !!int "8"
  "Arcana": !!int "8"
"damage_resistances": "cold, lightning, necrotic"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "truesight 120 ft., passive Perception 17"
"languages": "Common, Deep Speech, telepathy 120 ft., Undercommon"
"cr": "10"
"traits":
- "desc": "Oshundo casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 16):\n\nAt\
    \ will: [dancing lights](/3-Mechanics/CLI/spells/dancing-lights.md), [detect\
    \ magic](/3-Mechanics/CLI/spells/detect-magic.md), [detect thoughts](/3-Mechanics/CLI/spells/detect-thoughts.md),\
    \ [disguise self](/3-Mechanics/CLI/spells/disguise-self.md), [mage hand](/3-Mechanics/CLI/spells/mage-hand.md),\
    \ [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md)\n\n1/day each:\
    \ [dominate monster](/3-Mechanics/CLI/spells/dominate-monster.md), [globe of invulnerability](/3-Mechanics/CLI/spells/globe-of-invulnerability.md),\
    \ [invisibility](/3-Mechanics/CLI/spells/invisibility.md), [modify memory](/3-Mechanics/CLI/spells/modify-memory.md),\
    \ [plane shift](/3-Mechanics/CLI/spells/plane-shift.md) (self only), [wall of\
    \ force](/3-Mechanics/CLI/spells/wall-of-force.md)"
  "name": "Spellcasting"
- "desc": "Oshundo has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Oshundo makes two Chilling Grasp or Arcane Bolt attacks."
  "name": "Multiattack"
- "desc": "Melee Spell Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (4d6)\
    \ cold damage, and Oshundo regains 14 hit points if the target is a creature."
  "name": "Chilling Grasp"
- "desc": "Ranged Spell Attack: +8 to hit, range 120 ft., one target. Hit: 28\
    \ (8d6) force damage."
  "name": "Arcane Bolt"
- "desc": "Oshundo emits a wave of domineering energy in a 60-foot cone. Each creature\
    \ in that area must succeed on a DC 16 Intelligence saving throw or take 22 (4d8\
    \ + 4) thunder damage and have the [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)\
    \ condition for 1 minute. A [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Thundering Blast (Recharge 5-6)"
"reactions":
- "desc": "Oshundo targets one creature it can perceive within 60 feet of itself that\
    \ is casting a spell. If the spell is 3rd level or lower, the spell fails, but\
    \ any spell slots or charges aren't wasted."
  "name": "Negate Spell (3/Day)"
"source":
- "PaBTSO"
"image": "/3-Mechanics/CLI/bestiary/npc/token/oshundo-the-alhoon-pabtso.webp"
```
^statblock