---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/hedge
statblock: inline
aliases: ["Hedge Witch"]
---
# [Hedge Witch](3-Mechanics\CLI\bestiary\humanoid/hedge-witch-hwcs.md)
*Source: Humblewood Campaign Setting p. 198*  

Many who apply to study at the Avium are turned away by the prestigious institution. Spurred by their desire for knowledge, rejected candidates sometimes start on a path to become self-taught masters of arcana. Notably in tune with the magic of the forest, hedges pursuing an individualistic path often leverage their connection to these natural forces to make pacts with powerful fey or elemental beings, learning secrets inaccessible to traditional students.

```statblock
"name": "Hedge Witch (HWCS)"
"size": "Small"
"type": "humanoid"
"subtype": "hedge"
"alignment": "Any Chaotic alignment"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "21"
"hit_dice": "6d6"
"stats":
- !!int "8"
- !!int "10"
- !!int "10"
- !!int "14"
- !!int "15"
- !!int "16"
"speed": "25 ft., burrow 15 ft."
"skillsaves":
  "Arcana": !!int "4"
  "Survival": !!int "4"
"senses": "passive Perception 12"
"languages": "Abyssal, Birdfolk, Hedge, can also speak with beasts of any size which\
  \ represent spiders insects worms or other bugs"
"cr": "1"
"traits":
- "desc": "The witch is a 2nd-level spellcaster. Their spellcasting ability is Charisma\
    \ (spell save DC 13, +5 to hit with spell attacks). The witch has the following\
    \ warlock spells prepared:\n\nCantrips (at will): [eldritch blast](/3-Mechanics/CLI/spells/eldritch-blast.md),\
    \ [minor illusion](/3-Mechanics/CLI/spells/minor-illusion.md)\n\n1st-1st level\
    \ (2 slots): [charm person](/3-Mechanics/CLI/spells/charm-person.md), [hellish\
    \ rebuke](/3-Mechanics/CLI/spells/hellish-rebuke.md), [unseen servant](/3-Mechanics/CLI/spells/unseen-servant.md)"
  "name": "Spellcasting"
- "desc": "When the witch reduces a hostile creature to 0 hit points, the witch gains\
    \ 5 temporary hit points."
  "name": "Dark One's Blessing"
- "desc": "When the witch hits a creature with eldritch blast, they can push the creature\
    \ up to 10 feet away in a straight line."
  "name": "Repelling Blast"
"actions":
- "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage."
  "name": "Staff"
- "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- "desc": "The witch can cast [false life](/3-Mechanics/CLI/spells/false-life.md)\
    \ at will as a 1st-level spell."
  "name": "Fiendish Vigor"
- "desc": "The witch curls up into a spiny ball. While curled up in this way they\
    \ cannot move, attack, or cast spells with somatic components, and their base\
    \ armor class becomes 19. Any creature that misses the witch with a melee attack\
    \ while they are curled up takes 2d4 points of piercing damage from their sharp\
    \ quills. If a creature hits the witch while they are curled up, however, the\
    \ witch is knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone) in their\
    \ space at the end of the turn. The witch may uncurl themselves at any point during\
    \ their turn."
  "name": "Curl Up"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/hedge-witch-hwcs.webp"
```
^statblock