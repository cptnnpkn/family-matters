---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/plant
statblock: inline
aliases: ["Hypnotic Eldritch Blossom"]
---
# [Hypnotic Eldritch Blossom](3-Mechanics\CLI\bestiary\plant/hypnotic-eldritch-blossom-dodk.md)
*Source: Dungeons of Drakkenheim p. 205*  

Strange new life germinates in the Haze. These multicoloured flowers emit a hallucination-inducing pollen and overflow with contaminated nectar. They are often fatally mistaken for an eldritch lily.

```statblock
"name": "Hypnotic Eldritch Blossom (DoDk)"
"size": "Medium"
"type": "plant"
"alignment": "Chaotic Evil"
"ac": !!int "5"
"hp": !!int "18"
"hit_dice": "4d8"
"stats":
- !!int "3"
- !!int "1"
- !!int "10"
- !!int "1"
- !!int "3"
- !!int "5"
"speed": "5 ft."
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)"
"senses": "blindsight 30 ft., passive Perception 6"
"languages": ""
"cr": "1"
"traits":
- "desc": "While the Hypnotic Eldritch Blossom remains motionless, it is indistinguishable\
    \ from an ordinary flower."
  "name": "False Appearance"
"actions":
- "desc": "The Hypnotic Eldritch Blossom targets one creature it can see within 10\
    \ feet of it. The target must succeed on a DC 10 Constitution saving throw or\
    \ gain one level of contamination."
  "name": "Contaminated Nectar"
- "desc": "The Hypnotic Eldritch Blossom releases a cloud of glittering pollen out\
    \ to a radius of 30 feet. Creatures in the area must succeed on a DC 10 Wisdom\
    \ saving throw or become [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ by the Hypnotic Eldritch Blossom for 1 minute. While [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
    \ the creature is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ and must use all its movement on its turns to get as close to the Hypnotic Eldritch\
    \ Blossom as possible.\n\nThe effect ends for an affected creature if it takes\
    \ any damage or if someone else uses an action to shake the creature out of its\
    \ stupor."
  "name": "Hypnotic Pollen (recharges on a short or long rest)"
"reactions":
- "desc": "If the hypnotic eldritch blossom makes a successful saving throw against\
    \ a spell which targets only it and does not have an area of effect, or a spell\
    \ attack misses it, the blossom can choose another creature (including the spellcaster)\
    \ it can see within 30 feet of it. The spell targets the chosen creature instead\
    \ of the hypnotic eldritch blossom. If the spell forces a saving throw, the chosen\
    \ creature makes its own save. If the spell was an attack, the attack roll is\
    \ rerolled against the chosen creature."
  "name": "Spell Reflection"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/plant/token/hypnotic-eldritch-blossom-dodk.webp"
```
^statblock