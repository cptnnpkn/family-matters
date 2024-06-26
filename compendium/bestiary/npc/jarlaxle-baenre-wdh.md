---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdh
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
aliases: ["Jarlaxle Baenre"]
---
# [Jarlaxle Baenre](3-Mechanics\CLI\bestiary\npc/jarlaxle-baenre-wdh.md)
*Source: Waterdeep: Dragon Heist p. 206*  

Jarlaxle is a flamboyant, swashbuckling drow iconoclast. He leads a renegade drow faction called Bregan D'aerthe, made up of disenfranchised male drow, most of them culled from destroyed or disgraced houses. Gifted with a sharp mind, a sense of humor, puissant skill with a blade, and a wealth of useful magic items, Jarlaxle infiltrated the city of Luskan, brought a kind of order to its lawlessness, and declared himself its secret lord.

Jarlaxle likes to weave a tangled web of schemes that leave his enemies baffled-the latest of which is a plan to legitimize Luskan by making it a member of the Lords' Alliance. The city's unsavory reputation has thwarted all previous efforts, and the current leaders of the Lords' Alliance have voiced their opposition to Luskan's admittance. A few have flatly declared that the city will never be welcome in the alliance. Nonetheless, Jarlaxle aims to persuade Laeral Silverhand, the Open Lord of Waterdeep, to champion Luskan's cause-even if that means losing other alliance members in the process. Tying Luskan's fortunes to those of Waterdeep would increase Jarlaxle's political and economic power on the Sword Coast.

Jarlaxle has come to Waterdeep in the guise of an Illuskan human named Zardoz Zord. "Captain Zord" is the master of the Sea Maidens Faire, a carnival that travels up and down the Sword Coast in three ships: the Eyecatcher, the Heartbreaker, and the Hellraiser (all words that describe Jarlaxle). He spends most of his time aboard the Eyecatcher, his personal ship. The other two vessels carry members of the carnival and their parade wagons.

Jarlaxle has forged an alliance with Lantan (an island to the south), and has armed his Bregan D'aerthe lieutenants with Lantanese firearms that rely on magical smokepowder to function. He has also acquired a Lantanese submarine called the Scarlet Marpenoth. This underwater vessel is mounted below the Eyecatcher and kept out of sight. Jarlaxle plans on using the submarine to flee Waterdeep if his scheme unravels.

Jarlaxle's loyalties are to himself first and foremost, and to Bregan D'aerthe secondarily.

```statblock
"name": "Jarlaxle Baenre (WDH)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Neutral"
"ac": !!int "24"
"ac_class": "[+3 leather armor](/3-Mechanics/CLI/items/3-armor.md), Suave Defense"
"hp": !!int "123"
"hit_dice": "19d8 + 38"
"stats":
- !!int "12"
- !!int "22"
- !!int "14"
- !!int "20"
- !!int "16"
- !!int "19"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "11"
  "Wisdom": !!int "8"
"skillsaves":
  "Athletics": !!int "6"
  "Sleight of Hand": !!int "11"
  "Deception": !!int "14"
  "Stealth": !!int "16"
  "Perception": !!int "8"
  "Acrobatics": !!int "11"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Abyssal, Common, Draconic, Dwarvish, Elvish, Undercommon"
"cr": "15"
"traits":
- "desc": "Jarlaxle's innate spellcasting ability is Charisma (spell save DC 17, +9\
    \ to hit with spell attacks) He can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [dancing lights](/3-Mechanics/CLI/spells/dancing-lights.md)\n\
    \n1/day each: [darkness](/3-Mechanics/CLI/spells/darkness.md), [faerie fire](/3-Mechanics/CLI/spells/faerie-fire.md),\
    \ [levitate](/3-Mechanics/CLI/spells/levitate.md) (self only)"
  "name": "Innate Spellcasting"
- "desc": "Jarlaxle wears [+3 leather armor](/3-Mechanics/CLI/items/3-armor.md), a\
    \ [hat of disguise](/3-Mechanics/CLI/items/hat-of-disguise.md), a [bracer of flying\
    \ daggers](/3-Mechanics/CLI/items/bracer-of-flying-daggers-wdh.md), a [cloak of\
    \ invisibility](/3-Mechanics/CLI/items/cloak-of-invisibility.md), a [knave's eye\
    \ patch](/3-Mechanics/CLI/items/knaves-eye-patch-wdh.md), and a [ring of truth\
    \ telling](/3-Mechanics/CLI/items/ring-of-truth-telling-wdh.md). He wields a [+3\
    \ rapier](/3-Mechanics/CLI/items/3-weapon.md) and carries a [portable hole](/3-Mechanics/CLI/items/portable-hole.md)\
    \ and a [wand of web](/3-Mechanics/CLI/items/wand-of-web.md). His hat is adorned\
    \ with a [feather of diatryma summoning](/3-Mechanics/CLI/items/feather-of-diatryma-summoning-wdh.md)."
  "name": "Special Equipment"
- "desc": "If he is subjected to an effect that allows him to make a Dexterity saving\
    \ throw to take only half damage, Jarlaxle instead takes no damage if he succeeds\
    \ on the saving throw, and only half damage if he fails. He can't use this trait\
    \ if he's [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)."
  "name": "Evasion"
- "desc": "Jarlaxle has advantage on saving throws against being [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
    \ and magic can't put him to sleep."
  "name": "Fey Ancestry"
- "desc": "If Jarlaxle fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (1/Day)"
- "desc": "Jarlaxle can attune to up to five magic items, and he can attune to magic\
    \ items that normally require attunement by a sorcerer, warlock, or wizard."
  "name": "Master Attuner"
- "desc": "Jarlaxle deals an extra 24 (7d6) damage when he hits a target with a\
    \ weapon attack and has advantage on the attack roll, or when the target is within\
    \ 5 feet of an ally of Jarlaxle's that isn't [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ and Jarlaxle doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
- "desc": "While Jarlaxle is wearing light or no armor and wielding no shield, his\
    \ AC includes his Charisma modifier."
  "name": "Suave Defense"
- "desc": "When not wearing his knave's eye patch, Jarlaxle has disadvantage on attack\
    \ rolls, as well as on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "Jarlaxle makes three attacks with his +3 rapier or two attacks with daggers\
    \ created by his bracer of flying daggers."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 13\
    \ (1d8 + 9) piercing damage."
  "name": "+3 Rapier"
- "desc": "Ranged Weapon Attack: +11 to hit, range 20/60 ft., one target. Hit:\
    \ 8 (1d4 + 6) piercing damage."
  "name": "Flying Dagger"
"legendary_actions":
- "desc": "Jarlaxle moves up to his speed without provoking opportunity attacks."
  "name": "Quick Step"
- "desc": "Jarlaxle makes one attack with his +3 rapier or two attacks with daggers\
    \ created by his bracer of flying daggers."
  "name": "Attack (Costs 2 Actions)"
"source":
- "WDH"
"image": "/3-Mechanics/CLI/bestiary/npc/token/jarlaxle-baenre-wdh.webp"
```
^statblock