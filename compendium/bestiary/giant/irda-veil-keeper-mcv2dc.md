---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mcv2dc
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/giant/sorcerer
statblock: inline
aliases: ["Irda Veil Keeper"]
---
# [Irda Veil Keeper](3-Mechanics\CLI\bestiary\giant/irda-veil-keeper-mcv2dc.md)
*Source: Monstrous Compendium Volume 2: Dragonlance Creatures p. 9*  

Masters of their innate illusory powers, irda veil keepers protect their companions by weaving magical mirages that disorient foes. Rumors say that the most skilled irda veil keepers can keep entire enclaves hidden, guarding a community's inhabitants from the outside world for centuries.

## Irda

The Dragon Queen created the irda long ago. While most irda embraced their wicked creator's teachings, some of them adopted the philosophies of other deities. Those irda who don't serve the Dragon Queen live in hidden communities across Krynn, avoiding the eyes of their creator and her minions.

Distantly related to oni, ogres, and other giant folk, irda have shimmering skin that ranges through shades of indigo and sea green. Their innate magic provides them with limited shape-shifting abilities and the power to create illusions.

```statblock
"name": "Irda Veil Keeper (MCV2DC)"
"size": "Medium"
"type": "giant"
"subtype": "sorcerer"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "49"
"hit_dice": "9d8 + 9"
"stats":
- !!int "9"
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "17"
- !!int "19"
"speed": "30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "5"
  "Intelligence": !!int "4"
"skillsaves":
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Arcana": !!int "4"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)"
"senses": "darkvision 60 ft., truesight 5 ft., passive Perception 17"
"languages": "Common, Giant, Sylvan"
"cr": "4"
"traits":
- "desc": "The veil keeper casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 14):\n\
    \nAt will: [dancing lights](/3-Mechanics/CLI/spells/dancing-lights.md), [minor\
    \ illusion](/3-Mechanics/CLI/spells/minor-illusion.md)\n\n1/day: [hallucinatory\
    \ terrain](/3-Mechanics/CLI/spells/hallucinatory-terrain.md) (as an action)\n\n\
    2/day each: [invisibility](/3-Mechanics/CLI/spells/invisibility.md), [major\
    \ image](/3-Mechanics/CLI/spells/major-image.md), [phantasmal force](/3-Mechanics/CLI/spells/phantasmal-force.md)"
  "name": "Spellcasting"
"actions":
- "desc": "The veil keeper uses Augment Physicality, if available, and makes two Mirage\
    \ Flare attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Spell Attack: +6 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 11 (2d6 + 4) radiant damage, and the target must succeed\
    \ on a DC 14 Wisdom saving throw or be [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ by the veil keeper until the start of the veil keeper's next turn. While [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ in this way, a creature is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ as it is beset by hypnotic, illusory visions."
  "name": "Mirage Flare"
- "desc": "For 1 minute, the veil keeper magically obscures it location, heightens\
    \ its physical ability, and increases in size, along with anything it is wearing\
    \ or carrying. While the veil keeper is augmented, attack rolls against it have\
    \ disadvantage, it is Large, and it makes Strength and Dexterity saving throws\
    \ with advantage. If the veil keeper lacks the room to become Large, it attains\
    \ the maximum size possible in the space available. These augmentations end if\
    \ the veil keeper is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)."
  "name": "Augment Physicality (1/Day)"
- "desc": "The veil keeper magically transforms to look and feel like a Medium Humanoid\
    \ it has seen. Any equipment the veil keeper is wearing or carrying isn't transformed,\
    \ and the veil keeper's statistics don't change. The veil keeper reverts to its\
    \ true form if the veil keeper is reduced to 0 hit points or if the veil keeper\
    \ uses an action to end the transformation."
  "name": "Change Shape (3/Day)"
"reactions":
- "desc": "If a creature that the veil keeper can see within 30 feet of itself is\
    \ targeted by an attack, the veil keeper surrounds the creature with illusory\
    \ mist, granting the creature half cover until the start of the veil keeper's\
    \ next turn."
  "name": "Obscuring Mist"
"source":
- "MCV2DC"
"image": "/3-Mechanics/CLI/bestiary/giant/token/irda-veil-keeper-mcv2dc.webp"
```
^statblock