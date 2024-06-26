---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Skeleton Commander"]
---
# [Skeleton Commander](3-Mechanics\CLI\bestiary\undead/skeleton-commander-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 87*  

> [!quote]-  
> 
> A line of skeletons marches into the town square with military precision. They raise rifles and take aim at the temple in unison.

## Salvage

Firearms recovered from skeleton troopers are nonfunctional, but parts of them might be useful. Each firearm recovered can reduce the cost of making a similar firearm by 10 percent, up to 50 percent.

## Lore

- **DC 10 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)).** Necromancers with advanced training and hefty resources can make skeletons that are linked in death to their firearms.  
- **DC 15 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)).** A commander leads some platoons of skeleton troopers. This skeleton directs the attacks and enhances the efficiency of its undead underlings.  

> [!note] GM Advice
> 
> Skeletal troopers are effective when used as minions in the army of a higher-level threat. Cinematic battles focused on sieges or large battles are perfect for troopers. In these cases, having the troopers immune to turning until their powerful leader is defeated prevents anticlimactic encounters.
^gm-advice

```statblock
"name": "Skeleton Commander (GHLoE)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "battered splint mail"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "11"
- !!int "12"
- !!int "14"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "3"
"skillsaves":
  "Insight": !!int "3"
  "Perception": !!int "3"
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "understands languages it knew in life but can't speak"
"cr": "3"
"actions":
- "desc": "The skeleton commander makes two pike attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8\
    \ (1d10 + 3) piercing damage and 5 (2d4) necrotic damage."
  "name": "Pike"
- "desc": "The skeleton commander makes one pike attack. The commander can use a bonus\
    \ action to direct another undead who can see or hear the commander to attack\
    \ the target the commander attacked this turn. That undead can use a reaction\
    \ to make the attack, adding the commander's proficiency bonus to the damage roll."
  "name": "Warlord Strike (Recharge 5-6)"
"reactions":
- "desc": "If an undead the skeleton commander can see within 30 feet of the commander\
    \ makes an attack roll or saving throw, the commander can brandish the tattered\
    \ banner on its pike. If the commander does so, the target can add a d4 to its\
    \ roll, provided it can see the commander and isn't receiving this benefit from\
    \ another commander."
  "name": "Brandish Standard"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/undead/token/skeleton-commander-ghloe.webp"
```
^statblock