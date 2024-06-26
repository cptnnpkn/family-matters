---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bmt
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/paladin
statblock: inline
aliases: ["Solar Bastion Knight"]
---
# [Solar Bastion Knight](3-Mechanics\CLI\bestiary\humanoid/solar-bastion-knight-bmt.md)
*Source: The Book of Many Things p. 75*  

Knights of the Solar Bastion are battle-hardened veterans who operate independently across the multiverse. When word reaches the organization that a Deck of Many Things has appeared, the nearest knight investigates, but every knight has the magical means to contact the Solar Bastion's headquarters and request help. Even so, it's rare for knights to work together outside their headquarters.

The Solar Bastion knight presented here is an example member of the organization.

Customize this stat block to suit individual knights and differentiate them from each other. For example, knights who track the Grim Harrow through the multiverse might resemble rangers instead of paladins.

In addition, Sir Jared, detailed at the end of chapter 10, can serve as a model for knights with a lower challenge rating.

```statblock
"name": "Solar Bastion Knight (BMT)"
"size": "Medium"
"type": "humanoid"
"subtype": "paladin"
"alignment": "typically  Neutral Good"
"ac": !!int "20"
"ac_class": "[plate armor](/3-Mechanics/CLI/items/plate-armor.md), [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "15"
- !!int "16"
- !!int "17"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "7"
"skillsaves":
  "History": !!int "6"
  "Arcana": !!int "6"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)"
"senses": "passive Perception 13"
"languages": "Common plus any one language"
"cr": "9"
"traits":
- "desc": "The knight casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 15):\n\n1/day each: [Greater Restoration](/3-Mechanics/CLI/spells/greater-restoration.md),\
    \ [Sending](/3-Mechanics/CLI/spells/sending.md), [Word of Recall](/3-Mechanics/CLI/spells/word-of-recall.md)\
    \ (the prepared sanctuary is the Solar Bastion)"
  "name": "Spellcasting"
- "desc": "The knight and each ally within 10 feet of it have advantage on saving\
    \ throws. This trait is suppressed while the knight has the [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ condition."
  "name": "Aura of Protection"
"actions":
- "desc": "The knight makes three Sunspear attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Spell Attack: +8 to hit, reach 5 ft. or range 120 ft.,\
    \ one target. Hit: 14 (3d6 + 4) radiant damage, or 21 (5d6 + 4) radiant\
    \ damage if the target is a Fiend or an Undead."
  "name": "Sunspear"
- "desc": "The knight unleashes a blaze of brilliant energy that fills a 30-foot-radius\
    \ sphere centered on the knight. Each creature of the knight's choice in that\
    \ area must make a DC 15 Dexterity saving throw. On a failed save, a creature\
    \ takes 22 (4d10) radiant damage and has the [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)\
    \ condition until the end of its next turn. On a successful save, a creature takes\
    \ half as much damage only. For the next minute, the affected area is filled with\
    \ bright light that is sunlight."
  "name": "Solar Flare (Recharge 5-6)"
"source":
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/solar-bastion-knight-bmt.webp"
```
^statblock