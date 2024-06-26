---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
- ttrpg-cli/monster/type/humanoid/elemental
statblock: inline
aliases: ["Panjaian Ilharan"]
---
# [Panjaian Ilharan](3-Mechanics\CLI\bestiary\humanoid/panjaian-ilharan-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 96*  

> [!quote]-  
> 
> Instilled with the power of the Primordials, panjaians are literal forces of nature.

## Salvage

Someone who has proficiency in [Medicine](/3-Mechanics/CLI/rules/skills.md#Medicine) can attempt a DC 13 Wisdom ([Medicine](/3-Mechanics/CLI/rules/skills.md#Medicine)) check to remove a panjaian's heart intact. Somebody who has proficiency with alchemist's supplies can treat the heart with reagents worth 100 gp in a process that takes 3 days and a successful DC 13 Intelligence or Wisdom check. This process, if successful, hardens the heart into an elemental gem: blue sapphire for ilharan, yellow diamond for citrolachi, red corundum for morakeshi, and emerald for alondon. What this process creates when used on the heart of a panjaian gormadraugon is unknown. History records no such act. (A gem of brightness is a good possibility, however.)

## Lore

- **DC 13 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)).** Panjaians first appeared near the end of the Primordial's war with the gods. Some scholars believe if panjaians had been created earlier, it might have changed the conflict's outcome.  
- **DC 13 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** Every panjaian has an affinity for the element of their Primordial patron. This affinity manifests in resistances, control over the element, and the ability to wield that element as a weapon.  

```statblock
"name": "Panjaian Ilharan (GHLoE)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race, elemental"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"stats":
- !!int "10"
- !!int "16"
- !!int "13"
- !!int "12"
- !!int "15"
- !!int "13"
"speed": "30 ft., fly 30 ft."
"saves":
  "Dexterity": !!int "5"
"skillsaves":
  "Sleight of Hand": !!int "5"
  "Deception": !!int "3"
  "Stealth": !!int "5"
  "Perception": !!int "4"
  "Acrobatics": !!int "5"
"damage_resistances": "lightning, thunder"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Primordial and two other languages"
"cr": "3"
"traits":
- "desc": "The panjaian ilharan's innate spellcasting ability is Wisdom (spell save\
    \ DC 12). It can innately cast the following spells, requiring no material components:\n\
    \nAt will: [mage hand](/3-Mechanics/CLI/spells/mage-hand.md) (the hand is\
    \ invisible)\n\n3/day each: [gust of wind](/3-Mechanics/CLI/spells/gust-of-wind.md),\
    \ [invisibility](/3-Mechanics/CLI/spells/invisibility.md) (self only)"
  "name": "Innate Spellcasting"
- "desc": "The panjaian ilharan can take a bonus action to choose up to four objects\
    \ it can see within 60 feet of it. These objects can't be carried or worn by another\
    \ creature, and they can weigh up to 5 pounds combined. Those objects fly up to\
    \ 60 feet toward the ilharan, delivered into its hands or open containers, such\
    \ as sheathes, once within 5 feet."
  "name": "Returning Wind"
"actions":
- "desc": "The panjaian ilharan makes four dagger attacks. It can draw the daggers\
    \ as part of this action."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
  "name": "Dagger"
- "desc": "The panjaian ilharan unleashes lightning, thunder, and strong wind in a\
    \ 15-foot cone. Each creature in that area must make a DC 13 Constitution saving\
    \ throw, taking 6 (2d4 + 1) lightning damage and 6 (2d4 + 1) thunder damage\
    \ on a failed save, or half as much damage on a successful one. Those who fail\
    \ the saving throw are also pushed up to 15 feet to the edge of the area."
  "name": "Storm Wave (Recharge 5-6)"
- "desc": "The panjaian ilharan touches up to four willing creatures. Each target\
    \ gains a flying speed of 30 feet for 1 hour. When the effect ends, the target\
    \ descends at 60 feet per round for 1 minute, taking no falling damage and landing\
    \ on its feet if on the ground after that minute."
  "name": "Gift of Flight (1/Day)"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/panjaian-ilharan-ghloe.webp"
```
^statblock