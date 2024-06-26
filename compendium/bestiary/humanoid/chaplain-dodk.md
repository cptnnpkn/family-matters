---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
aliases: ["Chaplain"]
---
# [Chaplain](3-Mechanics\CLI\bestiary\humanoid/chaplain-dodk.md)
*Source: Dungeons of Drakkenheim p. 218*  

Ordained with prayer beads and holy symbols, a chaplain is a faithful warrior-priest who accompanies questing knights and military regiments on campaign. During moments of peace, some will prepare continual flame, sending, speak with dead, remove curse, greater restoration, scrying, and raise dead as the need requires. Other chaplains are fiery zealots who can prepare faerie fire, burning hands, scorching ray, flaming sphere, fireball, and wall of fire.

```statblock
"name": "Chaplain (DoDk)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "18"
"ac_class": "[chain mail](/3-Mechanics/CLI/items/chain-mail.md), [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "13"
- !!int "10"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "13"
"speed": "30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "6"
"skillsaves":
  "Religion": !!int "3"
  "Insight": !!int "6"
  "Persuasion": !!int "4"
"senses": "passive Perception 13"
"languages": "Any two"
"cr": "6"
"traits":
- "desc": "The chaplain is a 9th-level spellcaster that uses Wisdom as its spellcasting\
    \ ability (spell save DC 12; +4 to hit with spell attacks). They have the following\
    \ cleric spells prepared:\n\nCantrips (at will): [light](/3-Mechanics/CLI/spells/light.md),\
    \ [mending](/3-Mechanics/CLI/spells/mending.md), [sacred flame](/3-Mechanics/CLI/spells/sacred-flame.md),\
    \ [spare the dying](/3-Mechanics/CLI/spells/spare-the-dying.md)\n\n1st level\
    \ (4 slots): [bless](/3-Mechanics/CLI/spells/bless.md), [guiding bolt](/3-Mechanics/CLI/spells/guiding-bolt.md),\
    \ [healing word](/3-Mechanics/CLI/spells/healing-word.md)\n\n2nd level (3 slots):\
    \ [lesser restoration](/3-Mechanics/CLI/spells/lesser-restoration.md), [prayer\
    \ of healing](/3-Mechanics/CLI/spells/prayer-of-healing.md), [spiritual weapon](/3-Mechanics/CLI/spells/spiritual-weapon.md)\n\
    \n3rd level (3 slots): [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md),\
    \ [purge contamination](/3-Mechanics/CLI/spells/purge-contamination-dodk.md),\
    \ [spirit guardians](/3-Mechanics/CLI/spells/spirit-guardians.md)\n\n4th level\
    \ (3 slots): [banishment](/3-Mechanics/CLI/spells/banishment.md), [divination](/3-Mechanics/CLI/spells/divination.md)\n\
    \n5th level (1 slots): [flame strike](/3-Mechanics/CLI/spells/flame-strike.md)"
  "name": "Spellcasting"
- "desc": "The chaplain has advantage on saving throws against being [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ or [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)."
  "name": "Devotion"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage or 5 (1d8 + 1) damage\
    \ when used in two hands to make a melee attack."
  "name": "Spear"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/chaplain-dodk.webp"
```
^statblock