---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mismv1
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Sheldon the Blueberry Dragon"]
---
# [Sheldon the Blueberry Dragon](3-Mechanics\CLI\bestiary\npc/sheldon-the-blueberry-dragon-mismv1.md)
*Source: Misplaced Monsters: Volume 1 p. 14*  

> [!note]
> Created by Samuel B.

Sheldon is a friendly, good-natured dragon who collects and eats blueberries. When he's not attending parties, he lives in Wildspace. His body magically produces air, allowing him to thrive in a vacuum and create powerful gusts of wind. Sheldon uses the wind to knock down foes and propel himself farther than his wings can take him on their own.

```statblock
"name": "Sheldon the Blueberry Dragon (MisMV1)"
"size": "Large"
"type": "dragon"
"alignment": "Neutral Good"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"stats":
- !!int "19"
- !!int "13"
- !!int "18"
- !!int "17"
- !!int "14"
- !!int "16"
"speed": "30 ft., fly 60 ft."
"saves":
  "Dexterity": !!int "4"
  "Intelligence": !!int "6"
  "Constitution": !!int "7"
"skillsaves":
  "Athletics": !!int "7"
  "Performance": !!int "6"
  "Acrobatics": !!int "7"
"damage_resistances": "force, psychic"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 12"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "7"
"traits":
- "desc": "Sheldon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 14):\n\nAt\
    \ will: [light](/3-Mechanics/CLI/spells/light.md), [mage hand](/3-Mechanics/CLI/spells/mage-hand.md)\
    \ (the hand is invisible)\n\n1/day each: [dimension door](/3-Mechanics/CLI/spells/dimension-door.md),\
    \ [telekinesis](/3-Mechanics/CLI/spells/telekinesis.md)"
  "name": "Spellcasting (Psionics)"
- "desc": "Sheldon can breathe normally in a vacuum."
  "name": "Space Dweller"
"actions":
- "desc": "Sheldon makes either two Bite attacks, two Blueberry Fling attacks, or\
    \ one of each."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage plus 4 (1d8) psychic damage."
  "name": "Bite"
- "desc": "Ranged Weapon Attack: +7 to hit, range 30 ft., one creature. Hit:\
    \ 11 (2d6 + 4) blueberry damage."
  "name": "Blueberry Fling"
- "desc": "Sheldon exhales a line of magical wind that is 60 feet long and 5 feet\
    \ wide. Each creature in that area must make a DC 15 Strength saving throw. On\
    \ a failed save, the creature takes 21 (6d6) force damage, is pushed 15 feet\
    \ away from Sheldon, and has the [prone](/3-Mechanics/CLI/rules/conditions.md#prone)\
    \ condition. On a successful save, the creature takes half as much damage only."
  "name": "Jetstream Breath (Recharge 5-6)"
"bonus_actions":
- "desc": "Sheldon summons a powerful gust of wind and flies up to his speed. This\
    \ movement doesn't provoke opportunity attacks. At the end of this movement, each\
    \ creature within 5 feet of Sheldon must succeed on a DC 15 Strength saving throw\
    \ or have the [prone](/3-Mechanics/CLI/rules/conditions.md#prone) condition, as\
    \ the wind bursts around Sheldon."
  "name": "Wind Dash (2/Day)"
"source":
- "MisMV1"
"image": "/3-Mechanics/CLI/bestiary/npc/token/sheldon-the-blueberry-dragon-mismv1.webp"
```
^statblock