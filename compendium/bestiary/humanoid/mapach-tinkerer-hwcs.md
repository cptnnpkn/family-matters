---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/mapach
statblock: inline
aliases: ["Mapach Tinkerer"]
---
# [Mapach Tinkerer](3-Mechanics\CLI\bestiary\humanoid/mapach-tinkerer-hwcs.md)
*Source: Humblewood Campaign Setting p. 203*  

Unlike those who are content to stay within the boundaries of their established craft, tinkerers have a passion for innovation that is unfettered by tradition. Mapach craftspeople who constantly look for ways to improve upon past creations find themselves branded as eccentrics. Their methods are unconventional, but eminently practical. Designs are often carefully considered, and some of their innovations eventually find widespread use around the Wood.

```statblock
"name": "Mapach Tinkerer (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "mapach"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "13"
- !!int "12"
- !!int "10"
"speed": "30 ft., climb 20 ft."
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Birdfolk, Mapach"
"cr": "1/4"
"traits":
- "desc": "The tinkerer has advantage on saving throws against being [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)."
  "name": "Resilience"
- "desc": "The tinkerer has advantage on [Stealth](/3-Mechanics/CLI/rules/skills.md#Stealth)\
    \ checks made in dim light or total darkness."
  "name": "Skulker"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, range 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Dagger"
- "desc": "The tinkerer uses one of the following options (roll a d4 or choose one);\
    \ the tinkerer can use each one no more than once per day:\n\n1. Cogwork Bird.\
    \ The tinkerer winds and releases a small mechanical bird that flies to a target\
    \ creature within 30 feet and distracts it. The next attack against that creature\
    \ is made with advantage.\n\n2. Flash-bangs. The tinkerer targets a space\
    \ up to 10 ft. away, and throws some small explosive shells that flare up in a\
    \ blinding light. All creatures within 10 ft. of the target space must make a\
    \ DC 11 Constitution saving throw or be [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)\
    \ until the start of the tinkerer's next turn.\n\n3. Nettle Gun. The tinkerer\
    \ turns the crank on a small gadget that sprays nettles at a target. Ranged Weapon\
    \ Attack: +4 to hit, range 10/20 ft., one target. Hit: 4 (1d4 + 2) piercing\
    \ damage. All creatures within 5 ft. of the target must make a DC 11 Dexterity\
    \ saving throw or take 5 (1d10) piercing damage.\n\n4. Grease Balloon. The\
    \ tinkerer targets a 10-foot by 10-foot area up to 15 feet away, and makes it\
    \ slick with grease. The area is considered difficult terrain, and each creature\
    \ standing in the area must succeed on a DC 11 Dexterity saving throw or fall\
    \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone). A creature that enters\
    \ the area or ends its turn there must also succeed on a DC 11 Dexterity saving\
    \ throw or fall [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Tinker's Toys"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/mapach-tinkerer-hwcs.webp"
```
^statblock