---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/egw
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
aliases: ["Parson Pellinost"]
---
# [Parson Pellinost](3-Mechanics\CLI\bestiary\npc/parson-pellinost-egw.md)
*Source: Explorer's Guide to Wildemount p. 261*  

Commander Struther Felmont and the Dwendalian soldiers at the fort have grown callous and cruel under the leadership of Imperial Inquisitor Parson Pellinost, who conducts deranged experiments on the humanoids of the marsh with an unsavory and sadistic application of divine magic. The guards of Fort Venture engage in defense, training, and patrol work in eight-hour shifts. Few of those guards respect Pellinost, but all obey him for fear of strict retribution.

Pellinost has a prosthetic limb (right hand).

```statblock
"name": "Parson Pellinost (EGW)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "[chain shirt](/3-Mechanics/CLI/items/chain-shirt.md)"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "16"
- !!int "13"
"speed": "30 ft."
"skillsaves":
  "Medicine": !!int "7"
  "Religion": !!int "5"
  "Persuasion": !!int "3"
"senses": "passive Perception 13"
"languages": "any two languages"
"cr": "2"
"traits":
- "desc": "Pellinost is a 5th-level spellcaster. His spellcasting ability is Wisdom\
    \ (spell save DC 13, +5 to hit with spell attacks). Pellinost has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [light](/3-Mechanics/CLI/spells/light.md),\
    \ [sacred flame](/3-Mechanics/CLI/spells/sacred-flame.md), [spare the dying](/3-Mechanics/CLI/spells/spare-the-dying.md)\n\
    \n1st level (4 slots): [command](/3-Mechanics/CLI/spells/command.md), [cure\
    \ wounds](/3-Mechanics/CLI/spells/cure-wounds.md), [guiding bolt](/3-Mechanics/CLI/spells/guiding-bolt.md)\n\
    \n2nd level (3 slots): [lesser restoration](/3-Mechanics/CLI/spells/lesser-restoration.md),\
    \ [spiritual weapon](/3-Mechanics/CLI/spells/spiritual-weapon.md)\n\n3rd level\
    \ (2 slots): [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md), [revivify](/3-Mechanics/CLI/spells/revivify.md)"
  "name": "Spellcasting"
- "desc": "As a bonus action, Pellinost can expend a spell slot to cause its melee\
    \ weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target\
    \ on a hit. This benefit lasts until the end of the turn. If Pellinost expends\
    \ a spell slot of 2nd level or higher, the extra damage increases by 1d6 for\
    \ each level above 1st."
  "name": "Divine Eminence"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage."
  "name": "Mace"
"source":
- "EGW"
"image": "/3-Mechanics/CLI/bestiary/npc/token/parson-pellinost-egw.webp"
```
^statblock