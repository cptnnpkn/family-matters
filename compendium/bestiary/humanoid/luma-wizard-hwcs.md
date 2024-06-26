---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/luma
statblock: inline
aliases: ["Luma Wizard"]
---
# [Luma Wizard](3-Mechanics\CLI\bestiary\humanoid/luma-wizard-hwcs.md)
*Source: Humblewood Campaign Setting p. 202*  

It is widely believed among the birdfolk that only those with focused minds can master the subtle art of magic. For unknown reasons, perhaps their inherent connection to fate or particular manner of engaging with the world, lumas are able to tap into the mystical and magical forces with ease.

```statblock
"name": "Luma Wizard (HWCS)"
"size": "Small"
"type": "humanoid"
"subtype": "luma"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with mage armor"
"hp": !!int "58"
"hit_dice": "13d6 + 13"
"stats":
- !!int "8"
- !!int "15"
- !!int "12"
- !!int "18"
- !!int "12"
- !!int "15"
"speed": "25 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "7"
"skillsaves":
  "History": !!int "7"
  "Arcana": !!int "7"
"damage_resistances": "poison"
"senses": "passive Perception 11"
"languages": "Auran, Birdfolk, any three other languages"
"cr": "6"
"traits":
- "desc": "The wizard is a 10th-level spellcaster. Their spellcasting ability is Intelligence\
    \ (spell save DC 15, +7 to hit with spell attacks). The wizard has the following\
    \ spells prepared:\n\nCantrips (at will): [chill touch](/3-Mechanics/CLI/spells/chill-touch.md),\
    \ [fire bolt](/3-Mechanics/CLI/spells/fire-bolt.md), [minor illusion](/3-Mechanics/CLI/spells/minor-illusion.md),\
    \ [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md), [ray of frost](/3-Mechanics/CLI/spells/ray-of-frost.md)\n\
    \n1st level (4 slots): [charm person](/3-Mechanics/CLI/spells/charm-person.md),\
    \ [detect magic](/3-Mechanics/CLI/spells/detect-magic.md), [mage armor](/3-Mechanics/CLI/spells/mage-armor.md),\
    \ [shield](/3-Mechanics/CLI/spells/shield.md), [sleep](/3-Mechanics/CLI/spells/sleep.md),\
    \ [thunderwave](/3-Mechanics/CLI/spells/thunderwave.md)\n\n2nd level (3 slots):\
    \ [darkness](/3-Mechanics/CLI/spells/darkness.md), [hold person](/3-Mechanics/CLI/spells/hold-person.md),\
    \ [ray of enfeeblement](/3-Mechanics/CLI/spells/ray-of-enfeeblement.md)\n\n3rd\
    \ level (3 slots): [counterspell](/3-Mechanics/CLI/spells/counterspell.md),\
    \ [fireball](/3-Mechanics/CLI/spells/fireball.md)\n\n4th level (3 slots):\
    \ [banishment](/3-Mechanics/CLI/spells/banishment.md), [stellar bodies](/3-Mechanics/CLI/spells/stellar-bodies-hwcs.md)\n\
    \n5th level (2 slots): [conjure elemental](/3-Mechanics/CLI/spells/conjure-elemental.md),\
    \ [mislead](/3-Mechanics/CLI/spells/mislead.md)"
  "name": "Spellcasting"
- "desc": "When falling at least 10 feet, the wizard can spend a reaction to fly up\
    \ to their speed in one direction as they descend. They land in an unoccupied\
    \ space at the end of their movement, and take no falling damage. They cannot\
    \ glide while carrying heavy objects, heavy weapons, or shields (though they can\
    \ drop any held items as part of their reaction)."
  "name": "Glide"
- "desc": "As a bonus action, the wizard can use their powerful feathered arms to\
    \ propel themselves upward up to half their movement speed. The wizard can use\
    \ it in conjunction with a regular jump, but not while gliding."
  "name": "Wing Flap"
- "desc": "The wizard can choose to reroll any attack, skill check, or saving throw."
  "name": "Fated (Recharges after a Long Rest)"
- "desc": "The wizard has advantage on saving throws against poison."
  "name": "Resilience"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage."
  "name": "Staff"
"reactions":
- "desc": "When a creature makes an attack against the wizard, the creature must succeed\
    \ on a DC 14 Wisdom saving throw or target the next closest creature within range.\
    \ If multiple creatures are closest, the attacker chooses. This feature does not\
    \ work if there are no other creatures within range"
  "name": "Charming (3/Day)"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/luma-wizard-hwcs.webp"
```
^statblock