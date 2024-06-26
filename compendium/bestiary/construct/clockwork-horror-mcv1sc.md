---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mcv1sc
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Clockwork Horror"]
---
# [Clockwork Horror](3-Mechanics\CLI\bestiary\construct/clockwork-horror-mcv1sc.md)
*Source: Monstrous Compendium Volume 1: Spelljammer Creatures p. 4*  

Clockwork horrors are ruthless insectile automatons—eldritch machines encased in adamantine or some other precious metal. They roam Wildspace in commandeered spelljamming ships, gathering the precious metals and crystals they need to build more of their kind. Clockwork horrors have no goal beyond replication and will stop at nothing to create new clockwork horrors. The time it takes for a clockwork horror to build another of its kind, assuming it has the requisite materials, is approximately ten days.

The body of a clockwork horror is about two feet in diameter, but the legs give it an overall diameter of four feet. Embedded in the front of its head is a crystal that enables the clockwork horror to see.

Clockwork horrors communicate with each other by means of clicks, whirs, and similar mechanical sounds that imitate the Thri-kreen language perfectly, leading some to speculate the first clockwork horror was the brainchild of a thri-kreen artificer. A horror can also emit light from its crystal eye, issuing dot-and-dash messages to other creatures that can see the light. Creatures besides clockwork horrors can learn this blinking light code, which is called Ziklight.

When another creature gets in its way, a clockwork horror attacks that creature with its razor-sharp mandibles and two tiny rotating saws mounted at the tips of its forelimbs. A horror can also discharge bolts of lightning from a short lightning rod embedded in its body.

When a clockwork horror dies, the magic that created it consumes it over a period of 1 minute. Its metallic body and crystal eye degrade rapidly until nothing is left but a small heap of glittering dust.

```statblock
"name": "Clockwork Horror (MCV1SC)"
"size": "Small"
"type": "construct"
"alignment": "typically  Lawful Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "60"
"hit_dice": "8d6 + 32"
"stats":
- !!int "14"
- !!int "14"
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "10"
"speed": "30 ft., climb 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Strength": !!int "4"
"skillsaves":
  "Perception": !!int "6"
"damage_immunities": "lightning, poison"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Thri-kreen, Ziklight"
"cr": "2"
"traits":
- "desc": "If targeted by [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md),\
    \ the horror must succeed on a Constitution saving throw against the caster's\
    \ spell save DC or fall [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)\
    \ for 1 minute or until it takes any damage."
  "name": "Shutdown"
- "desc": "The horror doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "The horror makes one Bite attack and two Rotating Saw attacks, or it makes\
    \ two Lightning Jolt attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Rotating Saw"
- "desc": "Ranged Spell Attack: +4 to hit, range 120 ft., one target. Hit: 7\
    \ (1d10 + 2) lightning damage."
  "name": "Lightning Jolt"
- "desc": "The horror attaches to a spelljamming helm it can see within 5 feet of\
    \ itself and attunes to the helm instantly. If another creature is already attuned\
    \ to the helm, that creature's attunement to the helm ends when the horror's attunement\
    \ begins. The horror can operate the helm even though it isn't a spellcaster.\
    \ The horror can detach from the helm as a bonus action, which ends its attunement\
    \ to the helm."
  "name": "Spelljamming Helm Interface"
"source":
- "MCV1SC"
"image": "/3-Mechanics/CLI/bestiary/construct/token/clockwork-horror-mcv1sc.webp"
```
^statblock