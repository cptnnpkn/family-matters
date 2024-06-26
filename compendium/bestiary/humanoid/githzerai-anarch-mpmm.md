---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/gith
statblock: inline
aliases: ["Githzerai Anarch"]
---
# [Githzerai Anarch](3-Mechanics\CLI\bestiary\humanoid/githzerai-anarch-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 142*  

Anarchs are githzerai sages and mystics who lead communities and maintain the adamantine citadels that serve as strong points in Limbo and on other planes. They have formidable psionic capabilities and are able to manipulate the unformed substance of their adopted plane with a thought.

## An Anarch's Lair

In Limbo, githzerai anarchs create islands of tranquility in this turbulent plane. An anarch can use its psionic power to give form to formless substance, creating mountains, lakes, and structures to serve as a foundation for a githzerai community.

The anarch's challenge rating is 17 (18,000 XP) when it's encountered in its lair.

## Githzerai

Githzerai are otherworldly folk with psionic powers who share an ancestral link to githyanki (also in this book). The githzerai followers of the great leader Zaerith Menyar-Ag-Gith are an ascetic people who live apart from the rest of the cosmos, within the confines of fortresses floating through the chaos of Limbo. Instead of imposing their will on other peoples, they focus on controlling and manipulating their endlessly malleable home.

```statblock
"name": "Githzerai Anarch (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "gith"
"alignment": "Any alignment"
"ac": !!int "20"
"ac_class": "psychic defense"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"stats":
- !!int "16"
- !!int "21"
- !!int "18"
- !!int "18"
- !!int "20"
- !!int "14"
"speed": "30 ft., fly 40 ft. (hover)"
"saves":
  "Dexterity": !!int "10"
  "Wisdom": !!int "10"
  "Intelligence": !!int "9"
  "Strength": !!int "8"
"skillsaves":
  "Insight": !!int "10"
  "Perception": !!int "10"
  "Arcana": !!int "9"
"senses": "passive Perception 20"
"languages": "Gith"
"cr": "16"
"traits":
- "desc": "The githzerai casts one of the following spells, requiring no spell components\
    \ and using Wisdom as the spellcasting ability (spell save DC 18):\n\nAt will:\
    \ [mage hand](/3-Mechanics/CLI/spells/mage-hand.md) (the hand is invisible)\n\n\
    1/day each: [globe of invulnerability](/3-Mechanics/CLI/spells/globe-of-invulnerability.md),\
    \ [plane shift](/3-Mechanics/CLI/spells/plane-shift.md), [wall of force](/3-Mechanics/CLI/spells/wall-of-force.md)\n\
    \n3/day each: [see invisibility](/3-Mechanics/CLI/spells/see-invisibility.md),\
    \ [telekinesis](/3-Mechanics/CLI/spells/telekinesis.md)"
  "name": "Spellcasting (Psionics)"
- "desc": "If the githzerai fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "While the githzerai is wearing no armor and wielding no shield, its AC\
    \ includes its Wisdom modifier."
  "name": "Psychic Defense"
"actions":
- "desc": "The githzerai makes three Unarmed Strike attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 9\
    \ (1d8 + 5) bludgeoning damage plus 18 (4d8) psychic damage."
  "name": "Unarmed Strike"
"legendary_actions":
- "desc": "The githzerai makes one Unarmed Strike attack."
  "name": "Strike"
- "desc": "The githzerai teleports, along with any equipment it is wearing or carrying,\
    \ to an unoccupied space it can see within 30 feet of it."
  "name": "Teleport"
- "desc": "The githzerai casts the [reverse gravity](/3-Mechanics/CLI/spells/reverse-gravity.md)\
    \ spell, using Wisdom as the spellcasting ability. The spell has the normal effect,\
    \ except that the githzerai can orient the area in any direction and creatures\
    \ and objects fall toward the end of the area."
  "name": "Change Gravity (Costs 3 Actions)"
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties), the anarch can take one\
    \ of the following lair actions; the anarch can't take the same lair action two\
    \ rounds in a row:"
  "name": ""
- "desc": "- Create Object. The anarch casts the creation spell (as a 9th-level\
    \ spell) using the unformed substance of Limbo instead of shadow material. If\
    \ used in Limbo, the object remains until the anarch's [concentration](/3-Mechanics/CLI/rules/conditions.md#concentration)\
    \ is broken, regardless of its composition. If the anarch moves more than 120\
    \ feet from the object, the anarch's [concentration](/3-Mechanics/CLI/rules/conditions.md#concentration)\
    \ breaks.  \n- Move Object. The anarch can magically move an object it can\
    \ see within 150 feet of it by making a Wisdom check with advantage. The DC depends\
    \ on the object's size: DC 5 for Tiny, DC 10 for Small, DC 15 for Medium, DC 20\
    \ for Large, and DC 25 for Huge or larger.  \n- Psionic Bolt. The anarch casts\
    \ the lightning bolt spell (at 5th level), but the anarch can change the damage\
    \ type from lightning to cold, fire, psychic, radiant, or thunder. If the spell\
    \ deals damage other than fire or lightning, it doesn't ignite flammable objects.\
    \  "
  "name": ""
"regional_effects":
- "desc": "The region containing an anarch's lair is warped by its presence, which\
    \ creates one or more of the following effects:"
  "name": ""
- "desc": "- Form Substance. In Limbo, the anarch can spend 10 minutes stabilizing\
    \ a 5-mile area centered on it, causing the unformed substance to take whatever\
    \ inanimate form the anarch chooses. During that process, the anarch determines\
    \ the shape and composition of the forms created.  \n- Stabilize Object. The\
    \ anarch stabilizes any object created in Limbo and brought to the Material Plane\
    \ for as long as the anarch remains within 1 mile of it (no action required).\
    \  "
  "name": ""
- "desc": "If the anarch dies, these effects end after 1d6 rounds. All formed substance\
    \ becomes a chaotic churn of energy and matter, unraveling into unformed substance\
    \ that dissipates 1d6 rounds later."
  "name": ""
"source":
- "MPMM"
- "MTF"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/githzerai-anarch-mpmm.webp"
```
^statblock