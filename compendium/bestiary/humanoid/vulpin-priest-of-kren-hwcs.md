---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/vulpin
statblock: inline
aliases: ["Vulpin Priest of Kren"]
---
# [Vulpin Priest of Kren](3-Mechanics\CLI\bestiary\humanoid/vulpin-priest-of-kren-hwcs.md)
*Source: Humblewood Campaign Setting p. 207*  

Priests of the Amaranthine Kren tend shrines in her honor, and share stories of her guile and cunning with visitors. These tales emphasize humility, wariness, and teach listeners to keep their wits about them at all times. In rare cases, these priests are given divine gifts by their Amaranthine. Conferred a portion of Kren's supernatural slyness, they often seek to humble those who have grown too proud.

```statblock
"name": "Vulpin Priest of Kren (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "vulpin"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "[chain shirt](/3-Mechanics/CLI/items/chain-shirt.md)"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "15"
- !!int "16"
- !!int "13"
"speed": "30 ft."
"skillsaves":
  "Medicine": !!int "7"
  "Religion": !!int "5"
  "Persuasion": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Birdfolk, Celestial, Vulpin"
"cr": "2"
"traits":
- "desc": "The priest is a 5th level spellcaster, their spellcasting ability is Wisdom\
    \ (spell save DC 13, +5 to hit with spell attacks). The priest has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [light](/3-Mechanics/CLI/spells/light.md),\
    \ [sacred flame](/3-Mechanics/CLI/spells/sacred-flame.md), [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy.md)\n\
    \n1st level (4 slots): [cure wounds](/3-Mechanics/CLI/spells/cure-wounds.md),\
    \ [disguise self](/3-Mechanics/CLI/spells/disguise-self.md), [guiding bolt](/3-Mechanics/CLI/spells/guiding-bolt.md)\n\
    \n2nd level (3 slots): [lesser restoration](/3-Mechanics/CLI/spells/lesser-restoration.md),\
    \ [mirror image](/3-Mechanics/CLI/spells/mirror-image.md), [spiritual weapon](/3-Mechanics/CLI/spells/spiritual-weapon.md)\n\
    \n3rd level (2 slots): [blink](/3-Mechanics/CLI/spells/blink.md), [spirit\
    \ guardians](/3-Mechanics/CLI/spells/spirit-guardians.md)"
  "name": "Spellcasting"
- "desc": "The priest includes their Intelligence modifier as a bonus on all Dexterity\
    \ saving throws."
  "name": "Evasive"
- "desc": "As a bonus action, the priest can expend a spell slot to cause their melee\
    \ weapon attacks to magically deal an extra 10 (3d6) poison damage to a target\
    \ on a hit. This benefit lasts until the end of the turn. If the priest expends\
    \ a spell slot of 2nd level or higher, the extra damage increases by 1d6 for\
    \ each level above 1st."
  "name": "Divine Eminence"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage."
  "name": "Mace"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/vulpin-priest-of-kren-hwcs.webp"
```
^statblock