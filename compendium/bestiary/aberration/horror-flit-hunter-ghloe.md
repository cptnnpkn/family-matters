---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Horror Flit Hunter"]
---
# [Horror Flit Hunter](3-Mechanics\CLI\bestiary\aberration/horror-flit-hunter-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 50*  

> [!quote]-  
> 
> If you see fast movement in the trees, run. It might not be enough, but it could be all you can do.

## Salvage

The reaction of most folks who have encountered a horror flit is, "Burn it with fire!" But a handful of naturalists seek out these creatures for a variety of purposes, paying handsomely for samples. Bounties for these creatures in urban areas range from 10 to 100 gp.

## Lore

- **DC 10 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** A horror flit has no eyes, but they sense their prey by means of vibrations in the air or in the water. They breed by infesting the flesh of their prey.  
- **DC 15 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** The largest of these creatures, called "breeders" by most, can spit out swarms of their young, especially when the breeder instinctively feels it might die. The creature normally reproduces more slowly, vomiting a new swarm every few days.  

```statblock
"name": "Horror Flit Hunter (GHLoE)"
"size": "Small"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "10d6 + 10"
"stats":
- !!int "11"
- !!int "18"
- !!int "12"
- !!int "3"
- !!int "10"
- !!int "4"
"speed": "40 ft., climb 40 ft., swim 40 ft."
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "2"
"traits":
- "desc": "The horror flit hunter can breathe air and water."
  "name": "Amphibious"
- "desc": "When the horror flit hunter kills a Small or larger creature, a new horror\
    \ flit swarm emerges from the corpse 1d4 hours later."
  "name": "Breed"
- "desc": "The horror flit hunter can climb difficult surfaces, including upside down\
    \ on ceilings, without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "The horror flit hunter makes two bite attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4\
    \ + 4) piercing damage."
  "name": "Bite"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/aberration/token/horror-flit-hunter-ghloe.webp"
```
^statblock