---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/20
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Hourglass Widow"]
---
# [Hourglass Widow](3-Mechanics\CLI\bestiary\undead/hourglass-widow-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 81*  

> [!quote]-  
> 
> When the clock stops, your time has run out.

## Salvage

When the sand from the widow's hourglass is mixed with wine, it creates an elixir that when consumed prevents the creature from aging for `2d6 + 10` years. There is enough sand in the hourglass to create an elixir for two creatures. A creature cannot benefit from the sand of an hourglass widow more than once. The sand can be sold for 5,000 gp.

## Lore

- **DC 10 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)).** Hourglass widows are undead who can control time to act more than once a round.  
- **DC 15 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** Hourglass widows are resistant to cold, force, lightning, and necrotic. They are immune to poison and nonmagical attacks.  
- **DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** Inexplicably, an hourglass widow can affect those trapped in a time stop, imprisonment, or other stasis effect.  

```statblock
"name": "Hourglass Widow (GHLoE)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "18 with [mage armor](/3-Mechanics/CLI/spells/mage-armor.md)"
"hp": !!int "187"
"hit_dice": "22d8 + 88"
"stats":
- !!int "16"
- !!int "19"
- !!int "18"
- !!int "19"
- !!int "17"
- !!int "22"
"speed": "30 ft., fly 60 ft. (hover)"
"saves":
  "Charisma": !!int "12"
  "Wisdom": !!int "9"
  "Intelligence": !!int "10"
  "Strength": !!int "9"
  "Constitution": !!int "10"
"skillsaves":
  "Athletics": !!int "9"
  "Investigation": !!int "10"
  "Insight": !!int "9"
  "Perception": !!int "15"
  "Arcana": !!int "10"
"damage_resistances": "cold, force, lightning, necrotic"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "truesight 120 ft., passive Perception 25"
"languages": "the languages it knew in life"
"cr": "20"
"traits":
- "desc": "The widow's spellcasting ability is Charisma (spell save DC 20, +12 to\
    \ hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [eldritch blast](/3-Mechanics/CLI/spells/eldritch-blast.md)\
    \ (four beams), [expeditious retreat](/3-Mechanics/CLI/spells/expeditious-retreat.md)\
    \ , [mage armor](/3-Mechanics/CLI/spells/mage-armor.md) , [mage hand](/3-Mechanics/CLI/spells/mage-hand.md)\n\
    \n1/day each: [eyebite](/3-Mechanics/CLI/spells/eyebite.md), [foresight](/3-Mechanics/CLI/spells/foresight.md)\
    \ , [freedom of movement](/3-Mechanics/CLI/spells/freedom-of-movement.md), [power\
    \ word stun](/3-Mechanics/CLI/spells/power-word-stun.md), [teleport](/3-Mechanics/CLI/spells/teleport.md),\
    \ [time stop](/3-Mechanics/CLI/spells/time-stop.md), [wall of force](/3-Mechanics/CLI/spells/wall-of-force.md)\n\
    \n3/day each: [blight](/3-Mechanics/CLI/spells/blight.md), [disintegrate](/3-Mechanics/CLI/spells/disintegrate.md),\
    \ [haste](/3-Mechanics/CLI/spells/haste.md), [misty step](/3-Mechanics/CLI/spells/misty-step.md),\
    \ [shield](/3-Mechanics/CLI/spells/shield.md), [slow](/3-Mechanics/CLI/spells/slow.md),\
    \ [see invisibility](/3-Mechanics/CLI/spells/see-invisibility.md)\n\nThe widow\
    \ casts these spells before combat."
  "name": "Innate Spellcasting"
- "desc": "The widow takes one additional action."
  "name": "Accelerate Through Time (2/Day)"
- "desc": "The widow can choose to be unaffected by effects that modify time or change\
    \ its speed. The widow can affect others frozen in a time stop or other stasis-like\
    \ effects."
  "name": "Master of Time"
- "desc": "If the widow fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The widow regains 25 hit points at the start of its turn. If it takes fire\
    \ or radiant damage, this trait doesn't function at the start of the widow's next\
    \ turn. The widow's body is destroyed only if it starts its turn with 0 hit points\
    \ and doesn't regenerate."
  "name": "Regeneration"
- "desc": "The widow has advantage on saving throws against any effect that turns\
    \ undead."
  "name": "Turn Resistance"
"actions":
- "desc": "The widow uses disintegrating touch and withering gaze."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 16\
    \ (3d6 + 6) force damage and the target must succeed on a DC 20 Constitution\
    \ saving throw or have their speed decreased by 15 feet for 1 minute. The target\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success. The effects are cumulative."
  "name": "Disintegrating Touch"
- "desc": "A creature within 30 feet that the widow can see suffers 21 (6d6) necrotic\
    \ damage."
  "name": "Withering Gaze"
"legendary_actions":
- "desc": "The widow casts [eldritch blast](/3-Mechanics/CLI/spells/eldritch-blast.md)."
  "name": "Eldritch Blast"
- "desc": "The widow teleports to a space it can see within 30 feet and uses disintegrating\
    \ touch before or after it teleports."
  "name": "Sudden Rush (2 Actions)"
- "desc": "All creatures within 20 ft. of the widow must succeed on a DC 20 Constitution\
    \ saving throw or be [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed)\
    \ until the end of the creature's next turn."
  "name": "Frozen in Time (3 Actions)"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/undead/token/hourglass-widow-ghloe.webp"
```
^statblock