---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/corvum
statblock: inline
aliases: ["Corvum Necromancer"]
---
# [Corvum Necromancer](3-Mechanics\CLI\bestiary\humanoid/corvum-necromancer-hwcs.md)
*Source: Humblewood Campaign Setting p. 194*  

Every sentient being is susceptible to the lure of necromancy. The promise of seeing lost loved ones again, or raising an army of powerful minions, can sometimes be difficult to resist. The birdfolk of Humblewood are not immune to that lure. To help curb this curiosity, professors at The Avium teach necromantic theory only. But some intrepid students have been known to pursue the practical applications in secret. Sure of their intellect, corvums in particular are often willing to challenge traditions for the sake of knowledge. As a result, more than one corvum has wandered down the path of the dark arts.

```statblock
"name": "Corvum Necromancer (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "corvum"
"alignment": "Any Evil alignment"
"ac": !!int "12"
"ac_class": "15 with mage armor"
"hp": !!int "49"
"hit_dice": "9d8 + 9"
"stats":
- !!int "9"
- !!int "14"
- !!int "12"
- !!int "18"
- !!int "10"
- !!int "14"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "3"
  "Intelligence": !!int "7"
"skillsaves":
  "Medicine": !!int "3"
  "Deception": !!int "5"
  "Arcana": !!int "7"
"senses": "passive Perception 10"
"languages": "Birdfolk, any two other languages, can also understand Auran but can't\
  \ speak it"
"cr": "6"
"traits":
- "desc": "The necromancer is a 9th-level spellcaster. Their spellcasting ability\
    \ is Intelligence (spell save DC 15, +7 to hit with spell attacks). The necromancer\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [chill\
    \ touch](/3-Mechanics/CLI/spells/chill-touch.md), [light](/3-Mechanics/CLI/spells/light.md),\
    \ [mage hand](/3-Mechanics/CLI/spells/mage-hand.md), [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md)\n\
    \n1st level (4 slots): [disguise self](/3-Mechanics/CLI/spells/disguise-self.md),\
    \ [false life†](/3-Mechanics/CLI/spells/false-life.md), [mage armor](/3-Mechanics/CLI/spells/mage-armor.md),\
    \ [magic missile](/3-Mechanics/CLI/spells/magic-missile.md)\n\n2nd level (3\
    \ slots): [misty step](/3-Mechanics/CLI/spells/misty-step.md), [ray of enfeeblement†\
    ](/3-Mechanics/CLI/spells/ray-of-enfeeblement.md), [suggestion](/3-Mechanics/CLI/spells/suggestion.md)\n\
    \n3rd level (3 slots): [animate dead†](/3-Mechanics/CLI/spells/animate-dead.md),\
    \ [counterspell](/3-Mechanics/CLI/spells/counterspell.md), [fear](/3-Mechanics/CLI/spells/fear.md)\n\
    \n4th level (3 slots): [blight†](/3-Mechanics/CLI/spells/blight.md), [greater\
    \ invisibility](/3-Mechanics/CLI/spells/greater-invisibility.md)\n\n5th level\
    \ (1 slots): [dominate person](/3-Mechanics/CLI/spells/dominate-person.md)\n\
    \n†necromancy spell of 1st level or higher"
  "name": "Spellcasting"
- "desc": "When falling at least 10 feet, the necromancer can spend a reaction to\
    \ fly up to their speed in one direction as they descend. They land in an unoccupied\
    \ space at the end of their movement, and take no falling damage. They cannot\
    \ glide while carrying heavy objects, heavy weapons, or shields (though they can\
    \ drop any held items as part of their reaction)."
  "name": "Glide"
- "desc": "The necromancer has advantage on Strength ([Athletics](/3-Mechanics/CLI/rules/skills.md#Athletics))\
    \ checks made to climb any surface their talons could reasonably grip."
  "name": "Talons"
- "desc": "The necromancer has advantage on all Charisma checks used to convince someone\
    \ of their knowledge of subject matter pertaining to the Arcana skill."
  "name": "Convincing"
- "desc": "Once per turn, when the necromancer kills one or more creatures with a\
    \ spell of 1st level or higher, they can regain hit points equal to twice the\
    \ level of the spell, or three times the level if it is a necromancy spell."
  "name": "Life Leech"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if wielded with\
    \ both hands."
  "name": "Staff"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Talons"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/corvum-necromancer-hwcs.webp"
```
^statblock