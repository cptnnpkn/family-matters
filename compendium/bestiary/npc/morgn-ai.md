---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ai
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
aliases: ["Môrgæn"]
---
# [Môrgæn](3-Mechanics\CLI\bestiary\npc/morgn-ai.md)
*Source: Acquisitions Incorporated p. 199*  

> [!quote]-  
> 
> If I had wanted to kill, I would have killed.

The ranger Môrgæn is a renowned tracker and hunter, able to pinpoint-target foes at any range, then vanish into the woods with no one the wiser. Her legendary ability with the longbow and the custom arrows she crafts instills fear into the hearts of her many enemies-and more than a few of her coworkers. Famously, she is the only member of Acquisitions Incorporated known to be paid in advance, lest a missed invoice lead to dire repercussions.

A child of the forest, Môrgæn defends the natural world with singular ferocity and an impressive rate of sustained fire. Her core philosophy is that one should shoot first and then ask no questions later. Because what's the point of asking questions when the person you've shot first is already dead? Still, when the situation calls for it, this protector of the woodlands is equally at home on missions of subterfuge and social interaction in the big city, provided her well-known love of ale, wine, and other intoxicants doesn't get the better of her.

```statblock
"name": "Môrgæn (AI)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"ac_class": "[studded leather](/3-Mechanics/CLI/items/studded-leather-armor.md)"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "12"
- !!int "18"
- !!int "12"
- !!int "12"
- !!int "14"
- !!int "10"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "6"
  "Strength": !!int "3"
"skillsaves":
  "Nature": !!int "3"
  "Athletics": !!int "3"
  "Stealth": !!int "6"
  "Insight": !!int "4"
  "Perception": !!int "4"
  "Survival": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Draconic, Dwarvish, Giant, Goblin"
"cr": "4"
"traits":
- "desc": "Môrgæn's spellcasting ability is Intelligence. She can innately cast the\
    \ following spells, requiring no material components:\n\nAt will: [mage hand](/3-Mechanics/CLI/spells/mage-hand.md)"
  "name": "Innate Spellcasting"
- "desc": "Môrgæn is a 9th-level spellcaster. Her spellcasting ability is Wisdom (spell\
    \ save DC 12, +4 to hit with spell attacks). She has the following ranger spells\
    \ prepared:\n\n1st level (4 slots): [alarm](/3-Mechanics/CLI/spells/alarm.md),\
    \ [animal friendship](/3-Mechanics/CLI/spells/animal-friendship.md), [hunter's\
    \ mark](/3-Mechanics/CLI/spells/hunters-mark.md)\n\n2nd level (3 slots): [pass\
    \ without trace](/3-Mechanics/CLI/spells/pass-without-trace.md), [spike growth](/3-Mechanics/CLI/spells/spike-growth.md)\n\
    \n3rd level (2 slots): [conjure animals](/3-Mechanics/CLI/spells/conjure-animals.md)"
  "name": "Spellcasting"
- "desc": "Môrgæn has advantage on saving throws against being [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
    \ and magic can't put her to sleep."
  "name": "Fey Ancestry"
"actions":
- "desc": "Môrgæn makes three attacks with her scimitars or her longbow."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage."
  "name": "Scimitars"
- "desc": "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit:\
    \ 8 (1d8 + 4) piercing damage."
  "name": "Longbow"
"source":
- "AI"
"image": "/3-Mechanics/CLI/bestiary/npc/token/morgaen-ai.webp"
```
^statblock