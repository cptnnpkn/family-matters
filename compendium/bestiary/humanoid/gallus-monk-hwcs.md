---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/gallus
statblock: inline
aliases: ["Gallus Monk"]
---
# [Gallus Monk](3-Mechanics\CLI\bestiary\humanoid/gallus-monk-hwcs.md)
*Source: Humblewood Campaign Setting p. 196*  

Gallus who are not content to settle into everyday life in small communities venture out to secluded monasteries and learn the way of the monk. There, a disciplined routine of physical rigours and spiritual contemplation is overseen by wizened masters. After years of training, initiates are deemed ready to journey the land and put their learning to the test. The majority return to the monastery after having had a revelation during their travels. Other continue to wander, sometimes with a few trusted companions, forever finding new meaning.

```statblock
"name": "Gallus Monk (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "gallus"
"alignment": "Any alignment"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "11"
- !!int "18"
- !!int "14"
- !!int "11"
- !!int "16"
- !!int "10"
"speed": "40 ft."
"saves":
  "Dexterity": !!int "7"
"skillsaves":
  "Stealth": !!int "7"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Acrobatics": !!int "7"
"senses": "passive Perception 16"
"languages": "Birdfolk, can also understand Auran but can't speak it"
"cr": "5"
"traits":
- "desc": "When falling at least 10 feet, the monk can spend a reaction to fly up\
    \ to their speed in one direction as they descend. They land in an unoccupied\
    \ space at the end of their movement, and take no falling damage. They cannot\
    \ glide while carrying heavy objects, heavy weapons, or shields (though they can\
    \ drop any held items as part of their reaction)."
  "name": "Glide"
- "desc": "As a bonus action, the monk can use their powerful feathered arms to propel\
    \ themselves upward up to half their movement speed. The monk can use it in conjunction\
    \ with a regular jump, but not while gliding."
  "name": "Wing Flap"
- "desc": "While moving, the monk can move along vertical surfaces and across liquids\
    \ without falling."
  "name": "Wind's Grace"
"actions":
- "desc": "The monk makes four attacks, each of which can be an unarmed strike or\
    \ a dart attack. They can also use their Graceful Step once, either before or\
    \ after one of the attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage."
  "name": "Unarmed Attack"
- "desc": "Ranged Weapon Attack: +7 to hit, range 20/60 ft., one target. Hit:\
    \ 6 (1d4 + 4) piercing damage."
  "name": "Dart"
- "desc": "The monk moves 40 feet. This movement does not provoke [opportunity attacks](/3-Mechanics/CLI/rules/actions.md#opportunity%20attack)."
  "name": "Graceful Step"
- "desc": "The monk inspires an ally that can see and hear them. The ally can roll\
    \ a d4 and add the number rolled to their next ability check, attack roll, or\
    \ saving throw."
  "name": "Inspiring"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/gallus-monk-hwcs.webp"
```
^statblock