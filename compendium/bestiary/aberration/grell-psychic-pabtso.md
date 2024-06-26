---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Grell Psychic"]
---
# [Grell Psychic](3-Mechanics\CLI\bestiary\aberration/grell-psychic-pabtso.md)
*Source: Phandelver and Below: The Shattered Obelisk p. 145*  

```statblock
"name": "Grell Psychic (PaBTSO)"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"ac_class": "15 with [mage armor](/3-Mechanics/CLI/spells/mage-armor.md)"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "17"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "11"
- !!int "14"
"speed": "10 ft., fly 30 ft. (hover)"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "4"
"damage_immunities": "lightning"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 14"
"languages": "Deep Speech, Grell"
"cr": "4"
"traits":
- "desc": "The grell psychic casts one of the following spells, requiring no spell\
    \ components and using Charisma as the spellcasting ability (spell save DC 12):\n\
    \nAt will: [detect thoughts](/3-Mechanics/CLI/spells/detect-thoughts.md),\
    \ [mage armor](/3-Mechanics/CLI/spells/mage-armor.md), [mage hand](/3-Mechanics/CLI/spells/mage-hand.md)\
    \ (the hand is invisible)\n\n1/day each: [confusion](/3-Mechanics/CLI/spells/confusion.md),\
    \ [fear](/3-Mechanics/CLI/spells/fear.md)"
  "name": "Spellcasting (Psionics)"
"actions":
- "desc": "The grell psychic makes one Tentacle attack and one Beak attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10\
    \ (3d4 + 3) piercing damage."
  "name": "Beak"
- "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8\
    \ (1d10 + 3) piercing damage, and the target must succeed on a DC 11 Constitution\
    \ saving throw or have the [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ condition for 1 minute. While the target is [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned),\
    \ it also has the [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed)\
    \ condition. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. The target also has the [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ condition (escape DC 16). While grappling the target, the grell can't make Tentacle\
    \ attacks against other targets. When the grell moves, any Medium or smaller target\
    \ it is grappling moves with it."
  "name": "Tentacle"
"source":
- "PaBTSO"
"image": "/3-Mechanics/CLI/bestiary/aberration/token/grell-psychic-pabtso.webp"
```
^statblock