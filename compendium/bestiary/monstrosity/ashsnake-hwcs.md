---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Ashsnake"]
---
# [Ashsnake](3-Mechanics\CLI\bestiary\monstrosity/ashsnake-hwcs.md)
*Source: Humblewood Campaign Setting p. 177*  

> [!quote]- A quote from From The Epic of Fire, a centuries old poem  
> 
> "Beneath the ash it lies in wait. A hiss, a snap, and it's too late."

Ashsnakes are huge monstrosities which resemble snakes molded from volcanic magma. Their bodies seeth with an internal heat below the charcoal-gray scales that cover their forms. While the blazing light emanating from their empty eye sockets makes it appear as though ashsnakes can see, they rely entirely on vibrations to assess their surroundings.

## Mysterious Origins

Little is known about the origins of the ashsnake. They recently emerged from beneath the ashen plains of the Scorched Grove and appear to have an insatiable hunger. Ashnakes use the mounds of ash and dust in the Grove to conceal their presence, allowing them to close in on unwary prey and ambush them. While not particularly intelligent, ashsnakes possess predatorial cunning and survival instincts eerily reminiscent of the fauna that inhabited the Grove before its burning.

## Sightless Worms

Ashsnakes have no ability to detect sights and sounds in a traditional sense. They are, however, adept at sensing even the smallest vibration, and the slightest footfall is enough to draw their attention. Some scholars believe it may be possible to "disappear" from an ashsnakes "vision" by standing perfectly still, but finding volunteers to confirm this theory has under-standably proven difficult.

```statblock
"name": "Ashsnake (HWCS)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor; 18 while under ash"
"hp": !!int "67"
"hit_dice": "7d12 + 21"
"stats":
- !!int "16"
- !!int "12"
- !!int "16"
- !!int "4"
- !!int "12"
- !!int "4"
"speed": "40 ft., burrow 30 ft."
"damage_vulnerabilities": "cold"
"damage_resistances": "fire"
"senses": "blindsight 30 ft. (blind beyond this radius), tremorsense 60 ft., passive\
  \ Perception 11"
"languages": "understands Ignan, but can't speak"
"cr": "4"
"traits":
- "desc": "The ashsnake has advantage on Dexterity ([Stealth](/3-Mechanics/CLI/rules/skills.md#Stealth))\
    \ checks made when it is burrowing in ash, as well as a +4 bonus to its armor\
    \ class."
  "name": "Ash Cover"
- "desc": "When the ashsnake emerges from burrowing, any creature within 5 feet of\
    \ it that is at least one size smaller than the ashsnake must make a DC 14 Dexterity\
    \ saving throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Eruption"
"actions":
- "desc": "The Ashsnake can make one bite attack and either one Constrict or Crush\
    \ attack each round."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8\
    \ (1d10 + 3) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8\
    \ (2d8 + 3) bludgeoning damage and the target is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 14). Until the grapple ends the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ and the ashsnake cannot constrict or crush another target. The ashsnake can\
    \ release the target at any time during its turn."
  "name": "Constrict"
- "desc": "The ashsnake crushes its [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ target, dealing 11 (2d8 + 3) bludgeoning damage."
  "name": "Crush"
- "desc": "The ashsnake breathes out a cloud of superheated ash in a 15-foot cone.\
    \ Each creature in the area must make a DC 14 Dexterity saving throw, taking 11\
    \ (2d10) fire damage on a failed save, or half as much on a success."
  "name": "Ashen Breath (Recharge 5-6)"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/ashsnake-hwcs.webp"
```
^statblock