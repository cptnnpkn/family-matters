---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/26
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
aliases: ["Demogorgon"]
---
# [Demogorgon](3-Mechanics\CLI\bestiary\npc/demogorgon-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 90*  

> [!quote]- A quote from Mordenkainen  
> 
> Are two heads better than one? In Demogorgon's case, the two double the horror and the chaos.

Prince of Demons, the Sibilant Beast, and Master of the Spiraling Depths, Demogorgon is the embodiment of chaos, confusion, and destruction, seeking to corrupt all that is good and undermine order in the multiverse, to see everything dragged howling into the infinite depths of the Abyss.

The demon lord is a meld of different forms. He has a saurian lower body and clawed, webbed feet; suckered tentacles sprout from the shoulders of his great apelike torso, which is surmounted by two hideous simian heads named Aameul and Hathradiah. Their gaze brings bewilderment and confusion to any who confront them.

Similarly, the spiraling Y sign of Demogorgon's cult drives those who contemplate it for too long to delirium. As a result, all followers of the Prince of Demons break with reality sooner or later.

## Cultists of Demogorgon

> [!note]
> See the Cult of Demogorgon entry.

## Demogorgon's Lair

Demogorgon makes his lair in a palace called Abysm, found on a layer of the Abyss known as the Gaping Maw. Demogorgon's lair is a place of confusion and duality; the portion of the palace that lies above water takes the form of two serpentine towers, each crowned by a skull-shaped minaret. There, Demogorgon's heads contemplate the mysteries of the arcane while arguing about how best to obliterate their rivals. The bulk of this palace extends deep underwater, in chill and darkened caverns.

```statblock
"name": "Demogorgon (MPMM)"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "22"
"ac_class": "natural armor"
"hp": !!int "464"
"hit_dice": "32d12 + 256"
"stats":
- !!int "29"
- !!int "14"
- !!int "26"
- !!int "20"
- !!int "17"
- !!int "25"
"speed": "50 ft., swim 50 ft."
"saves":
  "Charisma": !!int "15"
  "Dexterity": !!int "10"
  "Wisdom": !!int "11"
  "Constitution": !!int "16"
"skillsaves":
  "Insight": !!int "11"
  "Perception": !!int "19"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "truesight 120 ft., passive Perception 29"
"languages": "all, telepathy 120 ft."
"cr": "26"
"traits":
- "desc": "Demogorgon casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 23):\n\nAt will:\
    \ [detect magic](/3-Mechanics/CLI/spells/detect-magic.md), [major image](/3-Mechanics/CLI/spells/major-image.md)\n\
    \n1/day each: [feeblemind](/3-Mechanics/CLI/spells/feeblemind.md), [project\
    \ image](/3-Mechanics/CLI/spells/project-image.md)\n\n3/day each: [dispel\
    \ magic](/3-Mechanics/CLI/spells/dispel-magic.md), [fear](/3-Mechanics/CLI/spells/fear.md),\
    \ [telekinesis](/3-Mechanics/CLI/spells/telekinesis.md)"
  "name": "Spellcasting"
- "desc": "If Demogorgon fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Demogorgon has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Demogorgon has advantage on saving throws against being [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
    \ [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened), [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned),\
    \ or knocked [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)."
  "name": "Two Heads"
"actions":
- "desc": "Demogorgon makes two Tentacle attacks. He can replace one attack with a\
    \ use of Gaze."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 28\
    \ (3d12 + 9) force damage. If the target is a creature, it must succeed on a\
    \ DC 23 Constitution saving throw, or its hit point maximum is reduced by an amount\
    \ equal to the damage taken. This reduction lasts until the target finishes a\
    \ long rest. The target dies if its hit point maximum is reduced to 0."
  "name": "Tentacle"
- "desc": "Demogorgon turns his magical gaze toward one creature he can see within\
    \ 120 feet of him. The target must succeed on a DC 23 Wisdom saving throw or suffer\
    \ one of the following effects (choose one or roll a d6):\n\n- 1–2 Beguiling\
    \ Gaze. The target is [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)\
    \ until the start of Demogorgon's next turn or until Demogorgon is no longer within\
    \ line of sight.  \n- 3–4 Confusing Gaze. The target suffers the effect of\
    \ the [confusion](/3-Mechanics/CLI/spells/confusion.md) spell without making a\
    \ saving throw. The effect lasts until the start of Demogorgon's next turn. Demogorgon\
    \ doesn't need to concentrate on the spell.  \n- 5–6 Hypnotic Gaze. The target\
    \ is [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed) by Demogorgon until\
    \ the start of Demogorgon's next turn. Demogorgon chooses how the [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ target uses its action, reaction, and movement.  "
  "name": "Gaze"
"legendary_actions":
- "desc": "Demogorgon uses Gaze and must use either Beguiling Gaze or Confusing Gaze."
  "name": "Gaze"
- "desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 20\
    \ (2d10 + 9) bludgeoning damage plus 11 (2d10) necrotic damage."
  "name": "Tail"
- "desc": "Demogorgon uses Spellcasting."
  "name": "Cast a Spell (Costs 2 Actions)"
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties), Demogorgon can take one\
    \ of the following lair actions; he can't take the same lair action two rounds\
    \ in a row:"
  "name": ""
- "desc": "- Darkness. Demogorgon casts the [darkness](/3-Mechanics/CLI/spells/darkness.md)\
    \ spell four times, targeting different areas with the spell. Demogorgon doesn't\
    \ need to concentrate on the spells, which end on initiative count 20 of the next\
    \ round.  \n- Illusory Duplicate. Demogorgon creates an illusory duplicate\
    \ of himself, which appears in his space and lasts until initiative count 20 of\
    \ the next round. On his turn, Demogorgon can move the illusory duplicate a distance\
    \ equal to his walking speed (no action required). The first time a creature or\
    \ an object interacts physically with Demogorgon (for example, by hitting him\
    \ with an attack), there is a 50% chance chance that the illusory duplicate is\
    \ affected, not Demogorgon, in which case the illusion disappears.  "
  "name": ""
"regional_effects":
- "desc": "The region containing Demogorgon's lair is warped by his magic, creating\
    \ one or more of the following effects:"
  "name": ""
- "desc": "- Beguiling Realm. Within 6 miles of the lair, all Charisma ([Persuasion](/3-Mechanics/CLI/rules/skills.md#Persuasion))\
    \ and Charisma ([Performance](/3-Mechanics/CLI/rules/skills.md#Performance)) checks\
    \ have disadvantage, and all Charisma ([Deception](/3-Mechanics/CLI/rules/skills.md#Deception))\
    \ and Charisma ([Intimidation](/3-Mechanics/CLI/rules/skills.md#Intimidation))\
    \ checks have advantage.  \n- Frenzied Animals. Beasts within 1 mile of the\
    \ lair become frenzied and violent—even creatures that are normally docile. Within\
    \ that area, any ability check involving Animal Handling has disadvantage.  \n\
    - Venomous Beasts. The area within 6 miles of the lair becomes overpopulated\
    \ with [poisonous snakes](/3-Mechanics/CLI/bestiary/beast/poisonous-snake.md)\
    \ and other venomous Beasts.  "
  "name": ""
- "desc": "If Demogorgon dies, these effects fade over the course of 1d10 days."
  "name": ""
"source":
- "MPMM"
- "MTF"
"image": "/3-Mechanics/CLI/bestiary/npc/token/demogorgon-mpmm.webp"
```
^statblock