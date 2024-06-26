---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration/mind-flayer
statblock: inline
aliases: ["Brain Breaker"]
---
# [Brain Breaker](3-Mechanics\CLI\bestiary\aberration/brain-breaker-pabtso.md)
*Source: Phandelver and Below: The Shattered Obelisk p. 199*  

Brain breakers look like giant brains with stout legs, and they wear steel armor made from interlocked links of Ilvaash's runes (knots of tentacles, brains, and jagged lines reminiscent of jaws).

```statblock
"name": "Brain Breaker (PaBTSO)"
"size": "Large"
"type": "aberration"
"subtype": "mind flayer"
"alignment": "Lawful Evil"
"ac": !!int "14"
"ac_class": "[ring mail](/3-Mechanics/CLI/items/ring-mail.md)"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"stats":
- !!int "15"
- !!int "10"
- !!int "20"
- !!int "21"
- !!int "19"
- !!int "20"
"speed": "30 ft., fly 30 ft. (hover)"
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "8"
  "Intelligence": !!int "9"
"skillsaves":
  "Insight": !!int "12"
  "Arcana": !!int "9"
"senses": "blindsight 120 ft., passive Perception 14"
"languages": "telepathy 1 mile; understands Common, Deep Speech, and Undercommon but\
  \ can't speak"
"cr": "12"
"traits":
- "desc": "The brain breaker casts one of the following spells, requiring no spell\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 17):\n\nAt will: [detect thoughts](/3-Mechanics/CLI/spells/detect-thoughts.md),\
    \ [levitate](/3-Mechanics/CLI/spells/levitate.md)"
  "name": "Spellcasting (Psionics)"
- "desc": "The brain breaker is aware of creatures within 1 mile of itself that have\
    \ an Intelligence score of 4 or higher. It knows the distance and direction to\
    \ each creature, as well as each one's Intelligence score, but can't sense anything\
    \ else about it. A creature protected by a [mind blank](/3-Mechanics/CLI/spells/mind-blank.md)\
    \ spell, a [nondetection](/3-Mechanics/CLI/spells/nondetection.md) spell, or similar\
    \ magic can't be perceived in this manner."
  "name": "Creature Sense"
- "desc": "The brain breaker has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "The brain breaker can use its telepathy to initiate and maintain telepathic\
    \ conversations with up to ten creatures at a time. The brain breaker can let\
    \ those creatures telepathically hear each other while connected in this way."
  "name": "Telepathic Hub"
"actions":
- "desc": "The brain breaker makes two Tentacle attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 30 ft., one target. Hit: 15\
    \ (3d8 + 2) bludgeoning damage. If the target is a Huge or smaller creature,\
    \ it has the [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) condition\
    \ (escape DC 14) and takes 9 (1d8 + 5) psychic damage at the start of each of\
    \ its turns until the grapple ends. The brain breaker can have up to four targets\
    \ [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) at a time."
  "name": "Tentacle"
- "desc": "Creatures of the brain breaker's choice within 60 feet of itself must succeed\
    \ on a DC 17 Intelligence saving throw or take 32 (5d10 + 5) psychic damage\
    \ and have the [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned) condition\
    \ for 1 minute. A [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned) creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Mind Blast (Recharge 5-6)"
"bonus_actions":
- "desc": "The brain breaker targets one creature with the [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ condition that the brain breaker senses with its Creature Sense trait and establishes\
    \ a psychic link with the target. Until the link ends, the brain breaker can perceive\
    \ everything the target senses. The target becomes aware that something is linked\
    \ to its mind once it no longer has the [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ condition, and the brain breaker can terminate the link at any time (no action\
    \ required). The target can use an action on its turn to attempt to break the\
    \ link, doing so with a successful DC 17 Charisma check. If the target breaks\
    \ the link this way, the target takes 10 (3d6) psychic damage. The link also\
    \ ends if the target and the brain breaker are more than 1 mile apart. The brain\
    \ breaker can form psychic links with up to ten creatures at a time."
  "name": "Psychic Link"
"source":
- "PaBTSO"
"image": "/3-Mechanics/CLI/bestiary/aberration/token/brain-breaker-pabtso.webp"
```
^statblock