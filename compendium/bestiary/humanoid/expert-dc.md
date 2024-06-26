---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dc
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
aliases: ["Expert"]
---
# [Expert](3-Mechanics\CLI\bestiary\humanoid/expert-dc.md)
*Source: Divine Contention*  

```statblock
"name": "Expert (DC)"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "[studded leather](/3-Mechanics/CLI/items/studded-leather-armor.md)"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "10"
- !!int "20"
- !!int "12"
- !!int "14"
- !!int "10"
- !!int "14"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "9"
"skillsaves":
  "Sleight of Hand": !!int "9"
  "Stealth": !!int "13"
  "Performance": !!int "6"
  "Acrobatics": !!int "13"
  "Persuasion": !!int "6"
"senses": "passive Perception 10"
"languages": "Common, plus one of your choice"
"traits":
- "desc": "The expert can take the Help action as a bonus action, and the creature\
    \ who receives the help gains a 1d6 bonus to the d20 roll. If that roll is\
    \ an attack roll, the creature can forgo adding the bonus to it, and then if the\
    \ attack hits, the creature can add the bonus to the attack's damage roll against\
    \ one target."
  "name": "Helpful"
- "desc": "When the expert is not [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ and subjected to an effect that allows it to make a Dexterity saving throw to\
    \ take only half damage, it instead takes no damage if it succeeds on the saving\
    \ throw, and only half damage if it failed."
  "name": "Evasion"
- "desc": "Whenever the expert makes an ability check that includes its whole proficiency\
    \ bonus, it can treat a d20 roll of 9 or lower as a 10."
  "name": "Reliable Talent"
- "desc": "The expert has [thieves' tools](/3-Mechanics/CLI/items/thieves-tools.md)\
    \ and a musical instrument."
  "name": "Tools"
"actions":
- "desc": "The expert can attack twice, instead of once, whenever it takes the attack\
    \ action on its turn."
  "name": "Extra Attack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 8 (1d6\
    \ + 5) piercing damage."
  "name": "Shortsword"
- "desc": "Melee or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d4 + 5) piercing damage."
  "name": "Dagger"
- "desc": "Ranged Weapon Attack: +9 to hit, range 80/320 ft., one target. Hit:\
    \ 8 (1d6 + 5) piercing damage."
  "name": "Shortbow"
"source":
- "DC"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/expert-dc.webp"
```
^statblock