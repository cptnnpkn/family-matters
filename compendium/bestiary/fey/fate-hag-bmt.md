---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bmt
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
aliases: ["Fate Hag"]
---
# [Fate Hag](3-Mechanics\CLI\bestiary\fey/fate-hag-bmt.md)
*Source: The Book of Many Things p. 176*  

Fate hags are servants of destiny that mostly reside in the Feywild and Shadowfell or near crossings to those realms from the Material Plane. The aspects of fate to which a fate hag is most attuned depends on the plane where the hag dwells—hopeful and prosperous in the Feywild or dire and doomed in the Shadowfell.

Fate hags carry gleaming magical shears they use to snip strands of fate. These shears are frightful weapons, severing a foe's destiny as well as its flesh. Fate hags often glimpse others' destinies when truths are revealed to them, when they lay curses, and when they offer divinations; they delight in such glimpses and are compelled to speak of what they see. Those who dare harm a fate hag find silvery threads of destiny winding around their bodies, tightening and slicing deeper as fate turns against the hag's foes.

```statblock
"name": "Fate Hag (BMT)"
"size": "Medium"
"type": "fey"
"alignment": "typically  Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "12"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "18"
- !!int "15"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "6"
  "Constitution": !!int "3"
"skillsaves":
  "Deception": !!int "6"
  "Perception": !!int "6"
  "History": !!int "5"
  "Arcana": !!int "5"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)"
"senses": "truesight 60 ft., passive Perception 16"
"languages": "all"
"cr": "4"
"traits":
- "desc": "While holding its shears, the hag casts one of the following spells, requiring\
    \ no material components and using Wisdom as the spellcasting ability (spell save\
    \ DC 14):\n\nAt will: [Bless](/3-Mechanics/CLI/spells/bless.md), [Guidance](/3-Mechanics/CLI/spells/guidance.md),\
    \ [Silent Image](/3-Mechanics/CLI/spells/silent-image.md)\n\n1/day each: [Bane](/3-Mechanics/CLI/spells/bane.md),\
    \ [Bestow Curse](/3-Mechanics/CLI/spells/bestow-curse.md), [Divination](/3-Mechanics/CLI/spells/divination.md),\
    \ [Scrying](/3-Mechanics/CLI/spells/scrying.md) (as an action)"
  "name": "Spellcasting"
- "desc": "If the hag fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- "desc": "The hag can cast the [Legend Lore](/3-Mechanics/CLI/spells/legend-lore.md)\
    \ spell, requiring no material components and using Wisdom as the spellcasting\
    \ ability."
  "name": "Trace the Threads (1/Day)"
"actions":
- "desc": "The hag makes two Shears attacks. It can replace one attack with a use\
    \ of Spellcasting."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) force damage. If the target is a creature, it has disadvantage on attack\
    \ rolls until the end of the hag's next turn."
  "name": "Shears"
"legendary_actions":
- "desc": "The hag magically teleports, along with any equipment it is wearing or\
    \ carrying, to an unoccupied space it can see within 30 feet of itself."
  "name": "Destined Jaunt"
- "desc": "The hag magically tangles a creature it can see within 60 feet of itself\
    \ in spectral silver threads. The creature must succeed on a DC 14 Strength saving\
    \ throw, or its speed is reduced to 0 until the end of its next turn."
  "name": "Tangle Threads"
- "desc": "The hag magically curses a creature it can see within 60 feet of itself.\
    \ The creature must make a DC 14 Wisdom saving throw, and the creature has disadvantage\
    \ on this save if it has damaged the hag within the last minute. On a failed save,\
    \ the creature has disadvantage on ability checks, attack rolls, and saving throws\
    \ until the curse ends. Once per turn, when the cursed creature fails one of those\
    \ d20 rolls, it takes 7 (2d6) force damage. The curse ends after 1 minute;\
    \ when the creature succeeds on a total of three ability checks, attack rolls,\
    \ or saving throws in any combination; or when the hag uses this action again."
  "name": "Destiny Curse (Costs 2 Actions)"
"source":
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/fey/token/fate-hag-bmt.webp"
```
^statblock