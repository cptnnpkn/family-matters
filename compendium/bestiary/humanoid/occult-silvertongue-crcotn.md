---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/crcotn
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid/sorcerer
statblock: inline
aliases: ["Occult Silvertongue"]
---
# [Occult Silvertongue](3-Mechanics\CLI\bestiary\humanoid/occult-silvertongue-crcotn.md)
*Source: Critical Role: Call of the Netherdeep p. 205*  

Occult silvertongues are charismatic leaders. The alien mysteries to which they expose themselves can leave them feeling restless, paranoid, and suspicious. They begin to see things that aren't there and imagine conspiracies brought on by fears that others are trying to supplant them.

## Occultists of the Vermilion Dream

The Consortium of the Vermilion Dream is viewed as an esoteric, profit-driven, but ultimately harmless cabal of ghost hunters and perpetuators of urban legends. This perception isn't inaccurate, but the consortium's leadership is obsessed with one set of legends in particular: those involving the Moon of Ill Omen, Ruidus, and the ancient figures cursed by exposure to its alien influence.

The cruelest desires and predilections of the consortium's most obsessive agents have been enhanced by contact with ruidium-tainted items.

```statblock
"name": "Occult Silvertongue (CRCotN)"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "sorcerer"
"alignment": "typically  Lawful Evil"
"ac": !!int "13"
"hp": !!int "127"
"hit_dice": "17d8 + 51"
"stats":
- !!int "13"
- !!int "16"
- !!int "16"
- !!int "15"
- !!int "17"
- !!int "20"
"speed": "40 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "6"
"skillsaves":
  "Deception": !!int "11"
  "Perception": !!int "6"
  "History": !!int "5"
  "Arcana": !!int "8"
"damage_resistances": "psychic"
"senses": "truesight 60 ft., passive Perception 16"
"languages": "Common plus three other languages, telepathy 60 ft."
"cr": "8"
"traits":
- "desc": "The silvertongue casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 16):\n\
    \n1/day: [dimension door](/3-Mechanics/CLI/spells/dimension-door.md)\n\n2/day\
    \ each: [charm person](/3-Mechanics/CLI/spells/charm-person.md), [mage armor](/3-Mechanics/CLI/spells/mage-armor.md),\
    \ [sending](/3-Mechanics/CLI/spells/sending.md)"
  "name": "Spellcasting"
- "desc": "If a creature tries to read the silvertongue's thoughts or deals psychic\
    \ damage to the silvertongue, that creature must succeed on a DC 16 Intelligence\
    \ saving throw or be [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned) until\
    \ the start of its next turn."
  "name": "Alien Mind"
- "desc": "The silvertongue has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Melee or Ranged Spell Attack: +8 to hit, reach 5 ft. or range 60 ft.,\
    \ one creature. Hit: 27 (4d10 + 5) psychic damage."
  "name": "Crimson Bolt"
"bonus_actions":
- "desc": "The silvertongue magically summons an earth elemental, which appears in\
    \ an unoccupied space the silvertongue can see within 60 feet of itself. The earth\
    \ elemental takes its turn immediately after the silvertongue on the same initiative\
    \ count and obeys the silvertongue's commands. The earth elemental disappears\
    \ after 1 minute or when it or the silvertongue dies."
  "name": "Elemental Servitor (1/Day)"
"source":
- "CRCotN"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/occult-silvertongue-crcotn.webp"
```
^statblock