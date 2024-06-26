---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/toa
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Volothamp "Volo" Geddarm"]
---
# [Volothamp "Volo" Geddarm](3-Mechanics\CLI\bestiary\npc/volothamp-volo-geddarm-toa.md)
*Source: Tomb of Annihilation p. 235, Waterdeep: Dragon Heist*  

The bombastic world traveler Volothamp Geddarmn has come to Chult to deliver signed copies of his latest book, Volo's Guide to Monsters. In addition to setting up audiences with the seven merchant princes of Port Nyanzaru (whom he knows well), Volo is visiting local taverns to promote his work, and the characters might meet him at some point in the city. Volo is a font of information (not all of it accurate), but he won't join the party under any circumstances. He might, however, allow the characters to tag along while he visits each merchant prince in turn.

The personable Volo is more than willing to share `1d4 + 1` rumors from the Jungle Rumors table at the end of chapter 1, which he's overheard since arriving in Port Nyanzaru.

## Volo's Traits

### Ideal

"I have no wish to explore jungles, lost cities, and dungeons. Friendly taverns and bawdy festhalls are more my style."

### Bond

"Planning an expedition? You really should buy a copy of my latest book, Volo's Guide to Monsters!"

### Flaw

"My penchant for indulgence and my propensity for mockery have earned me a few enemies. I tend to wear out my welcome."

```statblock
"name": "Volothamp \"Volo\" Geddarm (ToA)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Good"
"ac": !!int "11"
"hp": !!int "31"
"hit_dice": "7d8"
"stats":
- !!int "9"
- !!int "12"
- !!int "10"
- !!int "15"
- !!int "11"
- !!int "16"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "2"
  "Constitution": !!int "2"
"skillsaves":
  "Sleight of Hand": !!int "3"
  "Animal Handling": !!int "4"
  "Deception": !!int "5"
  "Investigation": !!int "4"
  "Insight": !!int "2"
  "Perception": !!int "2"
  "History": !!int "4"
  "Performance": !!int "7"
  "Arcana": !!int "4"
  "Survival": !!int "2"
  "Persuasion": !!int "7"
"senses": "passive Perception 12"
"languages": "Common, Dwarvish, Elvish"
"cr": "1/4"
"traits":
- "desc": "Volo is a 1st-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 12, +4 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [friends](/3-Mechanics/CLI/spells/friends.md),\
    \ [mending](/3-Mechanics/CLI/spells/mending.md), [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md)\n\
    \n1st level (2 slots): [comprehend languages](/3-Mechanics/CLI/spells/comprehend-languages.md),\
    \ [detect magic](/3-Mechanics/CLI/spells/detect-magic.md), [disguise self](/3-Mechanics/CLI/spells/disguise-self.md)"
  "name": "Spellcasting"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 3 (1d4 + 1) piercing damage."
  "name": "Dagger"
"source":
- "ToA"
- "WDH"
"image": "/3-Mechanics/CLI/bestiary/npc/token/volothamp-volo-geddarm-toa.webp"
```
^statblock