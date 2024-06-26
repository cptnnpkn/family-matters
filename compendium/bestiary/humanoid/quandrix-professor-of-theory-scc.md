---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/scc
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid/wizard
statblock: inline
aliases: ["Quandrix Professor of Theory"]
---
# [Quandrix Professor of Theory](3-Mechanics\CLI\bestiary\humanoid/quandrix-professor-of-theory-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 209*  

Professors of theory advance the Quandrix philosophy that math-magical manipulation is most powerful in the abstract dimension of minds, probability, and the fabric of magic itself. Their equations shift perceptions in profound ways, alter probability, and interfere with the formation of other magic. In battle, the professors tweak probability to impede attacks and strike at the minds of their foes with lancing equations that disrupt the opponent's resolve.

Professors of theory hold that altering the way a person interacts with the world can change the world. They impress upon their students to use magic as a tool to shape the overall experience of reality, and in turn make the world a better place.

## Quandrix Scholars

The scholars of Quandrix College focus on the mathematical principles that govern reality. Through these formulas, they can manipulate properties of matter and space, as well as abstract and conceptual space such as the mind, probability, and the flow of magic itself.

```statblock
"name": "Quandrix Professor of Theory (SCC)"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "97"
"hit_dice": "15d8 + 30"
"stats":
- !!int "11"
- !!int "14"
- !!int "14"
- !!int "19"
- !!int "15"
- !!int "13"
"speed": "30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "5"
  "Intelligence": !!int "7"
  "Constitution": !!int "5"
"skillsaves":
  "Investigation": !!int "10"
  "Insight": !!int "5"
  "Perception": !!int "5"
  "Arcana": !!int "10"
"damage_resistances": "psychic"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)"
"senses": "passive Perception 15"
"languages": "Common plus any four languages"
"cr": "7"
"traits":
- "desc": "The professor casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 15):\n\nAt will: [guidance](/3-Mechanics/CLI/spells/guidance.md), [mage\
    \ hand](/3-Mechanics/CLI/spells/mage-hand.md), [minor illusion](/3-Mechanics/CLI/spells/minor-illusion.md)\n\
    \n1/day each: [mage armor](/3-Mechanics/CLI/spells/mage-armor.md), [major\
    \ image](/3-Mechanics/CLI/spells/major-image.md), [mirage arcane](/3-Mechanics/CLI/spells/mirage-arcane.md)\
    \ (as an action), [Rary's telepathic bond](/3-Mechanics/CLI/spells/rarys-telepathic-bond.md)"
  "name": "Spellcasting"
"actions":
- "desc": "The professor makes two Heuristic Lance attacks. It can also use Overriding\
    \ Theorem, if available."
  "name": "Multiattack"
- "desc": "Melee or Ranged Spell Attack: +7 to hit, reach 5 ft. or range 60 ft.,\
    \ one creature. Hit: 13 (2d8 + 4) psychic damage, and the target is [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ until the end of its next turn."
  "name": "Heuristic Lance"
- "desc": "The professor magically influences the mind of up to two creatures it can\
    \ see within 60 feet of itself. Each target must succeed on a DC 15 Intelligence\
    \ saving throw or become [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ by the professor until the start of the professor's next turn. The [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ creature must immediately use its reaction, if available, to move up its speed\
    \ toward another creature of the professor's choice and make one melee attack\
    \ against that other creature."
  "name": "Overriding Theorem (Recharge 4-6)"
"reactions":
- "desc": "When the professor sees another creature within 60 feet of itself casting\
    \ a spell, the professor can try to nullify the spell's formation. The creature\
    \ must succeed on a DC 15 saving throw using the spell's spellcasting ability,\
    \ or the spell fails and is wasted."
  "name": "Divide by Zero (2/Day)"
"source":
- "SCC"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/quandrix-professor-of-theory-scc.webp"
```
^statblock