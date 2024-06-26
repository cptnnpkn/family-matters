---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/gos
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
aliases: ["Pirate Deck Wizard"]
---
# [Pirate Deck Wizard](3-Mechanics\CLI\bestiary\humanoid/pirate-deck-wizard-gos.md)
*Source: Ghosts of Saltmarsh p. 248*  

These salt-encrusted practitioners of magic are at once learned and superstitious. The crews of pirate ships generally give their deck wizards a wide berth, as they magically step from place to place and unleash their briny magic against attackers. The ship Sea Ghost in The Sinister Secret of Saltmarsh is home to a pirate deck wizard named Punketah.

```statblock
"name": "Pirate Deck Wizard (GoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with [mage armor](/3-Mechanics/CLI/spells/mage-armor.md)"
"hp": !!int "32"
"hit_dice": "5d8 + 10"
"stats":
- !!int "10"
- !!int "14"
- !!int "14"
- !!int "16"
- !!int "13"
- !!int "11"
"speed": "30 ft."
"skillsaves":
  "Perception": !!int "3"
  "Arcana": !!int "5"
"senses": "passive Perception 13"
"languages": "any one language (usually Common)"
"cr": "1"
"traits":
- "desc": "The deck wizard is a 4th-level spellcaster. Its spellcasting ability is\
    \ Intelligence (spell save DC 13, +5 to hit with spell attacks). It has the\
    \ following wizard spells prepared:\n\nCantrips (at will): [friends](/3-Mechanics/CLI/spells/friends.md),\
    \ [mage hand](/3-Mechanics/CLI/spells/mage-hand.md), [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md),\
    \ [ray of frost](/3-Mechanics/CLI/spells/ray-of-frost.md)\n\n1st level (4 slots):\
    \ [disguise self](/3-Mechanics/CLI/spells/disguise-self.md), [fog cloud](/3-Mechanics/CLI/spells/fog-cloud.md),\
    \ [mage armor](/3-Mechanics/CLI/spells/mage-armor.md), [witch bolt](/3-Mechanics/CLI/spells/witch-bolt.md)\n\
    \n2nd level (3 slots): [gust of wind](/3-Mechanics/CLI/spells/gust-of-wind.md),\
    \ [Melf's acid arrow](/3-Mechanics/CLI/spells/melfs-acid-arrow.md), [misty step](/3-Mechanics/CLI/spells/misty-step.md)"
  "name": "Spellcasting"
- "desc": "The deck wizard has advantage on ability checks and saving throws to resist\
    \ being knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Sea Legs"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage."
  "name": "Quarterstaff"
"source":
- "GoS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/pirate-deck-wizard-gos.webp"
```
^statblock