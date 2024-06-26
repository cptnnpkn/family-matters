---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/egw
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/lizardfolk
statblock: inline
aliases: ["Skr'a S'orsk"]
---
# [Skr'a S'orsk](3-Mechanics\CLI\bestiary\npc/skra-sorsk-egw.md)
*Source: Explorer's Guide to Wildemount p. 254*  

```statblock
"name": "Skr'a S'orsk (EGW)"
"size": "Medium"
"type": "humanoid"
"subtype": "lizardfolk"
"alignment": "Neutral"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "10"
- !!int "15"
- !!int "8"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "4"
  "Survival": !!int "6"
"senses": "passive Perception 14"
"languages": "Draconic"
"cr": "2"
"traits":
- "desc": "Skr'a S'orsk is a 5th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 12, +4 to hit with spell attacks). Skr'a S'orsk has the following\
    \ druid spells prepared:\n\nCantrips (at will): [produce flame](/3-Mechanics/CLI/spells/produce-flame.md),\
    \ [resistance](/3-Mechanics/CLI/spells/resistance.md), [thorn whip](/3-Mechanics/CLI/spells/thorn-whip.md)\n\
    \n1st level (4 slots): [entangle](/3-Mechanics/CLI/spells/entangle.md), [fog\
    \ cloud](/3-Mechanics/CLI/spells/fog-cloud.md)\n\n2nd level (3 slots): [blindness/deafness](/3-Mechanics/CLI/spells/blindness-deafness.md),\
    \ [spike growth](/3-Mechanics/CLI/spells/spike-growth.md)\n\n3rd level (2 slots):\
    \ [animate dead](/3-Mechanics/CLI/spells/animate-dead.md), [conjure animals](/3-Mechanics/CLI/spells/conjure-animals.md)\
    \ (reptiles only)"
  "name": "Spellcasting (Lizardfolk Form Only)"
- "desc": "The lizardfolk can hold its breath for 15 minutes."
  "name": "Hold Breath"
"actions":
- "desc": "The lizardfolk makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack (Lizardfolk Form Only)"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage, or 7 (1d10 + 2) piercing damage in [crocodile](/3-Mechanics/CLI/bestiary/beast/crocodile.md)\
    \ form. If Skr'a S'orsk is in crocodile form and the target is a Large or smaller\
    \ creature, the target is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 12). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ and Skr'a S'orsk can't bite another target. If Skr'a S'orsk reverts to its true\
    \ form, the grapple ends."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claws (Lizardfolk Form Only)"
- "desc": "The lizardfolk magically polymorphs into a [crocodile](/3-Mechanics/CLI/bestiary/beast/crocodile.md),\
    \ remaining in that form for up to 1 hour. It can revert to its true form as a\
    \ bonus action. Its statistics, other than its size, are the same in each form.\
    \ Any equipment it is wearing or carrying isn't transformed. It reverts to its\
    \ true form if it dies."
  "name": "Change Shape (Recharges after a Short or Long Rest)"
"source":
- "EGW"
"image": "/3-Mechanics/CLI/bestiary/npc/token/skra-sorsk-egw.webp"
```
^statblock