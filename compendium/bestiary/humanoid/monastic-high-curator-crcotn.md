---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/crcotn
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid/monk
- ttrpg-cli/monster/type/humanoid/wizard
statblock: inline
aliases: ["Monastic High Curator"]
---
# [Monastic High Curator](3-Mechanics\CLI\bestiary\humanoid/monastic-high-curator-crcotn.md)
*Source: Critical Role: Call of the Netherdeep p. 201*  

High curators collect knowledge and disseminate truth. They tackle puzzling mysteries and spy on members of other power structures to manipulate or destabilize them, and provide the oppressed with opportunities to escape their plight. High curators are privy to their organizations' deepest secrets and the activities of lesser agents. Their expertise enables them to manipulate energy to defend themselves and disrupt enemies' ability to act.

## Monastics of the Cobalt Soul

Scholars, priests, and ascetics who have been drawn to the cause of truth and knowledge spend their lives in support of the Library of the Cobalt Soul, united by the teachings of Ioun the Knowing Mentor. The Cobalt Soul is guided by a central belief that true strength comes from understanding the world around you. Beyond its efforts in knowledge-seeking, each branch of the Cobalt Soul strives to expose lies, unveil propaganda, and fight corruption in whatever society their chapter, referred to as an archive, calls home.

The Library of the Cobalt Soul is headquartered in Rexxentrum, the capital of the Dwendalian Empire on the continent of Wildemount. The organization has archives across Exandria. The Ank'Hareli branch of the Cobalt Soul is based in the Temple of the Mentor. Like many of the archives, the Temple of the Mentor is both a vast library and a shrine to Ioun. This Marquesian archive is led by High Curator Jamil A'alithiya.

```statblock
"name": "Monastic High Curator (CRCotN)"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "monk, wizard"
"alignment": "Any alignment"
"ac": !!int "19"
"ac_class": "Unarmored Defense"
"hp": !!int "130"
"hit_dice": "20d8 + 40"
"stats":
- !!int "12"
- !!int "16"
- !!int "14"
- !!int "18"
- !!int "22"
- !!int "17"
"speed": "60 ft."
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "10"
"skillsaves":
  "Investigation": !!int "8"
  "Perception": !!int "10"
  "History": !!int "8"
  "Arcana": !!int "8"
"damage_resistances": "psychic"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)"
"senses": "blindsight 30 ft., passive Perception 20"
"languages": "Common plus four other languages"
"cr": "10"
"traits":
- "desc": "The high curator casts one of the following spells, requiring no material\
    \ components and using Wisdom as the spellcasting ability (spell save DC 18):\n\
    \nAt will: [detect magic](/3-Mechanics/CLI/spells/detect-magic.md)\n\n2/day\
    \ each: [detect thoughts](/3-Mechanics/CLI/spells/detect-thoughts.md), [identify](/3-Mechanics/CLI/spells/identify.md)\
    \ (as an action), [scrying](/3-Mechanics/CLI/spells/scrying.md) (as an action)"
  "name": "Spellcasting"
- "desc": "While the high curator is wearing no armor and wielding no shield, its\
    \ AC includes its Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- "desc": "The high curator makes three Force Strike attacks and uses Brain Burn (if\
    \ available)."
  "name": "Multiattack"
- "desc": "Melee or Ranged Spell Attack: +10 to hit, reach 5 ft. or range 10 ft.,\
    \ one target. Hit: 17 (2d10 + 6) force damage."
  "name": "Force Strike"
- "desc": "The high curator targets up to two creatures it can see within 30 feet\
    \ of itself. Each target must make a DC 18 Constitution saving throw. On a failed\
    \ saving throw, the target takes 28 (8d6) psychic damage and can't take reactions\
    \ until the start of its next turn. On a successful save, the target takes half\
    \ as much damage and suffers no other effect."
  "name": "Brain Burn (Recharge 4-6)"
"source":
- "CRCotN"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/monastic-high-curator-crcotn.webp"
```
^statblock