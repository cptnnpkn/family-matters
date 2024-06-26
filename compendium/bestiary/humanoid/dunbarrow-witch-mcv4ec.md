---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mcv4ec
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Dunbarrow Witch"]
---
# [Dunbarrow Witch](3-Mechanics\CLI\bestiary\humanoid/dunbarrow-witch-mcv4ec.md)
*Source: Monstrous Compendium Volume 3: 4: Eldraine Creatures*  

> [!quote]- A quote from Dunbarrow witch incantation  
> 
> "Taste the sweetness, breath for breath.
> 
> Keep the balance, death for death."

In the misty marsh of Dunbarrow, the witches of the Eldraine wilds scheme. They crave power by any means, and they aren't above cheating, sacrificing, or allying with whatever they believe will get them closer to that power.

Much of a Dunbarrow witch's magic is performed at cauldrons and delivered as a poison or potion. The most aggressive witch spells take the form of shattering mirrors.

> [!note] Companion Creatures
> 
> Various creatures serve the witches of Dunbarrow. It's not uncommon to see ravens and bats flitting through the canopy, or cats or otters scurrying through the undergrowth, to deliver messages to allies or rivals across the marsh. Some witches animate bundles of sticks and roots to do their errands about the marsh for them, while others animate furniture, weapons, or other objects.
> 
> Feel free to build encounters with witches that include additional creatures such as animated armor, a flying sword, a rug of smothering, or a Tiny Beast acting as a spy.
^companion-creatures

```statblock
"name": "Dunbarrow Witch (MCV4EC)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "typically  Neutral Evil"
"ac": !!int "12"
"ac_class": "15 with [mage armor](/3-Mechanics/CLI/spells/mage-armor.md)"
"hp": !!int "72"
"hit_dice": "16d8"
"stats":
- !!int "12"
- !!int "14"
- !!int "11"
- !!int "16"
- !!int "15"
- !!int "20"
"speed": "30 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "5"
"skillsaves":
  "Nature": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 12"
"languages": "Common, Sylvan, and any one language"
"cr": "5"
"traits":
- "desc": "The witch casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 16):\n\nAt will: [mage armor](/3-Mechanics/CLI/spells/mage-armor.md)\
    \ (self only), [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md)\n\
    \n1/day each: [bestow curse](/3-Mechanics/CLI/spells/bestow-curse.md), [dispel\
    \ magic](/3-Mechanics/CLI/spells/dispel-magic.md)\n\n2/day each: [animal messenger](/3-Mechanics/CLI/spells/animal-messenger.md),\
    \ [charm person](/3-Mechanics/CLI/spells/charm-person.md), [Tasha's hideous laughter](/3-Mechanics/CLI/spells/tashas-hideous-laughter.md)"
  "name": "Spellcasting"
"actions":
- "desc": "The witch makes two Poison Dagger attacks. It can replace one of these\
    \ attacks with Spellcasting."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage plus 21 (6d6) poison\
    \ damage."
  "name": "Poison Dagger"
- "desc": "The witch hurls a bottle of liquid at a point up to 20 feet away from itself,\
    \ which shatters into a cloud of magical smoke that fills a 10-foot-radius sphere.\
    \ Each creature in that area must succeed on a DC 16 Wisdom saving throw or transform\
    \ into a creature, as if under the effects of a [polymorph](/3-Mechanics/CLI/spells/polymorph.md)\
    \ spell, transforming into one of the following forms (roll a d4): 1, bat; 2,\
    \ frog; 3, lizard; or 4, rat. This transformation lasts for 1 hour or until the\
    \ creature drops to 0 hit points in its new form."
  "name": "Polymorph Concoction (1/Day)"
- "desc": "The witch targets a point it can see within 30 feet of itself. The air\
    \ there magically solidifies into a mirrorlike pane, then shatters in a 15-foot\
    \ cone originating from that point. Each creature in that area must make a DC\
    \ 16 Dexterity saving throw, taking 25 (10d4) force damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Shattered Shards"
"source":
- "MCV4EC"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/dunbarrow-witch-mcv4ec.webp"
```
^statblock