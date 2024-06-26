---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bgdia
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Master of Souls"]
---
# [Master of Souls](3-Mechanics\CLI\bestiary\humanoid/master-of-souls-bgdia.md)
*Source: Baldur's Gate: Descent Into Avernus p. 234*  

Those who follow Myrkul are either wizards or those who seek to master the necromantic arts.

## Delvers into Lore

Cultists of Myrkul study rituals that allow them to force the souls of the dead into service, compelling them to answer questions and share forgotten lore. They seek out arcane secrets in ancient ruins, and attempt to steal spellbooks and other tomes from wizards outside of the cult.

## Cult Ranks

A follower of Myrkul wields a flail that has a skull replacing the normal flail's striking head. Necromites are initiates who have not yet mastered arcane magic and rely on their flails in battle. Skull lashers are spellcasters who use magic to augment their combat abilities. The Masters of Souls delve deep into Myrkul's secrets, allowing them to animate the dead and perform other grave magic.

```statblock
"name": "Master of Souls (BGDIA)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "10"
- !!int "14"
- !!int "17"
- !!int "19"
- !!int "14"
- !!int "13"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "4"
"skillsaves":
  "Religion": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 12"
"languages": "Abyssal, Common, Infernal"
"cr": "4"
"traits":
- "desc": "The master of souls is a 5th-level spellcaster. Its spellcasting ability\
    \ is Intelligence (spell save DC 14, +6 to hit with spell attacks). It has the\
    \ following wizard spells prepared:\n\nCantrips (at will): [chill touch](/3-Mechanics/CLI/spells/chill-touch.md)\
    \ (see \"Actions\" below), [mage hand](/3-Mechanics/CLI/spells/mage-hand.md),\
    \ [message](/3-Mechanics/CLI/spells/message.md), [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md)\n\
    \n1st level (4 slots): [burning hands](/3-Mechanics/CLI/spells/burning-hands.md),\
    \ [detect magic](/3-Mechanics/CLI/spells/detect-magic.md), [ray of sickness](/3-Mechanics/CLI/spells/ray-of-sickness.md)\
    \ (see \"Actions\" below), [shield](/3-Mechanics/CLI/spells/shield.md)\n\n2nd\
    \ level (3 slots): [darkness](/3-Mechanics/CLI/spells/darkness.md), [misty step](/3-Mechanics/CLI/spells/misty-step.md),\
    \ [scorching ray](/3-Mechanics/CLI/spells/scorching-ray.md) (see \"Actions\" below)\n\
    \n3rd level (2 slots): [animate dead](/3-Mechanics/CLI/spells/animate-dead.md),\
    \ [fireball](/3-Mechanics/CLI/spells/fireball.md)"
  "name": "Spellcasting"
- "desc": "When the master of souls cast a spell that deals damage, it can change\
    \ the spell's damage type to necrotic."
  "name": "Grave Magic"
"actions":
- "desc": "The master of souls attacks twice with its flail."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d8)\
    \ bludgeoning damage plus 14 (4d6) necrotic damage, and the target has disadvantage\
    \ on all saving throws until the end of the master of souls' next turn."
  "name": "Silvered Skull Flail"
- "desc": "Ranged Spell Attack: +6 to hit, range 120 ft., one creature. Hit:\
    \ 13 (2d8) necrotic damage, and the target can't regain hit points until the\
    \ start of the master of souls' next turn. If the target is undead, it has disadvantage\
    \ on attack rolls against the master of souls for the same duration."
  "name": "Chill Touch (Cantrip)"
- "desc": "Ranged Spell Attack: +6 to hit, range 60 ft., one creature. Hit:\
    \ 9 (2d8) poison damage, and the target must succeed on a DC 14 Constitution\
    \ saving throw or be [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ until the end of the master of souls' next turn. If the master of souls casts\
    \ this spell using a spell slot of 2nd level or higher, the damage increases by\
    \ 1d8 for each slot level above 1st."
  "name": "Ray of Sickness (1st-Level Spell; Requires a Spell Slot)"
- "desc": "Ranged Spell Attack: +6 to hit, range 120 ft., one target per ray (3\
    \ rays if a 2nd-level spell slot is used, 4 rays if a 3rd-level spell slot is\
    \ used). Hit: 7 (2d6) fire damage per ray."
  "name": "Scorching Ray (2nd-Level Spell; Requires a Spell Slot)"
"source":
- "BGDIA"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/master-of-souls-bgdia.webp"
```
^statblock