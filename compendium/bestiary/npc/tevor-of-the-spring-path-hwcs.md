---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/luma
statblock: inline
aliases: ["Tevor of the Spring Path"]
---
# [Tevor of the Spring Path](3-Mechanics\CLI\bestiary\npc/tevor-of-the-spring-path-hwcs.md)
*Source: Humblewood Campaign Setting p. 207*  

Tevor is a timid sable luma, with ruddy gray feathers and a short beak. He is a good friend of Havel, and has begun to feel affection for the gallus since their time working together. Tevor is a Sapling, a low ranking member of the Tenders, who barely escaped from an ashsnake attack that killed his mentor. While he has agreed to give his report of events in the Scorched Grove, he is not prepared to do much beyond this. He possesses conviction in the beliefs of his order, but the traumatic event has left him feeling frightened and helpless. If only he could find the courage to match his ideals, he would be destined for greatness. Tevor is generally averse to combat now, but before joining the Tenders he trained as a perch guard recruit.

```statblock
"name": "Tevor of the Spring Path (HWCS)"
"size": "Small"
"type": "humanoid"
"subtype": "luma"
"alignment": "Neutral Good"
"ac": !!int "14"
"ac_class": "[chain shirt](/3-Mechanics/CLI/items/chain-shirt.md)"
"hp": !!int "22"
"hit_dice": "5d6 + 5"
"stats":
- !!int "14"
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "14"
- !!int "12"
"speed": "25 ft."
"skillsaves":
  "Athletics": !!int "4"
"damage_resistances": "poison"
"senses": "passive Perception 12"
"languages": "Birdfolk, Druidic, can also understand Auran but can't speak it"
"cr": "1/4"
"traits":
- "desc": "When falling at least 10 feet, Tevor can spend a reaction to fly up to\
    \ his speed in one direction as he descends. He lands in an unoccupied space at\
    \ the end of his movement, and takes no falling damage. He cannot glide while\
    \ carrying heavy objects, heavy weapons, or shields (though he can drop any held\
    \ items as part of his reaction)."
  "name": "Glide"
- "desc": "As a bonus action, Tevor can use his powerful feathered arms to propel\
    \ himself upward up to half his movement speed. He can use it in conjunction with\
    \ a regular jump, but not while gliding."
  "name": "Wing Flap"
- "desc": "Tevor can choose to reroll any attack roll, skill check, or saving throw."
  "name": "Fated (Recharges after a Long Rest)"
- "desc": "Tevor rolls with advantage on saving throws against being [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)."
  "name": "Resilience"
- "desc": "Tevor can make an attack during his glide. If he does, he deals an extra\
    \ 4 (1d8) points of damage."
  "name": "Drop Attack"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage or 6 (1d8 + 2) piercing\
    \ damage if used with both hands."
  "name": "Spear"
- "desc": "Tevor casts the [cure wounds](/3-Mechanics/CLI/spells/cure-wounds.md) spell\
    \ at 1st level. Wisdom is his spellcasting ability for this spell."
  "name": "Tender Healing (Recharges after a Long Rest)"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/npc/token/tevor-of-the-spring-path-hwcs.webp"
```
^statblock