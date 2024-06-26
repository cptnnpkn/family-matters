---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Eye Crow"]
---
# [Eye Crow](3-Mechanics\CLI\bestiary\beast/eye-crow-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 58*  

Eye crows are big corvids plentiful throughout Etharis. They mimic sounds and voices, and they're extremely clever, remembering faces, locations, and how other creatures treat them. People keep eye crows as pets and often use their iridescent black feathers, which have a deep-green sheen, to decorate.

## Salvage

The nest of an eye crow contains glittering baubles, coins, gems, or jewelry worth at least 5 gp. Feathers of one eye crow can fetch a similar amount of money.

## Lore

- **DC 10 Wisdom ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** Eye crows can be tamed and trained for simple tasks. Unscrupulous trainers teach the crow to attack others, going for the eyes.  

```statblock
"name": "Eye Crow (GHLoE)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "2"
- !!int "14"
- !!int "10"
- !!int "3"
- !!int "12"
- !!int "7"
"speed": "10 ft., fly 50 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- "desc": "The eye crow can mimic simple sounds it has heard, such as a person whispering,\
    \ a baby crying, or an animal chittering. A creature that hears the sounds can\
    \ tell they are imitations with a successful DC 10 Wisdom ([Insight](/3-Mechanics/CLI/rules/skills.md#Insight))\
    \ check."
  "name": "Mimicry"
- "desc": "The eye crow has advantage on an attack roll against a creature if at least\
    \ one of the crow's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing\
    \ damage. If the eye crow scores a critical hit on a creature, the target is [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)\
    \ until the end of the crow's next turn."
  "name": "Beak"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/beast/token/eye-crow-ghloe.webp"
```
^statblock