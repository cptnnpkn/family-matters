---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/idrotf
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Gnome Ceremorph"]
---
# [Gnome Ceremorph](3-Mechanics\CLI\bestiary\aberration/gnome-ceremorph-idrotf.md)
*Source: Icewind Dale: Rime of the Frostmaiden p. 303*  

Mind flayers, which are described in the Monster Manual, are created through ceremorphosis, a process that begins with the implantation of an illithid tadpole in the brain of a humanoid host. After about seven days in its new home, the tadpole transforms its host into a mind flayer. The new creation typically retains no memory of its previous existence.

For reasons unknown, ceremorphosis can go awry when an illithid tadpole is implanted in the brain of a gnome. This deviation might be due to the quasi-magical nature of gnomes, or simply a facet of how their minds work. When the process is warped only slightly, the mind flayer remains gnome-sized and is called a gnome ceremorph. It retains its knowledge of the Gnomish language while becoming able to speak Deep Speech and Undercommon. It retains fragmented memories of its previous life and previous alignment, not to mention a propensity for invention.

## Laser Pistol

A gnome ceremorph often carries a home-built device that functions as a [laser pistol](/3-Mechanics/CLI/items/laser-pistol.md) (see ""Firearms"" in the "Dungeon Master's Guide"). This weapon is powered by an [energy cell](/3-Mechanics/CLI/items/energy-cell.md), which enables the weapon to fire 50 shots. After its last shot is expended, the device becomes inoperable. The [energy cell](/3-Mechanics/CLI/items/energy-cell.md) can't be removed without destroying the weapon.

```statblock
"name": "Gnome Ceremorph (IDRotF)"
"size": "Small"
"type": "aberration"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "[breastplate](/3-Mechanics/CLI/items/breastplate.md)"
"hp": !!int "58"
"hit_dice": "13d6 + 13"
"stats":
- !!int "6"
- !!int "14"
- !!int "12"
- !!int "19"
- !!int "17"
- !!int "17"
"speed": "25 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "5"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Arcana": !!int "7"
  "Persuasion": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Deep Speech, Gnomish, telepathy 120 ft., Undercommon"
"cr": "5"
"traits":
- "desc": "The ceremorph's innate spellcasting ability is Intelligence (spell save\
    \ DC 15). It can innately cast the following spells, requiring no components:\n\
    \nAt will: [detect thoughts](/3-Mechanics/CLI/spells/detect-thoughts.md),\
    \ [levitate](/3-Mechanics/CLI/spells/levitate.md)\n\n1/day each: [dominate\
    \ monster](/3-Mechanics/CLI/spells/dominate-monster.md), [plane shift](/3-Mechanics/CLI/spells/plane-shift.md)\
    \ (self only)"
  "name": "Innate Spellcasting (Psionics)"
- "desc": "The ceremorph has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 15\
    \ (2d10 + 4) psychic damage. If the target is Medium or smaller, it is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 9) and must succeed on a DC 15 Intelligence saving throw or be [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)\
    \ until this grapple ends."
  "name": "Tentacles"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ humanoid [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) by the ceremorph.\
    \ Hit: 55 (10d10) piercing damage. If this damage reduces the target to 0\
    \ hit points, the ceremorph kills the target by extracting and devouring its brain."
  "name": "Extract Brain"
- "desc": "Ranged Weapon Attack: +5 to hit, range 40/120 ft., one target. Hit:\
    \ 12 (3d6 + 2) radiant damage."
  "name": "Laser Pistol"
- "desc": "The ceremorph magically emits psychic energy in a 60-foot cone. Each creature\
    \ in that area must succeed on a DC 15 Intelligence saving throw or take 22 (4d8\
    \ + 4) psychic damage and be [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Mind Blast (Recharge 5-6)"
"source":
- "IDRotF"
"image": "/3-Mechanics/CLI/bestiary/aberration/token/gnome-ceremorph-idrotf.webp"
```
^statblock