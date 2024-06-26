---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bgg
- ttrpg-cli/monster/cr/19
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/giant/bard
statblock: inline
aliases: ["Cloud Giant Destiny Gambler"]
---
# [Cloud Giant Destiny Gambler](3-Mechanics\CLI\bestiary\giant/cloud-giant-destiny-gambler-bgg.md)
*Source: Bigby Presents: Glory of the Giants p. 124*  

Cloud giants rise in the ordning by amassing valuable and beautiful treasures—often by gambling. While many cloud giants are content with risking their wealth in games with each other, those who aim for the top of their ordning challenge all manner of beings in games of chance and wit. A destiny gambler is a cloud giant who has won increasingly high-stakes wagers against other giants, smaller folk, and even beings from the Outer Planes.

Destiny gamblers wear half masks that cover their eyes. The masks' runic magic allows these giants not only to see normally, but also to see through illusions, invisibility, darkness, and other forms of magical trickery.

Years of successful wagers make destiny gamblers so confident in their ability to win any challenge that they invite potential rivals to name the terms of a wager. Those who are foolish enough to issue a combat challenge quickly find these giants' magical prowess is nearly unmatched.

```statblock
"name": "Cloud Giant Destiny Gambler (BGG)"
"size": "Huge"
"type": "giant"
"subtype": "bard"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "337"
"hit_dice": "27d12 + 162"
"stats":
- !!int "27"
- !!int "12"
- !!int "22"
- !!int "19"
- !!int "16"
- !!int "22"
"speed": "40 ft., fly 40 ft. (hover)"
"saves":
  "Charisma": !!int "12"
  "Wisdom": !!int "9"
  "Intelligence": !!int "10"
  "Constitution": !!int "12"
"skillsaves":
  "Deception": !!int "18"
  "Insight": !!int "9"
  "Perception": !!int "9"
"damage_immunities": "thunder"
"senses": "truesight 30 ft. (requires cloud rune), passive Perception 19"
"languages": "Common, Giant"
"cr": "19"
"traits":
- "desc": "The giant casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 20):\n\nAt will:\
    \ [detect magic](/3-Mechanics/CLI/spells/detect-magic.md), [fog cloud](/3-Mechanics/CLI/spells/fog-cloud.md),\
    \ [light](/3-Mechanics/CLI/spells/light.md), [minor illusion](/3-Mechanics/CLI/spells/minor-illusion.md)\n\
    \n1/day each: [dream](/3-Mechanics/CLI/spells/dream.md) (as an action), [gaseous\
    \ form](/3-Mechanics/CLI/spells/gaseous-form.md), [major image](/3-Mechanics/CLI/spells/major-image.md)"
  "name": "Spellcasting"
- "desc": "The giant has a cloud rune inscribed on a mask in its possession. While\
    \ holding or wearing the mask bearing the rune, the giant has truesight within\
    \ a range of 30 feet and can use its Thunderous Clap action and Negate Spell reaction.\n\
    \nThe mask bearing the cloud rune has AC 15; 45 hit points; and immunity to necrotic,\
    \ poison, and psychic damage. The mask regains all its hit points at the end of\
    \ every turn, but it turns to dust if reduced to 0 hit points or when the giant\
    \ dies. If the rune is destroyed, the giant can inscribe a cloud rune on a mask\
    \ in its possession when it finishes a short or long rest."
  "name": "Cloud Rune"
"actions":
- "desc": "The giant makes three Flying Staff attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +14 to hit, reach 10 ft. or range 30/90\
    \ ft., one target. Hit: 18 (3d6 + 8) bludgeoning damage plus 16 (3d10) thunder\
    \ damage. Hit or Miss: The staff magically returns to the giant's hand immediately\
    \ after a ranged attack."
  "name": "Flying Staff"
- "desc": "The giant magically summons a thundercloud that fills a 30-foot-radius\
    \ sphere centered on a point the giant can see within 60 feet of itself. The cloud\
    \ spreads around corners. Each creature in that area must make a DC 20 Constitution\
    \ saving throw as the cloud emits a thunderous boom. On a failed save, a creature\
    \ takes 52 (8d12) thunder damage and has the [prone](/3-Mechanics/CLI/rules/conditions.md#prone)\
    \ condition. On a successful save, a creature takes half as much damage only.\
    \ The thunderclap is audible within 300 feet of the cloud's center point.\n\n\
    The cloud's area is heavily obscured. The cloud lingers until the start of the\
    \ giant's next turn or until a strong wind disperses it."
  "name": "Thunderous Clap (Requires Cloud Rune)"
"reactions":
- "desc": "When the giant sees a creature within 60 feet of itself casting a spell,\
    \ the giant tries to interrupt it. If the creature is casting a spell using a\
    \ spell slot of 3rd level or lower, the spell fails and has no effect. If the\
    \ creature is casting a spell of 4th level or higher, it must succeed on a DC\
    \ 18 Intelligence saving throw, or the spell fails and has no effect."
  "name": "Negate Spell (Requires Cloud Rune)"
"source":
- "BGG"
"image": "/3-Mechanics/CLI/bestiary/giant/token/cloud-giant-destiny-gambler-bgg.webp"
```
^statblock