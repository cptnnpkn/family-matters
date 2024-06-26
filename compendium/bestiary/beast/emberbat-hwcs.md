---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Emberbat"]
---
# [Emberbat](3-Mechanics\CLI\bestiary\beast/emberbat-hwcs.md)
*Source: Humblewood Campaign Setting p. 182*  

Curious and gentle creatures, these tiny bats have ashen fur and noses which sport a small candle-sized flame.

## Winged Fire

Emberbats only started appearing in Humblewood after the calamity that befell the Scorched Grove, and scholars nearly all agree that the emergence of the creatures had something to do with the elemental magics present in the Grove. The flames that give the bats their name are lit through an internal combustion process that issues fuel from their nostrils as they exhale. Emberbats appear able to start and stop this process at will. The bats obviously do not need the flames to see, but it is hypothesized that the small candle serves to attract moths or other insects into their waiting mouths, greatly facilitating hunting.

## Colonies of Combustion

Emberbats are most often seen flying in clouds consisting of many different families acting in unison. The bats perform virtually every task as a cohesive unit, from flying to hunting to nesting. The real threat they pose lies in the remarkable coordination of their colonies.

Alone, an emberbat is no more dangerous than a candle. But together they have the potential to burn like a pit of hot embers, and can easily set dry tinder ablaze. When a colony of emberbats attacks a target, it is usually for defensive purposes. The air temperature within the cloud rises dangerously fast, and it has to potential to cook the victim alive. When encountering a colony in the wild, it is best not to engage them. However, recently colonies of emberbats are acting aggressively towards travelers, harassing any who approach their expanding territories. Some swear they have seen emberbat supercolonies whose heat could be felt from yards away.

## Fine Familiars

Throughout Humblewood's history, the docile nature of the emberbats have made them ideal familiars or animal companions, especially to masters who journey into dark places.

```statblock
"name": "Emberbat (HWCS)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "2"
- !!int "15"
- !!int "10"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "5 ft., fly 30 ft."
"senses": "blindsight 60 ft., passive Perception 11"
"languages": ""
"cr": "0"
"traits":
- "desc": "The Emberbat can't use its blindsight while [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened)."
  "name": "Echolocation"
- "desc": "The Emberbat has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on hearing."
  "name": "Keen Hearing"
- "desc": "The emberbat can create a flame from its nose at will. It sheds bright\
    \ light in a 5-foot-radius and dim light in another 5 feet beyond this. This effect\
    \ lasts until it is dismissed, which the emberbat can do at anytime. When lit,\
    \ the flame also provides a small damage boost to the emberbat's bite (already\
    \ included in stat block)."
  "name": "Ember Flame"
"actions":
- "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing\
    \ damage plus 1 fire damage."
  "name": "Bite"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/beast/token/emberbat-hwcs.webp"
```
^statblock