---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Spythronar Swarm"]
---
# [Spythronar Swarm](3-Mechanics\CLI\bestiary\aberration/spythronar-swarm-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 32*  

> [!quote]-  
> 
> Armored corpses in the cavern, resting among thick strands of webbing, have sparks of lightning playing off them.

## Salvage

Spythronar silk is prized, although it's worthless if acid or fire touched the web. One web can be used to make silk rope or fine clothing. A proficient alchemist can use the same amount of silk to produce a [potion of lightning resistance](/3-Mechanics/CLI/items/potion-of-lightning-resistance.md) or a dose of an oil that allows a metal weapon to deal `1d6` extra lightning damage for 1 hour. Producing either concoction takes 4 hours of work and a successful DC 13 Intelligence check.

A proficient weaver can turn three spythronar webs into a rope of entanglement or 10 webs into leather armor of lightning resistance. Doing either requires other materials worth 500 gp, 5 days of work, and a successful DC 15 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)) check.

## Lore

- **DC 10 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** Spythronar swarms can weave dangerous webbing, making egg sacs quickly. It takes them some time to weave a sentient web.  
- **DC 15 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** The sentient spythronar webs adhere to you if you touch them, and they charge their silken strands with lightning. Crushing spythronar egg sacs sets off a lightning discharge, but hitting them with lightning releases a new spythronar swarm.  

```statblock
"name": "Spythronar Swarm (GHLoE)"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "45"
"hit_dice": "10d8"
"stats":
- !!int "5"
- !!int "17"
- !!int "10"
- !!int "3"
- !!int "11"
- !!int "3"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "5"
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "lightning"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [prone](/3-Mechanics/CLI/rules/conditions.md#prone),\
  \ [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained), [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)"
"senses": "darkvision 60 ft., tremorsense 30 ft., passive Perception 10"
"languages": ""
"cr": "2"
"traits":
- "desc": "The spythronar swarm can use a bonus action to take the Hide action."
  "name": "Furtive"
- "desc": "The spythronar swarm can climb difficult surfaces, including upside down\
    \ on ceilings, without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "The spythronar swarm can occupy another creature's space and vice versa,\
    \ and the swarm can move through any opening large enough for a Tiny arachnid.\
    \ The swarm can't regain hit points or gain temporary hit points."
  "name": "Swarm"
- "desc": "While in contact with a web, the spythronar swarm knows the exact location\
    \ of any other creature in contact with the same web."
  "name": "Web Sense"
- "desc": "The spythronar swarm ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 0 ft., one creature in the swarm's\
    \ space. Hit: 10 (4d4) piercing damage and 9 (2d8) lightning damage, or\
    \ 5 (2d4) piercing damage and 4 (1d8) lightning damage if the swarm has half\
    \ of its hit points or fewer."
  "name": "Bites"
- "desc": "The spythronar swarm weaves webbing, covering a 5-foot square. The swarm\
    \ can then give up 1 hit point to create a spythronar sac in that space. If the\
    \ swarm's webbing covers a 10-foot square, it can give up 23 hit points as part\
    \ of the same action, creating a spythronar web with the same number of hit points.\
    \ The swarm can't drop to 0 hit points to create a sac or web.\n\nIf the swarm\
    \ weaves an incomplete web, that web is a normal web rather than a sentient, monstrous\
    \ one. A creature that enters this normal web's space must succeed on a DC 10\
    \ Strength saving throw or become [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 10) and [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ while [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) in this way.\
    \ Each 5-foot square of this web has AC 10; the damage vulnerabilities, immunities,\
    \ and resistances of a spythronar web; and 5 hit points."
  "name": "Weave (4/Day)"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/aberration/token/spythronar-swarm-ghloe.webp"
```
^statblock