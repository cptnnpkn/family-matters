---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/aatm
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead/wizard
statblock: inline
aliases: ["Factol Skall"]
---
# [Factol Skall](3-Mechanics\CLI\bestiary\undead/factol-skall-aatm.md)
*Source: Adventure Atlas: The Mortuary*  

Skall is the current factol of the Heralds of Dust and the only leader the faction has ever had. A popular Duster legend holds that other than the Lady of Pain herself, Skall is Sigil's oldest resident, the first creature to live and die in the City of Doors. The Heralds of Dust idolize their ageless factol, whose stoic visage has become the faction's emblem. Skall can usually be found examining his orrery of souls (detailed in *Adventure Atlas: The Mortuary*).

After eons of existence, Skall is in an advanced state of deterioration. Once a spry lich with a wrinkled frame, he now drifts listlessly through the Mortuary's forlorn halls, rasping to himself. Skall appears as little more than a floating, disembodied head and two hands, his tattered cloak fluttering behind them. Notorious among the factols of Sigil but rarely seen in the flesh, Skall often delegates his bureaucratic responsibilities to Undead proxies or—on rare occasions—appears as an illusory duplicate. Subtle social cues are lost on the factol, whose eternal nature has eroded any memory of mortal life.

As a result of his decay, Skall's power has waned considerably, but challenging him in combat is as much a death sentence as ever. Factol Skall imparts a lasting oblivion to his enemies. Caretaker, custodian, and grave keeper, the factol ushers allies and foes alike from this false existence toward the path to True Death.

```statblock
"name": "Factol Skall (AATM)"
"size": "Medium"
"type": "undead"
"subtype": "wizard"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "210"
"hit_dice": "28d8 + 84"
"stats":
- !!int "11"
- !!int "16"
- !!int "16"
- !!int "20"
- !!int "14"
- !!int "16"
"speed": "30 ft., fly 30 ft. (hover)"
"saves":
  "Wisdom": !!int "8"
  "Intelligence": !!int "11"
  "Constitution": !!int "9"
"skillsaves":
  "Medicine": !!int "8"
  "Perception": !!int "8"
  "History": !!int "11"
  "Arcana": !!int "17"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned),\
  \ [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)"
"senses": "truesight 120 ft., passive Perception 18"
"languages": "all"
"cr": "17"
"traits":
- "desc": "Skall casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 19):\n\nAt\
    \ will: [detect magic](/3-Mechanics/CLI/spells/detect-magic.md), [mage hand](/3-Mechanics/CLI/spells/mage-hand.md),\
    \ [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md)\n\n1/day each:\
    \ [finger of death](/3-Mechanics/CLI/spells/finger-of-death.md), [plane shift](/3-Mechanics/CLI/spells/plane-shift.md)\
    \ (self only), [project image](/3-Mechanics/CLI/spells/project-image.md)\n\n2/day\
    \ each: [animate dead](/3-Mechanics/CLI/spells/animate-dead.md) (as an action),\
    \ [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md), [speak with dead](/3-Mechanics/CLI/spells/speak-with-dead.md)"
  "name": "Spellcasting"
- "desc": "Creatures within 30 feet of Skall have disadvantage on death saving throws."
  "name": "Aura of Death"
- "desc": "A creature killed by Skall can be restored to life only by means of a true\
    \ resurrection or [wish](/3-Mechanics/CLI/spells/wish.md) spell."
  "name": "Cosmic Annihilation"
- "desc": "If Skall fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (4/Day)"
- "desc": "If Skall dies, he turns to dust. If his orrery of souls hasn't been destroyed,\
    \ Skall re-forms within the Mortuary in 1d10 days. He appears within 5 feet\
    \ of the orrery."
  "name": "Rejuvenation"
- "desc": "Skall has advantage on saving throws against any effect that turns Undead."
  "name": "Turn Resistance"
"actions":
- "desc": "Skall makes one Withering Touch attack or uses Spellcasting. He also uses\
    \ Death Knell twice."
  "name": "Multiattack"
- "desc": "Melee Spell Attack: +11 to hit, reach 5 ft., one target. Hit: 32\
    \ (6d8 + 5) cold damage plus 31 (7d8) necrotic damage, and if the target is\
    \ a creature, it can't regain hit points until the start of Skall's next turn."
  "name": "Withering Touch"
- "desc": "Skall points his finger at a creature he can see within 120 feet of himself,\
    \ filling the target's mind with visions of death and the plangent toll of an\
    \ iron bell. The target must succeed on a DC 19 Wisdom saving throw or take 14\
    \ (4d6) psychic damage and have the [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ condition until the start of Skall's next turn."
  "name": "Death Knell"
- "desc": "Skall exudes a killing fog in a 30-foot-radius sphere centered on himself.\
    \ The sphere spreads around corners, and its area is heavily obscured. The fog\
    \ lasts until the start of Skall's next turn, and it can't be dispersed by wind.\
    \ It does not move with him.\n\nEach creature that enters the fog for the first\
    \ time on a turn or starts its turn there must make a DC 19 Constitution saving\
    \ throw, taking 28 (8d6) necrotic damage and 28 (8d6) poison damage on a failed\
    \ save, or half as much damage on a successful one. A Medium or smaller Humanoid\
    \ killed by this damage becomes a zombie under Skall's control. The zombie acts\
    \ on Skall's initiative but immediately after his turn. Absent any other command,\
    \ the zombie tries to kill any non-Undead creature it encounters."
  "name": "Fog of Death (1/Day)"
"reactions":
- "desc": "Skall can take up to three reactions per round but only one per turn."
  "name": ""
- "desc": "Skall chatters his teeth to interrupt a creature he can see within 60 feet\
    \ of himself that is casting a spell. If the spell is 4th level or lower, it fails\
    \ and has no effect. If the spell is 5th level or higher, Skall makes an Intelligence\
    \ check (DC 10 + the spell's level). On a successful check, the spell fails and\
    \ has no effect. Whatever the spell's level, the caster takes 10 (3d6) necrotic\
    \ damage if the spell fails."
  "name": "Baleful Counterspell"
- "desc": "In response to being hit by an attack, Skall teleports, along with any\
    \ equipment he is wearing or carrying, up to 30 feet to an unoccupied space he\
    \ can see."
  "name": "Near-Death Experience"
"source":
- "AATM"
"image": "/3-Mechanics/CLI/bestiary/undead/token/factol-skall-aatm.webp"
```
^statblock