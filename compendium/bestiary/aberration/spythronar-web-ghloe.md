---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Spythronar Web"]
---
# [Spythronar Web](3-Mechanics\CLI\bestiary\aberration/spythronar-web-ghloe.md)
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
"name": "Spythronar Web (GHLoE)"
"size": "Large"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "65"
"hit_dice": "10d10 + 10"
"stats":
- !!int "17"
- !!int "16"
- !!int "13"
- !!int "3"
- !!int "8"
- !!int "1"
"speed": "30 ft., climb 30 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"damage_immunities": "lightning"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned), [prone](/3-Mechanics/CLI/rules/conditions.md#prone),\
  \ [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)"
"senses": "tremorsense 60 ft. (blind beyond this radius), passive Perception 9"
"languages": ""
"cr": "2"
"traits":
- "desc": "The spythronar web adheres to anything that touches it. To avoid adhering\
    \ when touching the web, a creature must succeed on a DC 13 Strength saving throw,\
    \ but a creature hit by the web's crush attack doesn't receive a saving throw.\
    \ A Huge or smaller creature adhered to the web is also [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ by it (escape DC 13). If adhered to a target larger than it can grapple, the\
    \ web can release the adhesive or remain adhered and be dragged along as the target\
    \ moves. Neither choice requires an action from the web. Removing an object adhered\
    \ to the web or the web from anything it's adhered to requires a successful DC\
    \ 13 Strength ([Athletics](/3-Mechanics/CLI/rules/skills.md#Athletics)) check\
    \ as an action."
  "name": "Adhesive"
- "desc": "The spythronar web can move through a space as narrow as 1 inch wide without\
    \ squeezing."
  "name": "Amorphous"
- "desc": "While the spythronar web remains motionless and takes no action, it is\
    \ indistinguishable from a large, thick spider web."
  "name": "False Appearance"
- "desc": "A spythronar web can climb difficult surfaces, including upside down on\
    \ ceilings, without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "While in contact with a web, the spythronar web knows the exact location\
    \ of any other creature in contact with the same web."
  "name": "Web Sense"
- "desc": "The spythronar web ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 10\
    \ (2d6 + 3) bludgeoning damage and Adhesive. The target is also [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ while [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) in this way,\
    \ and the spythronar web can't crush another target."
  "name": "Crush"
- "desc": "Melee Weapon Attack: +5 to hit, reach 30 ft., one target. Hit: 9\
    \ (2d8) lightning damage. If the spythronar web has a creature [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ and attacks another target, the [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ creature also takes this damage."
  "name": "Lightning Surge"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/aberration/token/spythronar-web-ghloe.webp"
```
^statblock