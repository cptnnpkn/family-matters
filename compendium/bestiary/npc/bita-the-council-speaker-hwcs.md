---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/bright-gallus
statblock: inline
aliases: ["Bita, the Council Speaker"]
---
# [Bita, the Council Speaker](3-Mechanics\CLI\bestiary\npc/bita-the-council-speaker-hwcs.md)
*Source: Humblewood Campaign Setting p. 193*  

Bita is a bright gallus whose elegant white plumage resembles that of a peacock. As the Birdfolk Council's Speaker, she is always first to address those who have been granted an audience with the Council. She takes her duties as the Speaker and as a Council member very seriously. Despite her profound affection for Humblewood and its citizens, she often comes off as severe and cold. Bita believes in doing what's best for the folks of the Wood, and sometimes this means making level-headed, tough decisions. Bita uses the [noble](/3-Mechanics/CLI/bestiary/humanoid/noble.md) stat block, adjusted with the racial traits of a bright gallus. She is lawful good.

```statblock
"name": "Bita, the Council Speaker (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "bright gallus"
"alignment": "Lawful Good"
"ac": !!int "15"
"ac_class": "[breastplate](/3-Mechanics/CLI/items/breastplate.md)"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "11"
- !!int "12"
- !!int "11"
- !!int "12"
- !!int "16"
- !!int "17"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Insight": !!int "6"
  "Persuasion": !!int "5"
"senses": "passive Perception 13"
"languages": "Birdfolk, can also understand Auran but can't speak it"
"cr": "1/8"
"traits":
- "desc": "When falling at least 10 feet, Bita can spend a reaction to fly up to her\
    \ speed in one direction as she descends. She lands in an unoccupied space at\
    \ the end of her movement, and takes no falling damage. She cannot glide while\
    \ carrying heavy objects, heavy weapons, or shields (though she can drop any held\
    \ items as part of her reaction)."
  "name": "Glide"
- "desc": "As a bonus action, Bita can use her powerful feathered arms to propel herself\
    \ upward a distance equal to half her movement speed. She can use it in conjunction\
    \ with a regular jump, but not while gliding. "
  "name": "Wing Flap"
- "desc": "As an action, Bita inspires an ally that can see and hear her. The ally\
    \ can roll a d4 and add the number rolled to their next ability check, attack\
    \ roll, or saving throw."
  "name": "Inspiring"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) piercing damage."
  "name": "Rapier"
"reactions":
- "desc": "Bita adds 2 to her AC against one melee attack that would hit her. To do\
    \ so, Bita must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/npc/token/bita-the-council-speaker-hwcs.webp"
```
^statblock