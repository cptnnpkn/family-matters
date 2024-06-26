---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/mapach
statblock: inline
aliases: ["Krall, the Scavenger King"]
---
# [Krall, the Scavenger King](3-Mechanics\CLI\bestiary\npc/krall-the-scavenger-king-hwcs.md)
*Source: Humblewood Campaign Setting p. 202*  

Krall is an imposing mapach, standing nearly 6 feet tall with a solid build and matted fur that is missing in patches. He was close friends with Benna, although he didn't share her altruism and instead believed that those who couldn't carry their weight should be left behind. He expects complete loyalty from his followers, and favors hit-and-run tactics. He and his troops exact tolls on poorly-defended caravans for passage along the roads, which many pay to avoid his wrath. Krall uses the [mapach brute](/3-Mechanics/CLI/bestiary/humanoid/mapach-brute-hwcs.md) stat block.

```statblock
"name": "Krall, the Scavenger King (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "mapach"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "[studded leather armor](/3-Mechanics/CLI/items/studded-leather-armor.md)"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "14"
- !!int "17"
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "14"
"speed": "30 ft., climb 20 ft."
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "5"
"skillsaves":
  "Deception": !!int "4"
  "Persuasion": !!int "4"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Birdfolk, Mapach"
"cr": "3"
"traits":
- "desc": "Krall has advantage on saving throws against being [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)."
  "name": "Resilience"
- "desc": "Krall has advantage on [Stealth](/3-Mechanics/CLI/rules/skills.md#Stealth)\
    \ checks made in dim light or total darkness."
  "name": "Skulker"
"actions":
- "desc": "Krall makes three melee attacks, two with his rapier and one with his parrying\
    \ dagger."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage."
  "name": "Rapier"
- "desc": "Melee Weapon Attack: +5 to hit, range 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Parrying Dagger"
"reactions":
- "desc": "Krall adds 2 to his AC against one melee attack that would hit him. Krall\
    \ must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/npc/token/krall-the-scavenger-king-hwcs.webp"
```
^statblock