---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/crcotn
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/ranger
- ttrpg-cli/monster/type/humanoid/water-genasi
statblock: inline
aliases: ["Ayo Jabe (Tier 2)"]
---
# [Ayo Jabe (Tier 2)](3-Mechanics\CLI\bestiary\npc/ayo-jabe-tier-2-crcotn.md)
*Source: Critical Role: Call of the Netherdeep p. 190*  

As the de facto leader of a new, unnamed adventuring party, Ayo Jabe has a lot of responsibility on her shoulders. She and her companions have worked odd jobs around the town of Jigow for a few weeks now, and she's starting to feel confident that they're ready for real adventure.

Ayo is a water genasi who was born to orc parents during a terrible storm in the Emerald Gulch. Her family has lived in Jigow for generations, and she's eager to leave home and see the world.

Ayo picked up her combat skills while working as a hunter for the town of Jigow. She recently joined up with her childhood friend Dermot, as well as Maggie Keeneyes, a mercenary who came to town several weeks ago. Despite Maggie's brusque demeanor, she became a loyal friend of Ayo and Dermot, and the three of them have become inseparable, even as more adventurers have joined their party.

Ayo is hotheaded and appreciates people who make decisions as impulsively as she does. Nevertheless, she respects Dermot's even-tempered advice and dutifully plays the role of the wise leader. She has no patience for people who are indecisive, and she is infuriated by people who don't say what they really mean.

> [!note] Battle Chatter Sample Quotes
> 
> "Okay team, they're off-balance. Rally!" "Have you had enough?" "Yeah, just give up. You're finished."
^battle-chatter-sample-quotes

## Rival Stat Blocks

Stat blocks for the rivals can be found in appendix A. Each of the rivals has three stat blocks; like the characters, they become more powerful as the adventure progresses. The Rival Stat Blocks table shows you which stat blocks to use based on the chapter you are running.

### Rival Stat Blocks

| Chapters | Stat Blocks |
|----------|-------------|
| 1 and 2 | Ayo Jabe (Tier 1) |
| 3 and 4 | Ayo Jabe (Tier 2) |
| 5, 6, and 7 | Ayo Jabe (Tier 3) |
^chapters-stat-blocks

The tier 2 rivals are learning that their adventures take them into horrific places that will test their mettle, but they face these challenges with heads held high.

```statblock
"name": "Ayo Jabe (Tier 2) (CRCotN)"
"size": "Medium"
"type": "humanoid"
"subtype": "ranger, Water genasi"
"alignment": "Chaotic Good"
"ac": !!int "15"
"ac_class": "[studded leather](/3-Mechanics/CLI/items/studded-leather-armor.md)"
"hp": !!int "97"
"hit_dice": "15d8 + 30"
"stats":
- !!int "14"
- !!int "16"
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "12"
"speed": "30 ft., swim 30 ft."
"saves":
  "Dexterity": !!int "6"
  "Strength": !!int "5"
"skillsaves":
  "Athletics": !!int "5"
  "Perception": !!int "5"
  "Survival": !!int "5"
"damage_resistances": "acid"
"senses": "passive Perception 15"
"languages": "Common, Goblin, Orc"
"cr": "5"
"traits":
- "desc": "Ayo casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 13):\n\n1/day each: [animal friendship](/3-Mechanics/CLI/spells/animal-friendship.md),\
    \ [goodberry](/3-Mechanics/CLI/spells/goodberry.md), [pass without trace](/3-Mechanics/CLI/spells/pass-without-trace.md)"
  "name": "Spellcasting"
- "desc": "Ayo can breathe air and water."
  "name": "Amphibious"
"actions":
- "desc": "Ayo makes three Harpoon or Longbow attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11\
    \ (2d8 + 2) piercing damage."
  "name": "Harpoon"
- "desc": "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit:\
    \ 12 (2d8 + 3) piercing damage."
  "name": "Longbow"
"bonus_actions":
- "desc": "Ayo issues orders to one ally she can see within 30 feet of herself. If\
    \ the target can see or hear Ayo, it can spend its reaction to move up to its\
    \ speed. This movement doesn't provoke opportunity attacks."
  "name": "Reposition"
"source":
- "CRCotN"
"image": "/3-Mechanics/CLI/bestiary/npc/token/ayo-jabe-tier-2-crcotn.webp"
```
^statblock