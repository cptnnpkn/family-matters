---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/crcotn
- ttrpg-cli/monster/cr/14
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Alyxian the Absolved"]
---
# [Alyxian the Absolved](3-Mechanics\CLI\bestiary\npc/alyxian-the-absolved-crcotn.md)
*Source: Critical Role: Call of the Netherdeep p. 182*  

```statblock
"name": "Alyxian the Absolved (CRCotN)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Good"
"ac": !!int "15"
"ac_class": "[leather armor](/3-Mechanics/CLI/items/leather-armor.md), [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "161"
"hit_dice": "19d8 + 76"
"stats":
- !!int "19"
- !!int "15"
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "19"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "7"
  "Strength": !!int "9"
  "Constitution": !!int "9"
"skillsaves":
  "Athletics": !!int "9"
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Persuasion": !!int "9"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Common, Elvish"
"cr": "14"
"traits":
- "desc": "Alyxian casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting modifier (spell save DC 17):\n\nAt\
    \ will: [guidance](/3-Mechanics/CLI/spells/guidance.md), [light](/3-Mechanics/CLI/spells/light.md)\n\
    \n1/day each: [lesser restoration](/3-Mechanics/CLI/spells/lesser-restoration.md),\
    \ [remove curse](/3-Mechanics/CLI/spells/remove-curse.md), [water breathing](/3-Mechanics/CLI/spells/water-breathing.md)"
  "name": "Spellcasting"
- "desc": "Alyxian can't be surprised and can't be changed into another form against\
    \ his will."
  "name": "Divinely Blessed"
- "desc": "If Alyxian fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
"actions":
- "desc": "Alyxian makes two Spear attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing\
    \ damage when used with two hands to make a melee attack, plus 9 (2d8) radiant\
    \ damage."
  "name": "Spear"
- "desc": "Alyxian strikes the ground, creating a burst of energy that ripples outward.\
    \ Each creature he chooses within a 30-foot-radius sphere centered on himself\
    \ must succeed on a DC 17 Constitution saving throw or take 35 (10d6) force\
    \ damage and be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone). A\
    \ creature that succeeds on the saving throw takes half as much damage and isn't\
    \ knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Force Wave (1/Day)"
"reactions":
- "desc": "Alyxian adds 3 to his AC against one attack roll that would hit him. To\
    \ do so, Alyxian must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"legendary_actions":
- "desc": "Alyxian makes one Spear attack, and all damage from this attack is radiant."
  "name": "Arch Heart's Strike"
- "desc": "Alyxian moves up to his speed. This movement doesn't provoke opportunity\
    \ attacks."
  "name": "Change Bringer's Dance"
- "desc": "Alyxian becomes [invisible](/3-Mechanics/CLI/rules/conditions.md#invisible)\
    \ until the end of his next turn. Any equipment he is wearing or carrying becomes\
    \ [invisible](/3-Mechanics/CLI/rules/conditions.md#invisible) with him."
  "name": "Moon Weaver's Veil (Costs 2 Actions)"
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties), Alyxian can take one of\
    \ the following lair actions; he can't take the same lair action two rounds in\
    \ a row:"
  "name": ""
- "desc": "- Avandra's Grasp. Alyxian uses the power of Avandra's ruined temple\
    \ (area H2) to create a watery tendril that rises out of the lake. One creature\
    \ Alyxian can see that's not submerged in the lake must succeed on a DC 15 Dexterity\
    \ saving throw or be [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ by the tendril. The tendril is a Large object that has AC 10, 15 hit points,\
    \ and immunity to poison and psychic damage. The tendril disappears when it is\
    \ reduced to 0 hit points or the next time Alyxian takes a lair action.  \n- Corellon's\
    \ Charm. Alyxian causes a magical wisp of light to emerge from Corellon's ruined\
    \ temple (area H3). The wisp enters the body of one creature Alyxian can see that\
    \ isn't inside Corellon's ruined temple or atop the rocky island that supports\
    \ it. The creature must succeed on a DC 15 Wisdom saving throw or be [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ by Alyxian until initiative count 20 of the next round.  \n- Sehanine's Torment.\
    \ Alyxian uses the power of Sehanine's ruined temple (area H4) to create a watery\
    \ form in the space of one creature that is either standing on the lake or submerged\
    \ in it. The watery form assumes the vague likeness of the creature whose space\
    \ it occupies and makes one melee weapon attack (+7 to hit) against it. On a hit,\
    \ the attack deals 8 (10d8 + 4) bludgeoning damage. Whether it hits or misses,\
    \ the watery form disappears after making its attack.  "
  "name": ""
- "desc": "A character can use an action to pray to Avandra, Corellon, or Sehanine\
    \ in the deity's prayer site. The character must succeed on a DC 15 Wisdom ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion))\
    \ check, and the check has advantage if the character is a worshiper of that god.\
    \ On a successful check, the profane ruins atop the island melt away, and Alyxian\
    \ can no longer use the lair action associated with that prayer site. In addition,\
    \ Alyxian takes 14 (4d6) psychic damage, regardless of his current form."
  "name": "Prayers to the Gods"
"source":
- "CRCotN"
"image": "/3-Mechanics/CLI/bestiary/npc/token/alyxian-the-absolved-crcotn.webp"
```
^statblock