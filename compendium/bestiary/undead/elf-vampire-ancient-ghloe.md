---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/19
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Elf Vampire (Ancient)"]
---
# [Elf Vampire (Ancient)](3-Mechanics\CLI\bestiary\undead/elf-vampire-ancient-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 106*  

> [!quote]-  
> 
> She was ancient, tall and gaunt, imperious and fierce. Her skin was translucent and slightly luminous with the crimson fluid beneath lending it a bizarre, vibrating flush. Her anger and sorrow reached from her, sharing the sense of a time before my people cut and burned the forest. I wept.

## Elf Vampire Customization

As shown in the following stats, young and older elf vampires gain Turn Resistance and immunity to being charmed or rendered unconscious. Although some wood elves are an exception, most elf vampires do not take on animal form and, therefore, lack the Beast Form action. Young and older elf vampires also gain the Fey Majesty action, but until the vampire is ancient, as is the one in the stat block, they can affect only humanoids and beasts with this power.

## Salvage

An elf vampire's flesh turns to glittering powder when the vampire dies. This powder can still be used to make the ointment rendered vampire flesh can make. However, this dust can also be used as a material component for any enchantment spell or spell that deals necrotic damage. If a spellcaster uses the dust in this way, the spell save DC for the spell increases by 2. If the spell requires an attack roll, the caster scores a critical hit on a roll of 19 or 20, and any damage die for necrotic damage that rolls a 1 is treated as a 2. One vampire produces enough dust for two uses, plus one use per age category of the vampire beyond spawn.

## Lore

- **DC 15 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** Elf vampires don't sleep, so they are aware all the time. And they can't be charmed or knocked unconscious.  
- **DC 15 Intelligence ([Religion](/3-Mechanics/CLI/rules/skills.md#Religion)).** Fey ancestry combines with vampirism to render elf vampires resistant to effects that turn undead.  
- **DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** Elf vampires can manipulate the minds of beasts and people. Legend says that ancient elf vampires can sway the minds of other creatures.  

```statblock
"name": "Elf Vampire (Ancient) (GHLoE)"
"size": "Medium"
"type": "undead"
"alignment": "Any Evil alignment"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "209"
"hit_dice": "22d8 + 110"
"stats":
- !!int "20"
- !!int "20"
- !!int "20"
- !!int "15"
- !!int "16"
- !!int "16"
"speed": "40 ft., climb 40 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "11"
  "Wisdom": !!int "9"
"skillsaves":
  "Athletics": !!int "11"
  "Stealth": !!int "11"
  "Perception": !!int "9"
  "History": !!int "8"
  "Arcana": !!int "8"
"damage_resistances": "necrotic; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 19"
"languages": "the languages known in life"
"cr": "19"
"traits":
- "desc": "If the vampire fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The vampire regains 25 hit points at the start of its turn if it has at\
    \ least 1 hit point. If the vampire takes radiant damage, it regains 10 hit points\
    \ from the next use of this trait instead."
  "name": "Regeneration"
- "desc": "The vampire can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "The vampire has advantage on saving throws against any effect that turns\
    \ undead."
  "name": "Turn Resistance"
- "desc": "The vampire has the following flaws:"
  "name": "Vampire Weaknesses"
- "desc": "The vampire can't enter a residence without an invitation from one of the\
    \ occupants."
  "name": "Forbiddance"
- "desc": "The vampire dies if a piercing weapon made of wood is driven into its heart\
    \ while it is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ in its resting place."
  "name": "Stake to the Heart"
"actions":
- "desc": "The vampire makes three attacks, only one of which can be a bite."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 15\
    \ (2d8 + 6) slashing damage. If the target is a creature, the vampire can grapple\
    \ the target (escape DC 19)."
  "name": "Claws"
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one creature. Hit:\
    \ 15 (2d8 + 6) piercing damage and 17 (5d6) necrotic damage. The target's\
    \ hit point maximum is reduced by an amount equal to the necrotic damage taken,\
    \ and the vampire regains hit points equal to that amount. This reduction lasts\
    \ until the target finishes a long rest. The target dies if this effect reduces\
    \ its hit point maximum to 0. A humanoid slain in this way and then buried rises\
    \ the following night as a vampire spawn under this vampire's control."
  "name": "Bite"
- "desc": "The vampire targets one creature it can see within 30 feet of it. If the\
    \ target can see or hear the vampire, the target must succeed on a DC 17 Charisma\
    \ saving throw or be [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed).\
    \ The [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed) target regards the\
    \ vampire as a friend to be heeded and protected. Although not under the vampire's\
    \ control, it takes the vampire's requests in the most favorable way and is a\
    \ willing target for the vampire's bite.\n\nWhile the target is [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
    \ the vampire can communicate with the target telepathically within 300 feet.\
    \ The vampire can use a bonus action to force the target to repeat the saving\
    \ throw. If the save fails, the vampire can render the creature full of despair\
    \ (disadvantage on ability checks and attack rolls) or confused (as the [confusion](/3-Mechanics/CLI/spells/confusion.md)\
    \ spell) for 1 minute. The creature can repeat the saving throw at the end of\
    \ each of its turns, ending the despair or confusion on itself on a success.\n\
    \nEach time the vampire or the vampire's allies do anything harmful to the target,\
    \ it can repeat the saving throw, ending the effect on a success. Otherwise, the\
    \ effect lasts 24 hours or until the vampire dies, is on a different plane of\
    \ existence than the target, or takes a bonus action to end the effect."
  "name": "Fey Majesty"
- "desc": "The vampire polymorphs into a Medium cloud of mist, or back into its true\
    \ form. Anything it wears or carries transforms with it. While in mist form, the\
    \ vampire can't take any actions, speak, or manipulate objects. It is weightless,\
    \ has a flying speed of 30 feet, can hover, and can enter a hostile creature's\
    \ space and stop there. In addition, if air can pass through a space, the mist\
    \ can do so without squeezing, but it can't pass through water. It has advantage\
    \ on Strength, Dexterity, and Constitution saving throws. A vampire in mist form\
    \ is immune to nonmagical damage, except damage from sunlight, and has resistance\
    \ to damage other than radiant. The vampire reverts to its true form if it dies."
  "name": "Mist Form"
"reactions":
- "desc": "When it drops to 0 hit points outside its resting place, the vampire transforms\
    \ into its Mist Form instead of falling [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious).\
    \ If the vampire can't transform, it dies.\n\nWhile it has 0 hit points in mist\
    \ form, the vampire dies if it takes damage three times or radiant damage once.\
    \ It can't willingly revert to its vampire form, and it must reach its resting\
    \ place within 2 hours or die. Once in its resting place, it reverts to its vampire\
    \ form. It is then [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed)\
    \ until it regains at least 1 hit point. After spending 1 hour in its resting\
    \ place with 0 hit points, it regains 1 hit point."
  "name": "Misty Escape"
"legendary_actions":
- "desc": "The vampire moves up to its speed and attacks once with its claws."
  "name": "Move and Claw"
- "desc": "The vampire makes one bite attack."
  "name": "Bite (2 Actions)"
- "desc": "Even if the vampire can't take actions, one condition ends on it."
  "name": "Purify Blood (2 Actions)"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/undead/token/elf-vampire-ancient-ghloe.webp"
```
^statblock