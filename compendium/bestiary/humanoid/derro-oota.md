---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/oota
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/derro
statblock: inline
aliases: ["Derro"]
---
# [Derro](3-Mechanics\CLI\bestiary\humanoid/derro-oota.md)
*Source: Out of the Abyss p. 224*  

The derro are degenerate Underdark humanoids that resemble small dwarves. Cruel and insane, they take delight in tormenting others—even their own kind.

Derro have blue-gray skin and straight hair that is white or yellow in color. Their uniformly pale white eyes lack both irises and pupils.

## Unnatural Origin

Derro believe they were created by their god, Diirinka, but they are actually the result of cruel experiments on dwarves by mind flayers. Like duergar, the derro were a slave race to the mind flayers, but eventually freed themselves.

## Born to Madness

The process of their creation rendered the derro irrevocably insane. They cooperate with each other only out of necessity and when riled up by a charismatic leader.

## Life of Attrition

Derro can live to be one hundred and fifty years old, but they mature and breed quickly. When their elders deem that their numbers are becoming unmanageable, the derro declare war on some other race and surge forth in a reckless horde, fighting until their population dwindles to a tolerable size. These ghastly purges weed out the weak among the derro and are referred to as "Uniting Wars."

## Second-Class Citizens

Derro create no settlements of their own. Instead, they form small, isolated enclaves in non-derro settlements throughout the Underdark, where they are treated as vermin or slaves. Their own cutthroat politics prevent the derro from mounting any effective resistance against such exploitation.

## Derro Weapons

The derro wield special weapons. They use a hooked shortspear, which is a martial melee weapon that deals `1d4` piercing damage, weighs 2 pounds, and has the light weapon property (see chapter 5, "Equipment," of the Player's Handbook). It doesn't possess the thrown or versatile weapon properties of a normal spear. On a hit with this weapon, the wielder can forgo dealing damage and attempt to trip the target, in which case the target must succeed on a Strength saving throw or fall [prone](/3-Mechanics/CLI/rules/conditions.md#prone). The DC is 8 + the wielder's Strength modifier + the wielder's proficiency bonus.

The derro also use a [light repeating crossbow](/3-Mechanics/CLI/items/light-repeating-crossbow-oota.md) fitted with a cartridge that can hold up to six crossbow bolts. This weapon is similar to a light crossbow except that it has half the range (40/160 feet) and doesn't have the loading property. It automatically reloads after firing until it runs out of ammunition. Reloading the cartridge takes an action.

```statblock
"name": "Derro (OotA)"
"size": "Small"
"type": "humanoid"
"subtype": "derro"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "[leather armor](/3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"stats":
- !!int "9"
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "5"
- !!int "9"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "4"
"senses": "darkvision 120 ft., passive Perception 7"
"languages": "Dwarvish, Undercommon"
"cr": "1/4"
"traits":
- "desc": "The derro has advantage on saving throws against being [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ or [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)."
  "name": "Insanity"
- "desc": "The derro has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "While in sunlight, the derro has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception)) checks\
    \ that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 (1d4\
    \ - 1) piercing damage. If the target is a creature, the derro can choose to\
    \ deal no damage and try to trip the target instead, in which case the target\
    \ must succeed on a DC 9 Strength saving throw or fall [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Hooked Shortspear"
- "desc": "Ranged Weapon Attack: +4 to hit, range 40/160 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Light Repeating Crossbow"
"source":
- "OotA"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/derro-oota.webp"
```
^statblock