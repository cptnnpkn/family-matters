---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Swarm of Emberbats"]
---
# [Swarm of Emberbats](3-Mechanics\CLI\bestiary\beast/swarm-of-emberbats-hwcs.md)
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
"name": "Swarm of Emberbats (HWCS)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "5"
- !!int "15"
- !!int "10"
- !!int "3"
- !!int "10"
- !!int "5"
"speed": "0 ft., fly 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone), [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
  \ [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)"
"senses": "blindsight 60 ft., passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The swarm can't use its blindsight while [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened)."
  "name": "Echolocation"
- "desc": "The swarm has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on hearing."
  "name": "Keen Hearing"
- "desc": "Any creature that starts their turn within 5 feet of the emberbat swarm\
    \ must make a DC 10 Constitution saving throw, taking 2 (1d4) points of fire\
    \ damage on a failure."
  "name": "Flame Essence"
- "desc": "The Swarm of Emberbats can occupy another creature's space and vice versa,\
    \ and the swarm can move through any opening large enough for a Tiny bat. The\
    \ swarm can't regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 0 ft., one creature in the swarm's\
    \ space. Hit: 5 (2d4) piercing damage, or 2 (1d4) piercing damage if the\
    \ swarm has half of its hit points or fewer."
  "name": "Bites"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/beast/token/swarm-of-emberbats-hwcs.webp"
```
^statblock