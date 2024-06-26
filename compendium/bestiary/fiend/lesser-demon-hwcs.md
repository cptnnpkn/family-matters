---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
aliases: ["Lesser Demon"]
---
# [Lesser Demon](3-Mechanics\CLI\bestiary\fiend/lesser-demon-hwcs.md)
*Source: Humblewood Campaign Setting p. 184*  

For those still new to the art of summoning, a fumbled attempt to conjure forth an entity of great power often results in the appearance of a lesser demon in its place. These beings are lowly, vexing creatures, eager to sow discord wherever they have been called.

## Vile and Malicious

While there are all manner of devils and demons that seek to terrorize the good folk of the world, others are more off-putting and disgusting—an embarrassing blunder for the fledgling witch or wizard whose invocation went awry. Although not particularly powerful, lesser demons can still pose a serious threat to inexperienced conjurors and unsuspecting civilians.

```statblock
"name": "Lesser Demon (HWCS)"
"size": "Small"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "4d6 + 8"
"stats":
- !!int "11"
- !!int "15"
- !!int "14"
- !!int "5"
- !!int "8"
- !!int "3"
"speed": "30 ft."
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Abyssal"
"cr": "1"
"traits":
- "desc": "The demon makes two attacks, one with its bite and one with its claws."
  "name": "Multiattack"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) slashing damage."
  "name": "Claws"
- "desc": "The demon emits a cloud of poisonous gas that fills a 20-foot sphere and\
    \ persists for 1 minute until it disperses into the surrounding air. The cloud\
    \ spreads around corners, and the affected area is heavily obscured. Any creature\
    \ that is completely within the cloud at the start of its turn must make a DC\
    \ 11 Constitution saving throw against the poison. On a failed save, the creature\
    \ spends its action on that turn retching and reeling. Creatures immune to poison\
    \ are immune to this effect. A moderate wind (at least 10 miles per hour) disperses\
    \ the cloud after 4 rounds. A strong wind (at least 20 miles per hour) will disperse\
    \ it after 1 round."
  "name": "Foul Odor (1/day)"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/lesser-demon-hwcs.webp"
```
^statblock