---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bgdia
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/celestial
statblock: inline
aliases: ["Lulu"]
---
# [Lulu](3-Mechanics\CLI\bestiary\npc/lulu-bgdia.md)
*Source: Baldur's Gate: Descent Into Avernus p. 5*  

```statblock
"name": "Lulu (BGDIA)"
"size": "Small"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "36"
"hit_dice": "8d6 + 8"
"stats":
- !!int "10"
- !!int "11"
- !!int "12"
- !!int "16"
- !!int "19"
- !!int "16"
"speed": "20 ft., fly 120 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "3"
  "Constitution": !!int "4"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "passive Perception 14"
"languages": "Celestial, telepathy 120 ft."
"cr": "5"
"traits":
- "desc": "Lulu's innate spellcasting ability is Wisdom (spell save DC 15). It can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [light](/3-Mechanics/CLI/spells/light.md)\n\n1/day each: [banishment](/3-Mechanics/CLI/spells/banishment.md),\
    \ [heal](/3-Mechanics/CLI/spells/heal.md), [raise dead](/3-Mechanics/CLI/spells/raise-dead.md),\
    \ [shapechange](/3-Mechanics/CLI/spells/shapechange.md) (into a golden-furred\
    \ [mammoth](/3-Mechanics/CLI/bestiary/beast/mammoth.md) with feathered wings and\
    \ a flying speed of 120 ft.), [teleport](/3-Mechanics/CLI/spells/teleport.md)\
    \ (with no chance of error)\n\n2/day each: [bless](/3-Mechanics/CLI/spells/bless.md),\
    \ [cure wounds](/3-Mechanics/CLI/spells/cure-wounds.md), [protection from evil\
    \ and good](/3-Mechanics/CLI/spells/protection-from-evil-and-good.md)"
  "name": "Innate Spellcasting"
- "desc": "An [invisible](/3-Mechanics/CLI/rules/conditions.md#invisible) aura forms\
    \ a 10-foot-radius sphere around Lulu for as long as it lives. Any spell of 5th\
    \ level or lower cast from outside the barrier can't affect creatures or objects\
    \ within it, even if the spell is cast using a higher level spell slot. Such a\
    \ spell can target creatures and objects within the barrier, but the spell has\
    \ no effect on them. Similarly, the area within the barrier is excluded from the\
    \ areas affected by such spells. Lulu can use an action to suppress this trait\
    \ until its [concentration](/3-Mechanics/CLI/rules/conditions.md#concentration)\
    \ ends (as if concentrating on a spell)."
  "name": "Aura of Invulnerability"
- "desc": "Lulu's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ piercing damage."
  "name": "Tusks"
- "desc": "Lulu blows air through its trunk, creating a trumpet sound that can be\
    \ heard out to a range of 600 feet. The trumpet also creates a 30-foot cone of\
    \ energy that has one of the following effects, chosen by Lulu:"
  "name": "Trumpet (3/Day)"
- "desc": "Each creature in the cone must make a DC 14 Constitution saving throw.\
    \ On a failed save, a creature takes 17 (5d6) thunder damage and is [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened)\
    \ for 1 minute. On a successful save, a creature takes half as much damage and\
    \ isn't [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened). Nonmagical\
    \ objects in the cone that aren't being held or worn take 35 (10d6) thunder\
    \ damage."
  "name": "Trumpet of Blasting"
- "desc": "Creatures in the cone must make a DC 14 Constitution saving throw, taking\
    \ 22 (4d8 + 4) radiant damage on a failed save, or half as much damage on a\
    \ successful one. Evil creatures have disadvantage on the saving throw. Good creatures\
    \ in the cone take no damage."
  "name": "Trumpet of Sparkles"
"source":
- "BGDIA"
"image": "/3-Mechanics/CLI/bestiary/npc/token/lulu-bgdia.webp"
```
^statblock