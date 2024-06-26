---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Lucretia Mathias"]
---
# [Lucretia Mathias](3-Mechanics\CLI\bestiary\npc/lucretia-mathias-dodk.md)
*Source: Dungeons of Drakkenheim p. 216*  

Lucretia Mathias is a willowy and wizened woman with piercing eyes and pursed lips. She is in her early nineties, and keeps her greying black hair in a coiled bun beneath a linen shawl. She wears simple grey robes, and clutches a heavy leather-bound tome. A glowing golden crystal dangles from a silver chain around her neck. Her garb lightly conceals the delerium shard embedded in her heart.

-     - **Personality Trait.** I speak in proverbs and quote scripture when I speak, inspiring others to interpret my cryptic words and come to their own revelations.    
-     - **Ideal.** The brightest lights shine in the darkest of places. None are beyond redemption, and all may find their inner truth and purpose by following the Falling Fire.    
-     - **Bond.** I have foreseen the inevitable end of our world, but through our sacred self-sacrifice we shall set alight the Sacred Flame to bring enlightenment and salvation to the universe.    
-     - **Flaw.** I only reveal the greatest truths I have seen to those I am certain can grasp them fully, and will understand them as I do.    

```statblock
"name": "Lucretia Mathias (DoDk)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Good"
"ac": !!int "17"
"ac_class": "Unarmored Defense"
"hp": !!int "90"
"hit_dice": "20d8"
"stats":
- !!int "8"
- !!int "10"
- !!int "10"
- !!int "19"
- !!int "24"
- !!int "19"
"speed": "30 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "12"
"skillsaves":
  "Religion": !!int "14"
  "Insight": !!int "17"
  "Perception": !!int "17"
  "Persuasion": !!int "14"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)"
"senses": "truesight 120 ft., passive Perception 26"
"languages": "all"
"cr": "15"
"traits":
- "desc": "Lucretia Mathias is a 20th-level spellcaster. Her spellcasting ability\
    \ is Wisdom (spell save DC 20, +12 to hit with spell attacks). She has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [chill touch](/3-Mechanics/CLI/spells/chill-touch.md),\
    \ [guidance](/3-Mechanics/CLI/spells/guidance.md), [light](/3-Mechanics/CLI/spells/light.md),\
    \ [sacred flame](/3-Mechanics/CLI/spells/sacred-flame.md), [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy.md)\n\
    \n1st level (4 slots): [bless](/3-Mechanics/CLI/spells/bless.md), [command](/3-Mechanics/CLI/spells/command.md),\
    \ [guiding bolt](/3-Mechanics/CLI/spells/guiding-bolt.md), [healing word](/3-Mechanics/CLI/spells/healing-word.md)\n\
    \n2nd level (3 slots): [aid](/3-Mechanics/CLI/spells/aid.md), [hold person](/3-Mechanics/CLI/spells/hold-person.md),\
    \ [lesser restoration](/3-Mechanics/CLI/spells/lesser-restoration.md), [spiritual\
    \ weapon](/3-Mechanics/CLI/spells/spiritual-weapon.md)\n\n3rd level (3 slots):\
    \ [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md), [sending](/3-Mechanics/CLI/spells/sending.md),\
    \ [speak with dead](/3-Mechanics/CLI/spells/speak-with-dead.md), [spirit guardians](/3-Mechanics/CLI/spells/spirit-guardians.md)\n\
    \n4th level (3 slots): [banishment](/3-Mechanics/CLI/spells/banishment.md),\
    \ [death ward](/3-Mechanics/CLI/spells/death-ward.md), [divination](/3-Mechanics/CLI/spells/divination.md)\n\
    \n5th level (3 slots): [commune](/3-Mechanics/CLI/spells/commune.md), [flame\
    \ strike](/3-Mechanics/CLI/spells/flame-strike.md), [greater restoration](/3-Mechanics/CLI/spells/greater-restoration.md),\
    \ [scrying](/3-Mechanics/CLI/spells/scrying.md)\n\n6th level (2 slots): [heal](/3-Mechanics/CLI/spells/heal.md),\
    \ [word of recall](/3-Mechanics/CLI/spells/word-of-recall.md)\n\n7th level (2\
    \ slots): [divine word](/3-Mechanics/CLI/spells/divine-word.md), [resurrection](/3-Mechanics/CLI/spells/resurrection.md)\n\
    \n8th level (1 slots): [holy aura](/3-Mechanics/CLI/spells/holy-aura.md)\n\
    \n9th level (1 slots): [gate](/3-Mechanics/CLI/spells/gate.md), [sacrament\
    \ of the falling fire](/3-Mechanics/CLI/spells/sacrament-of-the-falling-fire-dodk.md)"
  "name": "Spellcasting"
- "desc": "Lucretia Mathias can't be surprised while she is conscious."
  "name": "Prescient"
- "desc": "While Lucretia Mathias is wearing no armour and wielding no shield, her\
    \ AC includes her Wisdom modifier."
  "name": "Unarmoured Defense"
- "desc": "Lucretia Mathias automatically succeeds on Constitution saving throws to\
    \ maintain [concentration](/3-Mechanics/CLI/rules/conditions.md#concentration)\
    \ on her spells. Any spell she casts is treated as if it were cast using a 9th\
    \ level spell slot, regardless of the spell slot used to cast the spell."
  "name": "Undeniable Faith"
- "desc": "If Lucretia Mathias fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Any creature who targets Lucretia Mathias with an attack or a harmful spell\
    \ must first make a DC 20 Wisdom saving throw. On a failed save, the creature\
    \ must choose a new target or lose the attack or spell. This effect doesn't protect\
    \ Lucretia Mathias from area effects, such as the explosion of a fireball.\n\n\
    If Lucretia Mathias makes an attack, casts a spell that affects an enemy, or deals\
    \ damage to another creature, this effect ends until the start of her next turn."
  "name": "Divine Grace"
"actions":
- "desc": "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10\
    \ (3d6) psychic damage. A creature reduced to 0 hit points by this damage is\
    \ stable at 0 hit points. The target must succeed on a DC 20 Wisdom saving throw\
    \ or be [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated) for\
    \ 1 minute. This effect ends for an affected creature if it takes any damage."
  "name": "Pacifying Touch"
- "desc": "Lucretia Mathias calls on the Sacred Flame for aid. The GM chooses the\
    \ nature of the intervention; the effect of any cleric spell or cleric domain\
    \ spell would be appropriate."
  "name": "Divine Intervention (1/ week)"
"legendary_actions":
- "desc": "Lucretia Mathias casts a cantrip."
  "name": "Cantrip"
- "desc": "Lucretia Mathias uses her Pacifying Touch."
  "name": "Pacifying Touch (Costs 2 Actions)"
- "desc": "Lucretia Mathias casts a spell using a spell slot."
  "name": "Cast a Spell (Costs 3 Actions)"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/npc/token/lucretia-mathias-dodk.webp"
```
^statblock