---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
aliases: ["Chapped Brute"]
---
# [Chapped Brute](3-Mechanics\CLI\bestiary\humanoid/chapped-brute-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 67*  

> [!quote]-  
> 
> The callused skin of the merchant's hulking bodyguard ripples as if something beneath is trying to wriggle free.

## Salvage

Chapped brutes rarely carry treasure or equipment unless doing so as instructed by their master. An accomplished leatherworker can fashion the callused skin of a chapped brute into+1 armor—leather, studded leather, or hide—that grants the wearer resistance to necrotic damage and doesn't require attunement. This armor takes 10 extra days of work to fashion, and magical components worth 100 gp must be expended in its creation.

## Lore

- **DC 10 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** The magical and alchemical process that creates these brutes leaves them resistant to necrotic damage.  
- **DC 15 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** These beings are so volatile because of their creation process that when they are killed, they have a chance to transform into larger, deadlier forms.  
- **DC 20 Wisdom ([Medicine](/3-Mechanics/CLI/rules/skills.md#Medicine)).** The final form of the chapped brute has a life force that fluctuates, so that it randomly gains and loses life force every few seconds.  

> [!note] GM Advice
> 
> You can use any chapped brute form as part of an encounter. You can also build encounters in which one chapped brute transforms into one or both of its larger forms. To do so, treat each form as a separate monster. Transformation can take up to 1 minute, allowing you to stagger the encounters, but it can occur as quickly as you need it to for your game.
^gm-advice

```statblock
"name": "Chapped Brute (GHLoE)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any Non-Good alignment"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "95"
"hit_dice": "10d8 + 50"
"stats":
- !!int "18"
- !!int "12"
- !!int "20"
- !!int "7"
- !!int "10"
- !!int "7"
"speed": "30 ft."
"skillsaves":
  "Athletics": !!int "6"
"damage_resistances": "necrotic"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": "understands one language but can't speak"
"cr": "4"
"traits":
- "desc": "The chapped brute has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on hearing. While [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened),\
    \ the brute can't use its blindsight."
  "name": "Keen Hearing"
"actions":
- "desc": "The chapped brute makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11\
    \ (2d6 + 4) bludgeoning damage."
  "name": "Slam"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/chapped-brute-ghloe.webp"
```
^statblock