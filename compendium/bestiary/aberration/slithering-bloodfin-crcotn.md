---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/crcotn
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Slithering Bloodfin"]
---
# [Slithering Bloodfin](3-Mechanics\CLI\bestiary\aberration/slithering-bloodfin-crcotn.md)
*Source: Critical Role: Call of the Netherdeep p. 209*  

Covered in vicious-looking crimson spines and sleek scales, the slithering bloodfin flashes through the lightless waters of the Netherdeep. As it swims closer, its toothed maw comes into view—just before it unhinges its jaw, clamps down on its prey, and swallows it whole.

A slithering bloodfin looks like a giant eel with a head like a shark's. It magically siphons life energy from swallowed prey and uses that energy to repair damage to its own body.

When a bloodfin dies, its body bursts. The resulting gore is toxic, threatening to infect nearby creatures, until it is dissipated by currents.

```statblock
"name": "Slithering Bloodfin (CRCotN)"
"size": "Large"
"type": "aberration"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"stats":
- !!int "20"
- !!int "14"
- !!int "16"
- !!int "2"
- !!int "10"
- !!int "3"
"speed": "5 ft., swim 50 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "blindsight 100 ft. (blind beyond this radius), passive Perception 14"
"languages": ""
"cr": "9"
"traits":
- "desc": "When the bloodfin dies, it explodes in a cloud of toxic blood. Each creature\
    \ in a 10-foot-radius sphere centered on the exploding bloodfin, including any\
    \ creature swallowed by the bloodfin, must succeed on a DC 15 Constitution saving\
    \ throw or take 10 (3d6) poison damage. A creature inside the bloodfin when\
    \ it explodes falls [prone](/3-Mechanics/CLI/rules/conditions.md#prone) in the\
    \ space formerly occupied by the bloodfin and is no longer [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)\
    \ or [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained) by it."
  "name": "Death Burst"
- "desc": "The bloodfin can breathe only underwater."
  "name": "Water Breathing"
"actions":
- "desc": "The bloodfin makes one Bite attack and one Tail attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit (with advantage if the target is a creature\
    \ missing any hit points), reach 5 ft., one target. Hit: 14 (2d8 + 5) piercing\
    \ damage, and if the target is a creature, it is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 15). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ and the bloodfin can't bite another target."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +9 to hit (with advantage if the target is a creature\
    \ missing any hit points), reach 10 ft., one target. Hit: 19 (4d6 + 5) bludgeoning\
    \ damage."
  "name": "Tail"
"bonus_actions":
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one Medium or smaller\
    \ creature the bloodfin is grappling. Hit: The bloodfin swallows the target.\
    \ The swallowed creature is no longer [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ but is [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded) and [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained).\
    \ It has total cover against attacks and other effects outside the bloodfin, it\
    \ takes 14 (4d6) necrotic damage at the start of each of its turns, and the\
    \ bloodfin regains hit points equal to the necrotic damage dealt. A bloodfin can\
    \ have only one creature swallowed at a time.\n\nIf the bloodfin takes 30 damage\
    \ or more on a single turn from the swallowed creature, the bloodfin must succeed\
    \ on a DC 15 Constitution saving throw at the end of that turn or regurgitate\
    \ the creature, which falls [prone](/3-Mechanics/CLI/rules/conditions.md#prone)\
    \ in a space within 5 feet of the bloodfin and is no longer [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)\
    \ or [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained) by it."
  "name": "Swallow"
"source":
- "CRCotN"
"image": "/3-Mechanics/CLI/bestiary/aberration/token/slithering-bloodfin-crcotn.webp"
```
^statblock