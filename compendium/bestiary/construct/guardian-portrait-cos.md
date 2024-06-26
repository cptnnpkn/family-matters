---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cos
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Guardian Portrait"]
---
# [Guardian Portrait](3-Mechanics\CLI\bestiary\construct/guardian-portrait-cos.md)
*Source: Curse of Strahd p. 227*  

A guardian portrait looks like a finely rendered and beautifully framed work of art, usually depicting someone important in a realistic manner. The picture and its frame are bound with powerful magic and are inseparable.

## Living Image

The eyes of the figure depicted in the painting are imbued with [darkvision](/3-Mechanics/CLI/rules/senses.md#darkvision), and they appear to follow creatures that move in front of them.

## Innate Spells

When a guardian portrait attacks, the figure in the painting animates and moves as though alive (albeit in two dimensions). The guardian portrait has no effective melee attacks, but it has a repertoire of innate spells that it can cast. When it casts a spell, the figure painted on the canvas makes all the appropriate somatic gestures and verbal incantations for the spell.

```statblock
"name": "Guardian Portrait (CoS)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "5"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "1"
- !!int "1"
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "10"
"speed": "0 ft."
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled), [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed),\
  \ [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone), [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, plus up to two other languages"
"cr": "1"
"traits":
- "desc": "The portrait's innate spellcasting ability is Intelligence (spell save\
    \ DC 12). The portrait can innately cast the following spells, requiring no material\
    \ components:\n\n3/day each: [counterspell](/3-Mechanics/CLI/spells/counterspell.md),\
    \ [crown of madness](/3-Mechanics/CLI/spells/crown-of-madness.md), [hypnotic pattern](/3-Mechanics/CLI/spells/hypnotic-pattern.md),\
    \ [telekinesis](/3-Mechanics/CLI/spells/telekinesis.md)"
  "name": "Innate Spellcasting"
- "desc": "An animated object doesn't require air, food, drink, or sleep.\n\nThe magic\
    \ that animates an object is dispelled when the construct drops to 0 hit points.\
    \ An animated object reduced to 0 hit points becomes inanimate and is too damaged\
    \ to be of much use or value to anyone."
  "name": "Constructed Nature"
- "desc": "The portrait is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ while in the area of an [antimagic field](/3-Mechanics/CLI/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md), the\
    \ portrait must succeed on a Constitution saving throw against the caster's spell\
    \ save DC or become [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)\
    \ for 1 minute."
  "name": "Antimagic Susceptibility"
- "desc": "While the figure in the portrait remains motionless, the portrait is indistinguishable\
    \ from a normal painting."
  "name": "False Appearance"
"source":
- "CoS"
"image": "/3-Mechanics/CLI/bestiary/construct/token/guardian-portrait-cos.webp"
```
^statblock