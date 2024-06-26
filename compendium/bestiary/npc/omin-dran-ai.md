---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ai
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/half-elf
statblock: inline
aliases: ["Omin Dran"]
---
# [Omin Dran](3-Mechanics\CLI\bestiary\npc/omin-dran-ai.md)
*Source: Acquisitions Incorporated p. 196*  

> [!quote]-  
> 
> My duty, first and foremost, is to my shareholders. And I am the only shareholder.

Ominifis Hereward Dran spent his formative years in the small waystop of Red Larch, where his mother, Prophetess, ran a popular inn and restaurant. In the brief periods of respite afforded by working the family business, Omin and his sisters, Auspicia and Portentia, were wont to wander the hills and trails around town, dreaming of adventure. But adventure of the wrong kind came calling for the trio one day, when an underground ruin they had often explored-actually a creature called the Wandering Crypt-took Auspicia from the world.

Omin Dran built the organization called Acquisitions Incorporated to facilitate and expand his quest to find his true sister, at least in part. For despite his unprecedented success in establishing the market for franchised adventuring across the Sword Coast and beyond, Omin's full measure eludes most people. He is known to be a worshiper of Tymora, ruthless in matters of business, feckless in matters of love, and hopeless in games of chance. Omin is also often accused of being one of the Masked Lords of Waterdeep, though this bit of fancy earns little more than a chuckle in response. And even if the rumor were true, Omin would never leverage such a position for greater financial gain and power. Because that would be wrong...

```statblock
"name": "Omin Dran (AI)"
"size": "Medium"
"type": "humanoid"
"subtype": "half-elf"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"ac_class": "[plate armor](/3-Mechanics/CLI/items/plate-armor.md)"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "16"
- !!int "8"
- !!int "14"
- !!int "11"
- !!int "18"
- !!int "12"
"speed": "30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "7"
"skillsaves":
  "Medicine": !!int "7"
  "Intimidation": !!int "4"
  "Deception": !!int "4"
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Persuasion": !!int "4"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Common, Dwarvish, Elvish, Goblin"
"cr": "5"
"traits":
- "desc": "Omin is a 9th-level spellcaster. His spellcasting ability is Wisdom (spell\
    \ save DC 15, +7 to hit with spell attacks). He has the following cleric spells\
    \ prepared:\n\nCantrips (at will): [guidance](/3-Mechanics/CLI/spells/guidance.md),\
    \ [sacred flame](/3-Mechanics/CLI/spells/sacred-flame.md), [spare the dying](/3-Mechanics/CLI/spells/spare-the-dying.md),\
    \ [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy.md)\n\n1st level (4 slots):\
    \ [bless](/3-Mechanics/CLI/spells/bless.md), [command](/3-Mechanics/CLI/spells/command.md),\
    \ [divine favor](/3-Mechanics/CLI/spells/divine-favor.md), [shield of faith](/3-Mechanics/CLI/spells/shield-of-faith.md)\n\
    \n2nd level (3 slots): [enhance ability](/3-Mechanics/CLI/spells/enhance-ability.md),\
    \ [hold person](/3-Mechanics/CLI/spells/hold-person.md), [magic weapon](/3-Mechanics/CLI/spells/magic-weapon.md),\
    \ [silence](/3-Mechanics/CLI/spells/silence.md), [spiritual weapon](/3-Mechanics/CLI/spells/spiritual-weapon.md)\n\
    \n3rd level (3 slots): [beacon of hope](/3-Mechanics/CLI/spells/beacon-of-hope.md),\
    \ [crusader's mantle](/3-Mechanics/CLI/spells/crusaders-mantle.md), [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md),\
    \ [mass healing word](/3-Mechanics/CLI/spells/mass-healing-word.md), [spirit guardians](/3-Mechanics/CLI/spells/spirit-guardians.md)\n\
    \n4th level (3 slots): [death ward](/3-Mechanics/CLI/spells/death-ward.md),\
    \ [freedom of movement](/3-Mechanics/CLI/spells/freedom-of-movement.md), [locate\
    \ creature](/3-Mechanics/CLI/spells/locate-creature.md), [stoneskin](/3-Mechanics/CLI/spells/stoneskin.md)\n\
    \n5th level (1 slots): [dispel evil and good](/3-Mechanics/CLI/spells/dispel-evil-and-good.md),\
    \ [flame strike](/3-Mechanics/CLI/spells/flame-strike.md), [hold monster](/3-Mechanics/CLI/spells/hold-monster.md),\
    \ [greater restoration](/3-Mechanics/CLI/spells/greater-restoration.md), [legend\
    \ lore](/3-Mechanics/CLI/spells/legend-lore.md)"
  "name": "Spellcasting"
- "desc": "Once on each of his turns when he hits a creature with a weapon attack,\
    \ Omin can cause the attack to deal an extra 4 (1d8) damage of the same type\
    \ dealt by the weapon."
  "name": "Divine Strike"
- "desc": "Omin has advantage on saving throws against being [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
    \ and magic can't put him to sleep."
  "name": "Fey Ancestry"
"actions":
- "desc": "Omin makes two attacks with his maul."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10\
    \ (2d6 + 3) bludgeoning damage."
  "name": "Maul"
"reactions":
- "desc": "When a creature within 30 feet of Omin makes an attack roll, but before\
    \ learning whether it hits or misses, Omin can grant the creature a +10 bonus\
    \ to that roll."
  "name": "War God's Blessing (Recharges after a Short or Long Rest)"
"source":
- "AI"
"image": "/3-Mechanics/CLI/bestiary/npc/token/omin-dran-ai.webp"
```
^statblock