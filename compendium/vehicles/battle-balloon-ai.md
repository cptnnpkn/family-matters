---
obsidianUIMode: preview
cssclasses: json5e-vehicle
tags:
- compendium/src/5e/ai
- ttrpg-cli/vehicle/size/gargantuan
- ttrpg-cli/vehicle/terrain/air
- ttrpg-cli/vehicle/type/ship
aliases: ["Battle Balloon"]
---
# Battle Balloon
%%-- Embedded content starts on the next line. --%%
*Source: Acquisitions Incorporated p. 218*  

```ad-statblock
title: Battle Balloon
*Gargantuan vehicle (80 ft. by 20 ft.); air*

- **Creature Capacity** 20 crew, 10 passengers
- **Cargo Capacity** 1 ton
- **Travel Pace** 9 miles per hour (216 miles per day)
- *Speed* 90 ft. ^[Based on _Special Travel Pace_, DMG p242]

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|17 (+3)|20 (+5)| 0 (-5)| 0 (-5)| 0 (-5)|


## Actions

On its turn the battle balloon can take 3 actions if it has twenty or more crew, 2 actions if it has ten or more crew, or 1 action if it has fewer than ten crew, choosing from the options below. It cannot take any actions if it has no remaining crew.

- **Fire Ballista.** The battle balloon can fire its harpoon guns.  
- **Fire Green Flame Arbalester.** The battle balloon can fire its green flame arbalester.  
- **Move.** The battle balloon can use its helm to move using its propeller. If the battle balloon enters a Large or smaller creature's space, that creature is automatically pushed to the edge of the battle balloon's space. The creature must also succeed on a DC 15 Dexterity saving throw or take 5 (`1d10`) bludgeoning damage.  
- **Harpoon Haul.** The battle balloon can pull each target [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) by it up to 30 feet toward the battle balloon.  

## Hull

- **Armor Class** 15
- **Hit Points** 500 (damage threshold 15)

## Control: Helm

- **Armor Class** 18
- **Hit Points** 50

Move up to the speed of the ship's propeller, with one 90-degree turn. If the helm is destroyed, the ship can't turn.

## Control: Balloon

- **Armor Class** 12
- **Hit Points** 75

If its balloon is destroyed, a battle balloon cannot maintain altitude.

## Movement: Propeller

- **Armor Class** 12
- **Hit Points** 100; -5 ft. speed per 25 damage taken
- **Speed (air).** 80 ft.; 50 ft. while flying into the wind; 100 ft. while flying with the wind

## Weapon: Green Flame Arbalester

- **Armor Class** 15
- **Hit Points** 75

*Ranged Weapon Attack:* `+8` to hit, range 200/800 ft. (can't hit targets within 60 ft. of it) one target. *Hit:* 16 (`3d10`) piercing damage and 22 (`4d10`) fire damage. If the attack misses, the DM determines where the arbalester bolt hits. Each creature within 10 feet of that spot must make a DC 15 Dexterity saving throw to avoid the bolt as it shatters, taking 5 (`1d10`) piercing damage and 5 (`1d10`) fire damage on a failed save.

## Weapon: Harpoon Gun (3)

- **Armor Class** 15
- **Hit Points** 50

*Ranged Weapon Attack:* `+8` to hit, range 120/480 ft., one target. *Hit:* 11 (`2d10`) piercing damage, and the target is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) (escape DC 16). Until the grapple ends, the target's speed is halved, and it can't move farther away from the battle balloon. Each of the battle balloon's harpoon guns can grapple one target. While it has one or more targets [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) with its harpoon gun attack, the battle balloon's speed is not halved.
```
^statblock