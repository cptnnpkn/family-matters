---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Garmyr"]
---
# [Garmyr](3-Mechanics\CLI\bestiary\monstrosity/garmyr-dodk.md)
*Source: Dungeons of Drakkenheim p. 197*  

Once thought to be related to gnolls, garmyr are bipedal canids unique to the Haze-ridden ruins of Drakkenheim. Often covered in thick fur, their colouration and features vary from hound-like to wolf-like, but all bear sharp teeth and claws. They form hyper-aggressive and predatory warpacks equipped with weapons taken from the many failed military attempts to reclaim the city. These beasts revel in their countless battles with adventurers and the Hooded Lanterns. The garmyr warpacks have made the Inner City their hunting ground, but have been sighted roving the countryside with increasing frequency. They live for the thrill of the hunt, and mock and taunt their prey as they chase them down. Though the warpacks are prone to infighting, a massive beast known as the [Lord of the Feast](/3-Mechanics/CLI/bestiary/monstrosity/lord-of-the-feast-dodk.md) rules the garmyr as their overlord, master, and god.

```statblock
"name": "Garmyr (DoDk)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "[hide armor](/3-Mechanics/CLI/items/hide-armor.md), [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "6"
- !!int "10"
- !!int "7"
"speed": "30 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Gnoll"
"cr": "1/2"
"traits":
- "desc": "When the garmyr reduces a creature to 0 hit points with a melee attack\
    \ on its turn, the garmyr can take a bonus action to move up to half its speed\
    \ and make a bite attack."
  "name": "Rampage"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4\
    \ (1d4 + 2) piercing damage."
  "name": "Bite"
- "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing\
    \ damage if used with two hands to make a melee attack."
  "name": "Spear"
- "desc": "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit:\
    \ 5 (1d8 + 1) piercing damage."
  "name": "Longbow"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/garmyr-dodk.webp"
```
^statblock