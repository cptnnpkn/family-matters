---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/20
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Executioner"]
---
# [Executioner](3-Mechanics\CLI\bestiary\construct/executioner-dodk.md)
*Source: Dungeons of Drakkenheim p. 209*  

> [!quote]- A quote from Lieutenant Petra Lang  
> 
> ...and that's why we don't go to Slaughterstone Square.


```statblock
"name": "Executioner (DoDk)"
"size": "Huge"
"type": "construct"
"alignment": "Lawful Evil"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "405"
"hit_dice": "30d12 + 210"
"stats":
- !!int "29"
- !!int "11"
- !!int "25"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "40 ft."
"saves":
  "Wisdom": !!int "6"
  "Strength": !!int "15"
  "Constitution": !!int "13"
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands common but does not speak"
"cr": "20"
"traits":
- "desc": "If the Executioner fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The Executioner is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The Executioner has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "The Executioner's weapon attacks are magical."
  "name": "Magic Weapons"
- "desc": "If the Executioner is destroyed, it returns with all its hit points in\
    \ 24 hours unless a [disintegrate](/3-Mechanics/CLI/spells/disintegrate.md) spell\
    \ is cast on its remains."
  "name": "Rejuvenation"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +15 to hit, reach 10 ft., or range 30/120\
    \ ft., one target. Hit: 30 (6d6 + 9) slashing damage plus 14 (4d6) necrotic\
    \ damage. The target must succeed on a DC 21 Constitution saving throw or its\
    \ hit point maximum is reduced by an amount equal to the necrotic damage taken.\
    \ This reduction lasts until the creature finishes a long rest. The target dies\
    \ if this effect reduces its hit point maximum to 0. Immediately after making\
    \ a ranged attack, this weapon flies back to the Executioner's hands."
  "name": "Guillotine Blade"
- "desc": "The Executioner vents necrotic gas in a 30-foot radius. Each creature in\
    \ that area must succeed on a DC 21 Constitution saving throw, taking 45 (10d8)\
    \ necrotic damage on a failed save, or half as much damage on a successful one.\
    \ A creature who fails this saving throw by 5 or more gains one level of contamination."
  "name": "Necrotic Vents (Recharge 5-6)"
"legendary_actions":
- "desc": "The Executioner moves half its speed."
  "name": "Lumber Forward"
- "desc": "The Executioner makes a melee or ranged attack with its Guillotine Blade."
  "name": "Attack (Costs 2 actions)"
- "desc": "The Executioner targets up to six humanoid corpses it can see within 60\
    \ feet of it that have died violently. Each target's spirit rises as a shadow\
    \ in the space of its corpse or in the nearest unoccupied space. The shadows act\
    \ after the Executioner on the same initiative count, are under its control, and\
    \ remain for 1 minute or until they're destroyed. They disappear if the Executioner\
    \ is destroyed."
  "name": "Summon Shadows. (Costs 3 actions)"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/construct/token/executioner-dodk.webp"
```
^statblock