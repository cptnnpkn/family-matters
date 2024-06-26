---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Mountain Lion"]
---
# [Mountain Lion](3-Mechanics\CLI\bestiary\beast/mountain-lion-hwcs.md)
*Source: Humblewood Campaign Setting p. 184*  

> [!quote]-  
> 
> "The results of their roar can have quite an impact on adventurers."

The mountain lions of Humblewood's Crest Mountains are more than the mere beasts travelers may mistake them for. Covered in rocky protrusions that serve to protect as well as camouflage them, mountain lions possess special powers as a result of their ties to the elemental earth of their territory.

## Mountain Stalker

Mountain lions live and hunt in their craggy mountain homes. They are natural climbers and prefer to ambush unsuspecting prey rather than engage in prolonged chases across the treacherous cliffs. A pride of mountain lions is led and protected by a large female. Males compete for the right to mate, and work together as a hunting party. While not as adept at pack hunting as wolves, a few mountain lions working in tandem can take down dangerous creatures of unusual size, including basilisks and griffons.

## Roar of the Earth

Owing to the magic of the elemental earth, mountain lions can gain limited control over nearby rocks with their roar. Using this ability, they can cause rockslides to hinder their prey's escape or inflict critical damage. The ability takes a great deal of energy, so many mountain lions use it sparingly, knowing it will be some time before they can call upon it again. 

```statblock
"name": "Mountain Lion (HWCS)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "37"
"hit_dice": "5d10 + 10"
"stats":
- !!int "17"
- !!int "15"
- !!int "14"
- !!int "3"
- !!int "14"
- !!int "6"
"speed": "40 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "1"
"traits":
- "desc": "The Mountain Lion has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- "desc": "If the Mountain Lion moves at least 20 feet toward a creature and then\
    \ hits it with a claw attack on the same turn, that target must succeed on a DC\
    \ 13 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\
    \ The mountain lion can make a bite attack against a [prone](/3-Mechanics/CLI/rules/conditions.md#prone)\
    \ target as a bonus action."
  "name": "Pounce (Lion)"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10\
    \ + 3) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage."
  "name": "Claw"
- "desc": "With a mystic roar, the mountain lion can call down the very rocks. So\
    \ long as it is in mountainous terrain, it can use its action to cause a rockslide\
    \ to fall within a 15-foot-radius of a space it can see within 60 feet. Creatures\
    \ in this area must make a DC 12 Dexterity saving throw, taking 13 (3d8) bludgeoning\
    \ damage on a failure and half as much on a success."
  "name": "Call Avalanche (Recharges after a Short or Long Rest)"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/beast/token/mountain-lion-hwcs.webp"
```
^statblock