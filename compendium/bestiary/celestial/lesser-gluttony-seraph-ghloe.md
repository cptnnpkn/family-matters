---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial
statblock: inline
aliases: ["Lesser Gluttony Seraph"]
---
# [Lesser Gluttony Seraph](3-Mechanics\CLI\bestiary\celestial/lesser-gluttony-seraph-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 94*  

> [!quote]-  
> 
> Don't go to the temple. Something sinister has claimed it. Seek shelter elsewhere.

## Salvage

An avarice seraph's metal-tipped feathers can be sold. Those of the lesser seraph are worth 250 gp, while those of the seraph are worth 1,000 gp.

Someone who has proficiency with alchemist's supplies can melt the metal on the feathers of an avarice seraph and use some feathers as fletching to make one arrow of celestial slaying for a lesser seraph, or four such arrows from the seraph. Making one arrow takes 7 days of work, reagents worth 1,000 gp, and a successful DC 17 Intelligence or Wisdom check.

The saliva of a gluttony seraph functions as antitoxin—three doses can be collected from a lesser seraph, while ten can be gathered from a seraph. Someone who has proficiency with alchemist's supplies or an herbalism kit can mix two doses of this saliva with reagents worth 50 gp and brew the mixture for 4 hours. The resulting elixir affects the imbiber as a protection from poison spell, curing a random poison in the drinker's system.

## Lore

- **DC 10 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** The disavowed are seraphs fallen to evil. Each still retains a measure of its celestial power.  
- **DC 15 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)).** From their celestial heritage, disavowed retain magic resistance and resistance to nonmagical attacks, as well as immunity to being charmed, exhausted, and frightened. Even in a fallen state, the seraph imparts magic and radiant damage to its attacks. Gluttony seraphs are also immune to poison.  
- **DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** Avarice seraphs can rouse the greed in any creature. Huge gluttony seraphs can swallow and digest people, although their lesser kin can't.  

```statblock
"name": "Lesser Gluttony Seraph (GHLoE)"
"size": "Large"
"type": "celestial"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "18"
- !!int "14"
- !!int "19"
- !!int "12"
- !!int "14"
- !!int "15"
"speed": "30 ft., fly 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "5"
  "Constitution": !!int "7"
"skillsaves":
  "Insight": !!int "5"
  "Perception": !!int "5"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "all, telepathy 120 ft."
"cr": "7"
"traits":
- "desc": "The seraph's spellcasting ability is Charisma (spell save DC 13). The seraph\
    \ can innately cast the following spells, using only verbal components:\n\nAt\
    \ will: [detect evil and good](/3-Mechanics/CLI/spells/detect-evil-and-good.md),\
    \ [detect magic](/3-Mechanics/CLI/spells/detect-magic.md), [light](/3-Mechanics/CLI/spells/light.md),\
    \ [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy.md)\n\n1/day each: [create\
    \ food and water](/3-Mechanics/CLI/spells/create-food-and-water.md), [suggestion](/3-Mechanics/CLI/spells/suggestion.md)"
  "name": "Innate Spellcasting"
- "desc": "The seraph has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The seraph's weapon attacks are magical. When the seraph hits with any\
    \ weapon, the weapon deals an extra (1d8) radiant damage (included in the attacks)."
  "name": "Seraphic Weapons"
"actions":
- "desc": "The seraph makes three attacks, only one of which can be a bite."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15\
    \ (2d10 + 4) piercing damage and 4 (1d8) radiant damage. If the target is\
    \ a Medium or smaller creature, it is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 15). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ and the seraph can't bite another target."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d4\
    \ + 4) slashing damage and 4 (1d8) radiant damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +7 to hit, reach 15 ft., one creature. Hit:\
    \ 6 (1d4 + 4) bludgeoning damage and 4 (1d8) radiant damage, and the target\
    \ is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) (escape DC 15)\
    \ and pulled to within 5 feet of the seraph. Until the grapple ends, the target\
    \ is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained), and the seraph\
    \ can't use its tongue or bite on another target."
  "name": "Tongue"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/celestial/token/lesser-gluttony-seraph-ghloe.webp"
```
^statblock