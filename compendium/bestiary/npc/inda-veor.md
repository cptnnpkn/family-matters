---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/veor
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/celestial
statblock: inline
aliases: ["Inda"]
---
# [Inda](3-Mechanics\CLI\bestiary\npc/inda-veor.md)
*Source: Vecna: Eve of Ruin*  

```statblock
"name": "Inda (VEoR)"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "18"
- !!int "18"
- !!int "18"
- !!int "17"
- !!int "20"
- !!int "20"
"speed": "30 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
"skillsaves":
  "Insight": !!int "9"
  "Perception": !!int "9"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "all, telepathy 120 ft."
"cr": "10"
"traits":
- "desc": "Inda's spellcasting ability is Charisma (spell save DC 17). Inda can innately\
    \ cast the following spells, requiring only verbal components:\n\nAt will:\
    \ [detect evil and good](/3-Mechanics/CLI/spells/detect-evil-and-good.md)\n\n\
    1/day each: [commune](/3-Mechanics/CLI/spells/commune.md), [raise dead](/3-Mechanics/CLI/spells/raise-dead.md)"
  "name": "Innate Spellcasting"
- "desc": "Inda's weapon attacks are magical. When Inda hits with any weapon, the\
    \ weapon deals an extra 4d8 radiant damage (included in the attack)."
  "name": "Angelic Weapons"
- "desc": "Inda has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Inda makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage plus 18 (4d8) radiant damage."
  "name": "Mace"
- "desc": "Inda touches another creature. The target magically regains 20 (4d8 +\
    \ 2) hit points and is freed from any curse, disease, poison, blindness, or deafness."
  "name": "Healing Touch (3/Day)"
- "desc": "Inda magically polymorphs into a humanoid or beast that has a challenge\
    \ rating equal to or less than its own, or back into its true form. It reverts\
    \ to its true form if it dies. Any equipment it is wearing or carrying is absorbed\
    \ or borne by the new form (Inda's choice).\n\nIn a new form, Inda retains its\
    \ game statistics and ability to speak, but its AC, movement modes, Strength,\
    \ Dexterity, and special senses are replaced by those of the new form, and it\
    \ gains any statistics and capabilities (except class features, legendary actions,\
    \ and lair actions) that the new form has but that it lacks."
  "name": "Change Shape"
"source":
- "VEoR"
"image": "/3-Mechanics/CLI/bestiary/npc/token/inda-veor.webp"
```
^statblock