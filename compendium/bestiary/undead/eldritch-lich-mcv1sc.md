---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mcv1sc
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Eldritch Lich"]
---
# [Eldritch Lich](3-Mechanics\CLI\bestiary\undead/eldritch-lich-mcv1sc.md)
*Source: Monstrous Compendium Volume 1: Spelljammer Creatures p. 6*  

From beyond the stars, a Great Old One whispers promises of reality-defying knowledge and world-bending power. When a wizard or a warlock hears that whisper and listens too intently, they might set foot on the twisting path toward becoming an eldritch lich.

Like other liches, eldritch liches are spellcasters who have cheated death, but an eldritch lich does so by allowing a Great Old One to implant a Far Realm parasite in the lich. That parasite bestows undeath upon the spellcaster and causes strange tentacles to sprout from the body. The parasite's mouth is visible on the lich's torso, and the parasite guards the lich against destruction, reviving the lich a few days after death. Canny foes can sabotage an eldritch lich's revival by slaying the lich in a magic circle, thereby forcing the lich to return in a distorted form, robbed of most of its power.

An eldritch lich constantly hears bizarre whispers from the Far Realm, to which the lich nods and mutters. Occasionally, the lich uses its telepathy to share those whispers with the minds around it.

## Form of the Great Old One

Multiple entities bear the title Great Old One. You may roll on the Great Old Ones table to determine which entity gave an eldritch lich its parasite.

### Great Old Ones

`dice: [](eldritch-lich-mcv1sc.md#^form)`

| dice: d6 | Form |
|----------|------|
| 1 | Cthulhu |
| 2 | Tharizdun, the Chained God |
| 3 | Dendar, the Night Serpent |
| 4 | Ghaunadaur |
| 5 | Zargon, the Returner |
| 6 | That Which Lurks |
^form

```statblock
"name": "Eldritch Lich (MCV1SC)"
"size": "Medium"
"type": "undead"
"alignment": "typically  Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "165"
"hit_dice": "22d8 + 66"
"stats":
- !!int "11"
- !!int "18"
- !!int "16"
- !!int "19"
- !!int "14"
- !!int "12"
"speed": "30 ft., fly 30 ft. (hover)"
"saves":
  "Wisdom": !!int "7"
  "Intelligence": !!int "9"
"skillsaves":
  "Perception": !!int "7"
  "Arcana": !!int "14"
"damage_resistances": "necrotic, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "truesight 120ft., passive Perception 17"
"languages": "Common, Deep Speech, telepathy 120 ft."
"cr": "15"
"traits":
- "desc": "The lich casts one of the following spells, using Intelligence as the spellcasting\
    \ ability (spell save DC 17):\n\nAt will: [detect magic](/3-Mechanics/CLI/spells/detect-magic.md),\
    \ [mage hand](/3-Mechanics/CLI/spells/mage-hand.md), [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md)\n\
    \n1/day each: [arcane eye](/3-Mechanics/CLI/spells/arcane-eye.md), [dimension\
    \ door](/3-Mechanics/CLI/spells/dimension-door.md), [plane shift](/3-Mechanics/CLI/spells/plane-shift.md)\
    \ (self only)\n\n2/day each: [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md),\
    \ [hunger of Hadar](/3-Mechanics/CLI/spells/hunger-of-hadar.md), [lightning bolt](/3-Mechanics/CLI/spells/lightning-bolt.md)"
  "name": "Spellcasting"
- "desc": "Inside the lich's torso dwells a wormlike parasite that contains the lich's\
    \ soul. When the lich dies, it implodes into the parasite, which then vanishes\
    \ into the Far Realm. In 2d4 days, the parasite causes the lich to reappear\
    \ within 1d4 miles of where it died. If the lich died inside a magic circle\
    \ cast to contain Undead, the lich instead reappears as an [otyugh](/3-Mechanics/CLI/bestiary/aberration/otyugh.md)\
    \ with all the lich's memories."
  "name": "Far Realm Parasite"
- "desc": "If the lich fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (4/Day)"
- "desc": "The lich doesn't need air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "The lich makes one Parasitic Tentacle attack or uses Spellcasting. The\
    \ lich also uses Psychic Whisper twice."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit:\
    \ 25 (6d6 + 4) piercing damage plus 25 (6d6 + 4) necrotic damage. The target\
    \ must succeed on a DC 17 Constitution saving throw or be [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned).\
    \ The [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned) target can repeat\
    \ the save at the end of each of its turns, ending the effect on itself on a success.\
    \ The third time the target fails the save, the target dies and dissolves into\
    \ a [gibbering mouther](/3-Mechanics/CLI/bestiary/aberration/gibbering-mouther.md)\
    \ that obeys the lich and uses the target's initiative."
  "name": "Parasitic Tentacle"
- "desc": "The lich targets one creature it can see within 120 feet of itself. The\
    \ target must succeed on a DC 17 Wisdom saving throw or take 25 (6d6 + 4) psychic\
    \ damage and be [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned) until\
    \ the end of the lich's next turn as incomprehensible whispers fill the target's\
    \ mind."
  "name": "Psychic Whisper"
"reactions":
- "desc": "Immediately after taking damage, the lich, along with any equipment it\
    \ is wearing or carrying, magically teleports up to 60 feet to an unoccupied space\
    \ it can see."
  "name": "Far Realm Step"
"source":
- "MCV1SC"
"image": "/3-Mechanics/CLI/bestiary/undead/token/eldritch-lich-mcv1sc.webp"
```
^statblock