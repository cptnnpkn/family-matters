---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/vgm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity/shapechanger
- ttrpg-cli/monster/type/monstrosity/yuan-ti
statblock: inline
aliases: ["Yuan-ti Malison (Type 5)"]
---
# [Yuan-ti Malison (Type 5)](3-Mechanics\CLI\bestiary\monstrosity/yuan-ti-malison-type-5-vgm.md)
*Source: Volo's Guide to Monsters p. 96, Tomb of Annihilation*  

```statblock
"name": "Yuan-ti Malison (Type 5) (VGM)"
"size": "Medium"
"type": "monstrosity"
"subtype": "shapechanger, yuan-ti"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "14"
- !!int "12"
- !!int "16"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Abyssal, Common, Draconic"
"cr": "3"
"traits":
- "desc": "The yuan-ti's innate spellcasting ability is Charisma (spell save DC 13).\
    \ The yuan-ti can innately cast the following spells, requiring no material components:\n\
    \nAt will: [animal friendship](/3-Mechanics/CLI/spells/animal-friendship.md)\
    \ (snakes only)\n\n3/day: [suggestion](/3-Mechanics/CLI/spells/suggestion.md)"
  "name": "Innate Spellcasting (Yuan-ti Form Only)"
- "desc": "The yuan-ti can use its action to polymorph into a Medium snake, or back\
    \ into its true form. Its statistics are the same in each form. Any equipment\
    \ it is wearing or carrying isn't transformed. It doesn't change form if it dies."
  "name": "Shapechanger"
- "desc": "The yuan-ti has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The yuan-ti has one of the following types:\n\n- Type 4. Human form\
    \ with one or more serpentine tails  \n- Type 5. Human form covered in scales\
    \  "
  "name": "Malison Type"
"actions":
- "desc": "The yuan-ti makes two ranged attacks or two melee attacks."
  "name": "Multiattack (Yuan-ti Form Only)"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5\
    \ (1d4 + 3) piercing damage plus 7 (2d6) poison damage."
  "name": "Bite (Snake Form Only)"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Scimitar (Yuan-ti Form Only)"
- "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow (Yuan-ti Form Only)"
"source":
- "VGM"
- "ToA"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/yuan-ti-malison-type-5-vgm.webp"
```
^statblock

## Environment

forest, swamp, desert