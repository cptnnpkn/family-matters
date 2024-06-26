---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/22
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
aliases: ["Geryon"]
---
# [Geryon](3-Mechanics\CLI\bestiary\npc/geryon-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 136*  

Geryon is locked in an endless struggle with Levistus for control of Stygia. The two have fought for centuries, each displacing the other innumerable times. Currently, Levistus claims lordship over Stygia, but he has been trapped in an enormous block of ice at the command of Asmodeus. In response, Geryon is marshaling his followers, hoping to use this opportunity to replace his hated rival.

Among the archdevils, Geryon is known for his martial prowess. He is a ferocious hunter and a relentless tracker. He often joins his troops in battle; he loves to feel flesh and steel sundered beneath his claws and to taste his foes' blood. Yet Geryon's ferocity has also limited his ability to collect souls and forge an effective hierarchy. Sages who study the Nine Hells believe the battle for control of Stygia is a test staged by Asmodeus in hopes of purging the worst impulses from both Geryon and Levistus—or discovering a competent replacement for both.

## Cultists of Geryon

> [!note]
> See the Cult of Geryon entry.

## Geryon's Lair

Geryon has recently reclaimed his ancient fortress, Coldsteel, a sprawling complex that rises from the icy center of Stygia. He roams the passages, spitting oaths of vengeance against Asmodeus and hatching schemes to reclaim his standing from Levistus. The challenge rating of Geryon is 23 (50,000 XP) when he's encountered in his lair.

```statblock
"name": "Geryon (MPMM)"
"size": "Huge"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "300"
"hit_dice": "24d12 + 144"
"stats":
- !!int "29"
- !!int "17"
- !!int "22"
- !!int "19"
- !!int "16"
- !!int "23"
"speed": "30 ft., fly 50 ft."
"saves":
  "Charisma": !!int "13"
  "Dexterity": !!int "10"
  "Wisdom": !!int "10"
  "Constitution": !!int "13"
"skillsaves":
  "Intimidation": !!int "13"
  "Deception": !!int "13"
  "Perception": !!int "10"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"damage_immunities": "cold, fire, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "truesight 120 ft., passive Perception 20"
"languages": "all, telepathy 120 ft."
"cr": "22"
"traits":
- "desc": "Geryon casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 21):\n\nAt will:\
    \ [alter self](/3-Mechanics/CLI/spells/alter-self.md) (can become Medium when\
    \ changing his appearance), [detect magic](/3-Mechanics/CLI/spells/detect-magic.md),\
    \ [ice storm](/3-Mechanics/CLI/spells/ice-storm.md), [invisibility](/3-Mechanics/CLI/spells/invisibility.md)\
    \ (self only), [locate object](/3-Mechanics/CLI/spells/locate-object.md), [suggestion](/3-Mechanics/CLI/spells/suggestion.md),\
    \ [wall of ice](/3-Mechanics/CLI/spells/wall-of-ice.md)\n\n1/day: [banishment](/3-Mechanics/CLI/spells/banishment.md)"
  "name": "Spellcasting"
- "desc": "If Geryon fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Geryon has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Geryon regains 20 hit points at the start of his turn. If he takes radiant\
    \ damage, this trait doesn't function at the start of his next turn. Geryon dies\
    \ only if he starts his turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "Geryon makes one Claw attack and one Stinger attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 23\
    \ (4d6 + 9) cold damage. If the target is Large or smaller, it is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (DC 24), and it is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ until the grapple ends. Geryon can grapple one creature at a time. If the target\
    \ is already [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) by Geryon,\
    \ the target takes an extra 27 (6d8) cold damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +16 to hit, reach 20 ft., one creature. Hit:\
    \ 14 (2d4 + 9) force damage, and the target must succeed on a DC 21 Constitution\
    \ saving throw or take 13 (2d12) poison damage and become [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ until it finishes a short or long rest. The target's hit point maximum is reduced\
    \ by an amount equal to half the poison damage taken. This reduction lasts until\
    \ the [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned) condition is removed.\
    \ The target dies if its hit point maximum is reduced to 0."
  "name": "Stinger"
- "desc": "Geryon teleports, along with any equipment he is wearing and carrying,\
    \ up to 120 feet to an unoccupied space he can see."
  "name": "Teleport"
"legendary_actions":
- "desc": "Geryon targets one creature he can see within 60 feet of him. The target\
    \ must succeed on a DC 23 Wisdom saving throw or become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ of Geryon until the end of its next turn."
  "name": "Infernal Glare"
- "desc": "Geryon uses Teleport."
  "name": "Teleport"
- "desc": "Geryon makes one Stinger attack."
  "name": "Swift Sting (Costs 2 Actions)"
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties), Geryon can take one of\
    \ the following lair actions; he can't take the same lair action two rounds in\
    \ a row:"
  "name": ""
- "desc": "- Banish. Geryon casts the banishment spell.  \n- Chill Blast.\
    \ Geryon causes a blast of cold to burst from the ground at a point he can see\
    \ within 120 feet of him. The cold fills a cube, 10 feet on each side, centered\
    \ on that point. Each creature in that area must succeed on a DC 21 Constitution\
    \ saving throw or take 28 (8d6) cold damage.  \n- Hateful Restraints. Geryon\
    \ targets one creature he can see within 60 feet of him. The target must succeed\
    \ on a DC 21 Wisdom saving throw or become [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ for 1 minute. The target can end the effect on itself if it deals any damage\
    \ to one or more of its allies.  "
  "name": ""
"regional_effects":
- "desc": "The region containing Geryon's lair is warped by his magic, creating one\
    \ or more of the following effects:"
  "name": ""
- "desc": "- Chilling Wind. Freezing strong winds howl around the area within\
    \ 1 mile of the lair.  \n- Enervating Screams. Howls and screams fill the\
    \ air within 1 mile of the lair. Any creature that finishes a short or long rest\
    \ in this area must succeed on a DC 21 Wisdom saving throw or derive no benefit\
    \ from the rest.  \n- Hellish Doorways. Sapient creatures within 1 mile of\
    \ the lair frequently see shimmering portals leading to places they consider safe.\
    \ Passing through a portal always deposits a traveler somewhere in Stygia.  "
  "name": ""
- "desc": "If Geryon dies, these effects fade over the course of 1d10 days."
  "name": ""
"source":
- "MPMM"
- "MTF"
"image": "/3-Mechanics/CLI/bestiary/npc/token/geryon-mpmm.webp"
```
^statblock