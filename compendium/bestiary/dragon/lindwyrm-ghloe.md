---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/14
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Lindwyrm"]
---
# [Lindwyrm](3-Mechanics\CLI\bestiary\dragon/lindwyrm-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 58*  

> [!quote]-  
> 
> My great grandfather spoke of the lindwyrm terrorizing the countryside and devouring whole villages. But it's been so long since anyone has seen the beast, it's likely the creature is long dead. Thank Miklas!

## Salvage

A dose of [lindwyrm venom](/3-Mechanics/CLI/items/lindwyrm-venom-ghloe.md) (see Appendix A of Lairs of Etharis) can be harvested by someone proficient with a poisoner's kit and succeeds on a DC 18 Dexterity ([Sleight of Hand](/3-Mechanics/CLI/rules/skills.md#Sleight%20of%20Hand)) check, but this must be done within 1 hour of the lindwyrm's death. If the check fails by 5 or more, the harvester instead poisons themselves. This injury poison is worth 1,000 gp.

## Lore

- **DC 10 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** Lindwyrms sleep for 100 years and when they waken are devastating to communities in its hunting area.  
- **DC 15 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** Lindwyrms have a poisonous bite and may swallow creatures they bite.  
- **DC 20 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** Lindwyrms can sense vibrations in the ground from as far away as 120 ft.  

> [!note] GM Advice
> 
> One exciting adventure seed could find a powerful enemy of the adventurers looking to waken and control a lindwyrm. Whether that plot succeeds or not is up to you, but a three-way battle between involving a lindwyrm and other foes should be memorable as the action ebbs and flows.
^gm-advice

```statblock
"name": "Lindwyrm (GHLoE)"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "186"
"hit_dice": "12d20 + 60"
"stats":
- !!int "23"
- !!int "15"
- !!int "21"
- !!int "8"
- !!int "14"
- !!int "12"
"speed": "40 ft., burrow 30 ft."
"saves":
  "Dexterity": !!int "7"
  "Strength": !!int "11"
  "Constitution": !!int "10"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "7"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., tremorsense 120 ft., passive Perception 17"
"languages": "Draconic"
"cr": "14"
"traits":
- "desc": "The lindwyrm is immune to all nonmagical diseases."
  "name": "Disease Immunity"
- "desc": "If the lindwyrm fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "The lindwyrm makes three attacks: one with its bite and two with its claws.\
    \ The lindwyrm can substitute a swallow attack for one of its claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 22\
    \ (3d10 + 6) piercing damage and the target must make a DC 18 Constitution saving\
    \ throw, taking\_18 (4d8) poison damage on a failed save, or half as much damage\
    \ on a successful one. On a hit, the target is also [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 18). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ and the lindwyrm can't bite another target."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 15\
    \ (2d8 + 6) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one Huge or smaller creature\
    \ the lindwyrm is grappling. Hit: 22 (3d10 + 6) piercing damage, the target\
    \ is swallowed, and the grapple ends. The swallowed target is [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)\
    \ and [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained), it has total\
    \ cover against attacks and other effects outside the lindwyrm, and it takes 27\
    \ (6d8) acid damage at the start of each of the lindwyrm's turns. The lindwyrm\
    \ can have only one target swallowed at a time.\n\nIf the lindwyrm takes 40 damage\
    \ or more on a single turn from the swallowed creature, the lindwyrm must succeed\
    \ on a DC 18 Constitution saving throw at the end of that turn or regurgitate\
    \ the creature, which falls [prone](/3-Mechanics/CLI/rules/conditions.md#prone)\
    \ in a space within 10 feet of the lindwyrm. If the lindwyrm dies, a swallowed\
    \ creature is no longer [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ by it and can escape from the corpse using 5 feet of movement, exiting [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Swallow"
"legendary_actions":
- "desc": "The lindwyrm makes a claw attack."
  "name": "Claw Attack"
- "desc": "The lindwyrm burrows its speed and comes up beneath a target touching the\
    \ ground, making a bite attack. This movement does not provoke opportunity attacks."
  "name": "Burrowing Rush (Costs 2 Actions)"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/lindwyrm-ghloe.webp"
```
^statblock