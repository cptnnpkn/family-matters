---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/ooze
statblock: inline
aliases: ["Shifting Slime"]
---
# [Shifting Slime](3-Mechanics\CLI\bestiary\ooze/shifting-slime-hwcs.md)
*Source: Humblewood Campaign Setting p. 187*  

Deep in the murky marshes of the Mokk Fields, where water lays stagnant and the stench of decay permeates all, the worlds of life and death intertwine. Within this ominous mire lurk some of the most unusual natural predators in Humblewood. Collectively known as "slimes", these oozes move slowly through the muck, well-camouflaged by the dark and pungent waters, waiting to devour any hapless being that wanders within reach.

Slimes are easily provoked, and while it isn't difficult to outrun one, some who have strayed into a slime's territory only find out too late that they have been detected. Fortunately for many swampland travelers, slimes have a slow metabolism, and can go without feeding for long periods.

In addition to being an important part of the ecosystem, many slimes are either naturally magical, or yield organic materials which are in high demand among mages, scholars, and researchers. While slime hunting is a dangerous undertaking, the perch of Winnowing Reach was built on the labor of so-called "slime-wranglers", whose skill collecting valuable residue from live slimes is directly responsible for transforming the once minor outpost into a thriving site for scholarly innovation.

Three main types of slimes have been classified, but as magical creatures with strange properties, it's speculated that more elusive slime species might exist somewhere in the remote swamps. The three documented types are: [caustic slimes](/3-Mechanics/CLI/bestiary/ooze/caustic-slime-hwcs.md), [shifting slimes](/3-Mechanics/CLI/bestiary/ooze/shifting-slime-hwcs.md), and [sticky slimes](/3-Mechanics/CLI/bestiary/ooze/sticky-slime-hwcs.md).

## Shifting Slime

A type of large and fluid ooze, shifting slimes have an iridescent hue to them which seems to shift as they move. According to slime-wranglers, they can use magical energy to create an eerie bioluminescence. Shifting slime residue is a highly sought after potent reagent, but it is hard to come by. Despite their size, these slimes are elusive and generally spend their time below ground where visibility is low. They can be quite difficult to locate when they conceal themselves in the subterranean darkness, though these strange creatures are known to leave trails of bioluminescent residue to lure in prey.

### Adaptive Defenses

This type of slime can harness magical energy within its form. Shifting slimes absorb and store magic passively over time, but are also capable of absorbing magical jolts from spells. It is unclear exactly how much energy they can store, or for how long.

Shifting slimes can develop a temporary immunity to various types of magic after exposure. This immunity in turn makes it exceptionally difficult to destroy the slimes with a single type of magical energy. Luckily for slime-wranglers, shifting slimes are only capable of containing one energy type at a time.

### Manifestation of Stored Power

After absorbing magical energy, these slimes will change color based on the type of power absorbed. Because of the rarity of shifting slimes, only a handful of people have witnessed these changes. But, over generations, skilled slime-wranglers have managed to record which color a shifting slime will turn in response to different types of magic.

```statblock
"name": "Shifting Slime (HWCS)"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "9"
"hp": !!int "31"
"hit_dice": "3d10 + 15"
"stats":
- !!int "14"
- !!int "8"
- !!int "20"
- !!int "1"
- !!int "6"
- !!int "1"
"speed": "20 ft., climb 20 ft."
"damage_immunities": "Special; see Adaptive ability"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The Caustic Slime can move through a space as narrow as 1 inch wide without\
    \ squeezing."
  "name": "Amorphous"
- "desc": "The Caustic Slime can climb difficult surfaces, including upside down on\
    \ ceilings, without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) acid damage. The target is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 13). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ and the shifting slime can't make a pseudopod attack against another target."
  "name": "Psuedopod"
- "desc": "The shifting slime makes one pseudopod attack against a target it is grappling\
    \ that is at least one size smaller than itself. If the attack hits, the target\
    \ is swallowed, and the grapple ends. The swallowed target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside the shifting slime,\
    \ and it must make a DC 13 Constitution saving throw at the start of each of its\
    \ turns taking 3 (1d6) acid damage on a failure. If the shifting slime used\
    \ its adaptive ability to become immune to a damage type, the damage dealt to\
    \ the target on a failed save becomes that type instead. The shifting slime can\
    \ have only one target swallowed at a time.\n\nIf the shifting slime dies, a swallowed\
    \ creature is no longer [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ by it, and may move freely as the body of the slime quivers and neutralizes\
    \ into an inert puddle of goo."
  "name": "Swallow"
"reactions":
- "desc": "When a slime that is Medium or larger and has 10 or more hit points is\
    \ hit with slashing damage, it splits into two new slimes. Each new slime has\
    \ hit points equal to half the original slime's, rounded down. New slimes are\
    \ one size smaller than the previous size. New shifting slimes each have the same\
    \ damage type immunity as their parent slime and retain the Adaptive ability."
  "name": "Split"
- "desc": "Each time the slime is hit by a spell that deals damage, it can become\
    \ immune to that damage type for 1 hour. When the slime changes the damage type\
    \ it's immune to, its color changes based on the table on the below. The slime\
    \ can only be immune to one damage type at a time. Normally, shifting slimes are\
    \ iridescent, shimmering with all the colors of the rainbow.\n\n| Damage Type\
    \ | Slime Color |\n|-------------|-------------|\n| Acid | Lime Green |\n| Cold\
    \ | Ice Blue |\n| Fire | Bright Crimson |\n| Force | Clear |\n| Lightning | Vibrant\
    \ Yellow |\n| Necrotic | Dark Black |\n| Poison | Dark Green |\n| Psychic | Bright\
    \ Violet |\n| Radiant | Warm Orange |\n| Thunder | Bright White |\n^damage-type-slime-color"
  "name": "Adaptive"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/ooze/token/shifting-slime-hwcs.webp"
```
^statblock