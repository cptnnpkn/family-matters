---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/idrotf
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Chardalyn Dragon"]
---
# [Chardalyn Dragon](3-Mechanics\CLI\bestiary\construct/chardalyn-dragon-idrotf.md)
*Source: Icewind Dale: Rime of the Frostmaiden p. 281*  

This construct is fashioned from pieces of chardalyn (see the sidebar on Chardalyn) that have been assembled in the form of a dragon. The only parts of the dragon not forged from chardalyn are its wing flaps, which are made of an oily film as tough as rubber, and its heart, which is an orb of pulsating, radiant energy. Demonic magic suffusing the chardalyn imbues the construct with malevolence, allowing it to enjoy the terror it causes. This effect extends outward from it, corrupting other creatures who get too close to the dragon. Those affected by the dragon's presence turn their efforts to helping the dragon inflict suffering on others.

A chardalyn dragon serves the tyrannical will of its evil creator—a tireless drive devotion that exceeds its own instinct of self-preservation. Thus, the dragon will destroy itself in pursuit of its master's desires if necessary. The dragon likes to tear foes apart, as well as knock down doors and other structures. Against enemies it can't reach, it fires a beam of destructive radiance from its grill-like maw.

```statblock
"name": "Chardalyn Dragon (IDRotF)"
"size": "Huge"
"type": "construct"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "147"
"hit_dice": "14d12 + 56"
"stats":
- !!int "24"
- !!int "11"
- !!int "19"
- !!int "10"
- !!int "10"
- !!int "3"
"speed": "30 ft., fly 90 ft."
"saves":
  "Strength": !!int "11"
  "Constitution": !!int "8"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "cold, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "the languages known by its creator"
"cr": "11"
"traits":
- "desc": "The dragon is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The dragon has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The dragon deals double damage to objects and structures."
  "name": "Siege Monster"
- "desc": "The dragon doesn't require air, food, drink, or sleep, and it gains no\
    \ benefit from finishing a short or long rest."
  "name": "Unusual Nature"
"actions":
- "desc": "The dragon uses its Malevolent Presence. It then makes three attacks: two\
    \ with its claws and one with its tail. If the dragon isn't flying, it can also\
    \ make one attack with its wings."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 14\
    \ (2d6 + 7) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 18\
    \ (2d10 + 7) bludgeoning damage."
  "name": "Tail"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 12\
    \ (2d4 + 7) bludgeoning damage."
  "name": "Wings"
- "desc": "Any creature with an Intelligence of 4 or more that is within 30 feet of\
    \ the dragon must succeed on a DC 16 Wisdom saving throw or be [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ by it for 1 minute. A creature can repeat the saving throw at the end of each\
    \ of its turns, ending the effect on itself on a success. If a creature's saving\
    \ throw is successful or the effect ends for it, the creature is immune to the\
    \ dragon's Malevolent Presence for the next 24 hours. A creature [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ in this way fixates on another creature or object that the dragon mentally chooses\
    \ and must, on each of its turns, move as close as it can to that target and use\
    \ its action to make a melee attack against it. If the dragon doesn't choose a\
    \ target, the [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed) creature\
    \ can act normally on its turn."
  "name": "Malevolent Presence"
- "desc": "The dragon exhales a ray of radiant energy in a 120-foot line that is 5\
    \ feet wide. Each creature in that line must make a DC 16 Dexterity saving throw,\
    \ taking 31 (7d8) radiant damage on a failed save, or half as much damage on\
    \ a successful one."
  "name": "Radiant Breath (Recharge 5-6)"
"source":
- "IDRotF"
"image": "/3-Mechanics/CLI/bestiary/construct/token/chardalyn-dragon-idrotf.webp"
```
^statblock