---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Vitebriate"]
---
# [Vitebriate](3-Mechanics\CLI\bestiary\npc/vitebriate-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 21*  

> [!quote]-  
> 
> I swear I've seen that kid before, years ago, when I was just a kid myself! But she hasn't aged a day.

## Salvage

When a vitebriate dies, it crumbles into a swarm of harmless crawling roaches.

If these roaches are mixed with seawater, a *potion of false life* results. The creation of this potion can be completed with a successful DC 10 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)) check by someone proficient with an herbalism kit. This process takes 1 hour.

## Lore

- **DC 10 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** A vitebriate can only have a single thrall at a time and can transfer some of its damage to its thrall.  
- **DC 15 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** Vitebriates are immune to poison and disease, and they require a thrall to stay alive.  

```statblock
"name": "Vitebriate (GHLoE)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"stats":
- !!int "11"
- !!int "14"
- !!int "16"
- !!int "12"
- !!int "12"
- !!int "16"
"speed": "30 ft."
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 20"
"languages": "languages it knew previously"
"cr": "2"
"traits":
- "desc": "Vitebriates are immune to the effects of old age and death by natural causes."
  "name": "Unnatural Life"
- "desc": "While on the same plane of existence as a person [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ by the vitebriate's Dominate Person action, the vitebriate may leech 1 hp per\
    \ day permanently from the thrall. When a thrall is reduced to 0 hp through this\
    \ process, it is killed. Drained hit points are regained after 7 days of rest."
  "name": "Vitebriance"
"actions":
- "desc": "The vitebriate makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one creature. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- "desc": "A vitebriate can target a single humanoid with dominate person as the spell,\
    \ with the following differences: once the vitebriate has chosen the target, it\
    \ can use this ability only on the chosen target (until the next day when it can\
    \ choose a different target and drop the focus on the current target). The spell\
    \ does not require [concentration](/3-Mechanics/CLI/rules/conditions.md#concentration)\
    \ but is broken if the vitebriate is knocked [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)\
    \ involuntarily or killed (though not if it trances or sleeps). If the person\
    \ has been [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed) for at least\
    \ an hour, damage does not force a new saving throw."
  "name": "Dominate Person"
"reactions":
- "desc": "The vitebriate uses its psychic link with its thrall to transfer all damage\
    \ it would take to its thrall. Damage that goes beyond what would kill the thrall\
    \ is dealt to the vitebriate."
  "name": "Life Shield (1/Day)"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/npc/token/vitebriate-ghloe.webp"
```
^statblock