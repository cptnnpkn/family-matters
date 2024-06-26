---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/crcotn
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid/monk
statblock: inline
aliases: ["Monastic Infiltrator"]
---
# [Monastic Infiltrator](3-Mechanics\CLI\bestiary\humanoid/monastic-infiltrator-crcotn.md)
*Source: Critical Role: Call of the Netherdeep p. 202*  

Infiltrators act as spies, saboteurs, and perpetrators of other clandestine activities. They study magical techniques that enhance their prowess in battle and help them complete their assignments.

## Monastics of the Cobalt Soul

Scholars, priests, and ascetics who have been drawn to the cause of truth and knowledge spend their lives in support of the Library of the Cobalt Soul, united by the teachings of Ioun the Knowing Mentor. The Cobalt Soul is guided by a central belief that true strength comes from understanding the world around you. Beyond its efforts in knowledge-seeking, each branch of the Cobalt Soul strives to expose lies, unveil propaganda, and fight corruption in whatever society their chapter, referred to as an archive, calls home.

The Library of the Cobalt Soul is headquartered in Rexxentrum, the capital of the Dwendalian Empire on the continent of Wildemount. The organization has archives across Exandria. The Ank'Hareli branch of the Cobalt Soul is based in the Temple of the Mentor. Like many of the archives, the Temple of the Mentor is both a vast library and a shrine to Ioun. This Marquesian archive is led by High Curator Jamil A'alithiya.

```statblock
"name": "Monastic Infiltrator (CRCotN)"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "monk"
"alignment": "Any alignment"
"ac": !!int "18"
"ac_class": "Unarmored Defense"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "13"
- !!int "20"
- !!int "16"
- !!int "15"
- !!int "17"
- !!int "16"
"speed": "50 ft."
"saves":
  "Dexterity": !!int "8"
  "Wisdom": !!int "6"
"skillsaves":
  "Deception": !!int "9"
  "Stealth": !!int "11"
  "Perception": !!int "6"
  "Acrobatics": !!int "8"
"damage_resistances": "psychic"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)"
"senses": "passive Perception 16"
"languages": "Common plus three other languages"
"cr": "6"
"traits":
- "desc": "The infiltrator casts one of the following spells, requiring no material\
    \ components and using Wisdom as the spellcasting ability (spell save DC 14):\n\
    \nAt will: [disguise self](/3-Mechanics/CLI/spells/disguise-self.md)\n\n1/day\
    \ each: [dimension door](/3-Mechanics/CLI/spells/dimension-door.md), [zone of\
    \ truth](/3-Mechanics/CLI/spells/zone-of-truth.md)\n\n2/day each: [detect\
    \ thoughts](/3-Mechanics/CLI/spells/detect-thoughts.md), [invisibility](/3-Mechanics/CLI/spells/invisibility.md)"
  "name": "Spellcasting"
- "desc": "Spells and other effects can't read the infiltrator's thoughts or determine\
    \ if the infiltrator is lying. Creatures can communicate telepathically with the\
    \ infiltrator only if it allows such contact."
  "name": "Guarded Mind"
- "desc": "While the infiltrator is wearing no armor and wielding no shield, its AC\
    \ includes its Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- "desc": "The infiltrator makes three Unarmed Strike attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 10\
    \ (1d10 + 5) force damage."
  "name": "Unarmed Strike"
"bonus_actions":
- "desc": "The infiltrator takes the Dash or Disengage action."
  "name": "Cunning Action"
"reactions":
- "desc": "When a creature within 5 feet of the infiltrator hits or misses the infiltrator\
    \ with a melee attack, the infiltrator makes one Unarmed Strike attack against\
    \ the attacker."
  "name": "Retaliating Strike"
"source":
- "CRCotN"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/monastic-infiltrator-crcotn.webp"
```
^statblock