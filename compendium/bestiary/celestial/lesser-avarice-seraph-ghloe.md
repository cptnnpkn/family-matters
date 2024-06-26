---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/celestial
statblock: inline
aliases: ["Lesser Avarice Seraph"]
---
# [Lesser Avarice Seraph](3-Mechanics\CLI\bestiary\celestial/lesser-avarice-seraph-ghloe.md)
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
"name": "Lesser Avarice Seraph (GHLoE)"
"size": "Medium"
"type": "celestial"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"stats":
- !!int "16"
- !!int "18"
- !!int "17"
- !!int "13"
- !!int "15"
- !!int "16"
"speed": "30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "5"
  "Constitution": !!int "6"
"skillsaves":
  "Deception": !!int "6"
  "Insight": !!int "5"
  "Perception": !!int "5"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "all, telepathy 120 ft."
"cr": "7"
"traits":
- "desc": "The seraph's spellcasting ability is Charisma (spell save DC 14). The seraph\
    \ can innately cast the following spells, using only verbal components:\n\nAt\
    \ will: [detect evil and good](/3-Mechanics/CLI/spells/detect-evil-and-good.md),\
    \ [detect magic](/3-Mechanics/CLI/spells/detect-magic.md), [light](/3-Mechanics/CLI/spells/light.md),\
    \ [minor illusion](/3-Mechanics/CLI/spells/minor-illusion.md), [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy.md)\n\
    \n1/day each: [identify](/3-Mechanics/CLI/spells/identify.md), [suggestion](/3-Mechanics/CLI/spells/suggestion.md)"
  "name": "Innate Spellcasting"
- "desc": "The seraph has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The seraph's weapon attacks are magical. When the seraph hits with any\
    \ weapon, the weapon deals an extra (2d8) radiant damage (included in the attack)."
  "name": "Seraphic Weapons"
"actions":
- "desc": "The seraph makes three attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage and 9 (2d8) radiant damage."
  "name": "Scimitar"
- "desc": "The seraph calls out a tempting promise to one creature that can hear it\
    \ withing 30 feet. The creature must succeed on a DC 14 Charisma saving throw.\
    \ On a failed save, the creature cannot take actions for 1 minute, as it dwells\
    \ on the promise the seraph made. The target can repeat the saving throw at the\
    \ end of each turn, ending the effect on a success. Each failed saving throw after\
    \ the initial failure deals 9 (2d8) psychic damage to the target"
  "name": "Tempting Call"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/celestial/token/lesser-avarice-seraph-ghloe.webp"
```
^statblock