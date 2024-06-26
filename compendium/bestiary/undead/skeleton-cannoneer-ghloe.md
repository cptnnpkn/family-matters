---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Skeleton Cannoneer"]
---
# [Skeleton Cannoneer](3-Mechanics\CLI\bestiary\undead/skeleton-cannoneer-ghloe.md)
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
"name": "Skeleton Cannoneer (GHLoE)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "14"
"ac_class": "rotting buff coat"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "12"
- !!int "16"
- !!int "15"
- !!int "8"
- !!int "13"
- !!int "5"
"speed": "30 ft."
"skillsaves":
  "Perception": !!int "3"
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "understands languages it knew in life but can't speak"
"cr": "2"
"traits":
- "desc": "The cannon and pistol a skeleton cannoneer uses are nonfunctional as ranged\
    \ weapons for a creature other than a skeleton cannoneer. For the skeleton cannoneer,\
    \ the pistol never needs to be reloaded."
  "name": "Dead Firearms"
"actions":
- "desc": "The skeleton cannoneer loads the dead cannon."
  "name": "Load"
- "desc": "The skeleton cannoneer fires its loaded cannon at a point it can see within\
    \ 500 feet of it, but no closer than 50 feet from it. Each creature within 15\
    \ feet of that point must make a DC 13 Dexterity saving throw, taking 7 (2d6)\
    \ bludgeoning damage and 7 (2d6) necrotic damage on a failed save, or half as\
    \ much damage on a successful one.\n\nAlternatively, the cannoneer can choose\
    \ the cannon as the point of fire. Doing so means the shot goes off inside the\
    \ cannon, destroying it and increasing each type of damage by 3 (1d6)."
  "name": "Dead Cannon"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage and 3 (1d6) necrotic damage."
  "name": "Pistol Club"
- "desc": "Ranged Weapon Attack: +5 to hit, range 30/90 ft., one target. Hit:\
    \ 8 (1d10 + 3) piercing damage plus 3 (1d6) necrotic damage."
  "name": "Dead Pistol"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/undead/token/skeleton-cannoneer-ghloe.webp"
```
^statblock