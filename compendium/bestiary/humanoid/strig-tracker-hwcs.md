---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/strig
statblock: inline
aliases: ["Strig Tracker"]
---
# [Strig Tracker](3-Mechanics\CLI\bestiary\humanoid/strig-tracker-hwcs.md)
*Source: Humblewood Campaign Setting p. 206*  

Capable of moving swiftly through the wilderness, trackers help find those who have lost their way in the forest. Accomplished survivalists, they are familiar with hidden pathways throughout the Wood. Often found alongside woodland beasts, many have formed bonds with these creatures, and find their aid useful in locating lost travelers. For Strigs, known for being at ease even in the harshest environments, becoming a tracker can prove a satisfying challenge. Some use their skills to double as bounty hunters, which can provide for an even more thrilling chase.

```statblock
"name": "Strig Tracker (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "strig"
"alignment": "Lawful Good"
"ac": !!int "14"
"ac_class": "[hide armor](/3-Mechanics/CLI/items/hide-armor.md)"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "15"
- !!int "10"
"speed": "30 ft."
"skillsaves":
  "Perception": !!int "4"
  "Acrobatics": !!int "6"
  "Survival": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Birdfolk, can also understand Auran but can't speak it"
"cr": "3"
"traits":
- "desc": "The tracker is a 3rd-level spellcaster. Their spellcasting ability is Wisdom\
    \ (spell save DC 12, +4 to hit with spell attacks). The strig tracker has the\
    \ following ranger spells prepared:\n\n1st level (3 slots): [elevated sight](/3-Mechanics/CLI/spells/elevated-sight-hwcs.md),\
    \ [hunter's mark](/3-Mechanics/CLI/spells/hunters-mark.md), [longstrider](/3-Mechanics/CLI/spells/longstrider.md),\
    \ [speak with animals](/3-Mechanics/CLI/spells/speak-with-animals.md)"
  "name": "Spellcasting"
- "desc": "When falling at least 10 feet, the tracker can spend a reaction to fly\
    \ up to their speed in one direction as they descend. They land in an unoccupied\
    \ space at the end of their movement, and take no falling damage. They cannot\
    \ glide while carrying heavy objects, heavy weapons, or shields (though they can\
    \ drop any held items as part of their reaction)."
  "name": "Glide"
- "desc": "The tracker rolls advantage on Strength ([Athletics](/3-Mechanics/CLI/rules/skills.md#Athletics))\
    \ checks made to climb any surface their talons could reasonably grip."
  "name": "Talons"
- "desc": "The tracker has advantage on Dexterity ([Stealth](/3-Mechanics/CLI/rules/skills.md#Stealth))\
    \ checks when they attempt to hide in a forest."
  "name": "Patterned Feathers"
- "desc": "The tracker can make Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks as a bonus action to try and find hidden creatures."
  "name": "Reya's Keen Eye"
"actions":
- "desc": "The tracker makes two melee attacks, one with their longsword and one with\
    \ their hand axe. Or they make two ranged attacks with their hand axe."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage or 8 (1d10 + 3) slashing damage if wielding with both\
    \ hands."
  "name": "Longsword"
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) slashing damage."
  "name": "Hand Axe"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage."
  "name": "Talons"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/strig-tracker-hwcs.webp"
```
^statblock