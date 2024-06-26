---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/sable-luma
statblock: inline
aliases: ["Gregor Thornspur, Magistrate of Alderheart"]
---
# [Gregor Thornspur, Magistrate of Alderheart](3-Mechanics\CLI\bestiary\npc/gregor-thornspur-magistrate-of-alderheart-hwcs.md)
*Source: Humblewood Campaign Setting p. 198*  

Gregor is a dull-looking sable luma with a single errant feather that sticks out oddly from his brow. Gregor is the Magistrate of Alderheart, and though he appears to be a tired bureaucrat, his demeanour hides a shrewd businessman eager to turn any situation to his advantage. He is not above taking bribes in exchange for expediting requests to see the Birdfolk Council. Gregor uses the [noble](/3-Mechanics/CLI/bestiary/humanoid/noble.md) stat block, adjusted with the racial traits of sable luma. He is chaotic neutral.

```statblock
"name": "Gregor Thornspur, Magistrate of Alderheart (HWCS)"
"size": "Small"
"type": "humanoid"
"subtype": "sable luma"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"ac_class": "[breastplate](/3-Mechanics/CLI/items/breastplate.md)"
"hp": !!int "9"
"hit_dice": "2d6 + 2"
"stats":
- !!int "11"
- !!int "12"
- !!int "12"
- !!int "12"
- !!int "14"
- !!int "18"
"speed": "25 ft."
"skillsaves":
  "Deception": !!int "6"
  "Insight": !!int "6"
  "Persuasion": !!int "6"
"damage_resistances": "poison"
"senses": "passive Perception 13"
"languages": "Birdfolk, can also understand Auran but can't speak it"
"cr": "1/8"
"traits":
- "desc": "When falling at least 10 feet, Gregor can spend a reaction to fly up to\
    \ his speed in one direction as he descends. He lands in an unoccupied space at\
    \ the end of his movement, and takes no falling damage. He cannot glide while\
    \ carrying heavy objects, heavy weapons, or shields (though he can drop any held\
    \ items as part of his reaction)."
  "name": "Glide"
- "desc": "As a bonus action, Gregor can use his powerful feathered arms to propel\
    \ himself upward a distance equal to half his movement speed. He can use it in\
    \ conjunction with a regular jump, but not while gliding. "
  "name": "Wing Flap"
- "desc": "Gregor can choose to reroll any attack roll, skill check, or saving throw."
  "name": "Fated (Recharges after a Long Rest)"
- "desc": "Gregor is resistant to poison damage."
  "name": "Damage Resistance"
- "desc": "Gregor has advantage on saving throws against being [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)."
  "name": "Resilience"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) piercing damage."
  "name": "Rapier"
"reactions":
- "desc": "Gregor adds 2 to his AC against one melee attack that would hit him. To\
    \ do so, Gregor must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/npc/token/gregor-thornspur-magistrate-of-alderheart-hwcs.webp"
```
^statblock