---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mcv4ec
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey
statblock: inline
aliases: ["Faerie Pest"]
---
# [Faerie Pest](3-Mechanics\CLI\bestiary\fey/faerie-pest-mcv4ec.md)
*Source: Monstrous Compendium Volume 3: 4: Eldraine Creatures*  

Faerie pests love to cause annoyance, fear, and pain. They are perhaps the most mercurial of the faeries and are happy to follow anyone who promises the opportunity to menace someone new.

A faerie pest could be mistaken for a human toddler, except for the black-feathered wings sprouting from the faerie's shoulders. When engaged in combat, faerie pests wield thought-manipulating magic alongside sharp blades coated in stinging poison.

> [!quote]-  
> 
> Tarry not in Tuinvale,
> 
> Ignore the flowers' heady scents.
> 
> Take no thing, stay to the trail,
> 
> Lest the fae seek recompense.

## Faeries

The faeries of Eldraine are winged, elfin creatures similar to sprites or pixies. Unpredictable, unreliable, and amoral, they lurk in the wilds and harass travelers they perceive as intruders.

> [!note] Ouphes
> 
> Ouphes are curious creatures found throughout the wilds of Eldraine. While often seen as foolish, ouphes are magically connected to the natural world and know more about the secret lives of trees, mushrooms, and moss than most mortals. While ouphes are related to Eldraine's faeries, the faeries treat them like distant (and somewhat embarrassing) cousins. Ouphes can be represented with the stat blocks for pixies or sprites.
^ouphes

```statblock
"name": "Faerie Pest (MCV4EC)"
"size": "Small"
"type": "fey"
"alignment": "typically  Chaotic Evil"
"ac": !!int "14"
"ac_class": "[leather armor](/3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "22"
"hit_dice": "5d6 + 5"
"stats":
- !!int "8"
- !!int "16"
- !!int "12"
- !!int "10"
- !!int "12"
- !!int "14"
"speed": "30 ft., fly 30 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Sylvan"
"cr": "1"
"traits":
- "desc": "The faerie casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 12):\n\n1/day:\
    \ [blindness/deafness](/3-Mechanics/CLI/spells/blindness-deafness.md)\n\n2/day\
    \ each: [bane](/3-Mechanics/CLI/spells/bane.md), [grease](/3-Mechanics/CLI/spells/grease.md)"
  "name": "Spellcasting"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage plus 5 (2d4) poison damage. If the faerie had advantage\
    \ on the attack roll, the target takes an additional 3 (1d6) slashing damage."
  "name": "Stingblade"
- "desc": "The faerie unleashes a burst of mind-muddling magic in a 15-foot cone.\
    \ Each creature in that area must succeed on a DC 12 Intelligence saving throw\
    \ or have the [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened) condition\
    \ for 1 minute. A [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Theft of Nerves (1/Day)"
"bonus_actions":
- "desc": "The faerie takes the Hide action."
  "name": "Mischievous Stealth"
"source":
- "MCV4EC"
"image": "/3-Mechanics/CLI/bestiary/fey/token/faerie-pest-mcv4ec.webp"
```
^statblock