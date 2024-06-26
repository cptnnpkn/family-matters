---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/gallus
statblock: inline
aliases: ["Gallus Necromancer"]
---
# [Gallus Necromancer](3-Mechanics\CLI\bestiary\humanoid/gallus-necromancer-hwcs.md)
*Source: Humblewood Campaign Setting p. 198*  

Gallus aren't typically drawn down the path of necromancy, but a few mavericks with arcane talent and the inclination to study the darker side of magic have found success in The Avium. More commonly, such necromancers study the art theoretically, learning how it disrupts the balance of life and death so that their students can be taught how to effectively counter such vile spells.

```statblock
"name": "Gallus Necromancer (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "gallus"
"alignment": "Any Non-Lawful alignment"
"ac": !!int "12"
"ac_class": "15 with mage armor"
"hp": !!int "49"
"hit_dice": "9d8 + 9"
"stats":
- !!int "9"
- !!int "14"
- !!int "12"
- !!int "18"
- !!int "14"
- !!int "10"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "7"
"skillsaves":
  "Medicine": !!int "5"
  "Deception": !!int "3"
  "Arcana": !!int "7"
"senses": "passive Perception 12"
"languages": "Birdfolk, Hedge, Sylvan, can also understand Auran but can't speak it"
"cr": "6"
"traits":
- "desc": "The necromancer is a 9th level spellcaster. Their spellcasting ability\
    \ is Intelligence (spell save DC 15, +7 to hit with spell attacks). The necromancer\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [chill\
    \ touch](/3-Mechanics/CLI/spells/chill-touch.md), [light](/3-Mechanics/CLI/spells/light.md),\
    \ [mage hand](/3-Mechanics/CLI/spells/mage-hand.md), [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md)\n\
    \n1st level (4 slots): [false life](/3-Mechanics/CLI/spells/false-life.md),\
    \ [mage armor](/3-Mechanics/CLI/spells/mage-armor.md), [magic missile](/3-Mechanics/CLI/spells/magic-missile.md),\
    \ [sleep](/3-Mechanics/CLI/spells/sleep.md)\n\n2nd level (3 slots): [misty\
    \ step](/3-Mechanics/CLI/spells/misty-step.md), [ray of enfeeblement](/3-Mechanics/CLI/spells/ray-of-enfeeblement.md),\
    \ [web](/3-Mechanics/CLI/spells/web.md)\n\n3rd level (3 slots): [animate dead](/3-Mechanics/CLI/spells/animate-dead.md),\
    \ [counterspell](/3-Mechanics/CLI/spells/counterspell.md), [fear](/3-Mechanics/CLI/spells/fear.md)\n\
    \n4th level (3 slots): [blight](/3-Mechanics/CLI/spells/blight.md), [evard's\
    \ black tentacles](/3-Mechanics/CLI/spells/evards-black-tentacles.md)\n\n5th\
    \ level (1 slots): [passwall](/3-Mechanics/CLI/spells/passwall.md)"
  "name": "Spellcasting"
- "desc": "When falling at least 10 feet, the necromancer can spend a reaction to\
    \ fly up to their speed in one direction as they descend. The necromancer lands\
    \ in an unoccupied space at the end of their movement, and takes no falling damage.\
    \ The necromancer cannot glide while carrying heavy objects, heavy weapons, or\
    \ shields (though they can drop any held items as part of their reaction)."
  "name": "Glide"
- "desc": "As a bonus action, the necromancer can use their powerful feathered arms\
    \ to propel themselves upward up to half their movement speed. The necromancer\
    \ can use it in conjunction with a regular jump, but not while gliding."
  "name": "Wing Flap"
- "desc": "The necromancer can communicate simple ideas to living plants, and is able\
    \ to interpret their responses in simple language."
  "name": "Seedspeech"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with both\
    \ hands."
  "name": "Staff"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/gallus-necromancer-hwcs.webp"
```
^statblock