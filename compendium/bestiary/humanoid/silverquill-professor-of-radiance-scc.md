---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/scc
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid/bard
statblock: inline
aliases: ["Silverquill Professor of Radiance"]
---
# [Silverquill Professor of Radiance](3-Mechanics\CLI\bestiary\humanoid/silverquill-professor-of-radiance-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 215*  

Professors of radiance call up magic through spoken words and glyphs formed of magically shaped ink and light. The professors channel radiance to illuminate their allies, bolstering them with encouragement and inspiring any who witness their orations. Professors of radiance can turn their words into potent assets in battle or strike at their foes with searing radiance.

These Silverquill teachers seek to inspire greatness in all that they do, pushing their students to look for the good in all things and bring that into the light.

## Silverquill Scholars

The scholars of Silverquill College study the power of magic shaped through spoken and written words. They use that power either to illuminate and guide or to obscure and demoralize.

```statblock
"name": "Silverquill Professor of Radiance (SCC)"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "bard"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "97"
"hit_dice": "15d8 + 30"
"stats":
- !!int "11"
- !!int "14"
- !!int "14"
- !!int "16"
- !!int "13"
- !!int "19"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "5"
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
"skillsaves":
  "Deception": !!int "7"
  "Performance": !!int "10"
  "Arcana": !!int "6"
  "Persuasion": !!int "10"
"damage_resistances": "radiant"
"senses": "passive Perception 11"
"languages": "Common plus any four languages"
"cr": "7"
"traits":
- "desc": "The professor casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 15):\n\
    \nAt will: [dancing lights](/3-Mechanics/CLI/spells/dancing-lights.md), [friends](/3-Mechanics/CLI/spells/friends.md)\n\
    \n1/day each: [hypnotic pattern](/3-Mechanics/CLI/spells/hypnotic-pattern.md),\
    \ [tongues](/3-Mechanics/CLI/spells/tongues.md)\n\n2/day each: [bless](/3-Mechanics/CLI/spells/bless.md),\
    \ [command](/3-Mechanics/CLI/spells/command.md), [cure wounds](/3-Mechanics/CLI/spells/cure-wounds.md),\
    \ [daylight](/3-Mechanics/CLI/spells/daylight.md), [mage armor](/3-Mechanics/CLI/spells/mage-armor.md)"
  "name": "Spellcasting"
"actions":
- "desc": "The professor makes two Radiant Strike attacks. The professor can replace\
    \ one of the attacks with a use of Spellcasting."
  "name": "Multiattack"
- "desc": "Melee or Ranged Spell Attack: +7 to hit, reach 5 ft. or range 120 ft.,\
    \ one target. Hit: 17 (3d8 + 4) radiant damage. If the target is a creature,\
    \ it must succeed on a DC 15 Constitution saving throw be [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)\
    \ until the end of its next turn."
  "name": "Radiant Strike"
"source":
- "SCC"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/silverquill-professor-of-radiance-scc.webp"
```
^statblock