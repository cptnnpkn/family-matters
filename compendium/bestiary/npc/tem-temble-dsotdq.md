---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dsotdq
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/kender
statblock: inline
aliases: ["Tem Temble"]
---
# [Tem Temble](3-Mechanics\CLI\bestiary\npc/tem-temble-dsotdq.md)
*Source: Dragonlance: Shadow of the Dragon Queen p. 213*  

[Tem](/3-Mechanics/CLI/bestiary/npc/tem-temble-dsotdq.md) has the soul of a wanderer, though her feet most often take her deep into the wild and forgotten places of the world. Early in her travels, she befriended a winged lizard she named Melon, and the two have become inseparable. She fights the Dragon Armies' advance, channeling the rejuvenating magic of nature through her trusty hoopak to bolster her allies. Tem's mannerisms are similar to a cat's, as she disregards personal space and forever seeks to curl up in warm spots.

```statblock
"name": "Tem Temble (DSotDQ)"
"size": "Small"
"type": "humanoid"
"subtype": "kender"
"alignment": "Chaotic Good"
"ac": !!int "13"
"ac_class": "[leather armor](/3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "11"
"hit_dice": "2d6 + 4"
"stats":
- !!int "8"
- !!int "14"
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "14"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "4"
"skillsaves":
  "Medicine": !!int "4"
  "Sleight of Hand": !!int "4"
  "Stealth": !!int "4"
  "Insight": !!int "4"
  "Perception": !!int "4"
"condition_immunities": "[frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)"
"senses": "passive Perception 14"
"languages": "Common, Kenderspeak"
"traits":
- "desc": "Tem's spellcasting ability is Wisdom (spell save DC 12, +4 to spell attacks).\
    \ She has the following druid spells prepared:\n\nAt will: [druidcraft](/3-Mechanics/CLI/spells/druidcraft.md),\
    \ [poison spray](/3-Mechanics/CLI/spells/poison-spray.md)\n\n1st level (2 slots):\
    \ [healing word](/3-Mechanics/CLI/spells/healing-word.md)"
  "name": "Spellcasting"
- "desc": "Tem is proficient with simple weapons and light armor."
  "name": "Bonus Proficiencies"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 40/160\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage, or 4 (1d4 + 2) bludgeoning\
    \ damage if Tem used the hoopak's sling to make a ranged attack."
  "name": "Hoopak"
- "desc": "Tem launches an infuriating barrage of insults at a creature she can see\
    \ within 60 feet of her. If the target can hear Tem, it must succeed on a DC 12\
    \ Wisdom saving throw or have disadvantage on attack rolls until the end of its\
    \ next turn."
  "name": "Taunt"
"bonus_actions":
- "desc": "Tem takes the Disengage or Hide action."
  "name": "Elusive"
"source":
- "DSotDQ"
"image": "/3-Mechanics/CLI/bestiary/npc/token/tem-temble-dsotdq.webp"
```
^statblock