---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Aspect of Fire"]
---
# [Aspect of Fire](3-Mechanics\CLI\bestiary\elemental/aspect-of-fire-hwcs.md)
*Source: Humblewood Campaign Setting p. 179*  

> [!quote]- A quote from Witness account of The Great Calamity  
> 
> "It flared so brightly as it consumed the trees... leaving naught but ashes in its wake."

The aspect of fire is an elemental creature of fire and molten rock, whose gargantuan frame could easily be mistaken for a small mountain. The aspect is not only a creature of heat and energy, but also of destruction and rage, and it appears to draw strength from the forests its flames consume.

## Primal Incarnation

A creature of legend, it is believed by some that this was the "being of fire and destruction" said to have caused the Great Calamity that created the Scorched Grove many centuries ago. The aspect possesses frightening power, enough to cause serious harm to the Wood and all those who inhabit it. Long has it been forgotten that the creature was conjured in a lost ritual. Shortly afterwards, it was sealed away beneath the Scorched Grove where its presence has continued to affect the region. Centuries of dormancy have weakened the aspect, as its essence has seeped into the surrounding land. Since being released, it has begun to amass power for itself by consuming plants, trees, and other living beings in flame. Once it attains enough energy to completely break the mystical fetters that tie it to the Scorched Grove, it will be an unstoppable force that could very well bring fiery ruin to all of Humblewood.

## Stirring in its Slumber

The strange occurrences of late have many prominent scholars baffled: unusually aggressive emberbats, the appearance of ashsnakes, the increased frequency of forest fires, and many other phenomena which have never been seen before in Humblewood. More than mere legend, the aspect is the reason for all of these. As a creature of primordial fire, it is inextricably bound to the plane of its element. Even as it slumbered beneath the Grove for generations, the aspect has stirred, its presence causing a weakening in the barrier which keeps the material plane separate from the plane of fire, allowing for weaker creatures to slip through.

The aspect's essence has also seeped into the Scorched Grove, causing the landscape to take on far stronger elemental properties than before. The fundamental shift in the Grove's nature has effectively thwarted the efforts of the Tenders, who have for so long sought to heal this burned land. As the aspect continues to grow in power, more of this harmful elemental energy will be released, and even more powerful creatures will arise from the flames. If this otherworldly power spreads across the forest unchecked, all of Humblewood might suffer the fate of the Scorched Grove.

```statblock
"name": "Aspect of Fire (HWCS)"
"size": "Gargantuan"
"type": "elemental"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "174"
"hit_dice": "12d20 + 48"
"stats":
- !!int "21"
- !!int "13"
- !!int "18"
- !!int "6"
- !!int "15"
- !!int "14"
"speed": "40 ft."
"saves":
  "Wisdom": !!int "6"
"damage_resistances": "bludgeoning, piercing, and slashing from nonmagical weapons"
"damage_immunities": "fire, poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled), [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed),\
  \ [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned),\
  \ [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained), [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Ignan"
"cr": "12"
"traits":
- "desc": "If the Aspect of Fire fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Any creature who touches, makes a melee attack within 5 feet of, or ends\
    \ their turn within 5 feet of the aspect takes 11 (2d10) fire damage. Flammable\
    \ objects within 5 feet of the aspect burst into flames."
  "name": "Molten Skin"
- "desc": "The aspect gives off bright light in a 60-foot-radius and dim light for\
    \ an additional 60 feet."
  "name": "Natural Light"
- "desc": "If the aspect of fire takes 50 or more cold damage in one round, its speed\
    \ is reduced to 0 until the end of its next turn."
  "name": "Cooling"
- "desc": "The aspect of fire doesn't treat plant life as difficult terrain. Whenever\
    \ the aspect begins its turn in a space of plant life that provides cover, it\
    \ burns the plant life away from all spaces it is currently occupying, healing\
    \ 1d4 hit points for each 5-foot square of such plant life it has consumed.\
    \ If it heals for 17 or more damage in this way, it flares up, recharging its\
    \ magma throw action."
  "name": "Fuel for the Fire"
"actions":
- "desc": "The aspect makes two molten fist attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 16\
    \ (2d10 + 5) fire damage."
  "name": "Molten Fist"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 20\
    \ (3d10 + 5) fire damage. The target must succeed on a DC 17 Constitution saving\
    \ throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Stomp"
- "desc": "The aspect hurls a ball of molten rock. Choose a location within 60 feet\
    \ of the aspect. All creatures within 15 feet of the target location must make\
    \ a DC 17 Dexterity saving throw. On a failure, a creature takes 22 (4d10) fire\
    \ damage. On a success, the creature takes half as much damage."
  "name": "Magma Throw (Recharge 5-6)"
"legendary_actions":
- "desc": "The aspect of fire can take 3 legendary actions, choosing from the options\
    \ below. Only one legendary action option can be used at a time, and only at the\
    \ end of another creature's turn. The aspect regains spent legendary actions at\
    \ the start of its turn."
  "name": ""
- "desc": "The aspect makes a Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- "desc": "The aspect makes a molten fist attack."
  "name": "Molten Fist"
- "desc": "The aspect of fire uses its magma throw action. It may use this ability\
    \ if it has not yet been recharged by dealing 17 points of cold damage to itself. "
  "name": "Magma Barrage (Costs 2 Actions)"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/elemental/token/aspect-of-fire-hwcs.webp"
```
^statblock