---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/21
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Arcturia"]
---
# [Arcturia](3-Mechanics\CLI\bestiary\npc/arcturia-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 296*  

Unable to abide normalcy and consistency, Arcturia fixates on transforming herself, her surroundings, and other creatures. Her moods are ever-changing as well.

```statblock
"name": "Arcturia (WDMM)"
"size": "Medium"
"type": "undead"
"alignment": "Any Evil alignment"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "11"
- !!int "16"
- !!int "16"
- !!int "20"
- !!int "14"
- !!int "16"
"speed": "30 ft., fly 60 ft. (hover)"
"saves":
  "Wisdom": !!int "9"
  "Intelligence": !!int "12"
  "Constitution": !!int "10"
"skillsaves":
  "Insight": !!int "9"
  "Perception": !!int "9"
  "History": !!int "12"
  "Arcana": !!int "19"
"damage_resistances": "cold, lightning, necrotic"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "truesight 120 ft., passive Perception 19"
"languages": "Common plus up to five other languages"
"cr": "21"
"traits":
- "desc": "Arcturia is an 18th-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 20, +12 to hit with spell attacks). Arcturia can cast [alter\
    \ self](/3-Mechanics/CLI/spells/alter-self.md) at will and has the following wizard\
    \ spells prepared:\n\nAt will: [alter self](/3-Mechanics/CLI/spells/alter-self.md)\n\
    \nCantrips (at will): [mage hand](/3-Mechanics/CLI/spells/mage-hand.md), [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md),\
    \ [ray of frost](/3-Mechanics/CLI/spells/ray-of-frost.md)\n\n1st level (4 slots):\
    \ [detect magic](/3-Mechanics/CLI/spells/detect-magic.md), [magic missile](/3-Mechanics/CLI/spells/magic-missile.md),\
    \ [shield](/3-Mechanics/CLI/spells/shield.md), [thunderwave](/3-Mechanics/CLI/spells/thunderwave.md)\n\
    \n2nd level (3 slots): [detect thoughts](/3-Mechanics/CLI/spells/detect-thoughts.md),\
    \ [enlarge/reduce](/3-Mechanics/CLI/spells/enlarge-reduce.md), [Melf's acid arrow](/3-Mechanics/CLI/spells/melfs-acid-arrow.md),\
    \ [mirror image](/3-Mechanics/CLI/spells/mirror-image.md)\n\n3rd level (3 slots):\
    \ [counterspell](/3-Mechanics/CLI/spells/counterspell.md), [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md),\
    \ [fireball](/3-Mechanics/CLI/spells/fireball.md), [slow](/3-Mechanics/CLI/spells/slow.md)\n\
    \n4th level (3 slots): [blight](/3-Mechanics/CLI/spells/blight.md), [polymorph](/3-Mechanics/CLI/spells/polymorph.md)\n\
    \n5th level (3 slots): [animate objects](/3-Mechanics/CLI/spells/animate-objects.md),\
    \ [telekinesis](/3-Mechanics/CLI/spells/telekinesis.md)\n\n6th level (1 slots):\
    \ [disintegrate](/3-Mechanics/CLI/spells/disintegrate.md), [flesh to stone](/3-Mechanics/CLI/spells/flesh-to-stone.md)\n\
    \n7th level (1 slots): [reverse gravity](/3-Mechanics/CLI/spells/reverse-gravity.md),\
    \ [teleport](/3-Mechanics/CLI/spells/teleport.md)\n\n8th level (1 slots):\
    \ [feeblemind](/3-Mechanics/CLI/spells/feeblemind.md), [maze](/3-Mechanics/CLI/spells/maze.md)\n\
    \n9th level (1 slots): [true polymorph](/3-Mechanics/CLI/spells/true-polymorph.md)"
  "name": "Spellcasting"
- "desc": "If Arcturia fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "If it has a phylactery, a destroyed lich gains a new body in 1d10 days,\
    \ regaining all its hit points and becoming active again. The new body appears\
    \ within 5 feet of the phylactery."
  "name": "Rejuvenation"
- "desc": "Arcturia has advantage on saving throws against any effect that turns undead."
  "name": "Turn Resistance"
"actions":
- "desc": "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10\
    \ (3d6) cold damage. The target must succeed on a DC 18 Constitution saving\
    \ throw or be [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed) for\
    \ 1 minute. The target can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself on a success."
  "name": "Paralyzing Touch"
"legendary_actions":
- "desc": "Arcturia casts a cantrip."
  "name": "Cantrip"
- "desc": "Arcturia uses its Paralyzing Touch."
  "name": "Paralyzing Touch (Costs 2 Actions)"
- "desc": "Arcturia fixes its gaze on one creature it can see within 10 feet of it.\
    \ The target must succeed on a DC 18 Wisdom saving throw against this magic or\
    \ become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened) for 1 minute.\
    \ The [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened) target can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success. If a target's saving throw is successful or the effect\
    \ ends for it, the target is immune to Arcturia's gaze for the next 24 hours."
  "name": "Frightening Gaze (Costs 2 Actions)"
- "desc": "Each non-undead creature within 20 feet of Arcturia must make a DC 18 Constitution\
    \ saving throw against this magic, taking 21 (6d6) necrotic damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Disrupt Life (Costs 3 Actions)"
"source":
- "WDMM"
"image": "/3-Mechanics/CLI/bestiary/npc/token/arcturia-wdmm.webp"
```
^statblock