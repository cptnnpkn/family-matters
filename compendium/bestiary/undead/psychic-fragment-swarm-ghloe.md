---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Psychic Fragment Swarm"]
---
# [Psychic Fragment Swarm](3-Mechanics\CLI\bestiary\undead/psychic-fragment-swarm-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 15*  

> [!quote]-  
> 
> It appeared from the darkness: a faceless wraith whose outstretched arms sought purchase on my mortal frame. In desperation, I cried to my companions for aid, but my voice was silent. When it stole my words, I knew my doom was at hand.

## Salvage

The bones of a mortal transformed into a scream thief remain imbued with its undead aura. A skilled magic item crafter using 200 gp of magical regents, and spending at least 5 days of effort, can create a [wand of silence](/3-Mechanics/CLI/items/wand-of-silence-ghloe.md) (see Appendix A of Lairs of Etharis) if they succeed on a DC 15 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)) check.

A spellcaster can capture a psychic fragment's essence before it dissipates after death. The spellcaster requires a container worth at least 100 gp. Anyone who succeeds on a DC 13 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)) check can capture a portion of the defeated psychic fragment. The container can store up to 10 hit die worth of undead essence for 8 hours before they dissipate.

As an action, a container holding this spiritual essence can be thrown up to 20 feet, shattering on impact. All creatures within 5 feet of the broken container must make a DC 12 Constitution saving throw. A failed saving throw results in `1d4` necrotic damage per hit die of essence stored, while a success deals half as much damage.

## Lore

- **DC 10 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)).** The scream thief is immune to necrotic and poison. The incorporeal nature of psychic fragments makes them resistant to nonmagical weapons.  
- **DC 15 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)).** The touch of a scream thief drains life that magic cannot heal; only time and rest can.  

A scream thief remains trapped in its place of death, often accompanied by spirit fragments of the creatures it has killed.

```statblock
"name": "Psychic Fragment Swarm (GHLoE)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"stats":
- !!int "3"
- !!int "16"
- !!int "13"
- !!int "7"
- !!int "14"
- !!int "12"
"speed": "0 ft., fly 30 ft."
"damage_resistances": "acid; cold; fire; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned), [prone](/3-Mechanics/CLI/rules/conditions.md#prone),\
  \ [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained), [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "can repeat one phrase it knew in life"
"cr": "3"
"traits":
- "desc": "The swarm can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- "desc": "The swarm constantly emits a babble of words and phrases spoken in life\
    \ by its many undead spirits. Each creature that starts its turn within 20 ft.\
    \ of the swarm must succeed on a DC 13 Wisdom saving throw. On a failure, the\
    \ creature is [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned) until the\
    \ start of its next turn. A creature that succeeds on a saving throw becomes immune\
    \ to maddening voices for 24 hours."
  "name": "Maddening Voices"
- "desc": "The swarm can occupy another creature's space and vice versa. The swarm\
    \ can't regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 21\
    \ (6d6) necrotic damage, or 10 (3d6) necrotic damage if the swarm has half\
    \ of its hit points or fewer."
  "name": "Withering Touch"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/undead/token/psychic-fragment-swarm-ghloe.webp"
```
^statblock