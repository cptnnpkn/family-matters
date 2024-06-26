---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Shalfi Lewin"]
---
# [Shalfi Lewin](3-Mechanics\CLI\bestiary\npc/shalfi-lewin-pabtso.md)
*Source: Phandelver and Below: The Shattered Obelisk p. 174*  

```statblock
"name": "Shalfi Lewin (PaBTSO)"
"size": "Medium"
"type": "aberration"
"alignment": "typically  Chaotic Evil"
"ac": !!int "16"
"ac_class": "[studded leather armor](/3-Mechanics/CLI/items/studded-leather-armor.md)"
"hp": !!int "93"
"hit_dice": "17d8 + 17"
"stats":
- !!int "15"
- !!int "18"
- !!int "12"
- !!int "13"
- !!int "8"
- !!int "19"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "7"
"skillsaves":
  "Perception": !!int "5"
"damage_resistances": "psychic"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled), [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)"
"senses": "darkvision 60 ft., truesight 10 ft., passive Perception 15"
"languages": "Common, Deep Speech"
"cr": "8"
"traits":
- "desc": "Shalfi casts one of the following spells, requiring no components and using\
    \ Charisma as the spellcasting ability (spell save DC 15):\n\nAt will: [detect\
    \ thoughts](/3-Mechanics/CLI/spells/detect-thoughts.md), [minor illusion](/3-Mechanics/CLI/spells/minor-illusion.md)\n\
    \n1/day each: [arcane gate](/3-Mechanics/CLI/spells/arcane-gate.md), [hunger\
    \ of Hadar](/3-Mechanics/CLI/spells/hunger-of-hadar.md)"
  "name": "Spellcasting (Psionics)"
- "desc": "Shalfi exudes the chaos of the Far Realm. Any non-Aberration creature that\
    \ starts its turn within 5 feet of Shalfi must succeed on a DC 15 Wisdom saving\
    \ throw or take 7 (2d6) psychic damage."
  "name": "Aberrant Form"
- "desc": "Shalfi, along with any equipment it is wearing or carrying, is unnaturally\
    \ flexible. Shalfi can move through any space as narrow as 1 inch without squeezing."
  "name": "Weirdly Pliable"
"actions":
- "desc": "Shalfi makes one Psychic Rend attack and two Shortsword attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Spell Attack: +7 to hit, reach 15 ft. or range 120\
    \ ft., one target. Hit: 14 (3d6 + 4) psychic damage, and the target must succeed\
    \ on a DC 15 Wisdom saving throw or have the [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)\
    \ condition until the start of Shalfi's next turn."
  "name": "Psychic Rend"
- "desc": "Melee Weapon Attack: +7 to hit, reach 15 ft., one target. Hit: 7\
    \ (1d6 + 4) piercing damage plus 7 (2d6) psychic damage."
  "name": "Shortsword"
"bonus_actions":
- "desc": "Shalfi teleports, along with any equipment it is wearing or carrying, to\
    \ an unoccupied space it can see within 120 feet of itself, leaving a churning\
    \ void in the space it left. Immediately after it teleports, each creature within\
    \ 30 feet of the void other than Shalfi must make a DC 15 Strength saving throw.\
    \ On a failed save, a creature takes 18 (4d8) force damage and is pulled to\
    \ the unoccupied space closest to the void. On a successful save, the creature\
    \ takes half as much damage only. The void then disappears."
  "name": "Void Warp (Recharge 5-6)"
"source":
- "PaBTSO"
"image": "/3-Mechanics/CLI/bestiary/npc/token/shalfi-lewin-pabtso.webp"
```
^statblock