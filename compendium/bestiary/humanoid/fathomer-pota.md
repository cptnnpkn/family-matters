---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/pota
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Fathomer"]
---
# [Fathomer](3-Mechanics\CLI\bestiary\humanoid/fathomer-pota.md)
*Source: Princes of the Apocalypse p. 207, Ghosts of Saltmarsh*  

Fathomers are cultists who have sealed a pact with Olhydra, Princess of Evil Water. In addition to their spellcasting abilities, fathomers have the ability to transform their bodies into water, taking serpent-like shapes. In their water serpent forms, fathomers gain many of the resistances elemental creatures possess, as well as the ability to grapple and crush their enemies with their watery bodies.

Fathomers often serve as spies, infiltrators, and assassins for the water cult, since they can slip under locked doors or pass through bars and similar obstacles with ease.

```statblock
"name": "Fathomer (PotA)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "10"
"ac_class": "13 with [mage armor](/3-Mechanics/CLI/spells/mage-armor.md)"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "14"
- !!int "11"
- !!int "14"
- !!int "11"
- !!int "11"
- !!int "15"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "4"
  "Arcana": !!int "2"
"senses": "passive Perception 14"
"languages": "Aquan, Common"
"cr": "2"
"traits":
- "desc": "The fathomer is a 5th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 12, +4 to hit with spell attacks). It has two 3rd-level spell\
    \ slots, which it regains after finishing a short or long rest, and knows the\
    \ following warlock spells:\n\nCantrips (at will): [chill touch](/3-Mechanics/CLI/spells/chill-touch.md),\
    \ [eldritch blast](/3-Mechanics/CLI/spells/eldritch-blast.md), [mage hand](/3-Mechanics/CLI/spells/mage-hand.md)\n\
    \n1st-3rd level (2 slots): [armor of Agathys](/3-Mechanics/CLI/spells/armor-of-agathys.md),\
    \ [expeditious retreat](/3-Mechanics/CLI/spells/expeditious-retreat.md), [hex](/3-Mechanics/CLI/spells/hex.md),\
    \ [invisibility](/3-Mechanics/CLI/spells/invisibility.md), [Vampiric touch](/3-Mechanics/CLI/spells/vampiric-touch.md)"
  "name": "Spellcasting (Human Form Only)"
- "desc": "The fathomer can use its action to polymorph into a Medium serpent composed\
    \ of water, or back into its true form. Anything the fathomer is wearing or carrying\
    \ is subsumed into the serpent form during the change, inaccessible until the\
    \ fathomer returns to its true form. The fathomer reverts to its true form after\
    \ 4 hours, unless it can expend another use of this trait. If the fathomer is\
    \ knocked [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious) or dies,\
    \ it also reverts to its true form.\n\nWhile in serpent form, the fathomer gains\
    \ a swimming speed of 40 feet, the ability to breathe underwater, immunity to\
    \ poison damage, as well as resistance to fire damage and bludgeoning, piercing,\
    \ and slashing damage from nonmagical attacks. It also has immunity to the following\
    \ conditions: [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled),\
    \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned),\
    \ [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained), [prone](/3-Mechanics/CLI/rules/conditions.md#prone),\
    \ [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious). The serpent\
    \ form can enter a hostile creature's space and stop there. In addition, if water\
    \ can pass through a space, the serpent can do so without squeezing."
  "name": "Shapechanger (2/Day)"
- "desc": "The fathomer can cast [mage armor](/3-Mechanics/CLI/spells/mage-armor.md)\
    \ at will, without expending material components."
  "name": "Olhydra's Armor (Human Form Only)"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) bludgeoning damage. If the target is Medium or smaller, it is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 12). Until the grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ and the fathomer can't constrict another target."
  "name": "Constrict (Serpent Form Only)"
- "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger (Human Form Only)"
"source":
- "PotA"
- "GoS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/fathomer-pota.webp"
```
^statblock