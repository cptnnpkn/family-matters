---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mcv2dc
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Thanoi Hunter"]
---
# [Thanoi Hunter](3-Mechanics\CLI\bestiary\monstrosity/thanoi-hunter-mcv2dc.md)
*Source: Monstrous Compendium Volume 2: Dragonlance Creatures p. 12*  

Thanoi are walrus-like beings who dwell in the frozen wastelands of Krynn. They sport thick, ivory tusks, which they use both to defend themselves and to poke breathing holes in sea ice as they swim.

Often at odds with the monstrous creatures that live in the frozen wastes, thanoi are adept hunters. In addition to their tusks, they use harpoons on long ropes that they can quickly reel back. Groups of thanoi hunters work together to take down monsters far larger than themselves, including remorhazes and white dragons.

```statblock
"name": "Thanoi Hunter (MCV2DC)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Any alignment"
"ac": !!int "14"
"ac_class": "[hide armor](/3-Mechanics/CLI/items/hide-armor.md)"
"hp": !!int "32"
"hit_dice": "5d8 + 10"
"stats":
- !!int "18"
- !!int "14"
- !!int "15"
- !!int "12"
- !!int "16"
- !!int "11"
"speed": "30 ft., swim 30 ft."
"saves":
  "Strength": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "Athletics": !!int "6"
  "Perception": !!int "5"
  "Survival": !!int "5"
"damage_immunities": "cold"
"senses": "passive Perception 15"
"languages": "Aquan, Common"
"cr": "1"
"traits":
- "desc": "The hunter can hold its breath for up to 10 minutes."
  "name": "Hold Breath"
- "desc": "The hunter has advantage on an attack roll against a creature if at least\
    \ one of the hunter's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- "desc": "The hunter makes one Bone Harpoon attack and one Tusk attack."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 10 ft. or range 20/60\
    \ ft., one target. Hit: 8 (1d8 + 4) piercing damage. Hit or Miss: The harpoon\
    \ returns to the hunter's hand."
  "name": "Bone Harpoon"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d4\
    \ + 4) slashing damage."
  "name": "Tusk"
"source":
- "MCV2DC"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/thanoi-hunter-mcv2dc.webp"
```
^statblock