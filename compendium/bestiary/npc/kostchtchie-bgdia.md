---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bgdia
- ttrpg-cli/monster/cr/25
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
aliases: ["Kostchtchie"]
---
# [Kostchtchie](3-Mechanics\CLI\bestiary\npc/kostchtchie-bgdia.md)
*Source: Baldur's Gate: Descent Into Avernus p. 105*  

The demon lord Kostchtchie resembles a squat hill giant with short, bandy legs and a grossly shaped head.

Frost giants who forsake their gods and turn to demon worship can summon Kostchtchie with bloody offerings left on altars of hewn ice. If the demon lord chooses to answer the giants' call, he hunts and fights alongside them for a time, infecting the frost giants with savage madness and bloodlust before disappearing back to the Abyss.

```statblock
"name": "Kostchtchie (BGDIA)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "243"
"hit_dice": "18d10 + 144"
"stats":
- !!int "30"
- !!int "12"
- !!int "27"
- !!int "18"
- !!int "22"
- !!int "19"
"speed": "40 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "14"
  "Constitution": !!int "16"
"skillsaves":
  "Intimidation": !!int "12"
  "Perception": !!int "14"
  "Survival": !!int "14"
"damage_resistances": "fire, lightning"
"damage_immunities": "cold; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "Abyssal, Giant, telepathy 120 ft."
"cr": "25"
"traits":
- "desc": "Kostchtchie's innate spellcasting ability is Charisma (spell save DC 20).\
    \ He can innately cast the following spells, requiring no material components:\n\
    \nAt will: [command](/3-Mechanics/CLI/spells/command.md), [darkness](/3-Mechanics/CLI/spells/darkness.md)\n\
    \n1/day each: [dispel evil and good](/3-Mechanics/CLI/spells/dispel-evil-and-good.md),\
    \ [gate](/3-Mechanics/CLI/spells/gate.md), [harm](/3-Mechanics/CLI/spells/harm.md),\
    \ [telekinesis](/3-Mechanics/CLI/spells/telekinesis.md), [teleport](/3-Mechanics/CLI/spells/teleport.md),\
    \ [wind walk](/3-Mechanics/CLI/spells/wind-walk.md)"
  "name": "Innate Spellcasting"
- "desc": "If Kostchtchie fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Kostchtchie has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Kostchtchie makes two melee attacks, only one of which can be a bite attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +18 to hit, reach 5 ft., one creature. Hit:\
    \ 13 (1d6 + 10) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +18 to hit, reach 10 ft., one target. Hit: 19\
    \ (2d8 + 10) bludgeoning damage, or 21 (2d10 + 10) bludgeoning damage when\
    \ used with two hands, and the weapon emits a burst of cold that deals 10 (3d6)\
    \ cold damage to each creature within 30 feet of it."
  "name": "Matalotok (Warhammer)"
"legendary_actions":
- "desc": "Kostchtchie makes one melee weapon attack."
  "name": "Attack"
- "desc": "Kostchtchie moves up to his speed."
  "name": "Charge"
- "desc": "Kostchtchie curses one creature he can see within 60 feet of him. The cursed\
    \ creature gains vulnerability to all damage dealt by Kostchtchie until the end\
    \ of Kostchtchie's next turn."
  "name": "Curse (Costs 2 Actions)"
"source":
- "BGDIA"
"image": "/3-Mechanics/CLI/bestiary/npc/token/kostchtchie-bgdia.webp"
```
^statblock