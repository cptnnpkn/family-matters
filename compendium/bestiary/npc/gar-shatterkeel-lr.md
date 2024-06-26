---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/lr
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
aliases: ["Gar Shatterkeel"]
---
# [Gar Shatterkeel](3-Mechanics\CLI\bestiary\npc/gar-shatterkeel-lr.md)
*Source: Locathah Rising p. 18*  

```statblock
"name": "Gar Shatterkeel (LR)"
"size": "Medium"
"type": "humanoid"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"stats":
- !!int "16"
- !!int "16"
- !!int "18"
- !!int "12"
- !!int "20"
- !!int "14"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Nature": !!int "11"
  "Perception": !!int "10"
  "Survival": !!int "10"
"damage_resistances": "cold"
"senses": "passive Perception 20"
"languages": "Aquan, Common"
"cr": "15"
"traits":
- "desc": "Gar is a 13th-level spellcaster. His spellcasting ability is Wisdom (spell\
    \ save DC 18, +10 to hit with spell attacks). He has the following druid spells\
    \ prepared:\n\nCantrips (at will): [frostbite](/3-Mechanics/CLI/spells/frostbite-xge.md),\
    \ [mending](/3-Mechanics/CLI/spells/mending.md), [resistance](/3-Mechanics/CLI/spells/resistance.md),\
    \ [shape water](/3-Mechanics/CLI/spells/shape-water-xge.md), [thunderclap](/3-Mechanics/CLI/spells/thunderclap-xge.md)\n\
    \n1st level (4 slots): [create or destroy water](/3-Mechanics/CLI/spells/create-or-destroy-water.md),\
    \ [charm person](/3-Mechanics/CLI/spells/charm-person.md), [cure wounds](/3-Mechanics/CLI/spells/cure-wounds.md),\
    \ [thunderwave](/3-Mechanics/CLI/spells/thunderwave.md)\n\n2nd level (3 slots):\
    \ [darkvision](/3-Mechanics/CLI/spells/darkvision.md), [hold person](/3-Mechanics/CLI/spells/hold-person.md),\
    \ [mirror image](/3-Mechanics/CLI/spells/mirror-image.md), [misty step](/3-Mechanics/CLI/spells/misty-step.md),\
    \ [pass without trace](/3-Mechanics/CLI/spells/pass-without-trace.md), [protection\
    \ from poison](/3-Mechanics/CLI/spells/protection-from-poison.md)\n\n3rd level\
    \ (3 slots): [conjure animals](/3-Mechanics/CLI/spells/conjure-animals.md),\
    \ [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md), [tidal wave](/3-Mechanics/CLI/spells/tidal-wave-xge.md),\
    \ [water breathing](/3-Mechanics/CLI/spells/water-breathing.md), [water walk](/3-Mechanics/CLI/spells/water-walk.md)\n\
    \n4th level (3 slots): [charm monster](/3-Mechanics/CLI/spells/charm-monster-xge.md),\
    \ [control water](/3-Mechanics/CLI/spells/control-water.md), [dominate beast](/3-Mechanics/CLI/spells/dominate-beast.md),\
    \ [freedom of movement](/3-Mechanics/CLI/spells/freedom-of-movement.md), [watery\
    \ sphere](/3-Mechanics/CLI/spells/watery-sphere-xge.md)\n\n5th level (2 slots):\
    \ [conjure elemental](/3-Mechanics/CLI/spells/conjure-elemental.md), [maelstrom](/3-Mechanics/CLI/spells/maelstrom-xge.md),\
    \ [scrying](/3-Mechanics/CLI/spells/scrying.md), [tree stride](/3-Mechanics/CLI/spells/tree-stride.md)\n\
    \n6th level (1 slots): [heal](/3-Mechanics/CLI/spells/heal.md)\n\n7th level\
    \ (1 slots): [plane shift](/3-Mechanics/CLI/spells/plane-shift.md)\n\nCircle\
    \ spells don't count against spells prepared."
  "name": "Spellcasting"
- "desc": "Gar can breathe air and water."
  "name": "Amphibious"
- "desc": "If Gar fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Gar can stand and move on liquid surfaces as if they were solid ground."
  "name": "Water Walk"
- "desc": "When Gar drops to 0 hit points, his body collapses into a pool of inky\
    \ water that rapidly disperses. Except for [Wave](/3-Mechanics/CLI/items/wave.md)\
    \ and his claw, anything he was wearing or carrying is left behind."
  "name": "Watery Fall"
"actions":
- "desc": "Gar makes two melee attacks, one with his claw and one with [Wave](/3-Mechanics/CLI/items/wave.md)."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 10\
    \ (2d6 + 3) bludgeoning damage, and the target is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 16). Until the grapple ends, Gar can't attack other creatures with\
    \ his claw."
  "name": "Claw"
- "desc": "Melee or Ranged Weapon Attack: +11 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 9 (1d6 + 6) piercing damage or 10 (1d8 + 6) piercing\
    \ damage when used with two hands. If Gar scores a critical hit with this weapon,\
    \ the target takes extra necrotic damage equal to half its hit point maximum."
  "name": "Wave"
- "desc": "Power ripples out in a 60-foot radius sphere from a point within range\
    \ (150 ft.) as the will of Umberlee affects all in her watery embrace. Each creature\
    \ in that area must succeed on a DC 18 Constitution saving throw. On a failed\
    \ save, the creature can't use reactions, its speed is halved, and it can't make\
    \ more than one attack on its turn. In addition, the creature can use either an\
    \ action or a bonus action on its turn, but not both. These effects last for 1\
    \ minute. The creature can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself with a successful save. This only affects targets\
    \ that are submerged or floating in water. Gar Shatterkeel and any undead serving\
    \ him are immune to this effect."
  "name": "Umberlee's Wake (Recharge 5-6)"
"legendary_actions":
- "desc": "Gar moves up to his speed without provoking opportunity attacks."
  "name": "Move"
- "desc": "Gar makes one attack with his claw."
  "name": "Claw"
- "desc": "Gar makes one attack with [Wave](/3-Mechanics/CLI/items/wave.md) with advantage."
  "name": "Wave (Costs 2 Actions)"
"lair_actions":
- "desc": "Gar can employ lair actions while he's within the coral mountain."
  "name": ""
- "desc": "On initiative count 20 (losing initiative ties), Gar Shatterkeel takes\
    \ a lair action to cause one of the following effects; Gar can't use the same\
    \ effect two rounds in a row."
  "name": ""
- "desc": "- Gar may teleport anywhere within the coral mountain, bringing up to five\
    \ willing creatures with him.  \n- The coral in a 60-foot radius grows rapidly\
    \ around creatures inside the coral mountain. Each creature must succeed on a\
    \ DC 18 Strength saving throw or become [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained).\
    \ Restrained creatures can take an action on their turn to make a DC 18 Strength\
    \ ([Athletics](/3-Mechanics/CLI/rules/skills.md#Athletics)) or Dexterity ([Acrobatics](/3-Mechanics/CLI/rules/skills.md#Acrobatics))\
    \ check to free themselves. This effect lasts for 1 minute unless dispelled (it\
    \ counts as a 6th level spell), and doesn't require Gar to maintain [concentration](/3-Mechanics/CLI/rules/conditions.md#concentration).\
    \ Gar Shatterkeel and any creatures he designates are immune to this effect. \
    \ \n- Up to five corpses that Gar can see within 60 feet rise up as [drowned blades](/3-Mechanics/CLI/bestiary/undead/drowned-blade-gos.md)\
    \ and attack anyone Gar directs them to on his turn.  "
  "name": ""
"source":
- "LR"
"image": "/3-Mechanics/CLI/bestiary/npc/token/gar-shatterkeel-lr.webp"
```
^statblock