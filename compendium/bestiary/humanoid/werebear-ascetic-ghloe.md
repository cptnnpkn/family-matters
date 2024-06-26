---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any
- ttrpg-cli/monster/type/humanoid/shapechanger
statblock: inline
aliases: ["Werebear Ascetic"]
---
# [Werebear Ascetic](3-Mechanics\CLI\bestiary\humanoid/werebear-ascetic-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 37*  

> [!quote]-  
> 
> During full moons, inhabitants of Etharis stay inside with the doors barred and windows tightly shut. Even then, they look at those indoors with them with a suspicious eye. One never knows.

## Salvage

Lycanthropes exist in a state of perpetual mental turmoil, and over time their memories fragment. As a result, many carry keepsakes of their past lives to strengthen the memories they do not want to lose. The pelt of a lycanthrope is prized by certain mages for the crafting of magical cloaks, particularly cloaks that allow a person to change their form such as the cloak of the bat or the cloak of the manta ray.

Weapons made from the fangs or claws of deceased lycanthropes have special properties and are known as [lycan weapons](/3-Mechanics/CLI/items/lycan-weapon-ghloe.md) (see Appendix A of Lairs of Etharis). These weapons require a successful DC 15 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)) check by a proficient weaponsmith, consuming 500 gp worth of components, and requiring 10 days of work.

## Lore

- **DC 10 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** Lycanthropy is a common affliction in Etharis. The source is a curse that twists mind and body into that of a savage beast. Though they can change at will, the light of the full moon triggers the transformation no matter what.  
- **DC 15 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** In addition to the normal transmission of the curse through the bite of a lycanthrope, certain druidic sects also perform rituals to create new lycanthropes. This ritual is known as the Lunar Sacrament, used as a tool to protect druid groves from invasion.  
- **DC 20 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** While the nature of the transformation tends to override the senses with bestial fury, some can control themselves. By finding a balance between man and beast, they gain greater control over the curse, gaining the ability to turn into a full animal and retain their mental faculties.  

```statblock
"name": "Werebear Ascetic (GHLoE)"
"size": "Medium"
"type": "humanoid"
"subtype": "any, shapechanger"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 from natural armor in hybrid form"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"stats":
- !!int "16"
- !!int "14"
- !!int "17"
- !!int "10"
- !!int "16"
- !!int "11"
"speed": "30 ft. (50 ft. and 30 ft. climb in hybrid and kindred form)"
"saves":
  "Wisdom": !!int "7"
"skillsaves":
  "Nature": !!int "4"
  "Animal Handling": !!int "7"
  "Perception": !!int "7"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "any three languages"
"cr": "12"
"traits":
- "desc": "The werebear is a 13th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 15, +6 to hit with spell attacks). It can cast spells in any\
    \ form, regardless of verbal, somatic, or material components provided they have\
    \ no gold cost. It has the following druid spells prepared:\n\nCantrips (at\
    \ will): [druidcraft](/3-Mechanics/CLI/spells/druidcraft.md), [guidance](/3-Mechanics/CLI/spells/guidance.md),\
    \ [mending](/3-Mechanics/CLI/spells/mending.md), [resistance](/3-Mechanics/CLI/spells/resistance.md)\n\
    \n1st level (4 slots): [animal friendship](/3-Mechanics/CLI/spells/animal-friendship.md),\
    \ [faerie fire](/3-Mechanics/CLI/spells/faerie-fire.md), [healing word](/3-Mechanics/CLI/spells/healing-word.md)\n\
    \n2nd level (3 slots): [hold person](/3-Mechanics/CLI/spells/hold-person.md),\
    \ [lesser restoration](/3-Mechanics/CLI/spells/lesser-restoration.md)\n\n3rd\
    \ level (3 slots): [conjure animals](/3-Mechanics/CLI/spells/conjure-animals.md),\
    \ [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md), [plant growth](/3-Mechanics/CLI/spells/plant-growth.md)\n\
    \n4th level (3 slots): [freedom of movement](/3-Mechanics/CLI/spells/freedom-of-movement.md),\
    \ [ice storm](/3-Mechanics/CLI/spells/ice-storm.md)\n\n5th level (2 slots):\
    \ [commune with nature](/3-Mechanics/CLI/spells/commune-with-nature.md), [tree\
    \ stride](/3-Mechanics/CLI/spells/tree-stride.md)\n\n6th level (1 slots):\
    \ [wall of thorns](/3-Mechanics/CLI/spells/wall-of-thorns.md)\n\n7th level (1\
    \ slots): [arboreal curse](/3-Mechanics/CLI/spells/arboreal-curse-ghloe.md)"
  "name": "Spellcasting"
- "desc": "The werebear ascetic can use its action to polymorph into a bear-humanoid\
    \ hybrid or into its kindred bear form, or back into its true form, which is humanoid.\
    \ Its statistics, unless noted, are the same in each form. Any armor it is wearing\
    \ merges into its alternate forms. It reverts to its true form if it dies."
  "name": "Shapechanger"
- "desc": "The werebear's kindred form takes the shape of a Large bear. While in this\
    \ form, it can speak to and understand bears, cannot take any actions requiring\
    \ hands, adds its Constitution modifier to the result of any saving throw, and\
    \ gains 25 temporary hit points the first time it takes this form each day."
  "name": "Kindred Form"
"actions":
- "desc": "The werebear makes three melee attacks, only one of which can be a bite."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 16\
    \ (3d8 + 3) piercing damage. If the target is a humanoid, it must succeed on\
    \ a DC 15 Constitution saving throw or be cursed with werebear lycanthropy."
  "name": "Bite (Hybrid or Kindred Form Only)"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10\
    \ (2d6 + 3) slashing damage."
  "name": "Claw (Hybrid or Kindred Form Only)"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/werebear-ascetic-ghloe.webp"
```
^statblock