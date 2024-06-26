---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/slw
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
aliases: ["Expert"]
---
# [Expert](3-Mechanics\CLI\bestiary\humanoid/expert-slw.md)
*Source: Storm Lord's Wrath*  

```statblock
"name": "Expert (SLW)"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "[studded leather](/3-Mechanics/CLI/items/studded-leather-armor.md)"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "10"
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "10"
- !!int "14"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "6"
"skillsaves":
  "Sleight of Hand": !!int "6"
  "Stealth": !!int "9"
  "Performance": !!int "5"
  "Acrobatics": !!int "9"
  "Persuasion": !!int "5"
"senses": "passive Perception 10"
"languages": "Common, plus one of your choice"
"traits":
- "desc": "The expert can take the Help action as a bonus action, and the creature\
    \ who receives the help gains a 1d6 bonus to the d20 roll. If that roll is\
    \ an attack roll, the creature can forgo adding the bonus to it, and then if the\
    \ attack hits, the creature can add the bonus to the attack's damage roll against\
    \ one target."
  "name": "Helpful"
- "desc": "The expert has [thieves' tools](/3-Mechanics/CLI/items/thieves-tools.md)\
    \ and a musical instrument."
  "name": "Tools"
"actions":
- "desc": "The expert can attack twice, instead of once, whenever it takes the [Attack](/3-Mechanics/CLI/rules/actions.md#Attack)\
    \ action on its turn."
  "name": "Extra Attack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Shortsword"
- "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
  "name": "Dagger"
- "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit:\
    \ 6 (1d6 + 3) piercing damage."
  "name": "Shortbow"
"source":
- "SLW"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/expert-slw.webp"
```
^statblock