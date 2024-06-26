---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mcv1sc
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Puppeteer Parasite"]
---
# [Puppeteer Parasite](3-Mechanics\CLI\bestiary\aberration/puppeteer-parasite-mcv1sc.md)
*Source: Monstrous Compendium Volume 1: Spelljammer Creatures p. 11*  

A puppeteer parasite looks like a rubbery amoeba the size of a dinner plate. Its dorsal surface is soft and glossy, while its ventral surface is lined with bony hooks. The parasite uses its hooks to attach to a wall or ceiling until suitable prey passes nearby.

A parasite that comes in physical contact with a Humanoid uses its hooks to latch onto it. The parasite can then drain life energy from that creature or use it as transportation. The parasite can also impose its will on a nearby creature, forcing the creature to comply with its wishes. Puppeteer parasites like to use Humanoid thralls as bodyguards and transports.

```statblock
"name": "Puppeteer Parasite (MCV1SC)"
"size": "Tiny"
"type": "aberration"
"alignment": "typically  Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "71"
"hit_dice": "11d4 + 44"
"stats":
- !!int "2"
- !!int "15"
- !!int "18"
- !!int "16"
- !!int "10"
- !!int "3"
"speed": "10 ft., fly 30 ft. (hover)"
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "2"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "4"
"damage_vulnerabilities": "radiant"
"damage_resistances": "fire, necrotic, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": "telepathy 30 ft."
"cr": "3"
"traits":
- "desc": "The parasite doesn't require air or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 12\
    \ (3d6 + 2) necrotic damage, and the parasite attaches to the target. While\
    \ attached, the parasite can't make Cling attacks. The parasite can detach itself\
    \ by spending 5 feet of its movement. As an action, a creature within reach of\
    \ the parasite can try to detach it, doing so with a successful DC 14 Strength\
    \ check."
  "name": "Cling"
- "desc": "The parasite deals 12 (3d6 + 2) necrotic damage to one creature it is\
    \ physically attached to, provided that creature isn't a Construct or an Undead.\
    \ The parasite regains hit points equal to the damage taken."
  "name": "Consume Life"
"bonus_actions":
- "desc": "The parasite casts the [suggestion](/3-Mechanics/CLI/spells/suggestion.md)\
    \ spell, requiring no spell components and using Intelligence as the spellcasting\
    \ ability (spell save DC 13)."
  "name": "Suggestion (Psionics; 1/Day)"
"source":
- "MCV1SC"
"image": "/3-Mechanics/CLI/bestiary/aberration/token/puppeteer-parasite-mcv1sc.webp"
```
^statblock